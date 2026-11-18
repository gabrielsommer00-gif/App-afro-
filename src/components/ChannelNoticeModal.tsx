import { Check, Copy, Instagram, MapPin, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BRAND_CONFIG } from '../config/brand';

export interface PendingChannelNotice {
  type: 'whatsapp' | 'location';
  message?: string;
}

interface ChannelNoticeModalProps {
  notice: PendingChannelNotice | null;
  onClose: () => void;
}

export function ChannelNoticeModal({ notice, onClose }: ChannelNoticeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [notice]);

  if (!notice) return null;

  const handleCopy = async () => {
    if (!notice.message) return;
    try {
      await navigator.clipboard.writeText(notice.message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="channel-notice-title"
    >
      <div
        className="fixed inset-0 bg-[#16110E]/65 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-[480px] bg-[#FBF8F3] rounded-2xl depth-frame border border-[#2B1D16]/15 p-6 sm:p-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar aviso"
          className="absolute top-3.5 right-3.5 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#F8F3EB] border border-[#2B1D16]/10 text-[#2B1D16] btn-relief-surface cursor-pointer"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-[#EFE6D8] border border-[#2B1D16]/10 depth-card flex items-center justify-center mb-4">
          {notice.type === 'whatsapp' ? (
            <MessageCircle className="w-5 h-5 text-[#173B2E]" aria-hidden="true" />
          ) : (
            <MapPin className="w-5 h-5 text-[#B8472A]" aria-hidden="true" />
          )}
        </div>

        <h3
          id="channel-notice-title"
          className="font-display text-2xl font-semibold text-[#16110E]"
        >
          {notice.type === 'whatsapp'
            ? 'Canal WhatsApp preparado para ativação'
            : 'Endereço oficial em confirmação'}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#614E43]">
          {notice.type === 'whatsapp'
            ? 'O número oficial de WhatsApp da loja ainda será conectado na configuração central. A mensagem de atendimento já é gerada automaticamente:'
            : 'O link de rotas e o endereço exato ainda estão aguardando confirmação oficial da empresa para garantir informações precisas.'}
        </p>

        {notice.type === 'whatsapp' && notice.message && (
          <div className="mt-4 p-4 rounded-xl bg-[#EFE6D8] border border-[#2B1D16]/10 depth-card">
            <p className="text-xs leading-relaxed text-[#16110E] whitespace-pre-line">
              {notice.message}
            </p>
            <button
              type="button"
              onClick={handleCopy}
              className="mt-3 inline-flex items-center gap-1.5 min-h-[36px] px-3 rounded-md bg-[#FBF8F3] border border-[#2B1D16]/10 text-xs font-semibold text-[#B8472A] hover:text-[#9E391F] btn-relief-surface cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Mensagem copiada</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Copiar mensagem preparada</span>
                </>
              )}
            </button>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[44px] px-4 inline-flex items-center justify-center gap-2 bg-[#2B1D16] hover:bg-[#B8472A] text-[#F8F3EB] text-xs font-semibold uppercase tracking-wider rounded-lg btn-relief-dark transition-all"
          >
            <Instagram className="w-4 h-4 text-[#C8942B]" aria-hidden="true" />
            <span>Ir para {BRAND_CONFIG.instagramHandle}</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] px-5 bg-[#EFE6D8] border border-[#2B1D16]/15 text-xs font-semibold uppercase tracking-wider text-[#2B1D16] rounded-lg btn-relief-surface transition-all cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
