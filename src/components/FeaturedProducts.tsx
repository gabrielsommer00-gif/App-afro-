import { Eye } from 'lucide-react';
import { useState } from 'react';
import { formatCurrencyBRL, hasValidPromotionalPrice } from '../config/brand';
import { CATEGORIES, getConfiguredCategories } from '../data/categories';
import { DEMO_PRODUCTS, getOrderedProducts } from '../data/products';
import { Product } from '../types/catalog';
import { AfroBackdrop } from './AfroBackdrop';
import { SafeImage } from './SafeImage';

interface FeaturedProductsProps {
  selectedCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
  onViewProduct: (product: Product) => void;
}

function getEditorialLayout(index: number, total: number): {
  spanClass: string;
  isHorizontal: boolean;
  reverseHorizontal: boolean;
} {
  if (total === 1) {
    return {
      spanClass: 'sm:col-span-2 lg:col-span-10 lg:col-start-2',
      isHorizontal: true,
      reverseHorizontal: false,
    };
  }

  if (total === 2) {
    return {
      spanClass: index === 1 ? 'lg:col-span-6 lg:translate-y-4' : 'lg:col-span-6',
      isHorizontal: false,
      reverseHorizontal: false,
    };
  }

  if (total === 3) {
    return {
      spanClass: index === 1 ? 'lg:col-span-4 lg:translate-y-5' : 'lg:col-span-4',
      isHorizontal: false,
      reverseHorizontal: false,
    };
  }

  if (total === 5) {
    if (index === 0) {
      return { spanClass: 'sm:col-span-2 lg:col-span-7', isHorizontal: true, reverseHorizontal: false };
    }
    if (index === 1) {
      return { spanClass: 'lg:col-span-5 lg:translate-y-4', isHorizontal: false, reverseHorizontal: false };
    }
    if (index === 3) {
      return { spanClass: 'lg:col-span-4 lg:translate-y-5', isHorizontal: false, reverseHorizontal: false };
    }
    return { spanClass: 'lg:col-span-4', isHorizontal: false, reverseHorizontal: false };
  }

  // Composição editorial assimétrica para 4 ou 6 itens: alternância horizontal + vertical + par escalonado
  if (index === 0) {
    return { spanClass: 'sm:col-span-2 lg:col-span-7', isHorizontal: true, reverseHorizontal: false };
  }
  if (index === 1) {
    return { spanClass: 'lg:col-span-5 lg:translate-y-5', isHorizontal: false, reverseHorizontal: false };
  }
  if (index === 2) {
    return { spanClass: 'lg:col-span-5 lg:-translate-y-1', isHorizontal: false, reverseHorizontal: false };
  }
  if (index === 3) {
    return { spanClass: 'sm:col-span-2 lg:col-span-7', isHorizontal: true, reverseHorizontal: true };
  }
  if (index === 5) {
    return { spanClass: 'lg:col-span-6 lg:translate-y-4', isHorizontal: false, reverseHorizontal: false };
  }
  if (index >= 6) {
    return {
      spanClass: index % 2 === 1 ? 'lg:col-span-6 lg:translate-y-4' : 'lg:col-span-6',
      isHorizontal: false,
      reverseHorizontal: false,
    };
  }
  return { spanClass: 'lg:col-span-6', isHorizontal: false, reverseHorizontal: false };
}

