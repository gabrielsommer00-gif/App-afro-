import { MEDIA_REGISTRY } from '../config/media';
import { Category, Product } from '../types/catalog';

/**
 * Categorias provisórias e configuráveis (Fase 02.0).
 * Estrutura pronta para:
 * - Criar novas categorias
 * - Editar nomes e descrições
 * - Reordenar via campo `order`
 * - Ocultar categorias manualmente (`isVisible: false`) ou quando vazias (`hideWhenEmpty: true`)
 */
export const CATEGORIES: Category[] = [
  {
    id: 'moda-feminina',
    slug: 'moda-feminina',
    name: 'Moda feminina',
    subtitle: 'Curadoria integrada',
    imageSrc: MEDIA_REGISTRY.categories.modaFeminina.src,
    webpSrc: MEDIA_REGISTRY.categories.modaFeminina.webpSrc,
    imageAlt: MEDIA_REGISTRY.categories.modaFeminina.alt,
    order: 1,
    isVisible: true,
    hideWhenEmpty: false,
    isDemonstrative: false,
  },
  {
    id: 'moda-masculina',
    slug: 'moda-masculina',
    name: 'Moda masculina',
    subtitle: 'Loja física & coordenados',
    imageSrc: MEDIA_REGISTRY.categories.modaMasculina.src,
    webpSrc: MEDIA_REGISTRY.categories.modaMasculina.webpSrc,
    imageAlt: MEDIA_REGISTRY.categories.modaMasculina.alt,
    order: 2,
    isVisible: true,
    hideWhenEmpty: false,
    isDemonstrative: false,
  },
  {
    id: 'moda-infantil',
    slug: 'moda-infantil',
    name: 'Moda infantil',
    subtitle: 'Conjuntos e vestidos',
    imageSrc: MEDIA_REGISTRY.categories.modaInfantil.src,
    webpSrc: MEDIA_REGISTRY.categories.modaInfantil.webpSrc,
    imageAlt: MEDIA_REGISTRY.categories.modaInfantil.alt,
    order: 3,
    isVisible: true,
    hideWhenEmpty: false,
    isDemonstrative: false,
  },
  {
    id: 'vestidos-conjuntos',
    slug: 'vestidos-conjuntos',
    name: 'Vestidos e conjuntos',
    subtitle: 'Arara da loja física',
    imageSrc: MEDIA_REGISTRY.categories.vestidosConjuntos.src,
    webpSrc: MEDIA_REGISTRY.categories.vestidosConjuntos.webpSrc,
    imageAlt: MEDIA_REGISTRY.categories.vestidosConjuntos.alt,
    order: 4,
    isVisible: true,
    hideWhenEmpty: false,
    isDemonstrative: false,
  },
  {
    id: 'tecidos-estampas',
    slug: 'tecidos-estampas',
    name: 'Tecidos e estampas',
    subtitle: 'Em catalogação',
    imageSrc: MEDIA_REGISTRY.categories.tecidosEstampas.src,
    webpSrc: MEDIA_REGISTRY.categories.tecidosEstampas.webpSrc,
    imageAlt: MEDIA_REGISTRY.categories.tecidosEstampas.alt,
    order: 5,
    isVisible: true,
    hideWhenEmpty: false,
    isDemonstrative: true,
  },
  {
    id: 'turbantes-acessorios',
    slug: 'turbantes-acessorios',
    name: 'Turbantes e acessórios',
    subtitle: 'Brincos, colares e amarrações',
    imageSrc: MEDIA_REGISTRY.categories.turbantesAcessorios.src,
    webpSrc: MEDIA_REGISTRY.categories.turbantesAcessorios.webpSrc,
    imageAlt: MEDIA_REGISTRY.categories.turbantesAcessorios.alt,
    order: 6,
    isVisible: true,
    hideWhenEmpty: false,
    isDemonstrative: false,
  },
  {
    id: 'produtos-artesanais',
    slug: 'produtos-artesanais',
    name: 'Produtos artesanais',
    subtitle: 'Bolsas e peças autorais',
    imageSrc: MEDIA_REGISTRY.categories.produtosArtesanais.src,
    webpSrc: MEDIA_REGISTRY.categories.produtosArtesanais.webpSrc,
    imageAlt: MEDIA_REGISTRY.categories.produtosArtesanais.alt,
    order: 7,
    isVisible: true,
    hideWhenEmpty: false,
    isDemonstrative: false,
  },
];

export function countProductsInCategory(categoryId: string, products: Product[]): number {
  return products.filter((product) => product.categoryId === categoryId).length;
}

export function getConfiguredCategories(
  categories: Category[],
  products: Product[],
  options?: { forceHideEmpty?: boolean }
): Category[] {
  return [...categories]
    .filter((category) => {
      if (!category.isVisible) return false;
      const shouldHideIfEmpty = options?.forceHideEmpty || category.hideWhenEmpty;
      if (shouldHideIfEmpty) {
        return countProductsInCategory(category.id, products) > 0;
      }
      return true;
    })
    .sort((a, b) => a.order - b.order);
}
