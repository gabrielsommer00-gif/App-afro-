import { BrandConfig } from '../types/catalog';
import { MEDIA_REGISTRY } from './media';

/**
 * Reexportação de compatibilidade dos slots centrais de mídia.
 * Preferir MEDIA_REGISTRY para novos cadastros na Fase 02+.
 */
export const MEDIA_SLOTS = {
  heroPrincipal: MEDIA_REGISTRY.institutional.heroPrincipal.src,
  sobreAtelier: MEDIA_REGISTRY.institutional.sobreAtelier.src,
  modaFeminina: MEDIA_REGISTRY.categories.modaFeminina.src,
  modaMasculina: MEDIA_REGISTRY.categories.modaMasculina.src,
  tecidosEstampas: MEDIA_REGISTRY.categories.tecidosEstampas.src,
  turbantesAcessorios: MEDIA_REGISTRY.categories.turbantesAcessorios.src,
  vestidoConjunto: MEDIA_REGISTRY.categories.vestidosConjuntos.src,
  artesanatoInfantil: MEDIA_REGISTRY.categories.modaInfantil.src,
} as const;

export const BRAND_CONFIG: BrandConfig = {
  name: 'Cris Vieira Moda Africana',
  shortName: 'Cris Vieira',
  officialLogo: {
    src: MEDIA_REGISTRY.logo.primarySrc,
    srcLight: MEDIA_REGISTRY.logo.lightSrc,
    alt: MEDIA_REGISTRY.logo.alt,
  },
  instagramHandle: '@crisvieiramodaafricana',
  instagramUrl: 'https://www.instagram.com/crisvieiramodaafricana/',
  /**
   * Preencha com o número oficial no formato DDI+DDD+Número (apenas dígitos, ex.: '5511999999999')
   * após confirmação da marca para ativar o redirecionamento direto para o WhatsApp.
   */
  whatsappNumber: null,
  email: null,
  commercialNote:
    'Informações comerciais e fiscais oficiais serão inseridas após confirmação cadastral.',
  location: {
    isVerified: false,
    addressLabel: 'Endereço oficial da loja/ateliê a confirmar',
    cityStateLabel: 'Localização em atualização para a próxima fase',
    openingHoursLabel: 'Horários de atendimento a confirmar',
    mapsUrl: null,
    embedIframeUrl: null,
  },
};

export function buildWhatsAppLink(message: string): string | null {
  if (!BRAND_CONFIG.whatsappNumber) {
    return null;
  }
  const cleanDigits = BRAND_CONFIG.whatsappNumber.replace(/\D/g, '');
  if (!cleanDigits) {
    return null;
  }
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(message)}`;
}

export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function hasValidPromotionalPrice(
  price: number | null,
  promotionalPrice?: number | null
): promotionalPrice is number {
  return (
    typeof price === 'number' &&
    typeof promotionalPrice === 'number' &&
    promotionalPrice > 0 &&
    promotionalPrice < price
  );
}

export function getEffectiveUnitPrice(
  price: number | null,
  promotionalPrice?: number | null
): number | null {
  if (hasValidPromotionalPrice(price, promotionalPrice)) {
    return promotionalPrice;
  }
  return typeof price === 'number' ? price : null;
}
