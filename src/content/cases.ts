export type CaseMetric = { value: string; label: string };

export type CaseCopy = {
  tagline: string;
  overview: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: CaseMetric[];
};

export type Case = {
  slug: string;
  client: string;
  category: string;
  year: string;
  duration: string;
  services: string[];
  featured: boolean;
  /** par de cores HEX para o cover gradient */
  palette: [string, string];
  locales: {
    pt: CaseCopy;
    en: CaseCopy;
  };
};

export const CASES: Case[] = [
  {
    slug: "verdana-foods",
    client: "Verdana Foods",
    category: "Branding · Packaging · Mídia",
    year: "2025",
    duration: "6 meses",
    services: ["Branding", "Packaging", "Meta Ads", "Conteúdo"],
    featured: true,
    palette: ["#FF5B14", "#1C0A00"],
    locales: {
      pt: {
        tagline: "A marca de snacks saudáveis que virou gôndola inteira.",
        overview:
          "Reposicionamos a Verdana de foodtech em crescimento para referência nacional em alimentação saudável. Branding inteiro, nova linha de packaging e lançamento com mídia de performance integrada.",
        challenge:
          "A marca tinha produto forte e distribuição regional, mas identidade datada e mensagem confusa que competia de igual pra igual com marcas genéricas no e-commerce. CAC subindo e ticket médio estagnado há 8 meses.",
        strategy:
          "Reposicionamento premium com foco em 'comida de verdade, sem manual de instrução'. Nova arquitetura de marca, sistema visual com fotografia proprietária e mensagem unificada em todos os pontos de contato. Funil de aquisição com criativos segmentados por ocasião de consumo.",
        execution:
          "Identidade visual redesenhada do zero, 14 SKUs de packaging produzidos em 60 dias, loja nova no Shopify, conteúdo social semanal e mídia de aquisição em Meta e Google rodando em ciclos quinzenais.",
        results: [
          { value: "+312%", label: "ROAS em Meta Ads" },
          { value: "−38%", label: "CAC vs. ano anterior" },
          { value: "4x", label: "Crescimento de receita" },
          { value: "17", label: "Redes com distribuição" },
        ],
      },
      en: {
        tagline: "The healthy snack brand that took over the aisle.",
        overview:
          "We repositioned Verdana from growing foodtech to a national reference in healthy eating. Full rebrand, new packaging line and launch backed by integrated performance media.",
        challenge:
          "Strong product, regional distribution — but a dated identity and mixed message competing head-to-head with generics on e-commerce. Rising CAC and a flat avg. ticket for 8 months.",
        strategy:
          "Premium repositioning around 'real food, no user manual'. New brand architecture, visual system built on proprietary photography, and a unified message across every touchpoint. Acquisition funnel with creatives segmented by consumption moment.",
        execution:
          "Identity redesigned from scratch, 14 packaging SKUs produced in 60 days, new Shopify store, weekly social content and Meta + Google ads running on biweekly cycles.",
        results: [
          { value: "+312%", label: "ROAS on Meta Ads" },
          { value: "−38%", label: "CAC vs. prior year" },
          { value: "4x", label: "Revenue growth" },
          { value: "17", label: "Retail chains added" },
        ],
      },
    },
  },
  {
    slug: "novasaude",
    client: "NovaSaúde",
    category: "Inbound · Growth · Ads",
    year: "2025",
    duration: "12 meses",
    services: ["Inbound", "SEO", "Google Ads", "Automação"],
    featured: true,
    palette: ["#E8E5DC", "#FF5B14"],
    locales: {
      pt: {
        tagline: "Plano de saúde digital com funil que curou o CAC.",
        overview:
          "Construímos o ecossistema digital de aquisição para uma healthtech que vendia B2B2C. SEO, inbound e mídia paga orquestrados para virar pipeline previsível.",
        challenge:
          "Operação comercial dependente de indicações, sem canal digital maduro. Volume de leads inconstante e time de vendas no escuro — nenhuma previsibilidade de pipeline.",
        strategy:
          "Dois funis paralelos: autoridade (SEO técnico + conteúdo editorial) e performance (Google Ads + landing pages segmentadas por persona). Automação em HubSpot para SLA de 4 minutos do lead.",
        execution:
          "80 artigos publicados em 6 meses, 14 landing pages A/B testadas, calendário editorial orgânico no YouTube Shorts e reestruturação completa do domínio para SEO técnico.",
        results: [
          { value: "+412%", label: "Leads qualificados (6m)" },
          { value: "R$ 18", label: "CAC médio (caiu de R$ 94)" },
          { value: "14k", label: "Sessões orgânicas/mês" },
          { value: "38%", label: "Taxa de contratação" },
        ],
      },
      en: {
        tagline: "A digital health plan with a funnel that cured the CAC.",
        overview:
          "We built the full digital acquisition stack for a healthtech selling B2B2C. SEO, inbound and paid media orchestrated into a predictable pipeline.",
        challenge:
          "A commercial op running on referrals, no mature digital channel. Erratic lead volume and a sales team flying blind — zero pipeline predictability.",
        strategy:
          "Two parallel funnels: authority (technical SEO + editorial content) and performance (Google Ads + persona-segmented landing pages). HubSpot automation with a 4-minute lead SLA.",
        execution:
          "80 articles published in 6 months, 14 A/B-tested landing pages, organic YouTube Shorts calendar and a full technical SEO overhaul.",
        results: [
          { value: "+412%", label: "Qualified leads (6m)" },
          { value: "R$ 18", label: "Avg. CAC (from R$ 94)" },
          { value: "14k", label: "Organic sessions/mo" },
          { value: "38%", label: "Sign-up rate" },
        ],
      },
    },
  },
  {
    slug: "kira-energia",
    client: "Kira Energia",
    category: "Branding · Sistema visual",
    year: "2024",
    duration: "4 meses",
    services: ["Branding", "Naming", "Sistema visual", "Brandbook"],
    featured: true,
    palette: ["#FF7A3D", "#0A0A0A"],
    locales: {
      pt: {
        tagline: "De comercializadora técnica a marca que o mercado lembra.",
        overview:
          "Nova identidade corporativa para uma das maiores comercializadoras de energia do sul do país, com sistema visual flexível e narrativa que traduz complexidade em clareza.",
        challenge:
          "Mercado B2B hermético, cheio de siglas e marcas que se confundiam. A Kira precisava de uma personalidade que sustentasse crescimento nacional sem parecer startup juvenil ou utility engessada.",
        strategy:
          "Posicionamento em torno de 'energia com clareza'. Sistema de marca modular que funciona de apresentação corporativa a social orgânico, com hierarquia tipográfica forte e uso disciplinado de cor.",
        execution:
          "Rebranding completo (logo, sistema, tipografia, fotografia dirigida), brandbook de 84 páginas, kit de apresentações comerciais e assets de lançamento em 30 dias.",
        results: [
          { value: "+220%", label: "Recall espontâneo" },
          { value: "+68%", label: "NPS de clientes B2B" },
          { value: "3", label: "Estados onde expandiu" },
          { value: "1", label: "Prêmio de branding 2024" },
        ],
      },
      en: {
        tagline: "From technical trader to a brand the market remembers.",
        overview:
          "New corporate identity for one of the largest energy traders in the south of Brazil, with a flexible visual system and narrative that turns complexity into clarity.",
        challenge:
          "A hermetic B2B market flooded with acronyms and brands that blurred into one another. Kira needed a personality that would support national growth without feeling like a juvenile startup — or a stiff utility.",
        strategy:
          "Positioning around 'energy with clarity'. A modular brand system that works from corporate decks to organic social, with strong typographic hierarchy and disciplined color.",
        execution:
          "Full rebrand (logo, system, typography, art-directed photography), 84-page brandbook, commercial deck kit and launch assets — in 30 days.",
        results: [
          { value: "+220%", label: "Unaided recall" },
          { value: "+68%", label: "B2B client NPS" },
          { value: "3", label: "New states entered" },
          { value: "1", label: "2024 branding award" },
        ],
      },
    },
  },
  {
    slug: "estudio-forma",
    client: "Estúdio Forma",
    category: "Design · Audiovisual · Social",
    year: "2024",
    duration: "3 meses",
    services: ["Lançamento", "Audiovisual", "Social", "Packaging"],
    featured: true,
    palette: ["#8A8579", "#FF5B14"],
    locales: {
      pt: {
        tagline: "Lançamento de linha premium que esgotou em 72h.",
        overview:
          "Campanha 360 para o lançamento da linha 'Matéria' do Estúdio Forma — mobiliário autoral em edição limitada, com produção audiovisual autoral e ativação em social.",
        challenge:
          "O estúdio lançava peças autorais mas vendia pouco online — dependente de indicação de decorador. Faltava contar a história de cada peça e transformar desejo em venda dentro do site próprio.",
        strategy:
          "Narrativa de 'marcenaria com método'. Produção fotográfica em estúdio + curta documental de 3 minutos sobre o processo. Social orgânico amarrado ao lançamento com contagem regressiva e drops semanais.",
        execution:
          "Direção de arte, produção audiovisual, embalagem para collectors, site one-pager de lançamento e campanha de social orgânico + pago durante 30 dias pré-drop.",
        results: [
          { value: "100%", label: "Coleção esgotada (72h)" },
          { value: "R$ 480k", label: "Faturamento do drop" },
          { value: "+52%", label: "Seguidores em 60 dias" },
          { value: "2.1M", label: "Views no curta" },
        ],
      },
      en: {
        tagline: "A premium line launch that sold out in 72h.",
        overview:
          "360 campaign for Estúdio Forma's 'Matéria' drop — signature limited-edition furniture with original audiovisual production and social activation.",
        challenge:
          "The studio launched signature pieces but sold little online — stuck on decorator referrals. The story of each piece wasn't being told, and desire never translated into direct sales.",
        strategy:
          "A narrative of 'craft with method'. In-studio photo production plus a 3-minute documentary short on the process. Organic social tied to the launch with a countdown and weekly drops.",
        execution:
          "Art direction, audiovisual production, collector packaging, a one-pager launch site and a 30-day pre-drop organic + paid social campaign.",
        results: [
          { value: "100%", label: "Collection sold out (72h)" },
          { value: "R$ 480k", label: "Drop revenue" },
          { value: "+52%", label: "Followers in 60 days" },
          { value: "2.1M", label: "Views on the short" },
        ],
      },
    },
  },
  {
    slug: "banca-norte",
    client: "Banca Norte",
    category: "Fintech · Lançamento · Growth",
    year: "2024",
    duration: "8 meses",
    services: ["Lançamento", "Branding", "Growth", "Inbound"],
    featured: false,
    palette: ["#1F1F1F", "#FF5B14"],
    locales: {
      pt: {
        tagline: "Fintech nortista que abriu 30 mil contas antes do piloto acabar.",
        overview:
          "Lançamento de banco digital focado no Norte do país — marca, ecossistema de aquisição e operação de crescimento para os primeiros 12 meses.",
        challenge:
          "Entrar em um mercado com Nubank, PicPay e bancões digitais já consolidados, com orçamento apertado e prazo de lançamento de 6 meses.",
        strategy:
          "Posicionamento hiperlocal — 'o banco que te entende, porque é daqui'. Criativos pensados pra região, creators locais, ativação em varejo e parcerias com times de futebol de Belém e Manaus.",
        execution:
          "Identidade, app UX writing, 120 criativos por mês em Meta e TikTok, 5 ativações físicas em varejo e uma campanha OOH com influenciadores regionais.",
        results: [
          { value: "30k+", label: "Contas abertas no piloto" },
          { value: "R$ 7", label: "CAC em Meta (concorrência: R$ 42)" },
          { value: "71%", label: "Awareness na Grande Belém" },
          { value: "12", label: "Creators regionais ativos" },
        ],
      },
      en: {
        tagline: "A northern fintech that opened 30k accounts before the pilot ended.",
        overview:
          "Launch of a digital bank focused on Brazil's North region — brand, acquisition ecosystem and growth operation for the first 12 months.",
        challenge:
          "Entering a market already dominated by Nubank, PicPay and digital incumbents, on a tight budget and a 6-month launch deadline.",
        strategy:
          "Hyperlocal positioning — 'the bank that gets you, because it's from here'. Creatives designed for the region, local creators, retail activation and partnerships with football clubs in Belém and Manaus.",
        execution:
          "Identity, app UX writing, 120 creatives per month on Meta and TikTok, 5 in-store activations and an OOH campaign with regional influencers.",
        results: [
          { value: "30k+", label: "Pilot accounts opened" },
          { value: "R$ 7", label: "Meta CAC (vs. R$ 42 avg.)" },
          { value: "71%", label: "Awareness in Greater Belém" },
          { value: "12", label: "Active regional creators" },
        ],
      },
    },
  },
  {
    slug: "urbana-livraria",
    client: "Urbana Livraria",
    category: "Branding · Experiência · Varejo",
    year: "2023",
    duration: "5 meses",
    services: ["Branding", "Varejo", "Experiência", "Social"],
    featured: false,
    palette: ["#F5F3EE", "#0A0A0A"],
    locales: {
      pt: {
        tagline: "A livraria de bairro que virou parada de bairro inteiro.",
        overview:
          "Reposicionamento de livraria independente com três unidades em SP: identidade visual, experiência de loja e conteúdo editorial para firmar o posto de 'curadoria de bairro'.",
        challenge:
          "Competir com marketplaces e redes grandes de varejo cultural tendo 1/20 do budget de mídia. O ativo real era a curadoria dos livreiros — e ninguém sabia disso.",
        strategy:
          "Transformar o conhecimento do livreiro em conteúdo. Clube de leitura mensal, listas autorais por livraria, cartazes semanais e identidade que parece feita à mão — porque é.",
        execution:
          "Novo sistema de sinalização e materiais impressos rotativos, programa de fidelidade analógico, Instagram focado em gente (livreiros e leitores) e parceria com editoras independentes.",
        results: [
          { value: "+84%", label: "Faturamento total em 12m" },
          { value: "+3 mil", label: "Membros no clube" },
          { value: "34", label: "Eventos presenciais/ano" },
          { value: "3", label: "Novas unidades em negociação" },
        ],
      },
      en: {
        tagline: "The neighborhood bookstore that became a neighborhood hangout.",
        overview:
          "Repositioning of an independent bookstore with three shops in São Paulo: visual identity, store experience and editorial content to claim the 'neighborhood curation' spot.",
        challenge:
          "Competing with marketplaces and big cultural retail chains on 1/20 of their media budget. The real asset was the booksellers' taste — and nobody knew it.",
        strategy:
          "Turn the booksellers' knowledge into content. Monthly book club, signature lists per shop, weekly posters and an identity that feels handmade — because it is.",
        execution:
          "New signage system and rotating printed materials, analog loyalty program, Instagram focused on people (booksellers and readers) and partnerships with indie publishers.",
        results: [
          { value: "+84%", label: "Total revenue in 12m" },
          { value: "+3k", label: "Book club members" },
          { value: "34", label: "In-person events/yr" },
          { value: "3", label: "New shops in negotiation" },
        ],
      },
    },
  },
];

export function getCaseBySlug(slug: string): Case | undefined {
  return CASES.find((c) => c.slug === slug);
}

export function getFeaturedCases(): Case[] {
  return CASES.filter((c) => c.featured);
}
