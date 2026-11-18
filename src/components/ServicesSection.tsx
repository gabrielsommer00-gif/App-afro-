import { MessageCircle } from 'lucide-react';
import { SERVICE_SLOTS } from '../data/services';
import { AfroBackdrop } from './AfroBackdrop';
import { SafeImage } from './SafeImage';

interface ServicesSectionProps {
  onServiceInquiry: (serviceTitle: string) => void;
}

export function ServicesSection({ onServiceInquiry }: ServicesSectionProps) {
  return (
    <section
      id="servicos"
      className="relative overflow-x-clip py-16 sm:py-24 bg-[#1C1410] text-[#F8F3EB] scroll-mt-20 sm:scroll-mt-24"
    >
      <AfroBackdrop variant="services" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#F8F3EB]/15">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rotate-45 bg-[#C8942B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#C8942B]">
                Estrutura independente · Cartões editáveis
              </p>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#F8F3EB]">
              Serviços e atendimento
            </h2>
          </div>
          <p className="text-sm text-[#F8F3EB]/75 max-w-[48ch]">
            Seção preparada com cartões independentes e editáveis para receber os serviços reais
            definidos pela Cris Vieira Moda Africana na próxima fase.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8 items-stretch">
          {SERVICE_SLOTS.map((service, index) => (
            <article
              key={service.id}
              className={`flex flex-col bg-[#FBF8F3] text-[#16110E] rounded-xl overflow-hidden border border-[#C8942B]/25 depth-frame p-3 sm:p-3.5 transition-transform duration-200 ${
                index === 1 ? 'md:-translate-y-3' : ''
              }`}
            >
              <div className="relative aspect-[4/3] w-full rounded-lg bg-[#E3D4BE] overflow-hidden shadow-[0_10px_22px_-12px_rgba(22,17,14,0.3)]">
                <SafeImage
                  src={service.imageSrc}
                  webpSrc={service.webpSrc}
                  alt={service.imageAlt}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-2.5 pt-5 pb-2.5 flex flex-col flex-1 justify-between gap-5">
                <div>
                  <span className="block text-xs font-medium text-[#B8472A]">
                    {service.slotLabel}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-[#16110E] leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#614E43]">
                    {service.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onServiceInquiry(service.title)}
                  className="w-full min-h-[46px] px-4 inline-flex items-center justify-center gap-2 bg-[#173B2E] hover:bg-[#B8472A] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-dark transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#C8942B]" aria-hidden="true" />
                  <span>{service.ctaLabel}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
