import { ArrowUpRight, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { MEDIA_REGISTRY } from '../config/media';
import { AfroBackdrop } from './AfroBackdrop';
import { SafeImage } from './SafeImage';

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className="relative overflow-x-clip py-16 sm:py-22 lg:pb-26 bg-[#F5ECE0] scroll-mt-20 sm:scroll-mt-24"
    >
      <AfroBackdrop variant="instagram" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#2B1D16]/12">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rotate-45 bg-[#B8472A]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#B8472A]">
                Conexão oficial
              </p>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#16110E]">
              Acompanhe {BRAND_CONFIG.instagramHandle}
            </h2>
            <p className="mt-2 text-sm text-[#614E43] max-w-[52ch]">
              Acompanhe novidades, coleções e registros editoriais diretamente no perfil oficial da
              marca no Instagram.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 bg-[#2B1D16] hover:bg-[#B8472A] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-dark transition-all whitespace-nowrap shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#C8942B]" aria-hidden="true" />
            <span>Abrir {BRAND_CONFIG.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {MEDIA_REGISTRY.collections.lookbook.map((item, index) => (
            <a
              key={item.id}
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${BRAND_CONFIG.instagramHandle} no Instagram`}
              className={`group relative aspect-square rounded-xl overflow-hidden bg-[#FBF8F3] border border-[#2B1D16]/12 depth-card depth-card-hover p-2 ${
                index % 2 === 1 ? 'lg:translate-y-4' : ''
              }`}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#E3D4BE]">
                <SafeImage
                  src={item.src}
                  webpSrc={item.webpSrc}
                  alt={item.alt}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="w-full h-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[#16110E]/0 group-hover:bg-[#16110E]/30 transition-colors flex items-end p-4"
                  aria-hidden="true"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-[#F8F3EB]">
                    {BRAND_CONFIG.instagramHandle}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#614E43]">
          Destaques do acervo e combinações visuais · Acompanhe novidades e lançamentos em{' '}
          {BRAND_CONFIG.instagramHandle}.
        </p>
      </div>
    </section>
  );
}
