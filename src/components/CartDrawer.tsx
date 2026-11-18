import { MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { formatCurrencyBRL, getEffectiveUnitPrice } from '../config/brand';
import { CartItem } from '../types/catalog';
import { SafeImage } from './SafeImage';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onWhatsAppCheckoutPreview: (message: string) => void;
}

export function CartDrawer({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onWhatsAppCheckoutPreview,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const hasConsultationItem = items.some(
    (item) => getEffectiveUnitPrice(item.product.price, item.product.promotionalPrice) === null
  );

  const subtotal = items.reduce((sum, item) => {
    const unitPrice = getEffectiveUnitPrice(
      item.product.price,
      item.product.promotionalPrice
    );
    return sum + (unitPrice ?? 0) * item.quantity;
  }, 0);

  const handleSendSummary = () => {
    const lines = items.map((item) => {
      const specs: string[] = [];
      if (item.selectedSize) specs.push(`Tam: ${item.selectedSize}`);
      if (item.selectedColor) specs.push(`Var: ${item.selectedColor.name}`);
      const specText = specs.length > 0 ? ` (${specs.join(', ')})` : '';
      return `- ${item.quantity}x ${item.product.name}${specText}`;
    });
    const message = `Olá! Gostaria de consultar disponibilidade para os itens selecionados na sacola da Cris Vieira Moda Africana:\n${lines.join('\n')}`;
    onWhatsAppCheckoutPreview(message);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Sacola de compras"
    >
      <div
        className="fixed inset-0 bg-[#16110E]/60 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-[440px] bg-[#F8F3EB] h-full depth-frame flex flex-col">
        {/* Cabeçalho da Sacola */}
        <div className="px-6 py-5 bg-[#FBF8F3] border-b border-[#2B1D16]/12 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#B8472A]" aria-hidden="true" />
            <h2 className="font-display text-2xl font-semibold text-[#16110E]">
              Sua Sacola
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar sacola"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#F8F3EB] border border-[#2B1D16]/10 text-[#2B1D16] btn-relief-surface cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Lista de Itens */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-14 h-14 rounded-xl bg-[#EFE6D8] border border-[#2B1D16]/10 depth-card flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-[#614E43]" aria-hidden="true" />
              </div>
              <p className="font-display text-2xl font-semibold text-[#16110E]">
                Sua sacola está vazia
              </p>
              <p className="mt-2 text-sm text-[#614E43] max-w-[30ch]">
                Explore a vitrine e selecione peças para consultar disponibilidade ou preparar seu
                atendimento.
              </p>
              <a
                href="#vitrine"
                onClick={onClose}
                className="mt-6 inline-flex items-center justify-center min-h-[44px] px-6 bg-[#2B1D16] hover:bg-[#B8472A] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-dark transition-all"
              >
                Explorar Vitrine
              </a>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => {
                const cover = item.product.gallery[0] ?? item.product.primaryImage;
                const unitPrice = getEffectiveUnitPrice(
                  item.product.price,
                  item.product.promotionalPrice
                );
                const variantParts: string[] = [];
                if (item.selectedSize) variantParts.push(`Tam: ${item.selectedSize}`);
                if (item.selectedColor) variantParts.push(item.selectedColor.name);

                return (
                  <li
                    key={item.cartItemId}
                    className="flex gap-4 p-3.5 rounded-xl bg-[#FBF8F3] border border-[#2B1D16]/10 depth-card"
                  >
                    <div className="w-20 h-24 rounded-lg overflow-hidden bg-[#E3D4BE] shrink-0">
                      <SafeImage
                        src={cover?.src ?? ''}
                        webpSrc={cover?.webpSrc}
                        alt={cover?.alt ?? item.product.name}
                        sizes="80px"
                        className="w-full h-full object-cover object-[50%_15%]"
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-lg font-semibold text-[#16110E] leading-snug">
                            {item.product.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.cartItemId)}
                            aria-label={`Remover ${item.product.name}`}
                            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 -mt-2 rounded-lg text-[#614E43] hover:text-[#B8472A] hover:bg-[#EFE6D8] transition-colors cursor-pointer shrink-0"
                          >
                            <Trash2 className="w-4 h-4" aria-hidden="true" />
                          </button>
                        </div>
                        {variantParts.length > 0 && (
                          <p className="mt-0.5 text-xs text-[#614E43]">
                            {variantParts.join(' · ')}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center border border-[#2B1D16]/15 rounded-lg bg-[#EFE6D8] btn-relief-surface">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartItemId, -1)}
                            aria-label="Diminuir quantidade"
                            className="w-11 h-11 inline-flex items-center justify-center text-[#2B1D16] hover:bg-[#E3D4BE] rounded-l-lg transition-colors cursor-pointer"
                          >
                            <Minus className="w-4 h-4" aria-hidden="true" />
                          </button>
                          <span className="min-w-[32px] px-1 text-center text-xs font-semibold tabular-nums text-[#16110E]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                            aria-label="Aumentar quantidade"
                            className="w-11 h-11 inline-flex items-center justify-center text-[#2B1D16] hover:bg-[#E3D4BE] rounded-r-lg transition-colors cursor-pointer"
                          >
                            <Plus className="w-4 h-4" aria-hidden="true" />
                          </button>
                        </div>

                        <span className="text-sm font-semibold text-[#16110E] tabular-nums">
                          {unitPrice === null
                            ? 'Sob consulta'
                            : formatCurrencyBRL(unitPrice * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Rodapé da Sacola */}
        {items.length > 0 && (
          <div className="p-6 bg-[#EFE6D8] border-t border-[#2B1D16]/12 space-y-4">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm text-[#614E43]">Subtotal estimado</span>
              <span className="text-xl font-semibold text-[#16110E] tabular-nums">
                {subtotal > 0 ? formatCurrencyBRL(subtotal) : 'Sob consulta'}
              </span>
            </div>

            {hasConsultationItem && (
              <p className="text-xs text-[#614E43]">
                Inclui item com valor sob consulta; o valor final será confirmado no atendimento.
              </p>
            )}

            <p className="text-xs leading-relaxed text-[#614E43]">
              Estrutura da sacola preparada para o futuro checkout e meios de pagamento. Você já
              pode enviar a lista selecionada para atendimento.
            </p>

            <button
              type="button"
              onClick={handleSendSummary}
              className="w-full min-h-[48px] px-5 inline-flex items-center justify-center gap-2 bg-[#173B2E] hover:bg-[#B8472A] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-dark transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#C8942B]" aria-hidden="true" />
              <span>Enviar Lista pelo WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