export function FeaturedProducts({
  selectedCategoryId,
  onSelectCategory,
  onViewProduct,
}: FeaturedProductsProps) {
  const [showAllCatalog, setShowAllCatalog] = useState(false);
  const configuredCategories = getConfiguredCategories(CATEGORIES, DEMO_PRODUCTS);
  const allOrderedProducts = getOrderedProducts(DEMO_PRODUCTS);
  const featuredProducts = getOrderedProducts(DEMO_PRODUCTS, true);

  const filteredProducts =
    selectedCategoryId === 'todos'
      ? showAllCatalog
        ? allOrderedProducts
        : featuredProducts
      : allOrderedProducts.filter((product) => product.categoryId === selectedCategoryId);

  return (
    <section
      id="vitrine"
      className="relative overflow-x-clip py-16 sm:py-22 lg:pb-28 bg-[#FBF8F3] scroll-mt-20 sm:scroll-mt-24"
    >
      <AfroBackdrop variant="vitrine" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#2B1D16]/12">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rotate-45 bg-[#B8472A]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#B8472A]">
                Vitrine da loja · Curadoria integrada
              </p>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#16110E]">
              Produtos em destaque
            </h2>
            <p className="mt-2 text-sm text-[#614E43] max-w-[56ch]">
              Peças da loja física, acessórios artesanais, turbantes e linha infantil. Selecione um
              item para ver detalhes, variações ou consultar disponibilidade via WhatsApp.
            </p>
          </div>

          {/* Filtro por categoria com relevo tátil */}
          <div
            role="tablist"
            aria-label="Filtrar vitrine por categoria"
            className="flex flex-nowrap overflow-x-auto sm:flex-wrap items-center gap-1.5 bg-[#EFE6D8] border border-[#2B1D16]/10 p-1.5 rounded-xl max-w-full depth-card"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategoryId === 'todos'}
              onClick={() => onSelectCategory('todos')}
              className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategoryId === 'todos'
                  ? 'bg-[#2B1D16] text-[#F8F3EB] btn-relief-dark'
                  : 'text-[#614E43] hover:text-[#16110E] hover:bg-[#FBF8F3]/70'
              }`}
            >
              Todos
            </button>
            {configuredCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategoryId === cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategoryId === cat.id
                    ? 'bg-[#2B1D16] text-[#F8F3EB] btn-relief-dark'
                    : 'text-[#614E43] hover:text-[#16110E] hover:bg-[#FBF8F3]/70'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-10 p-10 bg-[#EFE6D8] border border-[#2B1D16]/10 rounded-xl depth-card text-center">
            <p className="font-display text-2xl font-semibold text-[#16110E]">
              Categoria preparada para novos cadastros
            </p>
            <p className="mt-2 text-sm text-[#614E43] max-w-[46ch] mx-auto">
              Esta categoria ainda não possui itens vinculados. Os produtos oficiais serão
              associados na etapa de cadastramento real.
            </p>
            <button
              type="button"
              onClick={() => onSelectCategory('todos')}
              className="mt-5 inline-flex items-center justify-center min-h-[44px] px-6 bg-[#2B1D16] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-dark hover:bg-[#B8472A] transition-all cursor-pointer"
            >
              Ver toda a vitrine demonstrativa
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-7 sm:gap-8 items-stretch">
            {filteredProducts.map((product, index) => {
              const coverImage = product.gallery[0] ?? product.primaryImage;
              const isPromo = hasValidPromotionalPrice(product.price, product.promotionalPrice);
              const layout = getEditorialLayout(index, filteredProducts.length);

              return (
                <article
                  key={product.id}
                  className={`group flex flex-col bg-[#F8F3EB] rounded-xl border border-[#2B1D16]/12 depth-card depth-card-hover p-3 sm:p-4 ${
                    layout.spanClass
                  } ${
                    layout.isHorizontal ? 'lg:grid lg:grid-cols-12 lg:gap-6 lg:items-stretch' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onViewProduct(product)}
                    className={`relative w-full rounded-lg overflow-hidden bg-[#E3D4BE] cursor-pointer text-left shadow-[0_12px_26px_-12px_rgba(22,17,14,0.3)] ${
                      layout.isHorizontal
                        ? `aspect-[4/3] lg:aspect-auto lg:min-h-[300px] lg:h-full lg:col-span-6 ${
                            layout.reverseHorizontal ? 'lg:order-2' : ''
                          }`
                        : 'aspect-[4/3]'
                    }`}
                    aria-label={`Ver detalhes de ${product.name}`}
                  >
                    <SafeImage
                      src={coverImage?.src ?? ''}
                      webpSrc={coverImage?.webpSrc}
                      alt={coverImage?.alt ?? product.name}
                      fallbackLabel={product.name}
                      sizes={
                        layout.isHorizontal
                          ? '(min-width: 1024px) 36vw, 100vw'
                          : '(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw'
                      }
                      className="w-full h-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </button>

                  <div
                    className={`px-2 pt-5 pb-2 flex flex-col flex-1 justify-between gap-4 ${
                      layout.isHorizontal
                        ? `lg:col-span-6 lg:py-3 lg:px-2 ${
                            layout.reverseHorizontal ? 'lg:order-1' : ''
                          }`
                        : ''
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#614E43]">
                        <span className="font-semibold text-[#B8472A]">{product.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{product.availabilityLabel}</span>
                      </div>

                      <h3
                        className={`mt-2 font-display font-semibold leading-snug text-[#16110E] ${
                          layout.isHorizontal ? 'text-2xl sm:text-[28px]' : 'text-2xl'
                        }`}
                      >
                        {product.name}
                      </h3>

                      {product.shortDescription && (
                        <p
                          className={`mt-2 text-sm leading-relaxed text-[#614E43] ${
                            layout.isHorizontal ? 'line-clamp-3' : 'line-clamp-2'
                          }`}
                        >
                          {product.shortDescription}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#2B1D16]/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="min-w-0">
                        <span className="block text-[11px] text-[#614E43]">
                          {product.isDemonstrative ? 'Preço demonstrativo' : 'Valor'}
                        </span>
                        {product.price === null ? (
                          <span className="text-sm font-semibold text-[#16110E]">
                            Sob consulta
                          </span>
                        ) : isPromo ? (
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-base font-semibold text-[#B8472A] tabular-nums">
                              {product.promotionalPriceFormatted ??
                                formatCurrencyBRL(product.promotionalPrice!)}
                            </span>
                            <span className="text-xs text-[#614E43] line-through tabular-nums">
                              {product.priceFormatted ?? formatCurrencyBRL(product.price)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-base font-semibold text-[#16110E] tabular-nums">
                            {product.priceFormatted ?? formatCurrencyBRL(product.price)}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => onViewProduct(product)}
                        className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 bg-[#2B1D16] hover:bg-[#B8472A] text-[#F8F3EB] text-xs font-semibold tracking-wider uppercase rounded-lg btn-relief-dark transition-all whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#C8942B] group-hover:text-[#F8F3EB]" aria-hidden="true" />
                        <span>Ver Produto</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {selectedCategoryId === 'todos' && allOrderedProducts.length > featuredProducts.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllCatalog((prev) => !prev)}
              className="inline-flex items-center justify-center min-h-[48px] px-7 bg-[#EFE6D8] hover:bg-[#2B1D16] text-[#16110E] hover:text-[#F8F3EB] border border-[#2B1D16]/15 text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-surface transition-all cursor-pointer"
            >
              {showAllCatalog
                ? `Mostrar seleção em destaque (${featuredProducts.length} peças)`
                : `Ver todas as peças do catálogo (${allOrderedProducts.length} itens)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
