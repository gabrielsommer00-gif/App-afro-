import { Instagram, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onWhatsAppClick: (message?: string) => void;
}

export function Footer({ onWhatsAppClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#140E0B] text-[#F8F3EB] pt-16 pb-10">
      {/* Fio têxtil superior */}
      <div className="absolute top-0 inset-x-0 h-[3px] flex" aria-hidden="true">
        <span className="flex-1 bg-[#B8472A]" />
        <span className="w-24 bg-[#C8942B]" />
        <span className="flex-1 bg-[#173B2E]" />
        <span className="w-16 bg-[#C8942B]" />
        <span className="flex-1 bg-[#B8472A]" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F8F3EB]/12">
          {/* Identidade da Marca */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="footer" tone="light" />
            <p className="text-sm leading-relaxed text-[#F8F3EB]/75 max-w-[36ch]">
              Loja virtual e catálogo digital de moda afro contemporânea, valorizando beleza,
              ancestralidade e identidade cultural.
            </p>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#C8942B]">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#F8F3EB]/80">
              <li>
                <a href="#inicio" className="hover:text-[#F8F3EB] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-[#F8F3EB] transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#vitrine" className="hover:text-[#F8F3EB] transition-colors">
                  Vitrine
                </a>
              </li>
              <li>
                <a href="#cabelos-afro" className="hover:text-[#F8F3EB] transition-colors">
                  Cabelos Afro
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F8F3EB] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#F8F3EB] transition-colors">
                  Sobre a marca
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#F8F3EB] transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contato e Canais */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#C8942B]">
              Contato e redes
            </h3>
            <div className="mt-4 space-y-3 text-sm text-[#F8F3EB]/80">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#F8F3EB] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C8942B] shrink-0" aria-hidden="true" />
                <span>{BRAND_CONFIG.instagramHandle}</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  onWhatsAppClick(
                    'Olá! Gostaria de falar com o atendimento da Cris Vieira Moda Africana.'
                  )
                }
                className="flex items-center gap-2.5 text-left hover:text-[#F8F3EB] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C8942B] shrink-0" aria-hidden="true" />
                <span>
                  {BRAND_CONFIG.whatsappNumber
                    ? 'Atendimento via WhatsApp'
                    : 'Canal WhatsApp (em configuração)'}
                </span>
              </button>

              <p className="text-xs text-[#F8F3EB]/60 pt-1">
                {BRAND_CONFIG.email
                  ? BRAND_CONFIG.email
                  : 'E-mail comercial oficial a confirmar'}
              </p>
            </div>
          </div>

          {/* Informações Comerciais */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#C8942B]">
              Informações comerciais
            </h3>
            <div className="mt-4 space-y-2 text-xs leading-relaxed text-[#F8F3EB]/75">
              <p>{BRAND_CONFIG.commercialNote}</p>
              <p>{BRAND_CONFIG.location.addressLabel}</p>
              <p>{BRAND_CONFIG.location.openingHoursLabel}</p>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F8F3EB]/60">
          <p>
            © {currentYear} {BRAND_CONFIG.name}. Todos os direitos reservados.
          </p>
          <p>Catálogo editorial e loja virtual</p>
        </div>
      </div>
    </footer>
  );
}
