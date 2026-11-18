import { Check, MessageCircle, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatCurrencyBRL, hasValidPromotionalPrice } from '../config/brand';
import { Product, ProductColorVariant } from '../types/catalog';
import { SafeImage } from './SafeImage';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    size?: string,
    color?: ProductColorVariant
  ) => void;
  onWhatsAppInquiry: (message: string) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  onWhatsAppInquiry,
}: ProductDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<ProductColorVariant | undefined>(undefined);
  const [addedFeedback, setAddedFeedback] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImageIndex(0);
      setSelectedSize(product.sizes?.[0]);
      setSelectedColor(product.colors?.[0]);
      setAddedFeedback(false);
    }
  }, [product]);

  if (!product) return null;

  const galleryImages =
    product.gallery.length > 0 ? product.gallery : [product.primaryImage];
  const activeImage = galleryImages[activeImageIndex] ?? galleryImages[0];
  const currentColor = selectedColor ?? product.colors?.[0];
  const isPromo = hasValidPromotionalPrice(product.price, product.promotionalPrice);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, currentColor);
    setAddedFeedback(true);
    window.setTimeout(() => setAddedFeedback(false), 1800);
  };

  const handleWhatsApp = () => {
    const details: string[] = [];
    if (selectedSize) details.push(`tamanho: ${selectedSize}`);
    if (currentColor) details.push(`cor/estampa: ${currentColor.name}`);
    const detailsText = details.length > 0 ? ` (${details.join(', ')})` : '';
    const message = `Olá! Tenho interesse na peça "${product.name}"${detailsText} vista no catálogo da Cris Vieira Moda Africana.`;
    onWhatsAppInquiry(message);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdp-modal-title"
    >
      <div
        className="fixed inset-0 bg-[#16110E]/65 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-[980px] max-h-[90vh] overflow-y-auto bg-[#FBF8F3] rounded-2xl depth-frame border border-[#2B1D16]/15 grid grid-cols-1 lg:grid-cols-12">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização do produto"
          className="absolute top-4 right-4 z-20 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#FBF8F3] text-[#2B1D16] border border-[#2B1D16]/12 btn-relief-surface cursor-pointer"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Galeria com moldura elevada */}
        <div className="lg:col-span-6 bg-[#EFE6D8] p-5 sm:p-6 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[#2B1D16]/10">
          <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#E3D4BE] depth-card">
            <SafeImage
              src={activeImage?.src ?? ''}
              webpSrc={activeImage?.webpSrc}
              alt={activeImage?.alt ?? product.name}
              fallbackLabel={product.name}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="w-full h-full object-cover object-[50%_15%]"
            />
          </div>

          {galleryImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={`Ver foto ${idx + 1} de ${product.name}`}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    idx === activeImageIndex
                      ? 'border-[#B8472A] shadow-md'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <SafeImage
                    src={img.src}
                    webpSrc={img.webpSrc}
                    alt={img.alt}
                    sizes="64px"
                    className="w-full h-full object-cover object-[50%_15%]"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Módulo de Seleção e Ação */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-6 bg-[#FBF8F3]">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#614E43] pr-12">
              <span className="font-semibold text-[#B8472A]">{product.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{product.availabilityLabel}</span>
              {product.sku && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">Ref: {product.sku}</span>
                </>
              )}
            </div>

            <h2
              id="pdp-modal-title"
              className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#16110E] leading-tight"
            >
              {product.name}
            </h2>

            <div className="mt-4 flex items-baseline gap-3 flex-wrap">
              {product.price === null ? (
                <span className="text-xl font-semibold text-[#16110E]">
                  Valor sob consulta
                </span>
              ) : isPromo ? (
                <>
                  <span className="text-2xl font-semibold text-[#B8472A] tabular-nums">
                    {product.promotionalPriceFormatted ??
                      formatCurrencyBRL(product.promotionalPrice!)}
                  </span>
                  <span className="text-base text-[#614E43] line-through tabular-nums">
                    {product.priceFormatted ?? formatCurrencyBRL(product.price)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-semibold text-[#16110E] tabular-nums">
                  {product.priceFormatted ?? formatCurrencyBRL(product.price)}
                </span>
              )}

              {product.isDemonstrative && (
                <span className="text-xs text-[#614E43]">
                  Valor demonstrativo
                </span>
              )}
            </div>

            {(product.fullDescription || product.shortDescription) && (
              <p className="mt-4 text-sm leading-relaxed text-[#614E43]">
                {product.fullDescription ?? product.shortDescription}
              </p>
            )}

            {/* Variação de Cor / Estampa (opcional) */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-semibold text-[#16110E] uppercase tracking-wider">
                    Variação de cor / estampa
                  </span>
                  <span className="text-[#614E43]">{currentColor?.name}</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map((color) => {
                    const isActive = currentColor?.id === color.id;
                    return (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`inline-flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                          isActive
                            ? 'border-[#2B1D16] bg-[#EFE6D8] text-[#16110E] btn-relief-surface'
                            : 'border-[#2B1D16]/15 bg-[#F8F3EB] text-[#614E43] hover:border-[#2B1D16]/40'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-[#2B1D16]/25 shrink-0"
                          style={{ backgroundColor: color.swatchHex }}
                          aria-hidden="true"
                        />
                        <span>{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Variação de Tamanho (opcional) */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-6">
                <span className="block text-xs font-semibold text-[#16110E] uppercase tracking-wider mb-2.5">
                  Tamanho / Medida
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => {
                    const isActive = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`min-h-[44px] min-w-[48px] px-3.5 py-2 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#2B1D16] border-[#2B1D16] text-[#F8F3EB] btn-relief-dark'
                            : 'bg-[#F8F3EB] border-[#2B1D16]/15 text-[#2B1D16] btn-relief-surface hover:border-[#2B1D16]/40'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {(product.materialNote || (product.additionalInfo && product.additionalInfo.length > 0)) && (
              <div className="mt-5 pt-4 border-t border-[#2B1D16]/10 space-y-1.5 text-xs text-[#614E43]">
                {product.materialNote && <p>{product.materialNote}</p>}
                {product.additionalInfo?.map((info, i) => (
                  <p key={i}>{info}</p>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#2B1D16]/10 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 min-h-[48px] px-5 inline-flex items-center justify-center gap-2 bg-[#B8472A] hover:bg-[#9E391F] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-primary transition-all cursor-pointer"
            >
              {addedFeedback ? (
                <>
                  <Check className="w-4 h-4" aria-hidden="true" />
                  <span>Adicionado à Sacola</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                  <span>Adicionar à Sacola</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex-1 min-h-[48px] px-5 inline-flex items-center justify-center gap-2 bg-[#173B2E] hover:bg-[#122E24] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-dark transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#C8942B]" aria-hidden="true" />
              <span>Consultar via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
