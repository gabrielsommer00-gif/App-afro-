import { MEDIA_REGISTRY } from '../config/media';
import { AfroHairService } from '../types/catalog';

const DEFAULT_CONFIRMATION_NOTE =
  'Catálogo inicial de referência · Sujeito à confirmação dos serviços efetivamente oferecidos pela loja.';

/**
 * Catálogo inicial de Cabelos Afro — Cris Vieira Moda Africana.
 * Dividido em Estilos e Tranças (14 estilos) e Cuidados e Manutenção (4 serviços).
 * Não exibe valores, prazos ou materiais inclusos fictícios; toda confirmação ocorre mediante consulta.
 */
export const AFRO_HAIR_SERVICES: AfroHairService[] = [
  // 1. Box Braids
  {
    id: 'afro-box-braids',
    slug: 'box-braids',
    name: 'Box Braids',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Tranças soltas com divisões quadradas simétricas da raiz às pontas, versáteis para diferentes comprimentos e amarrações.',
    fullDescription:
      'As Box Braids são tranças individuais confeccionadas a partir de divisões geométricas no couro cabeludo. Oferecem praticidade no dia a dia, ampla liberdade para penteados presos ou soltos e personalização de espessura, comprimento e tonalidade.',
    primaryImage: {
      id: 'afro-box-braids-1',
      src: MEDIA_REGISTRY.afroHair.boxBraids.src,
      alt: MEDIA_REGISTRY.afroHair.boxBraids.alt,
      caption: 'Referência de Box Braids · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-box-braids-1',
        src: MEDIA_REGISTRY.afroHair.boxBraids.src,
        alt: MEDIA_REGISTRY.afroHair.boxBraids.alt,
        caption: 'Visualização frontal e caimento · Referência editorial',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Chanel / Ombro', 'Médio (meio das costas)', 'Longo (cintura)', 'Extra longo (sob consulta)'],
    colorOptions: [
      { id: 'preto-natural', name: 'Preto Natural', swatchHex: '#181412' },
      { id: 'castanho-cafe', name: 'Castanho Café', swatchHex: '#3D271E' },
      { id: 'mel-acafrao', name: 'Mel & Açafrão', swatchHex: '#B67B35' },
      { id: 'terracota-marsala', name: 'Terracota / Borgonha', swatchHex: '#7B2B25' },
    ],
    volumeOptions: ['Fina (delicada)', 'Média (clássica)', 'Grossa (marcante)'],
    fiberOrNaturalInfo:
      'Possibilidade de aplicação com fibra sintética (jumbolon/kanekalon) ou variação de espessura adaptada à estrutura do fio natural, definida em consulta.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 2. Tranças Nagô
  {
    id: 'afro-trancas-nago',
    slug: 'trancas-nago',
    name: 'Tranças Nagô',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Tranças rasteiras tradicionais alinhadas rente ao couro cabeludo com acabamento limpo e raiz marcada.',
    fullDescription:
      'Técnica ancestral de trançado rente ao couro cabeludo com riscas paralelas e simétricas. Ideal para quem busca visual clássico, leveza, proteção dos fios naturais e valorização do contorno facial.',
    primaryImage: {
      id: 'afro-trancas-nago-1',
      src: MEDIA_REGISTRY.afroHair.trancasNago.src,
      alt: MEDIA_REGISTRY.afroHair.trancasNago.alt,
      caption: 'Referência de Tranças Nagô · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-trancas-nago-1',
        src: MEDIA_REGISTRY.afroHair.trancasNago.src,
        alt: MEDIA_REGISTRY.afroHair.trancasNago.alt,
        caption: 'Alinhamento e divisão rente ao couro cabeludo',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Curto (preso na nuca)', 'Médio (abaixo dos ombros)', 'Longo (com extensão)'],
    colorOptions: [
      { id: 'preto-natural', name: 'Preto Natural', swatchHex: '#181412' },
      { id: 'castanho-escuro', name: 'Castanho Escuro', swatchHex: '#3A261D' },
      { id: 'ombre-mel', name: 'Ombré Mel', swatchHex: '#B37A37' },
    ],
    volumeOptions: ['Rente clássica (poucas fileiras)', 'Média tradicional', 'Trançado fino detalhado'],
    fiberOrNaturalInfo:
      'Pode ser executada exclusivamente com o cabelo natural ou com adição de fibra nas pontas e no comprimento conforme o resultado desejado.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 3. Nagô Desenhada
  {
    id: 'afro-nago-desenhada',
    slug: 'nago-desenhada',
    name: 'Nagô Desenhada',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Desenhos geométricos, curvas e traçados artísticos rentes ao couro cabeludo que transformam o penteado em expressão autoral.',
    fullDescription:
      'A Nagô Desenhada explora geometrias orgânicas, zigue-zagues, curvas laterais e alimentações sutis no couro cabeludo, criando composições únicas adaptadas ao formato do rosto e ao estilo pessoal.',
    primaryImage: {
      id: 'afro-nago-desenhada-1',
      src: MEDIA_REGISTRY.afroHair.nagoDesenhada.src,
      alt: MEDIA_REGISTRY.afroHair.nagoDesenhada.alt,
      caption: 'Referência de Nagô Desenhada · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-nago-desenhada-1',
        src: MEDIA_REGISTRY.afroHair.nagoDesenhada.src,
        alt: MEDIA_REGISTRY.afroHair.nagoDesenhada.alt,
        caption: 'Traçado geométrico lateral e acabamento em coque',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Rente / Preso em coque', 'Médio nas costas', 'Longo (efeito rabo ou solto)'],
    colorOptions: [
      { id: 'preto-natural', name: 'Preto Natural', swatchHex: '#181412' },
      { id: 'castanho-quente', name: 'Castanho Quente', swatchHex: '#4E3124' },
      { id: 'acobreado', name: 'Acobreado / Terracota', swatchHex: '#A64628' },
    ],
    volumeOptions: ['Traço delicado (stitch fino)', 'Contraste médio', 'Traçado combinado (fino + largo)'],
    fiberOrNaturalInfo:
      'Admite execução tanto apenas com os fios naturais quanto com técnica de alimentação em fibra para alongar e dar firmeza ao desenho.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 4. Knotless Braids
  {
    id: 'afro-knotless-braids',
    slug: 'knotless-braids',
    name: 'Knotless Braids',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Tranças sem nó aparente na raiz, iniciadas nos fios naturais para máximo conforto, leveza e caimento fluido.',
    fullDescription:
      'Nas Knotless Braids, a fibra é adicionada gradualmente após os primeiros pontos no fio natural, eliminando o nó inicial tradicional. O resultado traz raiz plana, menor tensão no couro cabeludo e movimento natural desde o primeiro dia.',
    primaryImage: {
      id: 'afro-knotless-braids-1',
      src: MEDIA_REGISTRY.afroHair.knotlessBraids.src,
      alt: MEDIA_REGISTRY.afroHair.knotlessBraids.alt,
      caption: 'Referência de Knotless Braids · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-knotless-braids-1',
        src: MEDIA_REGISTRY.afroHair.knotlessBraids.src,
        alt: MEDIA_REGISTRY.afroHair.knotlessBraids.alt,
        caption: 'Raiz natural sem nó com caimento fluido',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Ombro', 'Médio', 'Longo', 'Extra longo'],
    colorOptions: [
      { id: 'preto-natural', name: 'Preto Natural', swatchHex: '#181412' },
      { id: 'espresso', name: 'Café Espresso', swatchHex: '#2F1F18' },
      { id: 'loiro-mel', name: 'Mel Dourado', swatchHex: '#C68C3B' },
      { id: 'chocolate', name: 'Chocolate', swatchHex: '#5A3828' },
    ],
    volumeOptions: ['Leve (small / S)', 'Equilibrado (medium / M)', 'Cheio (large / L)'],
    fiberOrNaturalInfo:
      'Iniciada diretamente no cabelo natural com alimentação progressiva de fibra leve, proporcionando transição suave entre a raiz e o comprimento.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 5. Boho Braids
  {
    id: 'afro-boho-braids',
    slug: 'boho-braids',
    name: 'Boho Braids',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Combinação despojada de tranças estruturadas com mechas cacheadas e onduladas soltas ao longo do comprimento.',
    fullDescription:
      'O estilo Boho Braids equilibra a definição das tranças com mechas soltas em textura cacheada ou ondulada, entregando movimento orgânico, leveza estética e moldura suave ao redor do rosto.',
    primaryImage: {
      id: 'afro-boho-braids-1',
      src: MEDIA_REGISTRY.afroHair.bohoBraids.src,
      alt: MEDIA_REGISTRY.afroHair.bohoBraids.alt,
      caption: 'Referência de Boho Braids · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-boho-braids-1',
        src: MEDIA_REGISTRY.afroHair.bohoBraids.src,
        alt: MEDIA_REGISTRY.afroHair.bohoBraids.alt,
        caption: 'Mistura de tranças e cachos orgânicos soltos',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Chanel cacheado', 'Médio (abaixo do busto)', 'Longo (cintura)'],
    colorOptions: [
      { id: 'castanho-cafe', name: 'Castanho Café', swatchHex: '#3B261C' },
      { id: 'preto-iluminado', name: 'Preto Iluminado Mel', swatchHex: '#7C512B' },
      { id: 'caramelo', name: 'Caramelo Quente', swatchHex: '#A86730' },
    ],
    volumeOptions: ['Mechas discretas (sutil)', 'Equilibrado (médio)', 'Boho cheio (alto volume de cachos)'],
    fiberOrNaturalInfo:
      'Utiliza base trançada combinada a cachos em fibra orgânica, sintética ou cabelo humano, conforme definição e orientação em atendimento.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 6. Goddess Braids
  {
    id: 'afro-goddess-braids',
    slug: 'goddess-braids',
    name: 'Goddess Braids',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Tranças encorpadas e esculturais com pontas cacheadas ou presas em coroa de presença marcante.',
    fullDescription:
      'Inspiradas na estética clássica e majestosa da beleza negra, as Goddess Braids destacam o volume das tranças mais largas com finalização em cachos nas pontas ou arranjos elevados de alto impacto visual.',
    primaryImage: {
      id: 'afro-goddess-braids-1',
      src: MEDIA_REGISTRY.afroHair.goddessBraids.src,
      alt: MEDIA_REGISTRY.afroHair.goddessBraids.alt,
      caption: 'Referência de Goddess Braids · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-goddess-braids-1',
        src: MEDIA_REGISTRY.afroHair.goddessBraids.src,
        alt: MEDIA_REGISTRY.afroHair.goddessBraids.alt,
        caption: 'Volume escultural com acabamento cacheado nas pontas',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Coroa estruturada', 'Médio com pontas cacheadas', 'Longo volumoso'],
    colorOptions: [
      { id: 'preto-profundo', name: 'Preto Profundo', swatchHex: '#141110' },
      { id: 'cafe-escuro', name: 'Café Escuro', swatchHex: '#342219' },
      { id: 'cobre-dourado', name: 'Cobre & Dourado', swatchHex: '#B6772C' },
    ],
    volumeOptions: ['Médio escultural', 'Alto impacto (volumoso)'],
    fiberOrNaturalInfo:
      'Trançado em fibra própria para volume estruturado associada a pontas cacheadas em fibra orgânica ou sintética.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 7. Fulani Braids
  {
    id: 'afro-fulani-braids',
    slug: 'fulani-braids',
    name: 'Fulani Braids',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Tradição Fulani com trança central, laterais voltadas para as têmporas e opção de anéis, búzios ou contas de madeira.',
    fullDescription:
      'Estilo icônico da cultura oeste-africana que combina tranças nagô na parte frontal — frequentemente com risca central e laterais direcionadas — com tranças soltas na parte posterior e adornos artesanais.',
    primaryImage: {
      id: 'afro-fulani-braids-1',
      src: MEDIA_REGISTRY.afroHair.fulaniBraids.src,
      alt: MEDIA_REGISTRY.afroHair.fulaniBraids.alt,
      caption: 'Referência de Fulani Braids · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-fulani-braids-1',
        src: MEDIA_REGISTRY.afroHair.fulaniBraids.src,
        alt: MEDIA_REGISTRY.afroHair.fulaniBraids.alt,
        caption: 'Trança central, laterais desenhadas e adornos em latão e madeira',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Ombro', 'Médio', 'Longo'],
    colorOptions: [
      { id: 'preto-natural', name: 'Preto Natural', swatchHex: '#181412' },
      { id: 'cafe-terra', name: 'Café & Terracota', swatchHex: '#633524' },
      { id: 'mel-areia', name: 'Mel & Areia', swatchHex: '#C48D40' },
    ],
    volumeOptions: ['Frente fina com base média', 'Médio tradicional', 'Com cachos nas pontas'],
    fiberOrNaturalInfo:
      'Executado com fibra para extensão nas partes frontal e traseira; uso de acessórios e adornos avaliado durante a consulta.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 8. Tranças Twist
  {
    id: 'afro-trancas-twist',
    slug: 'trancas-twist',
    name: 'Tranças Twist',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Torção dupla de dois cabos (Senegalese, Passion ou Marley Twist) com brilho acetinado e textura leve.',
    fullDescription:
      'Os twists utilizam duas mechas torcidas entre si para criar um efeito espiralado elegante. Podem ganhar acabamento mais polido (Senegalese) ou textura orgânica e leve (Passion / Marley), adaptando-se a ocasiões casuais ou sofisticadas.',
    primaryImage: {
      id: 'afro-trancas-twist-1',
      src: MEDIA_REGISTRY.afroHair.trancasTwist.src,
      alt: MEDIA_REGISTRY.afroHair.trancasTwist.alt,
      caption: 'Referência de Tranças Twist · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-trancas-twist-1',
        src: MEDIA_REGISTRY.afroHair.trancasTwist.src,
        alt: MEDIA_REGISTRY.afroHair.trancasTwist.alt,
        caption: 'Definição espiralada de dois cabos com brilho suave',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Curto (chanel)', 'Médio', 'Longo'],
    colorOptions: [
      { id: 'preto-acetinado', name: 'Preto Acetinado', swatchHex: '#181412' },
      { id: 'marrom-cafe', name: 'Marrom Café', swatchHex: '#432B20' },
      { id: 'cobre-quente', name: 'Cobre Quente', swatchHex: '#9A4B2A' },
    ],
    volumeOptions: ['Fino (Senegalese)', 'Médio fluido', 'Encorpado (Marley / Passion)'],
    fiberOrNaturalInfo:
      'Pode ser feito apenas nos fios naturais (two-strand twist) ou com fibra específica para o efeito liso acetinado ou texturizado desejado.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 9. Crochet Braids
  {
    id: 'afro-crochet-braids',
    slug: 'crochet-braids',
    name: 'Crochet Braids',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Aplicação com agulha de crochê sobre base de tranças nagô, proporcionando volume cacheado, crespo ou trançado com rapidez.',
    fullDescription:
      'Técnica prática que parte de uma base de tranças rasteiras para entrelaçar mechas prontas (cachos definidos, crespos, twists ou locs) com agulha própria, protegendo o cabelo natural enquanto entrega plenitude de volume.',
    primaryImage: {
      id: 'afro-crochet-braids-1',
      src: MEDIA_REGISTRY.afroHair.crochetBraids.src,
      alt: MEDIA_REGISTRY.afroHair.crochetBraids.alt,
      caption: 'Referência de Crochet Braids · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-crochet-braids-1',
        src: MEDIA_REGISTRY.afroHair.crochetBraids.src,
        alt: MEDIA_REGISTRY.afroHair.crochetBraids.alt,
        caption: 'Volume cacheado leve sobre base protegida',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Curto volumoso', 'Médio (altura do peito)', 'Longo cacheado'],
    colorOptions: [
      { id: 'preto-natural', name: 'Preto Natural', swatchHex: '#181412' },
      { id: 'castanho-mel', name: 'Castanho com Luzes Mel', swatchHex: '#6F4927' },
      { id: 'acaju', name: 'Acaju', swatchHex: '#6D2E25' },
    ],
    volumeOptions: ['Natural controlado', 'Volumoso tradicional', 'Mega volume'],
    fiberOrNaturalInfo:
      'Base trançada no próprio cabelo natural com aplicação de mechas em fibra sintética ou orgânica em curvaturas cacheadas, crespas ou trançadas.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 10. Faux Locs
  {
    id: 'afro-faux-locs',
    slug: 'faux-locs',
    name: 'Faux Locs',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Efeito autêntico de locs com textura boêmia e acabamento orgânico sem modificação permanente dos fios naturais.',
    fullDescription:
      'Os Faux Locs reproduzem a estética texturizada e marcante dos dreadlocks de forma temporária e protetora, podendo apresentar acabamento polido ou levemente desfiado no estilo Butterfly e Bohemian Locs.',
    primaryImage: {
      id: 'afro-faux-locs-1',
      src: MEDIA_REGISTRY.afroHair.fauxLocs.src,
      alt: MEDIA_REGISTRY.afroHair.fauxLocs.alt,
      caption: 'Referência de Faux Locs · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-faux-locs-1',
        src: MEDIA_REGISTRY.afroHair.fauxLocs.src,
        alt: MEDIA_REGISTRY.afroHair.fauxLocs.alt,
        caption: 'Envolvimento texturizado com estética orgânica',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Ombro (distressed)', 'Médio', 'Longo'],
    colorOptions: [
      { id: 'espresso-escuro', name: 'Espresso Escuro', swatchHex: '#241813' },
      { id: 'cafe-dourado', name: 'Café com Mechas Douradas', swatchHex: '#6D4826' },
      { id: 'ruivo-terroso', name: 'Ruivo Terroso', swatchHex: '#9A4326' },
    ],
    volumeOptions: ['Fino suave', 'Médio orgânico', 'Encorpado boêmio'],
    fiberOrNaturalInfo:
      'Confeccionado por envolvimento de fibra texturizada ao redor de trança base protetora feita no cabelo natural.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 11. Dreads e estilos removíveis
  {
    id: 'afro-dreads-removiveis',
    slug: 'dreads-e-estilos-removiveis',
    name: 'Dreads e estilos removíveis',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Aplicação modular de dreads e extensões removíveis com encaixe seguro e liberdade para alternar visuais.',
    fullDescription:
      'Opção versátil para quem deseja experimentar dreads estilizados com anéis e amarrações sem comprometer a textura natural a longo prazo, permitindo remoção planejada e reaplicação futura mediante avaliação.',
    primaryImage: {
      id: 'afro-dreads-removiveis-1',
      src: MEDIA_REGISTRY.afroHair.dreadsRemoviveis.src,
      alt: MEDIA_REGISTRY.afroHair.dreadsRemoviveis.alt,
      caption: 'Referência de Dreads e estilos removíveis · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-dreads-removiveis-1',
        src: MEDIA_REGISTRY.afroHair.dreadsRemoviveis.src,
        alt: MEDIA_REGISTRY.afroHair.dreadsRemoviveis.alt,
        caption: 'Estilo semi-preso com anéis em latão e textura modular',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Curto / Nuca', 'Médio (ombros)', 'Longo'],
    colorOptions: [
      { id: 'preto-fosco', name: 'Preto Fosco', swatchHex: '#161312' },
      { id: 'marrom-terra', name: 'Marrom Terra', swatchHex: '#4E3224' },
      { id: 'mesclado-areia', name: 'Mesclado Areia', swatchHex: '#9C7B56' },
    ],
    volumeOptions: ['Leve (aplicação parcial)', 'Médio completo', 'Encorpado'],
    fiberOrNaturalInfo:
      'Extensões removíveis confeccionadas em fibra texturizada ou lã especial presas sobre trança base no fio natural.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 12. Tranças com Apliques
  {
    id: 'afro-trancas-apliques',
    slug: 'trancas-com-apliques',
    name: 'Tranças com Apliques',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Rabo de cavalo estruturado, tranças alimentadas e composições com apliques que ampliam comprimento e contraste de cores.',
    fullDescription:
      'Combina raiz bem desenhada rente ao couro cabeludo com apliques alongados em rabo alto, cascata ou trança única escultural, permitindo misturas de cores e volume sob medida para eventos ou uso cotidiano.',
    primaryImage: {
      id: 'afro-trancas-apliques-1',
      src: MEDIA_REGISTRY.afroHair.trancasApliques.src,
      alt: MEDIA_REGISTRY.afroHair.trancasApliques.alt,
      caption: 'Referência de Tranças com Apliques · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-trancas-apliques-1',
        src: MEDIA_REGISTRY.afroHair.trancasApliques.src,
        alt: MEDIA_REGISTRY.afroHair.trancasApliques.alt,
        caption: 'Rabo alto trançado com contraste de preto e mel',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Rabo médio', 'Rabo longo', 'Extra longo'],
    colorOptions: [
      { id: 'preto-mel', name: 'Preto & Mel', swatchHex: '#7A5026' },
      { id: 'preto-classico', name: 'Preto Clássico', swatchHex: '#181412' },
      { id: 'castanho-dourado', name: 'Castanho Dourado', swatchHex: '#A77434' },
    ],
    volumeOptions: ['Elegante alinhado', 'Trançado volumoso', 'Dupla/Trança escultural'],
    fiberOrNaturalInfo:
      'Base presa no cabelo natural com integração de apliques em fibra sintética, orgânica ou cabelo humano conforme escolha.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 13. Alongamentos e aplicações capilares
  {
    id: 'afro-alongamentos-aplicacoes',
    slug: 'alongamentos-e-aplicacoes-capilares',
    name: 'Alongamentos e aplicações capilares',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Aplicações em entrelace e técnicas de alongamento com foco na harmonização de curvatura afro, cacheada ou crespa.',
    fullDescription:
      'Serviço focado em adicionar comprimento e densidade preservando a naturalidade da textura afro. A técnica de aplicação e o caimento são definidos de acordo com a curvatura e a saúde dos fios naturais.',
    primaryImage: {
      id: 'afro-alongamentos-1',
      src: MEDIA_REGISTRY.afroHair.alongamentos.src,
      alt: MEDIA_REGISTRY.afroHair.alongamentos.alt,
      caption: 'Referência de Alongamentos e aplicações · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-alongamentos-1',
        src: MEDIA_REGISTRY.afroHair.alongamentos.src,
        alt: MEDIA_REGISTRY.afroHair.alongamentos.alt,
        caption: 'Harmonização de curvatura e volume natural',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Curto preenchido', 'Médio', 'Longo'],
    colorOptions: [
      { id: 'preto-natural', name: 'Preto Natural', swatchHex: '#181412' },
      { id: 'castanho-escuro', name: 'Castanho Escuro', swatchHex: '#3B261C' },
      { id: 'iluminado-ambar', name: 'Iluminado Âmbar', swatchHex: '#9C622B' },
    ],
    volumeOptions: ['Natural (1 tela/ref.)', 'Volume cheio', 'Alta densidade'],
    fiberOrNaturalInfo:
      'Pode utilizar telas de cabelo humano, bio-fibra ou fibra orgânica de textura crespa, cacheada ou yaki, definidas em avaliação.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 14. Penteados afro
  {
    id: 'afro-penteados-afro',
    slug: 'penteados-afro',
    name: 'Penteados afro',
    group: 'estilos_trancas',
    groupLabel: 'Estilos e tranças',
    shortDescription:
      'Coroas trançadas, coques esculturais e penteados autorais para festas, cerimônias ou produções editoriais.',
    fullDescription:
      'Composições exclusivas que celebram a arquitetura do cabelo afro — unindo tranças, torções, volume natural e adornos como grampos em latão, búzios ou amarrações com tecidos e turbantes.',
    primaryImage: {
      id: 'afro-penteados-afro-1',
      src: MEDIA_REGISTRY.afroHair.penteadosAfro.src,
      alt: MEDIA_REGISTRY.afroHair.penteadosAfro.alt,
      caption: 'Referência de Penteados afro · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-penteados-afro-1',
        src: MEDIA_REGISTRY.afroHair.penteadosAfro.src,
        alt: MEDIA_REGISTRY.afroHair.penteadosAfro.alt,
        caption: 'Coroa escultural com adornos metálicos',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Coque alto / Coroa', 'Semi-preso lateral', 'Escultura sob medida'],
    colorOptions: [
      { id: 'preto-natural', name: 'Preto Natural', swatchHex: '#181412' },
      { id: 'castanho-cafe', name: 'Castanho Café', swatchHex: '#3A261D' },
      { id: 'com-adornos-dourados', name: 'Com Adornos Dourados', swatchHex: '#C8942B' },
    ],
    volumeOptions: ['Minimalista elegante', 'Volume médio estruturado', 'Coroa editorial'],
    fiberOrNaturalInfo:
      'Construído diretamente com os fios naturais, sobre tranças já existentes ou com preenchimento em fibra para sustentar o desenho.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // CATEGORIA COMPLEMENTAR — CUIDADOS E MANUTENÇÃO (4 serviços)

  // 15. Manutenção de tranças
  {
    id: 'afro-manutencao-trancas',
    slug: 'manutencao-de-trancas',
    name: 'Manutenção de tranças',
    group: 'cuidados_manutencao',
    groupLabel: 'Cuidados e manutenção',
    shortDescription:
      'Retoque da linha frontal, reforço de divisões e realinhamento de pontos que cresceram para renovar o visual com segurança.',
    fullDescription:
      'Serviço dedicado a revitalizar tranças existentes através da higienização orientada, remoção de frizz nas divisões e refazimento pontual das fileiras frontais ou áreas com maior crescimento.',
    primaryImage: {
      id: 'afro-manutencao-trancas-1',
      src: MEDIA_REGISTRY.afroHair.manutencaoTrancas.src,
      alt: MEDIA_REGISTRY.afroHair.manutencaoTrancas.alt,
      caption: 'Referência de Manutenção de tranças · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-manutencao-trancas-1',
        src: MEDIA_REGISTRY.afroHair.manutencaoTrancas.src,
        alt: MEDIA_REGISTRY.afroHair.manutencaoTrancas.alt,
        caption: 'Retoque limpo de contorno e divisões frontais',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Contorno frontal (1 a 2 fileiras)', 'Topo e laterais', 'Avaliação geral'],
    colorOptions: [],
    volumeOptions: ['Estilo fino / delicado', 'Estilo médio', 'Estilo grosso / Locs'],
    fiberOrNaturalInfo:
      'Avalia o estado atual da trança instalada (com ou sem fibra), mantendo o padrão original de cor e espessura utilizado.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 16. Retirada de tranças
  {
    id: 'afro-retirada-trancas',
    slug: 'retirada-de-trancas',
    name: 'Retirada de tranças',
    group: 'cuidados_manutencao',
    groupLabel: 'Cuidados e manutenção',
    shortDescription:
      'Desmanche paciente, desembaraço cuidadoso e remoção segura de extensões preservando o comprimento e a integridade do fio natural.',
    fullDescription:
      'Remoção cuidadosa de Box Braids, Nagô, Crochet, Faux Locs ou entrelaces com foco em evitar quebras durante o desembaraço dos fios retidos no período de uso da trança.',
    primaryImage: {
      id: 'afro-retirada-trancas-1',
      src: MEDIA_REGISTRY.afroHair.retiradaTrancas.src,
      alt: MEDIA_REGISTRY.afroHair.retiradaTrancas.alt,
      caption: 'Referência de Retirada de tranças · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-retirada-trancas-1',
        src: MEDIA_REGISTRY.afroHair.retiradaTrancas.src,
        alt: MEDIA_REGISTRY.afroHair.retiradaTrancas.alt,
        caption: 'Desmanche cuidadoso preservando a definição dos fios naturais',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Tranças curtas / médias', 'Tranças longas / finas', 'Entrelace / Faux Locs'],
    colorOptions: [],
    volumeOptions: ['Desmanche completo', 'Desmanche + desembaraço em seções'],
    fiberOrNaturalInfo:
      'Atendimento voltado à remoção segura de extensões sintéticas ou orgânicas e preparação suave dos cabelos naturais.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 17. Hidratação e cuidados capilares
  {
    id: 'afro-hidratacao-cuidados',
    slug: 'hidratacao-e-cuidados-capilares',
    name: 'Hidratação e cuidados capilares',
    group: 'cuidados_manutencao',
    groupLabel: 'Cuidados e manutenção',
    shortDescription:
      'Tratamentos de reposição hídrica, nutrição lipídica e cuidado com o couro cabeludo pensados para fios crespos e cacheados.',
    fullDescription:
      'Cuidado voltado à saúde e vitalidade da fibra capilar crespa e cacheada — recomendado tanto para manutenção periódica dos fios livres quanto no intervalo entre um trançado e outro.',
    primaryImage: {
      id: 'afro-hidratacao-cuidados-1',
      src: MEDIA_REGISTRY.afroHair.hidratacaoCuidados.src,
      alt: MEDIA_REGISTRY.afroHair.hidratacaoCuidados.alt,
      caption: 'Referência de Hidratação e cuidados · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-hidratacao-cuidados-1',
        src: MEDIA_REGISTRY.afroHair.hidratacaoCuidados.src,
        alt: MEDIA_REGISTRY.afroHair.hidratacaoCuidados.alt,
        caption: 'Ritual nutritivo e hidratante para fios crespos e cacheados',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Fios curtos (Black Power)', 'Fios médios', 'Fios longos'],
    colorOptions: [],
    volumeOptions: ['Hidratação profunda', 'Nutrição com óleos vegetais', 'Pós-retirada de tranças'],
    fiberOrNaturalInfo:
      'Aplicação realizada exclusivamente nos fios naturais e couro cabeludo; linha e etapas confirmadas no atendimento.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },

  // 18. Finalização de cabelos crespos e cacheados
  {
    id: 'afro-finalizacao-crespos',
    slug: 'finalizacao-de-cabelos-crespos-e-cacheados',
    name: 'Finalização de cabelos crespos e cacheados',
    group: 'cuidados_manutencao',
    groupLabel: 'Cuidados e manutenção',
    shortDescription:
      'Fitagem, dedoliss e técnicas de modelagem para valorizar a definição natural, o brilho e o volume do cabelo crespo e cacheado.',
    fullDescription:
      'Modelagem personalizada que respeita a curvatura real de cada mecha (3C a 4C), ajustando a finalização entre maior definição ou volume expansivo para destacar a beleza do cabelo natural.',
    primaryImage: {
      id: 'afro-finalizacao-crespos-1',
      src: MEDIA_REGISTRY.afroHair.finalizacaoCrespos.src,
      alt: MEDIA_REGISTRY.afroHair.finalizacaoCrespos.alt,
      caption: 'Referência de Finalização de cabelos crespos e cacheados · Imagem ilustrativa',
      isProvisional: true,
    },
    gallery: [
      {
        id: 'afro-finalizacao-crespos-1',
        src: MEDIA_REGISTRY.afroHair.finalizacaoCrespos.src,
        alt: MEDIA_REGISTRY.afroHair.finalizacaoCrespos.alt,
        caption: 'Definição luminosa e volume natural equilibrado',
        isProvisional: true,
      },
    ],
    lengthOptions: ['Curto / Tapered', 'Médio', 'Longo'],
    colorOptions: [],
    volumeOptions: ['Foco em definição (fitagem/dedoliss)', 'Equilíbrio definição + volume', 'Black Power volumoso'],
    fiberOrNaturalInfo:
      'Atendimento realizado diretamente sobre os cabelos naturais crespos e cacheados sem uso de extensões.',
    subjectToConfirmationNote: DEFAULT_CONFIRMATION_NOTE,
  },
];

export interface AfroHairInquiryOptions {
  intent: 'quero_estilo' | 'consultar_valores' | 'consulta_card';
  selectedLength?: string;
  selectedColor?: string;
  selectedVolume?: string;
}

export function buildAfroHairWhatsAppMessage(
  service: AfroHairService,
  options: AfroHairInquiryOptions
): string {
  const details: string[] = [];
  if (options.selectedLength) details.push(`comprimento: ${options.selectedLength}`);
  if (options.selectedColor) details.push(`cor: ${options.selectedColor}`);
  if (options.selectedVolume) details.push(`volume: ${options.selectedVolume}`);

  const specsSuffix = details.length > 0 ? ` (${details.join(', ')})` : '';

  if (options.intent === 'consultar_valores') {
    return `Olá! Vi o catálogo de cabelos afro e gostaria de consultar valores e disponibilidade para ${service.name}${specsSuffix}. Poderia me orientar?`;
  }

  return `Olá! Vi o catálogo de cabelos afro e gostaria de saber mais sobre ${service.name}${specsSuffix}. Poderia me passar informações e orçamento?`;
}
