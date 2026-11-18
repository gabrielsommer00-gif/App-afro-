interface TextileDividerProps {
  className?: string;
  variant?: 'inline' | 'bridge';
  tone?: 'light' | 'dark-top' | 'dark-bottom';
}

/**
 * Elemento gráfico geométrico inspirado em tramas têxteis africanas.
 * Na variante `bridge`, posiciona um medalhão escultural parcialmente sobreposto
 * às bordas de seções adjacentes para criar profundidade e continuidade visual.
 */
export function TextileDivider({
  className = '',
  variant = 'inline',
  tone = 'light',
}: TextileDividerProps) {
  if (variant === 'bridge') {
    const medalBg =
      tone === 'dark-top' || tone === 'dark-bottom'
        ? 'bg-[#2B1D16] border-[#C8942B]/40 text-[#F8F3EB]'
        : 'bg-[#FBF8F3] border-[#2B1D16]/14 text-[#16110E]';

    return (
      <div
        className={`relative z-20 -my-5 pointer-events-none select-none px-4 sm:px-6 lg:px-8 ${className}`}
        aria-hidden="true"
      >
        <div className="max-w-[1360px] mx-auto flex items-center gap-3">
          <span className="h-[1px] flex-1 bg-[#B8472A]/25" />
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border depth-card ${medalBg}`}
          >
            <span className="h-[3px] w-7 rounded-full bg-[#B8472A]" />
            <span className="w-2.5 h-2.5 rotate-45 bg-[#C8942B]" />
            <span className="w-2.5 h-2.5 rotate-45 bg-[#173B2E]" />
            <span className="w-2.5 h-2.5 rotate-45 bg-[#C8942B]" />
            <span className="h-[3px] w-7 rounded-full bg-[#B8472A]" />
          </div>
          <span className="h-[1px] flex-1 bg-[#B8472A]/25" />
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden py-1 ${className}`} aria-hidden="true">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 h-3">
          <span className="h-[1px] flex-1 bg-[#2B1D16]/12" />
          <span className="h-[3px] w-10 rounded-full bg-[#B8472A]" />
          <span className="h-[3px] w-4 rounded-full bg-[#C8942B]" />
          <span className="w-2 h-2 rotate-45 bg-[#173B2E] shrink-0" />
          <span className="h-[3px] w-4 rounded-full bg-[#C8942B]" />
          <span className="h-[3px] w-10 rounded-full bg-[#2B1D16]" />
          <span className="h-[1px] flex-1 bg-[#2B1D16]/12" />
        </div>
      </div>
    </div>
  );
}
