import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES, getConfiguredCategories } from '../data/categories';
import { DEMO_PRODUCTS } from '../data/products';
import { Category } from '../types/catalog';
import { AfroBackdrop } from './AfroBackdrop';
import { SafeImage } from './SafeImage';

interface CategoriesSectionProps {
  selectedCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoriesSection({
  selectedCategoryId,
  onSelectCategory,
}: CategoriesSectionProps) {
  const visibleCategories = getConfiguredCategories(CATEGORIES, DEMO_PRODUCTS);

  const handleCategoryClick = (category: Category) => {
    onSelectCategory(category.id);
    const vitrineEl = document.getElementById('vitrine');
    if (vitrineEl) {
      vitrineEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="categorias"
      className="relative overflow-x-clip py-16 sm:py-22 lg:pb-26 bg-[#EFE6D8] scroll-mt-20 sm:scroll-mt-24"
    >
      <AfroBackdrop variant="categories" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#2B1D16]/12">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rotate-45 bg-[#C8942B]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#B8472A]">
                Curadoria de catálogo · Coleções da loja
              </p>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#16110E]">
              Explore por categoria
            </h2>
          </div>
          <p className="text-sm text-[#614E43] max-w-[48ch]">
            Selecione uma linha para filtrar a vitrine entre vestuário adulto, linha infantil,
            vestidos, turbantes, acessórios e peças artesanais da loja.
          </p>
        </div>

        {visibleCategories.length === 0 ? (
          <div className="mt-8 p-10 bg-[#FBF8F3] rounded-xl depth-card text-center">
            <p className="font-display text-2xl font-semibold text-[#16110E]">
              Nenhuma categoria ativa no momento
            </p>
            <p className="mt-2 text-sm text-[#614E43] max-w-[46ch] mx-auto">
              As categorias aparecerão aqui conforme forem habilitadas e associadas ao catálogo
              oficial.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {visibleCategories.map((category, index) => {
              const isSelected = selectedCategoryId === category.id;
              const isLeadCard = index === 0;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className={`group text-left rounded-xl cursor-pointer flex flex-col transition-all duration-200 ${
                    isLeadCard
                      ? 'sm:col-span-2 lg:col-span-2 bg-transparent'
                      : `bg-[#FBF8F3] border depth-card depth-card-hover overflow-hidden ${
                          index % 2 === 1 ? 'lg:translate-y-4' : ''
                        }`
                  } ${
                    !isLeadCard && isSelected
                      ? 'border-[#B8472A] ring-2 ring-[#B8472A]/40'
                      : !isLeadCard
                        ? 'border-[#2B1D16]/10 hover:border-[#C8942B]/60'
                        : ''
                  }`}
                >
                  {isLeadCard ? (
                    <div className="flex flex-col h-full">
                      <div className="relative">
                        <div
                          className="hidden sm:block absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-xl bg-[#B8472A]/18 border border-[#C8942B]/35"
                          aria-hidden="true"
                        />
                        <div
                          className={`relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden bg-[#E3D4BE] depth-frame border transition-all ${
                            isSelected
                              ? 'border-[#B8472A] ring-2 ring-[#B8472A]/40'
                              : 'border-[#2B1D16]/10'
                          }`}
                        >
                          <SafeImage
                            src={category.imageSrc ?? ''}
                            webpSrc={category.webpSrc}
                            alt={category.imageAlt ?? category.name}
                            fallbackLabel={category.name}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="w-full h-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>

                      {/* Placa de legenda sobreposta à borda inferior da imagem */}
                      <div className="relative z-10 -mt-9 mx-4 sm:mx-6 p-4 sm:p-5 rounded-xl bg-[#FBF8F3] border border-[#2B1D16]/10 depth-card depth-card-hover flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          {category.subtitle && (
                            <span className="block text-[11px] font-medium text-[#614E43] truncate">
                              {category.subtitle}
                            </span>
                          )}
                          <h3 className="mt-0.5 font-display text-2xl sm:text-[26px] font-semibold text-[#16110E]">
                            {category.name}
                          </h3>
                        </div>
                        <span
                          aria-hidden="true"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#2B1D16] text-[#F8F3EB] group-hover:bg-[#B8472A] btn-relief-dark transition-colors shrink-0"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="relative w-full overflow-hidden bg-[#E3D4BE] aspect-[4/3]">
                        <SafeImage
                          src={category.imageSrc ?? ''}
                          webpSrc={category.webpSrc}
                          alt={category.imageAlt ?? category.name}
                          fallbackLabel={category.name}
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="w-full h-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>

                      <div className="p-4 sm:p-5 flex-1 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          {category.subtitle && (
                            <span className="block text-[11px] font-medium text-[#614E43] truncate">
                              {category.subtitle}
                            </span>
                          )}
                          <h3 className="mt-0.5 font-display text-xl sm:text-2xl font-semibold text-[#16110E]">
                            {category.name}
                          </h3>
                        </div>
                        <span
                          aria-hidden="true"
                          className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#EFE6D8] border border-[#2B1D16]/12 text-[#2B1D16] group-hover:bg-[#B8472A] group-hover:border-[#B8472A] group-hover:text-[#F8F3EB] btn-relief-surface transition-colors shrink-0"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Conexão entre moda, acessórios e a área dedicada a Cabelos Afro */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-7 rounded-2xl bg-[#FBF8F3] border border-[#2B1D16]/12 depth-card flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B8472A]">
              Nova área · Beleza e identidade afro
            </p>
            <h3 className="mt-1 font-display text-2xl sm:text-[26px] font-semibold text-[#16110E]">
              Cabelos Afro — Tranças, alongamentos e cuidados capilares
            </h3>
            <p className="mt-1 text-sm text-[#614E43] max-w-[60ch]">
              Explore estilos como Box Braids, Tranças Nagô, Knotless, Boho, Fulani, Twist, Faux Locs
              e tratamentos para fios crespos e cacheados em harmonia com os acessórios da loja.
            </p>
          </div>
          <a
            href="#cabelos-afro"
            className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 bg-[#2B1D16] hover:bg-[#B8472A] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-dark transition-all whitespace-nowrap shrink-0"
          >
            <span>Explorar Cabelos Afro</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
