import { useId } from 'react';

export type AfroBackdropVariant =
  | 'hero'
  | 'categories'
  | 'vitrine'
  | 'cabelos-afro'
  | 'services'
  | 'about'
  | 'instagram'
  | 'location';

interface AfroBackdropProps {
  variant: AfroBackdropVariant;
}

/**
 * Camadas gráficas personalizadas inspiradas em tecelagens africanas (Kuba, Bogolan, Kente)
 * e curvas orgânicas contemporâneas. Cada seção recebe sua própria composição discreta,
 * com transparências equilibradas para valorizar sem competir com fotos ou textos.
 */
export function AfroBackdrop({ variant }: AfroBackdropProps) {
  const uid = useId().replace(/:/g, '');

  if (variant === 'hero') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-28 -left-24 w-[440px] h-[440px] rounded-full bg-[#C8942B]/[0.11] blur-3xl" />
        <div className="absolute -bottom-32 right-0 w-[480px] h-[480px] rounded-full bg-[#B8472A]/[0.09] blur-3xl" />
        {/* Grafismo geométrico superior direito */}
        <svg
          className="absolute top-6 right-4 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 text-[#B8472A]/[0.09]"
          viewBox="0 0 260 260"
          fill="none"
        >
          <path d="M20 42H240M20 82H195M70 122H240" stroke="currentColor" strokeWidth="1" />
          <path d="M135 20L185 70L135 120L85 70Z" stroke="currentColor" strokeWidth="1.25" />
          <path d="M135 38L167 70L135 102L103 70Z" stroke="#C8942B" strokeOpacity="0.8" strokeWidth="1" />
          <circle cx="135" cy="70" r="6" fill="currentColor" />
          <path d="M180 148C180 188.869 146.869 222 106 222" stroke="#2B1D16" strokeOpacity="0.6" strokeWidth="1.2" />
        </svg>
        {/* Faixa de trama sutil na base esquerda */}
        <svg
          className="hidden md:block absolute bottom-6 left-8 w-52 h-24 text-[#2B1D16]/[0.06]"
          viewBox="0 0 220 90"
          fill="none"
        >
          <path d="M0 20L25 45L0 70M35 20L60 45L35 70M70 20L95 45L70 70M105 20L130 45L105 70" stroke="currentColor" strokeWidth="1.2" />
          <path d="M145 45H215" stroke="#B8472A" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }

  if (variant === 'categories') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-[#FBF8F3]/60 blur-3xl" />
        <svg className="w-full h-full opacity-[0.06] text-[#2B1D16]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`kuba-${uid}`} width="76" height="76" patternUnits="userSpaceOnUse">
              <path d="M38 6L70 38L38 70L6 38Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M38 20L56 38L38 56L20 38Z" fill="none" stroke="#B8472A" strokeWidth="0.9" />
              <path d="M0 38H14M62 38H76M38 0V14M38 62V76" stroke="currentColor" strokeWidth="1" />
              <circle cx="38" cy="38" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#kuba-${uid})`} />
        </svg>
      </div>
    );
  }

  if (variant === 'vitrine') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-12 -right-24 w-[420px] h-[420px] rounded-full bg-[#EFE6D8] blur-2xl" />
        <div className="absolute bottom-12 -left-24 w-[380px] h-[380px] rounded-full bg-[#C8942B]/[0.08] blur-3xl" />
        {/* Arcos concêntricos à esquerda */}
        <svg
          className="absolute top-10 left-6 w-52 h-52 text-[#B8472A]/[0.09]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path d="M12 108C12 55 55 12 108 12" stroke="currentColor" strokeWidth="1.4" />
          <path d="M34 108C34 67.13 67.13 34 108 34" stroke="currentColor" strokeWidth="1.1" />
          <path d="M56 108C56 79.28 79.28 56 108 56" stroke="#C8942B" strokeWidth="1.1" />
          <path d="M12 132H140" stroke="#2B1D16" strokeOpacity="0.45" strokeWidth="1" />
        </svg>
        {/* Escada geométrica sutil à direita */}
        <svg
          className="hidden lg:block absolute bottom-14 right-8 w-56 h-56 text-[#2B1D16]/[0.06]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path d="M20 180V140H60V100H100V60H140V20H180" stroke="currentColor" strokeWidth="1.3" />
          <path d="M50 180V155H85V115H125V75H165V35" stroke="#B8472A" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  if (variant === 'cabelos-afro') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 left-12 w-[440px] h-[440px] rounded-full bg-[#B8472A]/[0.08] blur-3xl" />
        <div className="absolute bottom-16 -right-24 w-[460px] h-[460px] rounded-full bg-[#C8942B]/[0.1] blur-3xl" />
        <svg className="w-full h-full opacity-[0.055] text-[#2B1D16]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`braid-${uid}`} width="88" height="88" patternUnits="userSpaceOnUse">
              <path
                d="M0 22C22 22 22 66 44 66C66 66 66 22 88 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M0 66C22 66 22 22 44 22C66 22 66 66 88 66"
                fill="none"
                stroke="#B8472A"
                strokeWidth="1.1"
              />
              <path d="M44 10L54 22L44 34L34 22Z" fill="none" stroke="#C8942B" strokeWidth="1" />
              <circle cx="44" cy="66" r="2.2" fill="#B8472A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#braid-${uid})`} />
        </svg>
      </div>
    );
  }

  if (variant === 'services') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 right-1/4 w-[440px] h-[440px] rounded-full bg-[#B8472A]/[0.16] blur-3xl" />
        <div className="absolute -bottom-24 left-10 w-[360px] h-[360px] rounded-full bg-[#C8942B]/[0.12] blur-3xl" />
        <svg className="w-full h-full opacity-[0.075] text-[#C8942B]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`bogolan-${uid}`} width="96" height="96" patternUnits="userSpaceOnUse">
              <path d="M0 24L24 0L48 24L72 0L96 24" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M0 72L24 48L48 72L72 48L96 72" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M12 48H36M60 48H84" stroke="#B8472A" strokeWidth="1.2" />
              <circle cx="24" cy="48" r="2.2" fill="currentColor" />
              <circle cx="72" cy="48" r="2.2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#bogolan-${uid})`} />
        </svg>
      </div>
    );
  }

  if (variant === 'about') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E5D5BF]/65" />
        <svg
          className="absolute bottom-6 right-6 w-64 h-64 text-[#2B1D16]/[0.075]"
          viewBox="0 0 220 220"
          fill="none"
        >
          <rect x="20" y="20" width="180" height="180" rx="90" stroke="currentColor" strokeWidth="1.1" />
          <path d="M110 20V200M20 110H200" stroke="currentColor" strokeWidth="0.9" />
          <path d="M110 52L168 110L110 168L52 110Z" stroke="#B8472A" strokeWidth="1.2" />
          <circle cx="110" cy="110" r="14" stroke="#C8942B" strokeWidth="1.1" />
        </svg>
      </div>
    );
  }

  if (variant === 'instagram') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-1/3 w-[380px] h-[380px] rounded-full bg-[#B8472A]/[0.08] blur-3xl" />
        <svg
          className="absolute -bottom-8 right-10 w-80 h-44 text-[#2B1D16]/[0.075]"
          viewBox="0 0 280 140"
          fill="none"
        >
          <path d="M10 120C70 40 130 40 190 120" stroke="currentColor" strokeWidth="1.25" />
          <path d="M50 120C110 40 170 40 230 120" stroke="#B8472A" strokeWidth="1.1" />
          <path d="M90 120C150 40 210 40 270 120" stroke="#C8942B" strokeWidth="1.1" />
        </svg>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute bottom-0 left-0 w-[340px] h-[340px] rounded-full bg-[#173B2E]/[0.07] blur-3xl" />
      <svg
        className="absolute top-8 right-10 w-52 h-52 text-[#2B1D16]/[0.065]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M20 20H180V180H20Z" stroke="currentColor" strokeWidth="1.1" />
        <path d="M46 46H154V154H46Z" stroke="#B8472A" strokeWidth="1.1" />
        <path d="M100 20V46M100 154V180M20 100H46M154 100H180" stroke="currentColor" strokeWidth="1" />
        <path d="M100 72L128 100L100 128L72 100Z" stroke="#C8942B" strokeWidth="1.1" />
      </svg>
    </div>
  );
}
