import { ArrowRight, Eye, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { AFRO_HAIR_SERVICES, buildAfroHairWhatsAppMessage } from '../data/afroHair';
import { AfroHairGroup, AfroHairService } from '../types/catalog';
import { AfroBackdrop } from './AfroBackdrop';
import { SafeImage } from './SafeImage';

interface AfroHairSectionProps {
  onSelectService: (service: AfroHairService) => void;
  onWhatsAppInquiry: (message: string) => void;
}

type AfroHairFilter = 'todos' | AfroHairGroup;

export function AfroHairSection({
  onSelectService,
  onWhatsAppInquiry,
}: AfroHairSectionProps) {
  const [activeFilter, setActiveFilter] = useState<AfroHairFilter>('todos');

  const styleServices = AFRO_HAIR_SERVICES.filter(
    (item) => item.group === 'estilos_trancas'
  );
  const careServices = AFRO_HAIR_SERVICES.filter(
    (item) => item.group === 'cuidados_manutencao'
  );

  const handleQuickConsult = (service: AfroHairService) => {
    const message = buildAfroHairWhatsAppMessage(service, { intent: 'consulta_card' });
    onWhatsAppInquiry(message);
  };

  const renderServiceCard = (
    service: AfroHairService,
    index: number,
    columns: 3 | 4
  ) => {
    const staggerClass =
      columns === 3
        ? index % 3 === 1
          ? 'lg:translate-y-4'
          : ''
        : index % 2 === 1
          ? 'lg:translate-y-3'
          : '';

    return (
      <article
        key={service.id}
        className={`group relative flex flex-col bg-[#FBF8F3] rounded-xl border border-[#2B1D16]/12 depth-card depth-card-hover p-3 sm:p-3.5 ${staggerClass}`}
      >
        {/* Detalhe geométrico sutil no canto superior direito do cartão */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-2 right-2 z-10 w-3 h-3 border-t-2 border-r-2 border-[#C8942B]/70 rounded-tr-[3px]"
        />

        <button
          type="button"
          onClick={() => onSelectService(service)}
          aria-label={`Ver detalhes de ${service.name}`}
          className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#E3D4BE] cursor-pointer text-left shadow-[0_12px_24px_-12px_rgba(22,17,14,0.28)]"
        >
          <SafeImage
            src={service.primaryImage.src}
            webpSrc={service.primaryImage.webpSrc}
            alt={service.primaryImage.alt}
            fallbackLabel={service.name}
            sizes={
              columns === 4
                ? '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
                : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
            }
            className="w-full h-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#16110E]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            aria-hidden="true"
          />
        </button>

        <div className="px-1.5 pt-4 pb-1.5 flex flex-col flex-1 justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#614E43]">
              <span className="font-semibold text-[#B8472A]">{service.groupLabel}</span>
              <span aria-hidden="true">·</span>
              <span>Catálogo inicial</span>
            </div>

            <h4 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-[#16110E]">
              {service.name}
            </h4>

            <p className="mt-1.5 text-sm leading-relaxed text-[#614E43] line-clamp-3">
              {service.shortDescription}
            </p>
          </div>

          <div className="pt-3.5 border-t border-[#2B1D16]/10 flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onSelectService(service)}
              className="flex-1 min-h-[44px] px-3.5 inline-flex items-center justify-center gap-1.5 bg-[#2B1D16] hover:bg-[#B8472A] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-dark transition-all whitespace-nowrap cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#C8942B] group-hover:text-[#F8F3EB]" aria-hidden="true" />
              <span>Ver Detalhes</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickConsult(service)}
              aria-label={`Consultar disponibilidade de ${service.name} pelo WhatsApp`}
              className="min-h-[44px] px-3.5 inline-flex items-center justify-center gap-1.5 bg-[#EFE6D8] hover:bg-[#173B2E] hover:text-[#F8F3EB] text-[#2B1D16] border border-[#2B1D16]/12 text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-surface transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#173B2E] group-hover:text-current" aria-hidden="true" />
              <span>Consultar</span>
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      id="cabelos-afro"
      className="relative overflow-x-clip py-16 sm:py-24 lg:pb-28 bg-[#EDE0CE] scroll-mt-20 sm:scroll-mt-24"
    >
      <AfroBackdrop variant="cabelos-afro" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho editorial da categoria principal Cabelos Afro */}
        <div className="bg-[#FBF8F3] border border-[#2B1D16]/12 rounded-2xl p-6 sm:p-9 lg:p-10 depth-frame">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rotate-45 bg-[#B8472A]" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#B8472A]">
                  Cabelos Afro · Tranças, alongamentos e cuidados
                </p>
              </div>

              <h2 className="mt-3 font-display text-[clamp(2.1rem,3.8vw,3.3rem)] font-semibold leading-[1.06] text-[#16110E]">
                Seu cabelo. Sua identidade. Seu estilo.
              </h2>

              <p className="mt-3 text-base sm:text-[17px] leading-relaxed text-[#614E43] max-w-[58ch]">
                Tradição, criatividade e beleza em cada detalhe. Descubra possibilidades para
                expressar sua personalidade.
              </p>

              <p className="mt-4 text-xs text-[#614E43]">
                Catálogo inicial de referência · Sujeito à confirmação dos serviços efetivamente
                oferecidos pela loja e consulta de disponibilidade.
              </p>
            </div>

            {/* Filtro de subcategorias */}
            <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
              <div
                role="tablist"
                aria-label="Filtrar catálogo de Cabelos Afro"
                className="flex flex-nowrap overflow-x-auto sm:flex-wrap items-center gap-1.5 bg-[#EFE6D8] border border-[#2B1D16]/10 p-1.5 rounded-xl max-w-full depth-card"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === 'todos'}
                  onClick={() => setActiveFilter('todos')}
                  className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                    activeFilter === 'todos'
                      ? 'bg-[#2B1D16] text-[#F8F3EB] btn-relief-dark'
                      : 'text-[#614E43] hover:text-[#16110E] hover:bg-[#FBF8F3]/75'
                  }`}
                >
                  Todos ({AFRO_HAIR_SERVICES.length})
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === 'estilos_trancas'}
                  onClick={() => setActiveFilter('estilos_trancas')}
                  className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                    activeFilter === 'estilos_trancas'
                      ? 'bg-[#2B1D16] text-[#F8F3EB] btn-relief-dark'
                      : 'text-[#614E43] hover:text-[#16110E] hover:bg-[#FBF8F3]/75'
                  }`}
                >
                  Estilos e Tranças ({styleServices.length})
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === 'cuidados_manutencao'}
                  onClick={() => setActiveFilter('cuidados_manutencao')}
                  className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                    activeFilter === 'cuidados_manutencao'
                      ? 'bg-[#2B1D16] text-[#F8F3EB] btn-relief-dark'
                      : 'text-[#614E43] hover:text-[#16110E] hover:bg-[#FBF8F3]/75'
                  }`}
                >
                  Cuidados e Manutenção ({careServices.length})
                </button>
              </div>

              <a
                href="#vitrine"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#2B1D16] hover:text-[#B8472A] transition-colors"
              >
                <span>Combinar com roupas, turbantes e acessórios da loja</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Grupo 1: Estilos e Tranças (14 estilos) */}
        {(activeFilter === 'todos' || activeFilter === 'estilos_trancas') && (
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-5 border-b border-[#2B1D16]/12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B8472A]">
                  01 · Estilos e Tranças
                </p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-[#16110E]">
                  Tranças, locs, alongamentos e penteados autorais
                </h3>
              </div>
              <span className="text-xs text-[#614E43] tabular-nums">
                {styleServices.length} estilos para explorar e consultar
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch">
              {styleServices.map((service, index) =>
                renderServiceCard(service, index, 3)
              )}
            </div>
          </div>
        )}

        {/* Grupo 2: Cuidados e Manutenção (4 serviços complementares) */}
        {(activeFilter === 'todos' || activeFilter === 'cuidados_manutencao') && (
          <div className="mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-5 border-b border-[#2B1D16]/12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#173B2E]">
                  02 · Categoria Complementar
                </p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-[#16110E]">
                  Cuidados e manutenção capilar
                </h3>
              </div>
              <span className="text-xs text-[#614E43]">
                Manutenção, retirada segura, hidratação e finalização natural
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
              {careServices.map((service, index) =>
                renderServiceCard(service, index, 4)
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
