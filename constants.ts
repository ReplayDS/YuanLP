import { ContentMap } from './types';

// Approximate exchange rate for demo purposes: 1 CNY = 0.78 BRL
// This will be the base for our "Live" simulation
export const BASE_EXCHANGE_RATE = 0.78; 
export const TRANSACTION_FEE_PERCENT = 0.05; // 5%

export const TEXTS: ContentMap = {
  pt: {
    nav_home: "Início",
    nav_features: "Como Funciona",
    nav_calculator: "Calculadora",
    nav_login_client: "Login Cliente",
    nav_login_supplier: "Login Fornecedor",

    hero_title: "CHEGA DE LEVAR GOLPE NA IMPORTAÇÃO.",
    hero_subtitle: "A YUANBR segura o seu dinheiro. O fornecedor chinês só recebe quando a mercadoria estiver na sua mão e verificada. Proteja seu capital agora.",
    hero_cta: "Blindar Minha Compra Agora",

    calc_title: "Câmbio Yuan Hoje",
    calc_rate_info: "Cotação Comercial",
    calc_input_yuan: "Valor da Fatura (CNY - Yuan)",
    calc_input_real: "Custo Estimado (BRL - Real)",
    calc_fee_note: "*Inclui spread bancário + taxa de segurança de 5%.",
    calc_cta_button: "TRAVAR CÂMBIO E INICIAR",
    calc_refresh: "Atualizar Cotação",

    features_title: "O Fim do Risco na Importação",
    feature_1_title: "Custódia Garantida (Escrow)",
    feature_1_desc: "Seu dinheiro fica num cofre digital. Se o produto não chegar ou vier errado, o fornecedor não vê a cor do dinheiro.",
    feature_2_title: "Pagamento Local (PIX/TED)",
    feature_2_desc: "Você paga em Reais no Brasil. Nós fazemos a conversão e o envio legalizado para a China em minutos.",
    feature_3_title: "Auditoria de Fábrica",
    feature_3_desc: "Nossa equipe na China verifica se a fábrica existe mesmo antes de você fechar o pedido.",

    process_title: "Como Blindamos Sua Compra",
    process_step_1: "1. Você fecha o pedido e deposita em Reais na YUANBR.",
    process_step_2: "2. Nós avisamos o chinês que o dinheiro está garantido.",
    process_step_3: "3. O fornecedor envia a mercadoria para o Brasil.",
    process_step_4: "4. Você recebe, confere e libera o pagamento.",

    testimonials_title: "Quem parou de perder dinheiro",
    testi_1_text: "Quase perdi 50 mil reais com um fornecedor falso no Alibaba. A YUANBR identificou a fraude antes de eu pagar.",
    testi_1_author: "Carlos M. - Importador de Eletrônicos",
    testi_2_text: "A agilidade do pagamento via PIX acelerou meus envios em 3 dias. O chinês confia na hora.",
    testi_2_author: "Fernanda L. - Loja de Roupas",

    faq_title: "Perguntas Frequentes",
    faq_1_q: "O dinheiro vai direto para o chinês?",
    faq_1_a: "Não. Fica em nossa conta de custódia (Escrow) até você autorizar a liberação.",
    faq_2_q: "Vocês emitem Invoice?",
    faq_2_a: "Sim, emitimos toda a documentação fiscal necessária para a importação formal.",

    ai_title: "Assistente de Comércio Exterior",
    ai_subtitle: "Tire dúvidas sobre importação, impostos ou cultura chinesa com nossa IA.",
    ai_placeholder: "Ex: Como negociar melhor preço com fábricas em Shenzhen?",
    ai_button: "Consultar IA",

    footer_about: "A YUANBR é a primeira fintech brasileira focada exclusivamente em segurança para pagamentos na China.",
    footer_links: "Links Rápidos",
    footer_legal: "Legal & Segurança",
    footer_contact: "Contato",
    footer_rights: "© 2024 YUANBR Pagamentos Internacionais Ltda. CNPJ: 00.000.000/0001-00"
  },
  cn: {
    nav_home: "首页",
    nav_features: "解决方案",
    nav_calculator: "汇率计算",
    nav_login_client: "买家登录",
    nav_login_supplier: "供应商登录",

    hero_title: "连接巴西市场，收汇安全无忧",
    hero_subtitle: "我们将帮助您自信地拓展南美业务。我们提供支付流动性担保，并为您与巴西买家之间架起信任的桥梁。",
    hero_cta: "开始安全收款",

    calc_title: "实时汇率",
    calc_rate_info: "商业汇率实况",
    calc_input_yuan: "发票金额 (CNY - 元)",
    calc_input_real: "买家预估成本 (BRL - 雷亚尔)",
    calc_fee_note: "*包含5%的安全交易服务费。",
    calc_cta_button: "锁定汇率并开始交易",
    calc_refresh: "刷新汇率",

    features_title: "为什么选择 YUANBR?",
    feature_1_title: "资金担保结算",
    feature_1_desc: "安全收款。我们处理货币兑换和合规事宜，确保您收到人民币，无汇率风险。",
    feature_2_title: "即时验证",
    feature_2_desc: "买家资金一旦存入，您将立即收到通知。消除生产风险，安心备货。",
    feature_3_title: "建立商业信任",
    feature_3_desc: "通过我们的验证徽章系统，向巴西买家展示您是经过验证的值得信赖的合作伙伴。",

    process_title: "安全交易流程",
    process_step_1: "1. 买家将雷亚尔(BRL)存入 YUANBR 托管账户。",
    process_step_2: "2. 我们确认资金已为您锁定。",
    process_step_3: "3. 您可以放心地发货到巴西。",
    process_step_4: "4. 资金释放至您的支付宝或银行账户。",

    testimonials_title: "值得信赖的合作伙伴",
    testi_1_text: "自从使用 YUANBR 以来，我们对巴西的出口额增长了 40%，因为买家更信任我们了。",
    testi_1_author: "李伟 - 深圳电子",
    testi_2_text: "不再需要等待漫长的 SWIFT 转账。我们能即时获得付款确认，发货更快。",
    testi_2_author: "张先生 - 纺织品制造商",

    faq_title: "常见问题",
    faq_1_q: "付款有保证吗？",
    faq_1_a: "是的。一旦我们要您发货，资金就已经在我们的托管账户中为您预留。",
    faq_2_q: "我如何收到人民币？",
    faq_2_a: "资金将直接打入您的企业银行账户或支付宝企业账户。",

    ai_title: "巴西市场洞察",
    ai_subtitle: "向我们的 AI 咨询巴西消费者趋势或出口法规。",
    ai_placeholder: "例如：巴西最畅销的电子产品是什么？",
    ai_button: "咨询 AI",

    footer_about: "YUANBR 通过安全技术连接中国供应商与巴西买家。",
    footer_links: "快速链接",
    footer_legal: "法律信息",
    footer_contact: "联系我们",
    footer_rights: "© 2024 YUANBR 国际支付。"
  }
};