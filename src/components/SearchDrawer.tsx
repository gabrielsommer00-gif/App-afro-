import { ArrowRight, Search, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { formatCurrencyBRL, hasValidPromotionalPrice } from '../config/brand';
import { AFRO_HAIR_SERVICES } from '../data/afroHair';
import { CATEGORIES, getConfiguredCategories } from '../data/categories';
import { DEMO_PRODUCTS, getOrderedProducts } from '../data/products';
import { SERVICE_SLOTS } from '../data/services';
import { AfroHairService, Category, Product } from '../types/catalog';
import { SafeImage } from './SafeImage';

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (categoryId: string) => void;
  onSelectProduct: (product: Product) => void;
  onSelectAfroHairService: (service: AfroHairService) => void;
}

function normalizeSearchText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function SearchDrawer({
  isOpen,
  onClose,
  onSelectCategory,
  onSelectProduct,
  onSelectAfroHairService,
}: SearchDrawerProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      window.setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [isOpen]);

  const normalizedQuery = normalizeSearchText(query);
  const configuredCategories = useMemo(
    () => getConfiguredCategories(CATEGORIES, DEMO_PRODUCTS),
    []
  );
  const orderedProducts = useMemo(() => getOrderedProducts(DEMO_PRODUCTS), []);

  const matchedCategories = useMemo(() => {
    if (!normalizedQuery) return configuredCategories.slice(0, 4);
    return configuredCategories.filter(
      (cat) =>
        normalizeSearchText(cat.name).includes(normalizedQuery) ||
        normalizeSearchText(cat.subtitle ?? '').includes(normalizedQuery)
    );
  }, [normalizedQuery, configuredCategories]);

  const matchedProducts = useMemo(() => {
    if (!normalizedQuery) return orderedProducts.slice(0, 4);
    return orderedProducts.filter(
      (prod) =>
        normalizeSearchText(prod.name).includes(normalizedQuery) ||
        normalizeSearchText(prod.categoryLabel).includes(normalizedQuery) ||
        normalizeSearchText(prod.shortDescription ?? '').includes(normalizedQuery) ||
        normalizeSearchText(prod.sku ?? '').includes(normalizedQuery)
    );
  }, [normalizedQuery, orderedProducts]);

  const matchedAfroHair = useMemo(() => {
    if (!normalizedQuery) return [];
    return AFRO_HAIR_SERVICES.filter(
      (hair) =>
        normalizeSearchText(hair.name).includes(normalizedQuery) ||
        normalizeSearchText(hair.groupLabel).includes(normalizedQuery) ||
        normalizeSearchText(hair.shortDescription).includes(normalizedQuery) ||
        normalizeSearchText('cabelos afro trancas alongamentos').includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const matchedServices = useMemo(() => {
    if (!normalizedQuery) return [];
    return SERVICE_SLOTS.filter(
      (service) =>
        normalizeSearchText(service.title).includes(normalizedQuery) ||
        normalizeSearchText(service.description).includes(normalizedQuery) ||
        normalizeSearchText(service.slotLabel).includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  if (!isOpen) return null;

  const handlePickCategory = (category: Category) => {
    onSelectCategory(category.id);
    onClose();
    document.getElementById('vitrine')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePickProduct = (product: Product) => {
    onClose();
    onSelectProduct(product);
  };

  const handlePickAfroHair = (service: AfroHairService) => {
    onClose();
    onSelectAfroHairService(service);
  };

  const handlePickService = () => {
    onClose();
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Pesquisar no catálogo"
    >
      <div
        className="fixed inset-0 bg-[#16110E]/60 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-[760px] bg-[#FBF8F3] rounded-2xl depth-frame border border-[#2B1D16]/15 overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 bg-[#F8F3EB] border-b border-[#2B1D16]/10">
          <Search className="w-5 h-5 text-[#B8472A] shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar categorias, peças, cabelos afro ou serviços..."
            aria-label="Buscar no catálogo"
            className="w-full bg-transparent text-base text-[#16110E] placeholder:text-[#614E43]/70 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar busca"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#FBF8F3] border border-[#2B1D16]/10 text-[#2B1D16] btn-relief-surface cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Categorias */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#614E43] mb-3">
              Categorias
            </h3>
            {matchedCategories.length === 0 &&
            !(
              !normalizedQuery ||
              normalizeSearchText('cabelos afro trancas').includes(normalizedQuery)
            ) ? (
              <p className="text-sm text-[#614E43]">Nenhuma categoria encontrada.</p>
            ) : (
              <div className="flex flex-wrap gap-2.5">
                {matchedCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handlePickCategory(cat)}
                    className="inline-flex items-center gap-2 min-h-[44px] px-4 bg-[#EFE6D8] border border-[#2B1D16]/10 hover:bg-[#2B1D16] hover:text-[#F8F3EB] text-sm font-medium text-[#16110E] rounded-lg btn-relief-surface transition-all cursor-pointer"
                  >
                    <span>{cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                ))}
                {(!normalizedQuery ||
                  normalizeSearchText('cabelos afro trancas').includes(normalizedQuery)) && (
                  <a
                    href="#cabelos-afro"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 min-h-[44px] px-4 bg-[#B8472A] text-[#F8F3EB] hover:bg-[#9E391F] text-sm font-medium rounded-lg btn-relief-primary transition-all"
                  >
                    <span>Cabelos Afro</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Produtos */}
          <div className="pt-4 border-t border-[#2B1D16]/10">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#614E43] mb-3">
              Catálogo de peças e acessórios
            </h3>
            {matchedProducts.length === 0 ? (
              <p className="text-sm text-[#614E43]">
                Nenhuma peça encontrada para &ldquo;{query}&rdquo;.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {matchedProducts.map((product) => {
                  const cover = product.gallery[0] ?? product.primaryImage;
                  const isPromo = hasValidPromotionalPrice(
                    product.price,
                    product.promotionalPrice
                  );
                  const displayPrice =
                    product.price === null
                      ? 'Sob consulta'
                      : isPromo
                        ? product.promotionalPriceFormatted ??
                          formatCurrencyBRL(product.promotionalPrice!)
                        : product.priceFormatted ?? formatCurrencyBRL(product.price);

                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => handlePickProduct(product)}
                      className="flex items-center gap-3.5 p-2.5 min-h-[68px] rounded-xl bg-[#F8F3EB] border border-[#2B1D16]/10 depth-card hover:border-[#B8472A]/40 text-left transition-all cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#E3D4BE] shrink-0">
                        <SafeImage
                          src={cover?.src ?? ''}
                          webpSrc={cover?.webpSrc}
                          alt={cover?.alt ?? product.name}
                          sizes="56px"
                          className="w-full h-full object-cover object-[50%_15%]"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#16110E] truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-[#614E43] tabular-nums">
                          {product.categoryLabel} · {displayPrice}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Cabelos Afro */}
          {matchedAfroHair.length > 0 && (
            <div className="pt-4 border-t border-[#2B1D16]/10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#B8472A] mb-3">
                Cabelos Afro
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {matchedAfroHair.map((hair) => (
                  <button
                    key={hair.id}
                    type="button"
                    onClick={() => handlePickAfroHair(hair)}
                    className="flex items-center gap-3.5 p-2.5 min-h-[68px] rounded-xl bg-[#F8F3EB] border border-[#2B1D16]/10 depth-card hover:border-[#B8472A]/40 text-left transition-all cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#E3D4BE] shrink-0">
                      <SafeImage
                        src={hair.primaryImage.src}
                        webpSrc={hair.primaryImage.webpSrc}
                        alt={hair.primaryImage.alt}
                        sizes="56px"
                        className="w-full h-full object-cover object-[50%_15%]"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#16110E] truncate">
                        {hair.name}
                      </p>
                      <p className="text-xs text-[#614E43] truncate">
                        Cabelos Afro · {hair.groupLabel}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Serviços */}
          {matchedServices.length > 0 && (
            <div className="pt-4 border-t border-[#2B1D16]/10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#614E43] mb-3">
                Serviços e atendimento
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {matchedServices.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={handlePickService}
                    className="flex items-center justify-between gap-3 p-3.5 min-h-[56px] rounded-xl bg-[#F8F3EB] border border-[#2B1D16]/10 depth-card hover:border-[#B8472A]/40 text-left transition-all cursor-pointer"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#16110E] truncate">
                        {service.title}
                      </p>
                      <p className="text-xs text-[#614E43] truncate">
                        {service.slotLabel}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#B8472A] shrink-0" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
