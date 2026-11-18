import { MEDIA_REGISTRY } from '../config/media';
import { AfroBackdrop } from './AfroBackdrop';
import { SafeImage } from './SafeImage';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-x-clip py-16 sm:py-24 bg-[#EFE6D8] scroll-mt-20 sm:scroll-mt-24"
    >
      <AfroBackdrop variant="about" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
          {/* Fotografia Editorial da Marca com Camada de Profundidade */}
          <div className="lg:col-span-6 relative">
            <div
              className="hidden sm:block absolute inset-0 -translate-x-3 translate-y-3 rounded-xl bg-[#B8472A]/18 border border-[#C8942B]/35"
              aria-hidden="true"
            />
            <div className="relative min-h-[360px] sm:min-h-[480px] lg:min-h-[540px] rounded-xl overflow-hidden bg-[#E3D4BE] depth-frame border border-[#2B1D16]/10">
              <SafeImage
                src={MEDIA_REGISTRY.institutional.sobreAtelier.src}
                webpSrc={MEDIA_REGISTRY.institutional.sobreAtelier.webpSrc}
                alt={MEDIA_REGISTRY.institutional.sobreAtelier.alt}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover lg:absolute lg:inset-0"
              />
            </div>
          </div>

          {/* Conteúdo Editorial Sobreposto */}
          <div className="lg:col-span-6 relative z-10 lg:-ml-12 lg:my-8 bg-[#FBF8F3] border border-[#2B1D16]/10 p-7 sm:p-10 lg:p-12 rounded-xl depth-frame flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#B8472A]" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#B8472A]">
                  Sobre a marca
                </p>
              </div>

              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.08] text-[#16110E]">
                Cris Vieira Moda Africana
              </h2>

              <div className="mt-6 space-y-4 text-[15px] sm:text-base leading-relaxed text-[#614E43]">
                <p>
                  Um projeto dedicado à expressão da moda afro contemporânea, unindo a riqueza
                  simbólica das estampas, o valor da ancestralidade e uma estética atual de
                  elegância e presença.
                </p>
                <p>
                  Cada elemento visual deste catálogo foi concebido para valorizar texturas
                  naturais, tonalidades quentes e o protagonismo da cultura africana no vestir.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2B1D16]/12">
              <div className="p-5 bg-[#EFE6D8] border border-[#2B1D16]/10 rounded-lg depth-card">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#16110E]">
                  Espaço reservado para texto institucional oficial
                </span>
                <p className="mt-1.5 text-sm text-[#614E43]">
                  A trajetória completa, propósito e informações biográficas serão inseridos a
                  partir do material oficial enviado pela marca na próxima etapa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
