import { BRAND_CONFIG } from '../config/brand';

interface BrandLogoProps {
  variant?: 'header' | 'footer';
  tone?: 'dark' | 'light';
}

/**
 * Ponto central de exibição da logo oficial da Cris Vieira Moda Africana.
 * - Quando `BRAND_CONFIG.officialLogo.src` (ou `srcLight` no rodapé) estiver preenchido,
 *   renderiza exclusivamente o arquivo original sem substituí-lo por texto digitado.
 * - Enquanto o arquivo oficial não for disponibilizado, preserva espaço provisório
 *   claramente identificado sem inventar uma identidade visual falsa.
 */
export function BrandLogo({ variant = 'header', tone = 'dark' }: BrandLogoProps) {
  const { officialLogo } = BRAND_CONFIG;
  const activeSrc =
    tone === 'light' && officialLogo.srcLight ? officialLogo.srcLight : officialLogo.src;

  if (activeSrc) {
    return (
      <img
        src={activeSrc}
        alt={officialLogo.alt || BRAND_CONFIG.name}
        width={officialLogo.width}
        height={officialLogo.height}
        decoding="async"
        referrerPolicy="no-referrer"
        className={
          variant === 'header'
            ? 'h-9 sm:h-10 w-auto max-w-[190px] object-contain shrink-0 select-none'
            : 'h-12 sm:h-14 w-auto max-w-[240px] object-contain shrink-0 select-none'
        }
      />
    );
  }

  const textColor = tone === 'light' ? 'text-[#F8F3EB]' : 'text-[#16110E]';
  const borderColor = tone === 'light' ? 'border-[#F8F3EB]/25' : 'border-[#2B1D16]/25';
  const mutedColor = tone === 'light' ? 'text-[#F8F3EB]/70' : 'text-[#614E43]';

  if (variant === 'header') {
    return (
      <span
        data-logo-status="provisional-slot"
        className={`inline-flex items-center gap-3 whitespace-nowrap shrink-0 ${textColor}`}
      >
        <span
          aria-hidden="true"
          title="Espaço provisório reservado para a logo oficial"
          className={`inline-flex items-center justify-center w-8 h-8 border border-dashed ${borderColor} text-[10px] font-medium tracking-wider ${mutedColor}`}
        >
          CV
        </span>
        <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight leading-none">
          {BRAND_CONFIG.shortName}
        </span>
      </span>
    );
  }

  return (
    <div
      data-logo-status="provisional-slot"
      className={`inline-flex flex-col items-start gap-2 ${textColor}`}
    >
      <div className={`inline-flex items-center gap-3 border border-dashed ${borderColor} px-3 py-2`}>
        <span className={`text-[11px] font-medium ${mutedColor}`}>
          Espaço reservado para logo oficial
        </span>
      </div>
      <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight leading-none">
        {BRAND_CONFIG.name}
      </span>
    </div>
  );
}
