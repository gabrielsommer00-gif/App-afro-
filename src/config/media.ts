export interface MediaAssetEntry {
  src: string;
  webpSrc?: string;
  alt: string;
  isProvisional: boolean;
}

function mediaEntry(entry: MediaAssetEntry): MediaAssetEntry {
  return entry;
}

/**
 * Registro centralizado de imagens da Cris Vieira Moda Africana (Fase 02.0).
 *
 * Estrutura preparada para receber:
 * - Logo oficial (sem redesenho ou substituição automática)
 * - Imagens institucionais e banners
 * - Imagens de categorias
 * - Fotografias de coleções
 * - Fotografias e detalhes individuais de produtos reais (preferencialmente em WebP)
 */
export const MEDIA_REGISTRY = {
  logo: {
    /** Inserir caminho do arquivo original quando enviado pela marca (ex.: '/assets/logo/cris-vieira-oficial.webp') */
    primarySrc: null as string | null,
    /** Opcional: versão clara da logo original para o rodapé escuro */
    lightSrc: null as string | null,
    alt: 'Cris Vieira Moda Africana',
  },

  institutional: {
    heroPrincipal: mediaEntry({
      src: '/assets/catalogo/moda-feminina/blusa-moletom-aplicacao-kente.jpg',
      webpSrc: '/assets/catalogo/moda-feminina/blusa-moletom-aplicacao-kente.webp',
      alt: 'Editorial Cris Vieira Moda Africana com blusa preta com aplicações em tecido Kente e tranças nagô',
      isProvisional: false,
    }),
    sobreAtelier: mediaEntry({
      src: '/assets/catalogo/loja/vestido-lastex-kente-arara-loja.jpg',
      webpSrc: '/assets/catalogo/loja/vestido-lastex-kente-arara-loja.webp',
      alt: 'Interior da loja física Cris Vieira Moda Africana com vestido lastex em estampa Kente, painel de colares e tecidos africanos',
      isProvisional: false,
    }),
    lojaBalcao: mediaEntry({
      src: '/assets/catalogo/loja/bolsa-transversal-kente-loja.jpg',
      webpSrc: '/assets/catalogo/loja/bolsa-transversal-kente-loja.webp',
      alt: 'Balcão e prateleiras da loja Cris Vieira Moda Africana destacando bolsa transversal com bolso em estampa Kente',
      isProvisional: false,
    }),
  },

  categories: {
    modaFeminina: mediaEntry({
      src: '/assets/catalogo/moda-feminina/saia-dupla-camada-ankara-listras.jpg',
      webpSrc: '/assets/catalogo/moda-feminina/saia-dupla-camada-ankara-listras.webp',
      alt: 'Moda feminina com saia dupla camada em estampa Ankara colorida e listras marrom café',
      isProvisional: false,
    }),
    modaMasculina: mediaEntry({
      src: '/assets/catalogo/moda-masculina/jaquetas-bomber-casal-turquesa.jpg',
      webpSrc: '/assets/catalogo/moda-masculina/jaquetas-bomber-casal-turquesa.webp',
      alt: 'Moda masculina e coordenada de casal com jaquetas bomber em estampa africana turquesa e terracota',
      isProvisional: false,
    }),
    modaInfantil: mediaEntry({
      src: '/assets/catalogo/moda-infantil/conjunto-infantil-bomber-azul.jpg',
      webpSrc: '/assets/catalogo/moda-infantil/conjunto-infantil-bomber-azul.webp',
      alt: 'Moda infantil com conjuntos coordenados de jaqueta bomber e bermuda em estampa azul Ankara',
      isProvisional: false,
    }),
    vestidosConjuntos: mediaEntry({
      src: '/assets/catalogo/loja/vestido-lastex-kente-arara-loja.jpg',
      webpSrc: '/assets/catalogo/loja/vestido-lastex-kente-arara-loja.webp',
      alt: 'Vestido e saia com busto em lastex em estampa Kente exposto na arara da loja física',
      isProvisional: false,
    }),
    tecidosEstampas: mediaEntry({
      src: '/src/assets/images/category_tecidos_estampas_1794860443040.jpg',
      alt: 'Seleção de tecidos africanos dobrados em tons de terracota, açafrão e verde profundo',
      isProvisional: true,
    }),
    turbantesAcessorios: mediaEntry({
      src: '/assets/catalogo/turbantes-acessorios/turbante-acafrao-estruturado.jpg',
      webpSrc: '/assets/catalogo/turbantes-acessorios/turbante-acafrao-estruturado.webp',
      alt: 'Turbante estruturado em tom amarelo açafrão acompanhado de brincos artesanais e braceletes metálicos',
      isProvisional: false,
    }),
    produtosArtesanais: mediaEntry({
      src: '/assets/catalogo/loja/bolsa-transversal-kente-loja.jpg',
      webpSrc: '/assets/catalogo/loja/bolsa-transversal-kente-loja.webp',
      alt: 'Bolsa transversal artesanal em material sintético preto com bolso frontal em tecido Kente',
      isProvisional: false,
    }),
  },

  collections: {
    lookbook: [
      {
        id: 'col-1',
        ...mediaEntry({
          src: '/assets/catalogo/loja/vestido-lastex-kente-arara-loja.jpg',
          webpSrc: '/assets/catalogo/loja/vestido-lastex-kente-arara-loja.webp',
          alt: 'Registro real da loja física com vestido lastex em estampa Kente e acervo de tecidos',
          isProvisional: false,
        }),
      },
      {
        id: 'col-2',
        ...mediaEntry({
          src: '/assets/catalogo/moda-feminina/calca-estampada-amarela-terracota.jpg',
          webpSrc: '/assets/catalogo/moda-feminina/calca-estampada-amarela-terracota.webp',
          alt: 'Look com calça estampada geométrica em amarelo solar, ocre e terracota',
          isProvisional: false,
        }),
      },
      {
        id: 'col-3',
        ...mediaEntry({
          src: '/assets/catalogo/turbantes-acessorios/turbante-kente-amarelo-brincos.jpg',
          webpSrc: '/assets/catalogo/turbantes-acessorios/turbante-kente-amarelo-brincos.webp',
          alt: 'Turbante em estampa Kente amarelo solar com brincos dourados pendentes',
          isProvisional: false,
        }),
      },
      {
        id: 'col-4',
        ...mediaEntry({
          src: '/assets/catalogo/moda-infantil/conjunto-infantil-blazer-acafrao.jpg',
          webpSrc: '/assets/catalogo/moda-infantil/conjunto-infantil-blazer-acafrao.webp',
          alt: 'Moda infantil em alfaiataria estampada açafrão com blazer e calça coordenados',
          isProvisional: false,
        }),
      },
    ],
  },

  /**
   * Fotografias reais e organizadas de peças, acessórios e linha infantil (sem repetições cruzadas).
   * Nota: Nenhuma fotografia de peruca / Lace Front foi incluída nos envios atuais; o bloco `wigs`
   * permanece reservado para importação futura sem invenção de imagens.
   */
  products: {
    vestidoLastexKenteLoja: {
      principal: '/assets/catalogo/loja/vestido-lastex-kente-arara-loja.jpg',
      webp: '/assets/catalogo/loja/vestido-lastex-kente-arara-loja.webp',
      angulo: '/assets/catalogo/loja/vestido-lastex-kente-arara-loja-angulo.jpg',
      anguloWebp: '/assets/catalogo/loja/vestido-lastex-kente-arara-loja-angulo.webp',
    },
    blusaMoletomKente: {
      principal: '/assets/catalogo/moda-feminina/blusa-moletom-aplicacao-kente.jpg',
      webp: '/assets/catalogo/moda-feminina/blusa-moletom-aplicacao-kente.webp',
    },
    saiaDuplaAnkara: {
      principal: '/assets/catalogo/moda-feminina/saia-dupla-camada-ankara-listras.jpg',
      webp: '/assets/catalogo/moda-feminina/saia-dupla-camada-ankara-listras.webp',
    },
    calcaEstampadaTerracota: {
      principal: '/assets/catalogo/moda-feminina/calca-estampada-amarela-terracota.jpg',
      webp: '/assets/catalogo/moda-feminina/calca-estampada-amarela-terracota.webp',
    },
    jaquetasBomberTurquesa: {
      principal: '/assets/catalogo/moda-masculina/jaquetas-bomber-casal-turquesa.jpg',
      webp: '/assets/catalogo/moda-masculina/jaquetas-bomber-casal-turquesa.webp',
    },
    bolsaTransversalKente: {
      principal: '/assets/catalogo/loja/bolsa-transversal-kente-loja.jpg',
      webp: '/assets/catalogo/loja/bolsa-transversal-kente-loja.webp',
    },
    brincoArgolaTecido: {
      principal: '/assets/catalogo/turbantes-acessorios/brinco-argola-tecido-geometrico.jpg',
      webp: '/assets/catalogo/turbantes-acessorios/brinco-argola-tecido-geometrico.webp',
      colecao: '/assets/catalogo/turbantes-acessorios/colecao-brincos-argola-tecido.jpg',
      colecaoWebp: '/assets/catalogo/turbantes-acessorios/colecao-brincos-argola-tecido.webp',
    },
    colarTirasAnkara: {
      principal: '/assets/catalogo/turbantes-acessorios/colar-tiras-tecido-ankara.jpg',
      webp: '/assets/catalogo/turbantes-acessorios/colar-tiras-tecido-ankara.webp',
    },
    turbanteKenteSolar: {
      principal: '/assets/catalogo/turbantes-acessorios/turbante-kente-amarelo-brincos.jpg',
      webp: '/assets/catalogo/turbantes-acessorios/turbante-kente-amarelo-brincos.webp',
    },
    turbanteVermelhoColar: {
      principal: '/assets/catalogo/turbantes-acessorios/turbante-vermelho-colar-artesanal.jpg',
      webp: '/assets/catalogo/turbantes-acessorios/turbante-vermelho-colar-artesanal.webp',
    },
    turbanteAcafraoEstruturado: {
      principal: '/assets/catalogo/turbantes-acessorios/turbante-acafrao-estruturado.jpg',
      webp: '/assets/catalogo/turbantes-acessorios/turbante-acafrao-estruturado.webp',
    },
    bataInfantilTerracota: {
      principal: '/assets/catalogo/moda-infantil/bata-infantil-terracota-menino.jpg',
      webp: '/assets/catalogo/moda-infantil/bata-infantil-terracota-menino.webp',
    },
    conjuntoInfantilBomberAzul: {
      principal: '/assets/catalogo/moda-infantil/conjunto-infantil-bomber-azul.jpg',
      webp: '/assets/catalogo/moda-infantil/conjunto-infantil-bomber-azul.webp',
    },
    conjuntoInfantilBlazerAcafrao: {
      principal: '/assets/catalogo/moda-infantil/conjunto-infantil-blazer-acafrao.jpg',
      webp: '/assets/catalogo/moda-infantil/conjunto-infantil-blazer-acafrao.webp',
    },
    kaftanInfantilVerde: {
      principal: '/assets/catalogo/moda-infantil/kaftan-infantil-ankara-verde.jpg',
      webp: '/assets/catalogo/moda-infantil/kaftan-infantil-ankara-verde.webp',
    },
    vestidoJardineiraInfantil: {
      principal: '/assets/catalogo/moda-infantil/vestido-jardineira-infantil-vermelho.jpg',
      webp: '/assets/catalogo/moda-infantil/vestido-jardineira-infantil-vermelho.webp',
    },
    vestidoInfantilVermelhoAzulLaco: {
      principal: '/assets/catalogo/moda-infantil/vestido-infantil-vermelho-azul-laco.jpg',
      webp: '/assets/catalogo/moda-infantil/vestido-infantil-vermelho-azul-laco.webp',
    },
    vestidoInfantilGeometricoTerracota: {
      principal: '/assets/catalogo/moda-infantil/vestido-infantil-geometrico-terracota.jpg',
      webp: '/assets/catalogo/moda-infantil/vestido-infantil-geometrico-terracota.webp',
    },
    demoTecidoAfricano: {
      principal: '/src/assets/images/category_tecidos_estampas_1794860443040.jpg',
    },
  },

  /**
   * Fotografias representativas individuais para a categoria Cabelos Afro.
   * Cada serviço possui sua própria imagem exclusiva (sem repetições entre cards).
   */
  afroHair: {
    boxBraids: mediaEntry({
      src: '/src/assets/images/hair_box_braids_1794870996033.jpg',
      alt: 'Modelo negra com tranças Box Braids longas e divididas simetricamente em estúdio',
      isProvisional: true,
    }),
    trancasNago: mediaEntry({
      src: '/src/assets/images/hair_trancas_nago_1794870996576.jpg',
      alt: 'Modelo negra exibindo Tranças Nagô clássicas rentes ao couro cabeludo com divisão precisa',
      isProvisional: true,
    }),
    nagoDesenhada: mediaEntry({
      src: '/src/assets/images/hair_nago_desenhada_1794870997339.jpg',
      alt: 'Modelo negra com Trança Nagô Desenhada em traços geométricos e curvos artísticos',
      isProvisional: true,
    }),
    knotlessBraids: mediaEntry({
      src: '/src/assets/images/hair_knotless_braids_1794870998076.jpg',
      alt: 'Modelo negra com Knotless Braids médias de raiz suave e caimento natural',
      isProvisional: true,
    }),
    bohoBraids: mediaEntry({
      src: '/src/assets/images/hair_boho_braids_1794870999158.jpg',
      alt: 'Modelo negra usando Boho Braids com mechas cacheadas soltas ao longo das tranças',
      isProvisional: true,
    }),
    goddessBraids: mediaEntry({
      src: '/src/assets/images/hair_goddess_braids_1794870998863.jpg',
      alt: 'Modelo negra com Goddess Braids volumosas estruturadas no topo e pontas cacheadas',
      isProvisional: true,
    }),
    fulaniBraids: mediaEntry({
      src: '/src/assets/images/hair_fulani_braids_1794871001282.jpg',
      alt: 'Modelo negra usando Fulani Braids com trança central, laterais e adornos em latão e madeira',
      isProvisional: true,
    }),
    trancasTwist: mediaEntry({
      src: '/src/assets/images/hair_trancas_twist_1794870999920.jpg',
      alt: 'Modelo negra com Tranças Twist de dois cabos com brilho e definição',
      isProvisional: true,
    }),
    crochetBraids: mediaEntry({
      src: '/src/assets/images/hair_crochet_braids_1794871000639.jpg',
      alt: 'Modelo negra com Crochet Braids volumosos de cachos definidos e acabamento natural',
      isProvisional: true,
    }),
    fauxLocs: mediaEntry({
      src: '/src/assets/images/hair_faux_locs_1794871000336.jpg',
      alt: 'Modelo negra com Faux Locs texturizados em tom café escuro',
      isProvisional: true,
    }),
    dreadsRemoviveis: mediaEntry({
      src: '/src/assets/images/hair_dreads_removiveis_1794871001358.jpg',
      alt: 'Modelo negra com dreads e estilos removíveis adornados com anéis em latão fosco',
      isProvisional: true,
    }),
    trancasApliques: mediaEntry({
      src: '/src/assets/images/hair_trancas_apliques_1794871002019.jpg',
      alt: 'Modelo negra com Tranças com Apliques em rabo de cavalo longo mesclando preto e mel',
      isProvisional: true,
    }),
    alongamentos: mediaEntry({
      src: '/src/assets/images/hair_alongamentos_1794871002559.jpg',
      alt: 'Modelo negra exibindo alongamentos e aplicações capilares em textura afro cacheada',
      isProvisional: true,
    }),
    penteadosAfro: mediaEntry({
      src: '/src/assets/images/hair_penteados_afro_1794871003774.jpg',
      alt: 'Modelo negra com penteado afro escultural em coroa trançada e grampos em latão',
      isProvisional: true,
    }),
    manutencaoTrancas: mediaEntry({
      src: '/src/assets/images/hair_manutencao_trancas_1794871004643.jpg',
      alt: 'Detalhe de manutenção de tranças com retoque limpo na linha frontal e divisões renovadas',
      isProvisional: true,
    }),
    retiradaTrancas: mediaEntry({
      src: '/src/assets/images/hair_retirada_trancas_1794871004203.jpg',
      alt: 'Cuidado gentil de retirada de tranças e desembaraço com pente de madeira de dentes largos',
      isProvisional: true,
    }),
    hidratacaoCuidados: mediaEntry({
      src: '/src/assets/images/hair_hidratacao_cuidados_1794871005192.jpg',
      alt: 'Ritual de hidratação e cuidados capilares para fios crespos e cacheados com óleos botânicos',
      isProvisional: true,
    }),
    finalizacaoCrespos: mediaEntry({
      src: '/src/assets/images/hair_finalizacao_crespos_1794871005863.jpg',
      alt: 'Modelo negra com cabelos crespos e cacheados finalizados com volume, brilho e definição',
      isProvisional: true,
    }),
  },
} as const;
