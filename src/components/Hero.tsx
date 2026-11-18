import { ArrowRight } from 'lucide-react';
import { MEDIA_REGISTRY } from '../config/media';
import { AfroBackdrop } from './AfroBackdrop';
import { SafeImage } from './SafeImage';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-x-clip bg-[#F8F3EB] pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pb-24 scroll-mt-20 sm:scroll-mt-24"
    >
      <AfroBackdrop variant="hero" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
          {/* Bloco Editorial Elevado em Primeiro Plano (sobreposição controlada no desktop) */}
          <div className="lg:col-span-5 relative z-20 lg:-mr-12 lg:my-8 bg-[#FBF8F3] border border-[#2B1D16]/10 p-7 sm:p-10 lg:p-11 rounded-xl depth-frame">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#B8472A]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#B8472A]">
                Cris Vieira Moda Africana
              </p>
            </div>

            <h1 className="font-display text-[clamp(2.35rem,4vw,3.75rem)] font-semibold leading-[1.04] tracking-tight text-[#16110E]">
              Moda afro contemporânea entre raízes, formas e presença.
            </h1>

            <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-[#614E43] max-w-[42ch]">
              Uma vitrine dedicada à beleza das estampas africanas, à força da ancestralidade e ao
              corte atual — pensada para vestir identidade, elegância e personalidade.
            </p>

            <div className="mt-8 pt-6 border-t border-[#2B1D16]/10">
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3.5">
                <a
                  href="#vitrine"
                  className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 bg-[#B8472A] hover:bg-[#9E391F] text-[#F8F3EB] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-lg btn-relief-primary transition-all whitespace-nowrap shrink-0"
                >
                  <span>Explorar Coleção</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center min-h-[48px] px-6 bg-[#EFE6D8] border border-[#2B1D16]/15 text-[#2B1D16] hover:bg-[#E3D4BE] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-lg btn-relief-surface transition-all whitespace-nowrap shrink-0"
                >
                  Conheça Nossa História
                </a>
              </div>

              <p className="mt-4 text-xs text-[#614E43]">
                Curadoria de moda afro, acessórios artesanais e serviços capilares · Valor sob consulta
              </p>
            </div>
          </div>

          {/* Moldura Fotográfica com Camada Deslocada ("Quase 3D") */}
          <div className="lg:col-span-7 relative">
            {/* Plano de fundo deslocado em terracota e dourado envelhecido */}
            <div
              className="hidden sm:block absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-[#2B1D16]/10 border border-[#C8942B]/35"
              aria-hidden="true"
            />
            <div className="relative min-h-[340px] sm:min-h-[460px] lg:min-h-[580px] rounded-xl overflow-hidden bg-[#E3D4BE] depth-frame border border-[#2B1D16]/10">
              <SafeImage
                src={MEDIA_REGISTRY.institutional.heroPrincipal.src}
                webpSrc={MEDIA_REGISTRY.institutional.heroPrincipal.webpSrc}
                alt={MEDIA_REGISTRY.institutional.heroPrincipal.alt}
                loading="eager"
                sizes="(min-width: 1024px) 58vw, 100vw"
                fallbackLabel="Fotografia principal de moda africana"
                className="w-full h-full object-cover object-[50%_18%] lg:absolute lg:inset-0"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#16110E]/70 via-[#16110E]/20 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-5 right-5 lg:left-16 flex items-center justify-between gap-4 text-[#F8F3EB]">
                <span className="text-xs font-medium tracking-wide">
                  Acervo oficial · Moletom preto com aplicações em tecido Kente
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
