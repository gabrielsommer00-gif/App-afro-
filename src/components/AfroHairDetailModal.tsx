import { MessageCircle, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { buildAfroHairWhatsAppMessage } from '../data/afroHair';
import { AfroHairService, ProductColorVariant } from '../types/catalog';
import { SafeImage } from './SafeImage';

interface AfroHairDetailModalProps {
  service: AfroHairService | null;
  onClose: () => void;
  onWhatsAppInquiry: (message: string) => void;
}

type GalleryViewMode = 'full' | 'detail';

export function AfroHairDetailModal({
  service,
  onClose,
  onWhatsAppInquiry,
}: AfroHairDetailModalProps) {
  const [viewMode, setViewMode] = useState<GalleryViewMode>('full');
  const [selectedLength, setSelectedLength] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<ProductColorVariant | undefined>(undefined);
  const [selectedVolume, setSelectedVolume] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (service) {
      setViewMode('full');
      setSelectedLength(service.lengthOptions[0]);
      setSelectedColor(service.colorOptions[0]);
      setSelectedVolume(service.volumeOptions[0]);
    }
  }, [service]);

  if (!service) return null;

  const activeImage = service.gallery[0] ?? service.primaryImage;

  const handleInquiry = (intent: 'quero_estilo' | 'consultar_valores') => {
    const message = buildAfroHairWhatsAppMessage(service, {
      intent,
      selectedLength,
      selectedColor: selectedColor?.name,
      selectedVolume,
    });
    onWhatsAppInquiry(message);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="afro-hair-modal-title"
    >
      <div
        className="fixed inset-0 bg-[#16110E]/65 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-[1000px] max-h-[90vh] overflow-y-auto bg-[#FBF8F3] rounded-2xl depth-frame border border-[#2B1D16]/15 grid grid-cols-1 lg:grid-cols-12">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes do estilo"
          className="absolute top-4 right-4 z-20 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#FBF8F3] text-[#2B1D16] border border-[#2B1D16]/12 btn-relief-surface cursor-pointer"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Coluna Esquerda: Galeria de Referências */}
        <div className="lg:col-span-6 bg-[#EFE6D8] p-5 sm:p-6 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[#2B1D16]/10">
          <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#E3D4BE] depth-card">
            <SafeImage
              src={activeImage.src}
              webpSrc={activeImage.webpSrc}
              alt={activeImage.alt}
              fallbackLabel={service.name}
              sizes="(min-width: 1024px) 480px, 100vw"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                viewMode === 'detail'
                  ? 'object-[50%_10%] scale-[1.28]'
                  : 'object-[50%_15%] scale-100'
              }`}
            />
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs text-[#614E43]">
              <span className="font-semibold text-[#16110E] uppercase tracking-wider">
                Galeria de referências
              </span>
              <span>
                {viewMode === 'full' ? 'Visualização principal' : 'Foco em raiz e acabamento'}
              </span>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={() => setViewMode('full')}
                aria-label={`Ver referência principal de ${service.name}`}
                className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  viewMode === 'full'
                    ? 'border-[#B8472A] shadow-md'
                    : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <SafeImage
                  src={activeImage.src}
                  webpSrc={activeImage.webpSrc}
                  alt={`${service.name} — enquadramento completo`}
                  sizes="80px"
                  className="w-full h-full object-cover object-[50%_15%]"
                />
              </button>

              <button
                type="button"
                onClick={() => setViewMode('detail')}
                aria-label={`Ver foco superior de ${service.name}`}
                className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  viewMode === 'detail'
                    ? 'border-[#B8472A] shadow-md'
                    : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <SafeImage
                  src={activeImage.src}
                  webpSrc={activeImage.webpSrc}
                  alt={`${service.name} — detalhe de raiz e acabamento`}
                  sizes="80px"
                  className="w-full h-full object-cover object-[50%_10%] scale-125"
                />
              </button>
            </div>

            <p className="text-[11px] leading-relaxed text-[#614E43]">
              Fotografia representativa para referência visual · Galeria estruturada para receber
              futuras fotos reais de atendimentos da loja.
            </p>
          </div>

          {/* Bloco técnico objetivo: fibra ou cabelo natural */}
          <div className="mt-auto p-4 rounded-xl bg-[#FBF8F3] border border-[#2B1D16]/10">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8472A]">
              Fibra ou cabelo natural
            </span>
            <p className="mt-1.5 text-xs leading-relaxed text-[#614E43]">
              {service.fiberOrNaturalInfo}
            </p>
          </div>
        </div>

        {/* Coluna Direita: Descrição, Possibilidades e Orçamento via WhatsApp */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-6 bg-[#FBF8F3]">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#614E43] pr-12">
              <span className="font-semibold text-[#B8472A]">Cabelos Afro</span>
              <span aria-hidden="true">·</span>
              <span>{service.groupLabel}</span>
            </div>

            <h2
              id="afro-hair-modal-title"
              className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#16110E] leading-tight"
            >
              {service.name}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#614E43]">
              {service.fullDescription}
            </p>

            {/* Possibilidades de comprimento */}
            {service.lengthOptions.length > 0 && (
              <div className="mt-6">
                <span className="block text-xs font-semibold text-[#16110E] uppercase tracking-wider mb-2.5">
                  Possibilidades de comprimento
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.lengthOptions.map((len) => {
                    const isActive = selectedLength === len;
                    return (
                      <button
                        key={len}
                        type="button"
                        onClick={() => setSelectedLength(len)}
                        className={`min-h-[44px] px-3.5 py-2 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#2B1D16] border-[#2B1D16] text-[#F8F3EB] btn-relief-dark'
                            : 'bg-[#F8F3EB] border-[#2B1D16]/15 text-[#2B1D16] btn-relief-surface hover:border-[#2B1D16]/40'
                        }`}
                      >
                        {len}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Variações de cores (quando aplicável) */}
            {service.colorOptions.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-semibold text-[#16110E] uppercase tracking-wider">
                    Variações de cores
                  </span>
                  <span className="text-[#614E43]">{selectedColor?.name}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.colorOptions.map((color) => {
                    const isActive = selectedColor?.id === color.id;
                    return (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`inline-flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                          isActive
                            ? 'border-[#2B1D16] bg-[#EFE6D8] text-[#16110E] btn-relief-surface'
                            : 'border-[#2B1D16]/15 bg-[#F8F3EB] text-[#614E43] hover:border-[#2B1D16]/40'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-[#2B1D16]/25 shrink-0"
                          style={{ backgroundColor: color.swatchHex }}
                          aria-hidden="true"
                        />
                        <span>{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Opções de volume */}
            {service.volumeOptions.length > 0 && (
              <div className="mt-6">
                <span className="block text-xs font-semibold text-[#16110E] uppercase tracking-wider mb-2.5">
                  Opções de volume
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.volumeOptions.map((vol) => {
                    const isActive = selectedVolume === vol;
                    return (
                      <button
                        key={vol}
                        type="button"
                        onClick={() => setSelectedVolume(vol)}
                        className={`min-h-[44px] px-3.5 py-2 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#2B1D16] border-[#2B1D16] text-[#F8F3EB] btn-relief-dark'
                            : 'bg-[#F8F3EB] border-[#2B1D16]/15 text-[#2B1D16] btn-relief-surface hover:border-[#2B1D16]/40'
                        }`}
                      >
                        {vol}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <p className="mt-5 pt-4 border-t border-[#2B1D16]/10 text-xs leading-relaxed text-[#614E43]">
              {service.subjectToConfirmationNote} Valores, tempo de atendimento e materiais são
              confirmados diretamente durante o orçamento.
            </p>
          </div>

          <div className="pt-4 border-t border-[#2B1D16]/10 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => handleInquiry('quero_estilo')}
              className="flex-1 min-h-[48px] px-5 inline-flex items-center justify-center gap-2 bg-[#B8472A] hover:bg-[#9E391F] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-primary transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>QUERO ESSE ESTILO</span>
            </button>

            <button
              type="button"
              onClick={() => handleInquiry('consultar_valores')}
              className="flex-1 min-h-[48px] px-5 inline-flex items-center justify-center gap-2 bg-[#173B2E] hover:bg-[#122E24] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-dark transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#C8942B]" aria-hidden="true" />
              <span>CONSULTAR VALORES</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
