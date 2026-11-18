import { MEDIA_REGISTRY } from '../config/media';
import { ServiceSlot } from '../types/catalog';

/**
 * Cartões editáveis para Serviços — Fase 02.0.
 * Nenhum serviço real foi inventado; os títulos e descrições funcionam como estrutura configurável
 * pronta para receber os serviços oficiais da empresa quando confirmados.
 */
export const SERVICE_SLOTS: ServiceSlot[] = [
  {
    id: 'servico-slot-01',
    slotLabel: 'Espaço de serviço 01 · Editável',
    title: 'Serviço Especializado — Título Editável',
    description:
      'Espaço reservado para apresentar um serviço oficial da Cris Vieira Moda Africana, com descrição detalhada, prazo e orientações de atendimento.',
    ctaLabel: 'Solicitar Atendimento',
    imageSrc: MEDIA_REGISTRY.institutional.sobreAtelier.src,
    webpSrc: MEDIA_REGISTRY.institutional.sobreAtelier.webpSrc,
    imageAlt: 'Ambiente de ateliê com tecidos africanos preparados para edição de serviço',
    isEditableSlot: true,
  },
  {
    id: 'servico-slot-02',
    slotLabel: 'Espaço de serviço 02 · Editável',
    title: 'Atendimento Personalizado — Título Editável',
    description:
      'Cartão estruturado para inclusão de consultoria, produção ou serviço oferecido pela marca, conectado diretamente ao canal de WhatsApp.',
    ctaLabel: 'Consultar Disponibilidade',
    imageSrc: MEDIA_REGISTRY.categories.tecidosEstampas.src,
    webpSrc: MEDIA_REGISTRY.categories.tecidosEstampas.webpSrc,
    imageAlt: 'Seleção de tecidos e tramas em exposição editorial',
    isEditableSlot: true,
  },
  {
    id: 'servico-slot-03',
    slotLabel: 'Espaço de serviço 03 · Editável',
    title: 'Curadoria ou Encomenda — Título Editável',
    description:
      'Estrutura modular preparada para futuros pacotes, agendamentos ou solicitações especiais conforme definição oficial da empresa.',
    ctaLabel: 'Falar com a Equipe',
    imageSrc: MEDIA_REGISTRY.categories.turbantesAcessorios.src,
    webpSrc: MEDIA_REGISTRY.categories.turbantesAcessorios.webpSrc,
    imageAlt: 'Turbantes e acessórios dispostos sobre superfície neutra',
    isEditableSlot: true,
  },
];
