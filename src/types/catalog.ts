export type AvailabilityStatus =
  | 'disponivel'
  | 'disponivel_demonstrativo'
  | 'sob_consulta'
  | 'em_preparacao'
  | 'esgotado';

export interface ProductGalleryImage {
  id: string;
  src: string;
  webpSrc?: string;
  alt: string;
  caption?: string;
  isProvisional?: boolean;
}

export interface ProductColorVariant {
  id: string;
  name: string;
  swatchHex: string;
  patternNote?: string;
  imageSrc?: string;
}

export interface ProductVariantStock {
  size?: string;
  colorId?: string;
  sku?: string;
  inStock: boolean;
  quantity?: number;
}

export interface Product {
  id: string;
  slug: string;
  sku?: string;
  name: string;
  categoryId: string;
  categoryLabel: string;
  shortDescription?: string;
  fullDescription?: string;
  /** Preço comercial em reais. Aceita null quando o item for sob consulta ou demonstrativo sem valor definido. */
  price: number | null;
  priceFormatted?: string;
  /** Preço promocional opcional em reais, exibido apenas quando menor que o preço base. */
  promotionalPrice?: number | null;
  promotionalPriceFormatted?: string;
  availability: AvailabilityStatus;
  availabilityLabel: string;
  isDemonstrative: boolean;
  isFeatured?: boolean;
  displayOrder?: number;
  primaryImage: ProductGalleryImage;
  gallery: ProductGalleryImage[];
  sizes?: string[];
  colors?: ProductColorVariant[];
  variants?: ProductVariantStock[];
  materialNote?: string;
  additionalInfo?: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  webpSrc?: string;
  imageAlt?: string;
  order: number;
  isVisible: boolean;
  hideWhenEmpty?: boolean;
  isDemonstrative: boolean;
}

export interface ServiceSlot {
  id: string;
  slotLabel: string;
  title: string;
  description: string;
  ctaLabel: string;
  imageSrc: string;
  webpSrc?: string;
  imageAlt: string;
  isEditableSlot: boolean;
}

export interface CartItem {
  cartItemId: string;
  product: Product;
  selectedSize?: string;
  selectedColor?: ProductColorVariant;
  quantity: number;
}

export interface OfficialLogoConfig {
  /** Caminho do arquivo original da logo para fundos claros (cabeçalho). */
  src: string | null;
  /** Caminho opcional da logo em versão clara para fundos escuros (rodapé). */
  srcLight?: string | null;
  alt: string;
  width?: number;
  height?: number;
}

export interface LocationConfig {
  isVerified: boolean;
  addressLabel: string;
  cityStateLabel: string;
  openingHoursLabel: string;
  mapsUrl: string | null;
  embedIframeUrl: string | null;
}

export interface BrandConfig {
  name: string;
  shortName: string;
  officialLogo: OfficialLogoConfig;
  instagramHandle: string;
  instagramUrl: string;
  whatsappNumber: string | null;
  email: string | null;
  commercialNote: string;
  location: LocationConfig;
}

export type AfroHairGroup = 'estilos_trancas' | 'cuidados_manutencao';

export interface AfroHairService {
  id: string;
  slug: string;
  name: string;
  group: AfroHairGroup;
  groupLabel: string;
  shortDescription: string;
  fullDescription: string;
  primaryImage: ProductGalleryImage;
  gallery: ProductGalleryImage[];
  lengthOptions: string[];
  colorOptions: ProductColorVariant[];
  volumeOptions: string[];
  fiberOrNaturalInfo: string;
  subjectToConfirmationNote: string;
}

