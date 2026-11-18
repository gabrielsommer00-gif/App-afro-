import { Menu, MessageCircle, Search, ShoppingBag, X } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  cartCount: number;
  isMobileMenuOpen: boolean;
  onMobileMenuOpenChange: (open: boolean) => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onWhatsAppClick: (contextMessage?: string) => void;
}

const NAV_ITEMS = [
  { label: 'Categorias', href: '#categorias' },
  { label: 'Vitrine', href: '#vitrine' },
  { label: 'Cabelos Afro', href: '#cabelos-afro' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Localização', href: '#localizacao' },
];

export function Header({
  cartCount,
  isMobileMenuOpen,
  onMobileMenuOpenChange,
  onOpenSearch,
  onOpenCart,
  onWhatsAppClick,
}: HeaderProps) {
  const closeMobileAndNavigate = () => {
    onMobileMenuOpenChange(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#F8F3EB]/92 backdrop-blur-md border-b border-[#2B1D16]/10 shadow-[0_8px_24px_-16px_rgba(43,29,22,0.18)]">
        {/* Fio discreto de pigmentos na borda superior */}
        <div className="h-[3px] w-full flex" aria-hidden="true">
          <span className="flex-1 bg-[#2B1D16]" />
          <span className="w-24 bg-[#B8472A]" />
          <span className="w-12 bg-[#C8942B]" />
          <span className="w-20 bg-[#173B2E]" />
          <span className="flex-1 bg-[#2B1D16]" />
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-6 lg:gap-8">
          {/* Zona 1: Espaço reservado para logo oficial */}
          <a
            href="#inicio"
            aria-label={BRAND_CONFIG.name}
            className="shrink-0 whitespace-nowrap focus-visible:rounded-sm"
          >
            <BrandLogo variant="header" />
          </a>

          {/* Zona 2: Navegação principal */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#614E43]"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1.5 whitespace-nowrap shrink-0 hover:text-[#16110E] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#B8472A] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: Pesquisa, Sacola, WhatsApp e Menu Mobile */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Pesquisar no catálogo"
              className="inline-flex items-center justify-center w-11 h-11 bg-[#FBF8F3] text-[#2B1D16] border border-[#2B1D16]/10 rounded-lg btn-relief-surface transition-all cursor-pointer"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.8} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`Abrir sacola de compras (${cartCount} ${cartCount === 1 ? 'item' : 'itens'})`}
              className="relative inline-flex items-center justify-center w-11 h-11 bg-[#FBF8F3] text-[#2B1D16] border border-[#2B1D16]/10 rounded-lg btn-relief-surface transition-all cursor-pointer"
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.8} aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 rounded-full bg-[#B8472A] text-[#FBF8F3] text-[10px] font-semibold leading-[20px] text-center tabular-nums shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                onWhatsAppClick(
                  'Olá! Visitei a loja virtual da Cris Vieira Moda Africana e gostaria de atendimento.'
                )
              }
              className="hidden sm:inline-flex items-center gap-2 h-11 px-4 ml-1 bg-[#173B2E] text-[#F8F3EB] text-xs font-semibold tracking-wider uppercase rounded-lg btn-relief-dark transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#C8942B]" strokeWidth={1.9} aria-hidden="true" />
              <span>WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => onMobileMenuOpenChange(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 bg-[#FBF8F3] text-[#2B1D16] border border-[#2B1D16]/10 rounded-lg btn-relief-surface transition-all cursor-pointer"
            >
              <Menu className="w-5 h-5" strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <div
            className="fixed inset-0 bg-[#16110E]/60 backdrop-blur-[2px]"
            onClick={() => onMobileMenuOpenChange(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-[340px] bg-[#F8F3EB] depth-frame flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#2B1D16]/12">
                <BrandLogo variant="header" />
                <button
                  type="button"
                  onClick={() => onMobileMenuOpenChange(false)}
                  aria-label="Fechar menu"
                  className="inline-flex items-center justify-center w-11 h-11 bg-[#FBF8F3] text-[#2B1D16] border border-[#2B1D16]/10 rounded-lg btn-relief-surface cursor-pointer"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Menu mobile" className="mt-6 flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileAndNavigate}
                    className="flex items-center justify-between min-h-[48px] px-4 text-base font-medium text-[#2B1D16] bg-[#FBF8F3] border border-[#2B1D16]/8 rounded-lg depth-card hover:border-[#B8472A]/40 transition-all"
                  >
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-[#2B1D16]/12 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onMobileMenuOpenChange(false);
                    onOpenSearch();
                  }}
                  className="flex items-center gap-3 min-h-[46px] px-4 bg-[#FBF8F3] border border-[#2B1D16]/12 rounded-lg text-sm font-medium text-[#2B1D16] btn-relief-surface transition-all cursor-pointer"
                >
                  <Search className="w-4 h-4 text-[#B8472A]" aria-hidden="true" />
                  <span>Pesquisar no catálogo</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onMobileMenuOpenChange(false);
                    onOpenCart();
                  }}
                  className="flex items-center justify-between min-h-[46px] px-4 bg-[#FBF8F3] border border-[#2B1D16]/12 rounded-lg text-sm font-medium text-[#2B1D16] btn-relief-surface transition-all cursor-pointer"
                >
                  <span className="inline-flex items-center gap-3">
                    <ShoppingBag className="w-4 h-4 text-[#B8472A]" aria-hidden="true" />
                    <span>Sacola</span>
                  </span>
                  <span className="tabular-nums text-xs font-semibold text-[#614E43]">
                    {cartCount} {cartCount === 1 ? 'item' : 'itens'}
                  </span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2B1D16]/12 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  onMobileMenuOpenChange(false);
                  onWhatsAppClick(
                    'Olá! Visitei a loja virtual da Cris Vieira Moda Africana e gostaria de atendimento.'
                  );
                }}
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#173B2E] text-[#F8F3EB] text-sm font-semibold rounded-lg btn-relief-dark transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C8942B]" aria-hidden="true" />
                <span>Atendimento WhatsApp</span>
              </button>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs font-medium text-[#614E43] hover:text-[#2B1D16] py-2"
              >
                Instagram {BRAND_CONFIG.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
