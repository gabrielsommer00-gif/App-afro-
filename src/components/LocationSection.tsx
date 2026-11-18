import { Clock, MapPin, Navigation } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { AfroBackdrop } from './AfroBackdrop';

interface LocationSectionProps {
  onDirectionsPending: () => void;
}

export function LocationSection({ onDirectionsPending }: LocationSectionProps) {
  const { location } = BRAND_CONFIG;

  return (
    <section
      id="localizacao"
      className="relative overflow-x-clip py-16 sm:py-24 bg-[#F8F3EB] scroll-mt-20 sm:scroll-mt-24"
    >
      <AfroBackdrop variant="location" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
          {/* Card Flutuante de Informações em Primeiro Plano */}
          <div className="lg:col-span-5 relative z-10 lg:-mr-10 lg:my-6 bg-[#FBF8F3] border border-[#2B1D16]/10 p-7 sm:p-10 rounded-xl depth-frame flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rotate-45 bg-[#B8472A]" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#B8472A]">
                  Localização e atendimento
                </p>
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#16110E]">
                Visite ou encontre a loja
              </h2>
              <p className="mt-2 text-sm text-[#614E43]">
                Estrutura preparada para exibir endereço oficial, mapa interativo e horários após
                validação dos dados comerciais.
              </p>

              <div className="mt-7 space-y-5 pt-6 border-t border-[#2B1D16]/10">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EFE6D8] border border-[#2B1D16]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#B8472A]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#16110E]">
                      Endereço
                    </span>
                    <p className="mt-1 text-sm text-[#614E43]">{location.addressLabel}</p>
                    <p className="text-xs text-[#614E43]/80">{location.cityStateLabel}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EFE6D8] border border-[#2B1D16]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#173B2E]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#16110E]">
                      Horários de atendimento
                    </span>
                    <p className="mt-1 text-sm text-[#614E43]">{location.openingHoursLabel}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2B1D16]/10">
              {location.isVerified && location.mapsUrl ? (
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] px-6 inline-flex items-center justify-center gap-2.5 bg-[#B8472A] hover:bg-[#9E391F] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-primary transition-all"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>Como Chegar</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onDirectionsPending}
                  className="w-full min-h-[48px] px-6 inline-flex items-center justify-center gap-2.5 bg-[#B8472A] hover:bg-[#9E391F] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-primary transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>Como Chegar</span>
                </button>
              )}
            </div>
          </div>

          {/* Container Recuado Preparado para Mapa */}
          <div className="lg:col-span-7 min-h-[340px] sm:min-h-[430px] rounded-xl overflow-hidden border border-[#2B1D16]/15 bg-[#EAE0D0] depth-card flex flex-col">
            {location.isVerified && location.embedIframeUrl ? (
              <iframe
                title={`Mapa de localização — ${BRAND_CONFIG.name}`}
                src={location.embedIframeUrl}
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 lg:pl-16 text-center bg-[#E7DAC7]">
                <div className="w-14 h-14 rounded-xl border border-[#2B1D16]/15 bg-[#FBF8F3] depth-card flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#B8472A]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#16110E]">
                  Espaço reservado para o mapa oficial
                </h3>
                <p className="mt-2 text-sm text-[#614E43] max-w-[44ch]">
                  Para manter precisão e confiabilidade, nenhum endereço fictício foi exibido. O
                  mapa interativo será ativado assim que o endereço verificado for confirmado.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
