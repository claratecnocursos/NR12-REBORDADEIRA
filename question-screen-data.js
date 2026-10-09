/**
 * Conteúdo da Trilha NR-12 — Rebordadeira Automática
 * Tipos: cover | content | compare | quiz-intro | question | finale
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR-12 — Rebordadeira Automática",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    {
      id: 1,
      title: "Fundamentos Legais, Escopo e Diretrizes da NR 12",
      objective: "Entender a base da NR-12, o conteúdo obrigatório da capacitação e onde a norma se aplica ou não se aplica.",
      titleUnlock: {
        title: "BASE DA NR-12",
        body: "Você distingue o que a norma cobre, o que o Anexo II exige e o que fica fora do item 12.1.4.",
        icon: "📘"
      },
      screens: [
        {
          id: "nr12-m1-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo1.png",
          imageAlt: "Operadora ao lado da rebordadeira automática no galpão",
          title: "Módulo 1 — Fundamentos da NR-12",
          subtitle: "Objetivo da norma, capacitação do Anexo II, os 12 anexos e as exceções do item 12.1.4."
        },
        {
          id: "nr12-m1-abrangencia",
          type: "content",
          fit: true,
          kicker: "NR-12",
          title: "O que a norma protege e onde ela vale",
          body: "A NR-12 é norma do Ministério do Trabalho e Emprego, junto à Portaria MTb nº 3.214, de 8 de junho de 1978. O objetivo é proteger a integridade física e a saúde de quem trabalha com máquinas e equipamentos.",
          cards: [
            { icon: "1", title: "Onde se aplica", body: "Em todas as atividades econômicas, nas etapas de projeto, utilização, fabricação, importação, comercialização, exposição e cessão a qualquer título." },
            { icon: "2", title: "Normas de apoio", body: "Quando a NR-12 não detalha o caso, valem normas técnicas oficiais, normas internacionais e normas europeias tipo C harmonizadas." },
            { icon: "3", title: "Antes de operar", body: "A capacitação é obrigatória antes da operação. Sem ela, a máquina não é liberada para o trabalhador." }
          ],
          note: { label: "Lembrete", text: "A norma começa no projeto da máquina e segue até o uso no posto de trabalho." }
        },
        {
          id: "nr12-m1-eixos-1",
          type: "content",
          fit: true,
          kicker: "Anexo II",
          title: "Capacitação obrigatória, itens a até e",
          body: "O Anexo II fixa o conteúdo programático. Estes são os cinco primeiros eixos.",
          items: [
            { n: "a", title: "Riscos e proteções", text: "Descrever e identificar os riscos da máquina e as proteções específicas de cada um." },
            { n: "b", title: "Como a proteção funciona", text: "Entender o funcionamento das proteções e o motivo de usá-las." },
            { n: "c", title: "Quem pode remover", text: "Saber em que circunstância uma proteção sai e quem tem autorização para removê-la." },
            { n: "d", title: "Proteção danificada", text: "Se a proteção falhar ou quebrar, o supervisor é acionado na hora. O operador não segue com a máquina aberta." },
            { n: "e", title: "Princípios de segurança", text: "Conhecer os princípios fundamentais de segurança na máquina." }
          ]
        },
        {
          id: "nr12-m1-eixos-2",
          type: "content",
          fit: true,
          kicker: "Anexo II",
          title: "Capacitação obrigatória, itens f até i",
          body: "Os quatro eixos seguintes fecham o programa legal da capacitação.",
          items: [
            { n: "f", title: "Tipos de risco", text: "Proteção contra riscos mecânicos, elétricos e outros riscos relevantes da máquina." },
            { n: "g", title: "Método seguro", text: "O método de trabalho seguro da operação, do começo ao fim do ciclo." },
            { n: "h", title: "Permissão de trabalho", text: "Quando a tarefa exige permissão de trabalho e quem autoriza." },
            { n: "i", title: "Bloqueio", text: "Sistema de bloqueio do funcionamento durante inspeção, limpeza, lubrificação e manutenção." }
          ],
          note: { label: "Anexo II", text: "São nove eixos, de a até i. A capacitação só está completa quando os nove foram ensinados." }
        },
        {
          id: "nr12-m1-anexos-1",
          type: "content",
          fit: true,
          kicker: "Anexos I a VI",
          title: "Como a NR-12 se organiza",
          body: "Além do texto principal, a norma tem doze anexos. A primeira metade cobre dispositivos, capacitação e alguns setores.",
          items: [
            { n: "I", title: "Detectores optoeletrônicos", text: "Cortinas de luz e sensores que param a máquina quando alguém entra na zona de risco." },
            { n: "II", title: "Capacitação", text: "O programa obrigatório de treinamento, com os nove eixos." },
            { n: "III", title: "Meios de acesso", text: "Escadas, plataformas e passarelas permanentes de máquinas." },
            { n: "IV", title: "Glossário", text: "O significado dos termos usados na norma." },
            { n: "V", title: "Motosserras", text: "Requisitos específicos desse equipamento." },
            { n: "VI", title: "Panificação e confeitaria", text: "Máquinas típicas de padaria e confeitaria." }
          ]
        },
        {
          id: "nr12-m1-anexos-2",
          type: "content",
          fit: true,
          kicker: "Anexos VII a XII",
          title: "Setores e equipamentos específicos",
          body: "A segunda metade dos anexos trata de outros ramos e de máquinas com regra própria.",
          items: [
            { n: "VII", title: "Açougue e alimentação", text: "Açougue, mercearia, bares e restaurantes." },
            { n: "VIII", title: "Prensas e similares", text: "Prensas e equipamentos semelhantes." },
            { n: "IX", title: "Injetora de plásticos", text: "Máquinas injetoras de materiais plásticos." },
            { n: "X", title: "Calçados e afins", text: "Máquinas da indústria de calçados." },
            { n: "XI", title: "Uso agrícola e florestal", text: "Máquinas e implementos agrícolas e florestais." },
            { n: "XII", title: "Guindar e altura", text: "Equipamentos de guindar para elevação de pessoas e trabalho em altura." }
          ]
        },
        {
          id: "nr12-m1-excecoes",
          type: "content",
          fit: true,
          kicker: "Item 12.1.4",
          title: "Onde a NR-12 não se aplica",
          body: "O subitem 12.1.4 lista o que fica fora da norma. Fora da lista, a NR-12 continua valendo.",
          items: [
            { n: "a", title: "Tração animal", text: "Máquinas impulsionadas por bois, cavalos ou outro animal. Exemplo: carroça e arado." },
            { n: "b", title: "Força humana", text: "Equipamentos movidos só pela força da pessoa, como paleteira manual, transpaleteira manual e carro de transporte." },
            { n: "c", title: "Museu e feira", text: "Peças históricas ou antiguidades em museu, feira ou evento, sem fim produtivo, com segurança para expositores e visitantes." },
            { n: "d", title: "Eletrodoméstico", text: "Equipamento eletrodoméstico com selo do INMETRO, como fogão, geladeira, ventilador ou aspirador." },
            { n: "e", title: "Estático", text: "Equipamento que não tem movimento de trabalho, como caldeira, vaso de pressão, tanque e tubulação." },
            { n: "f", title: "Ferramenta portátil", text: "Ferramenta elétrica portátil ou transportável que cumpra norma técnica tipo C, nacional ou internacional. Exemplo: furadeira, tico-tico e tupia manual." },
            { n: "g", title: "Certificado INMETRO", text: "Máquina certificada pelo INMETRO que atenda a todos os requisitos técnicos de segurança construtiva." }
          ],
          note: { label: "Atenção", text: "A rebordadeira automática de produção não entra nessas alíneas. Ela permanece no regime da NR-12." }
        },
        {
          id: "nr12-m1-desafio",
          type: "quiz-intro",
          title: "A NR-12 se aplica?",
          body: "Três situações. Acerte no mínimo <strong>2</strong> de <strong>3</strong> para concluir o módulo.",
          count: 3,
          minCorrect: 2,
          icon: "🎯"
        },
        {
          id: "nr12-m1-p1",
          type: "question",
          icon: "🚜",
          question: "Qual equipamento está fora da NR-12 pelo item 12.1.4?",
          alternatives: [
            { id: "a", text: "Rebordadeira automática usada na produção de painéis de MDF", correct: false },
            { id: "b", text: "Paleteira manual, movida só pela força de quem empurra", correct: true },
            { id: "c", text: "Serra de painel motorizada da marcenaria", correct: false },
            { id: "d", text: "Qualquer máquina importada, mesmo em uso produtivo", correct: false }
          ],
          explanation: "A alínea b exclui máquinas e equipamentos acionados por força humana. A rebordadeira automática de produção continua na NR-12.",
          review: "A exceção da força humana"
        },
        {
          id: "nr12-m1-p2",
          type: "question",
          icon: "📋",
          question: "O Anexo II da NR-12 trata de quê?",
          alternatives: [
            { id: "a", text: "Do glossário dos termos da norma", correct: false },
            { id: "b", text: "Da capacitação obrigatória, com nove eixos de a até i", correct: true },
            { id: "c", text: "Só de motosserras e equipamentos agrícolas", correct: false },
            { id: "d", text: "Dos meios de acesso permanentes, como escadas e plataformas", correct: false }
          ],
          explanation: "O Anexo II é o da capacitação. O glossário é o Anexo IV e os meios de acesso são o Anexo III.",
          review: "O papel do Anexo II"
        },
        {
          id: "nr12-m1-p3",
          type: "question",
          icon: "⚠️",
          question: "A proteção da máquina quebrou no meio do turno. O que a capacitação manda fazer?",
          alternatives: [
            { id: "a", text: "Seguir produzindo e avisar só no fim do expediente", correct: false },
            { id: "b", text: "Retirar a proteção e operar com a área aberta", correct: false },
            { id: "c", text: "Acionar o supervisor na hora e não seguir com a proteção danificada", correct: true },
            { id: "d", text: "Trocar a proteção por conta própria, sem autorização", correct: false }
          ],
          explanation: "O item d do Anexo II pede o acionamento imediato do supervisor quando a proteção falha ou sofre dano.",
          review: "Falha de proteção"
        }
      ]
    },
    {
      id: 2,
      title: "Anatomia, Tipos e Componentes da Máquina Rebordadeira",
      objective: "Reconhecer a rebordadeira, a diferença entre o modelo manual e o automático e cada grupo de trabalho da máquina.",
      titleUnlock: {
        title: "ANATOMIA DA MÁQUINA",
        body: "Você nomeia os grupos da rebordadeira automática e sabe o que cada um faz na fita e no painel.",
        icon: "⚙️"
      },
      screens: [
        {
          id: "nr12-m2-capa",
          type: "cover",
          icon: "⚙️",
          title: "Módulo 2 — A máquina rebordadeira",
          subtitle: "Definição, modelo manual e automático, e os grupos mecânicos do equipamento."
        },
        {
          id: "nr12-m2-definicao",
          type: "content",
          fit: true,
          kicker: "Conceito",
          title: "Máquina e rebordadeira",
          body: "Máquina é um dispositivo artificial que converte energia para uma finalidade definida. A rebordadeira, ou coladeira de borda, é um equipamento eletropneumático, manual ou automático.",
          cards: [
            { icon: "1", title: "O que ela faz", body: "Cola, destopa, refila e pole a fita de borda no canto da chapa." },
            { icon: "2", title: "Materiais da fita", body: "PVC, ABS, melamina ou lâmina de madeira, em espessuras diferentes." },
            { icon: "3", title: "A chapa", body: "O acabamento é feito em painéis de madeira, em especial MDF e MDP." }
          ],
          quote: "A fita entra de um lado. O canto acabado sai do outro, depois de colar, cortar, refilar, raspar e polir."
        },
        {
          id: "nr12-m2-tipos",
          type: "content",
          fit: true,
          kicker: "Dois modelos",
          title: "Manual e automática",
          cards: [
            { icon: "🖐️", title: "Manual", body: "A peça avança na mão do operador. O acionamento é por alavanca, com o aplicador de cola em bancada aberta. A mecânica é mais simples: alavanca de corte, rolo de fita e mesa." },
            { icon: "🔄", title: "Automática", body: "A máquina puxa o painel. Tem mesa, esteira motorizada, exaustão de resíduos e grupos em sequência: corte e acabamento, um depois do outro. Referência de vista: modelo Baldan CB-5, frente fechada e traseira com os grupos à mostra." }
          ],
          note: { label: "Este curso", text: "O foco da operação é a rebordadeira automática. O modelo manual entra só para comparar a construção." }
        },
        {
          id: "nr12-m2-grupos-1",
          type: "content",
          fit: true,
          kicker: "Entrada da peça",
          title: "Do painel até a cola",
          body: "A chapa entra pela mesa e a fita desce da bobina até o coleiro.",
          items: [
            { n: "1", title: "Mesa e esteira", text: "Sustentam o MDF e fazem o avanço contínuo do painel." },
            { n: "2", title: "Painel de comando", text: "Onde se liga cada grupo e se lê o estado da máquina." },
            { n: "3", title: "Bobina e guia da fita", text: "A bobina guarda o rolo. A guia conduz a fita até o ponto de colagem." },
            { n: "4", title: "Rolo estabilizador e puxador", text: "Mantêm a fita no eixo e puxam o material sem folga nem tranco." },
            { n: "5", title: "Caixa coleiro", text: "Tanque de cola e eixo aplicador. É aqui que a fita recebe a cola quente." },
            { n: "6", title: "Suporte da faca", text: "Faz o corte inicial da fita no comprimento da peça." },
            { n: "7", title: "Conjunto prensor", text: "Roletes de pressão que assentam a fita no canto do painel." }
          ]
        },
        {
          id: "nr12-m2-grupos-2",
          type: "content",
          fit: true,
          kicker: "Acabamento",
          title: "Do corte ao pó",
          body: "Depois da cola, os grupos de usinagem fecham o acabamento. Em volta deles ficam os apoios de ar, energia e exaustão.",
          items: [
            { n: "1", title: "Destopador", text: "Corta o excesso da fita no topo dianteiro e no topo traseiro do painel." },
            { n: "2", title: "Refilador", text: "Tira o excesso longitudinal da fita, na face de cima e na de baixo." },
            { n: "3", title: "Raspadores", text: "O superior e o inferior fazem a raspagem fina, entre os roletes, para o canto ficar no esquadro." },
            { n: "4", title: "Polidor", text: "Escovas ou discos dão brilho e o acabamento final da borda." },
            { n: "5", title: "Pistola de ar", text: "Apoio operacional e limpeza localizada com ar comprimido." },
            { n: "6", title: "Chave geral", text: "Seccionadora rotativa. Corta a alimentação elétrica da máquina." },
            { n: "7", title: "Saída de pó", text: "Bocal e tubulação ligados ao coletor ou ao sistema de exaustão." }
          ]
        },
        {
          id: "nr12-m2-desafio",
          type: "quiz-intro",
          title: "Qual grupo é esse?",
          body: "Três perguntas sobre a máquina. Acerte no mínimo <strong>2</strong> de <strong>3</strong>.",
          count: 3,
          minCorrect: 2,
          icon: "🎯"
        },
        {
          id: "nr12-m2-p1",
          type: "question",
          icon: "🔄",
          question: "O que diferencia a rebordadeira automática da manual?",
          alternatives: [
            { id: "a", text: "A automática só cola fita de tecido e a manual cola PVC", correct: false },
            { id: "b", text: "A automática tem esteira motorizada e grupos em sequência; a manual avança a peça na mão, com alavanca", correct: true },
            { id: "c", text: "A manual tem exaustão e a automática não tem", correct: false },
            { id: "d", text: "As duas operam do mesmo jeito; muda só a cor da carcaça", correct: false }
          ],
          explanation: "No modelo manual a peça é empurrada pelo operador, com alavanca e bancada aberta. No automático a esteira puxa o painel e os grupos trabalham em sequência.",
          review: "Manual e automática"
        },
        {
          id: "nr12-m2-p2",
          type: "question",
          icon: "✂️",
          question: "Qual conjunto corta a fita nos topos dianteiro e traseiro do painel?",
          alternatives: [
            { id: "a", text: "Conjunto polidor", correct: false },
            { id: "b", text: "Caixa coleiro", correct: false },
            { id: "c", text: "Conjunto destopador", correct: true },
            { id: "d", text: "Rolo estabilizador", correct: false }
          ],
          explanation: "O destopador corta as pontas da fita. O refilador tira o excesso no comprimento. O polidor dá o brilho final.",
          review: "A função do destopador"
        },
        {
          id: "nr12-m2-p3",
          type: "question",
          icon: "🧴",
          question: "Onde a cola quente é aplicada na fita?",
          alternatives: [
            { id: "a", text: "Na caixa coleiro, no tanque e no eixo aplicador", correct: true },
            { id: "b", text: "No bocal de saída de pó", correct: false },
            { id: "c", text: "Na chave geral seccionadora", correct: false },
            { id: "d", text: "Somente nos raspadores superior e inferior", correct: false }
          ],
          explanation: "A caixa coleiro guarda a cola e o eixo aplicador a deposita na fita. Os raspadores só fazem o acabamento depois da colagem.",
          review: "A caixa coleiro"
        }
      ]
    },
    {
      id: 3,
      title: "Procedimentos de Partida, Desligamento e Regulagens Técnicas",
      objective: "Ligar e desligar os painéis na ordem certa, programar a temperatura da cola e regular prensor, fita e destopador.",
      titleUnlock: {
        title: "PARTIDA E REGULAGEM",
        body: "Você protege o inversor na partida e na parada e calibra cola, prensor, fita e destopador.",
        icon: "🎛️"
      },
      screens: [
        {
          id: "nr12-m3-capa",
          type: "cover",
          icon: "🎛️",
          title: "Módulo 3 — Partida e regulagem",
          subtitle: "Painéis Verry e Baldan, temperatura da cola, prensor, fita e destopador."
        },
        {
          id: "nr12-m3-verry",
          type: "content",
          fit: true,
          kicker: "Verry Top Max Golden",
          title: "Como ligar o painel",
          body: "A sequência é fixa. Pular etapa deixa a cola crua ou força o grupo de corte.",
          items: [
            { n: "1", title: "Chave geral", text: "Ligue a chave geral de alimentação." },
            { n: "2", title: "Emergência", text: "Confira se o botão de emergência está desarmado." },
            { n: "3", title: "Pirômetro", text: "Ligue o pirômetro digital e espere a temperatura programada. O tempo usual é de 10 a 15 minutos." },
            { n: "4", title: "Coleiro", text: "Acione o botão do coleiro por cerca de 5 minutos, para a cola homogeneizar no eixo." },
            { n: "5", title: "Grupos", text: "Só então ligue a esteira, o inversor, o refilador e o polidor." }
          ]
        },
        {
          id: "nr12-m3-inversor",
          type: "content",
          fit: true,
          kicker: "Alerta crítico",
          title: "A ordem do inversor",
          body: "O inversor de frequência comanda os motores de alta rotação. A ordem errada queima o inversor e os motores.",
          cards: [
            { icon: "▶", title: "Ao ligar", body: "Ligue o inversor sempre antes do refilador e do destopador." },
            { icon: "■", title: "Ao desligar", body: "Desligue primeiro o destopador, depois o refilador. Espere os motores pararem de girar. Só então desligue o inversor." }
          ],
          note: { label: "Consequência", text: "Descumprir essa ordem arrisca queima e dano severo no inversor e nos motores de alta frequência." }
        },
        {
          id: "nr12-m3-baldan-1",
          type: "content",
          fit: true,
          kicker: "Baldan CB-5",
          title: "Painel, itens A até E",
          items: [
            { n: "A", title: "LED vermelho", text: "Aceso indica falha do inversor ou inversor desarmado." },
            { n: "B", title: "Chave da cola", text: "Seletora rotativa que liga e desliga o aquecimento da cola." },
            { n: "C", title: "Temperatura", text: "Controlador digital da temperatura da cola." },
            { n: "D", title: "LED verde", text: "Acende quando a temperatura programada foi atingida. O coleiro está liberado para trabalhar." },
            { n: "E", title: "Emergência", text: "Botão de parada tipo cogumelo." }
          ]
        },
        {
          id: "nr12-m3-baldan-2",
          type: "content",
          fit: true,
          kicker: "Baldan CB-5",
          title: "Painel, itens F até J",
          body: "Luz branca piscando, entre o verde e o vermelho, significa disjuntor do motor desarmado. Não force o botão: o grupo não está pronto.",
          items: [
            { n: "F", title: "Coleiro", text: "Liga e desliga o coleiro. Só acione com o LED D aceso." },
            { n: "G", title: "Esteira", text: "Liga e desliga o avanço do painel." },
            { n: "H", title: "Destopador", text: "Liga e desliga o corte dos topos." },
            { n: "I", title: "Refilador", text: "Liga e desliga o refilo longitudinal." },
            { n: "J", title: "Polidor", text: "Liga e desliga o acabamento final." }
          ]
        },
        {
          id: "nr12-m3-temperatura",
          type: "content",
          fit: true,
          kicker: "Coleiro",
          title: "Temperatura da cola",
          body: "A temperatura depende da camada de cola, do tanque, da combinação cola, fita e painel, e da indicação dos fabricantes.",
          stats: [
            { num: "140 a 160°C", label: "Cola incolor na Baldan CB-5" },
            { num: "160 a 180°C", label: "Cola branca na Baldan CB-5" },
            { num: "até 200°C", label: "Capacidade da Verry Top Max Golden" }
          ],
          note: { label: "Padrão de fábrica", text: "Estes valores são o ponto de partida da Baldan CB-5. Confirme com o fabricante da cola antes de subir a temperatura." }
        },
        {
          id: "nr12-m3-inova",
          type: "content",
          fit: true,
          kicker: "Controlador Inova",
          title: "Programar a Baldan CB-5",
          items: [
            { n: "1", title: "PGM", text: "Aperte PGM. O visor pisca SP-T e mostra a temperatura atual." },
            { n: "2", title: "Ajuste", text: "Use mais e menos para chegar na temperatura de trabalho." },
            { n: "3", title: "Alarme", text: "Aperte PGM de novo para entrar em ALR e ajuste a temperatura de alarme." },
            { n: "4", title: "Gravar", text: "Aperte PGM outra vez para fixar." }
          ],
          note: { label: "Regra", text: "SP-T fica sempre 10°C acima de ALR. Exemplo: SP-T em 170°C e ALR em 160°C." }
        },
        {
          id: "nr12-m3-coel",
          type: "content",
          fit: true,
          kicker: "Coel TLK 48",
          title: "Programar a Verry",
          body: "No termostato Coel TLK 48 a memorização é curta.",
          items: [
            { n: "1", title: "Tecla P", text: "Pressione P para entrar no ajuste." },
            { n: "2", title: "Setas", text: "Suba ou desça o valor com as setas." },
            { n: "3", title: "Gravar", text: "Pressione P de novo para memorizar." }
          ],
          quote: "Exemplo: para sair de 180°C e trabalhar a 150°C, entre com P, desça com a seta e confirme com P."
        },
        {
          id: "nr12-m3-prensor",
          type: "content",
          fit: true,
          kicker: "Prensor",
          title: "Relógio conforme a espessura",
          body: "A altura se ajusta por alavanca ou pelo conjunto parafuso e porca, no sentido horário ou anti-horário. O relógio indicador mostra o valor.",
          stats: [
            { num: "00250", label: "MDF de 25 mm" },
            { num: "00180", label: "MDF de 18 mm" },
            { num: "00150", label: "MDF de 15 mm" },
            { num: "00100", label: "MDF de 10 mm" }
          ],
          note: { label: "Peça curta", text: "Se o MDF tiver menos de 200 mm de comprimento, reduza o relógio em 00010. No MDF de 25 mm, 00250 passa a 00240." }
        },
        {
          id: "nr12-m3-fita",
          type: "content",
          fit: true,
          kicker: "Guia e rolo",
          title: "Altura da fita",
          items: [
            { n: "1", title: "Guia", text: "Passe a fita na guia e mova os dois manípulos de alumínio até encostarem na fita." },
            { n: "2", title: "Folga", text: "A fita não pode ficar presa nem excessivamente pressionada pelos manípulos." },
            { n: "3", title: "Rolo estabilizador", text: "Encaixe a fita no rolo e gire a trava superior, horário ou anti-horário, até a altura certa." }
          ]
        },
        {
          id: "nr12-m3-destopo",
          type: "content",
          fit: true,
          kicker: "Destopador",
          title: "Corte e calibração",
          cards: [
            { icon: "📏", title: "Capacidade", body: "A lâmina corta fita de 0,45 mm a 3 mm de espessura." },
            { icon: "💨", title: "Ar comprimido", body: "O ar precisa ser industrial, tratado e sem água. Umidade no circuito pneumático falha o corte." },
            { icon: "↔️", title: "Alinhamento", body: "O painel entra alinhado na guia. Painel torto erra o corte e danifica o grupo." }
          ],
          items: [
            { n: "A", title: "Soltar", text: "Solte o parafuso de fixação A do motor, no conjunto superior ou no inferior." },
            { n: "B", title: "Avançar", text: "Gire o parafuso B para avançar ou recuar o motor até o topo da madeira." },
            { n: "C", title: "Travar", text: "Reaperte o parafuso A com firmeza antes de produzir." }
          ]
        },
        {
          id: "nr12-m3-desafio",
          type: "quiz-intro",
          title: "Partida certa?",
          body: "Três decisões de painel e regulagem. Acerte no mínimo <strong>2</strong> de <strong>3</strong>.",
          count: 3,
          minCorrect: 2,
          icon: "🎯"
        },
        {
          id: "nr12-m3-p1",
          type: "question",
          icon: "⚡",
          question: "Na hora de ligar refilador e destopador, o que vem antes?",
          alternatives: [
            { id: "a", text: "O inversor de frequência, sempre antes desses dois grupos", correct: true },
            { id: "b", text: "O polidor, e o inversor só no fim do turno", correct: false },
            { id: "c", text: "Tanto faz a ordem, desde que a esteira esteja desligada", correct: false },
            { id: "d", text: "O destopador primeiro e o inversor por último", correct: false }
          ],
          explanation: "Ao ligar, o inversor entra antes do refilador e do destopador. Ao desligar, a ordem se inverte: destopador, refilador, espera a parada e só então o inversor.",
          review: "A ordem do inversor"
        },
        {
          id: "nr12-m3-p2",
          type: "question",
          icon: "🌡️",
          question: "No controlador Inova, como ficam SP-T e ALR?",
          alternatives: [
            { id: "a", text: "Os dois no mesmo valor", correct: false },
            { id: "b", text: "ALR 10°C acima de SP-T", correct: false },
            { id: "c", text: "SP-T sempre 10°C acima de ALR, por exemplo 170°C e 160°C", correct: true },
            { id: "d", text: "SP-T em 100°C para qualquer cola", correct: false }
          ],
          explanation: "A temperatura de trabalho SP-T fica 10°C acima do alarme ALR. O exemplo de fábrica citado é 170°C e 160°C.",
          review: "SP-T e ALR"
        },
        {
          id: "nr12-m3-p3",
          type: "question",
          icon: "📏",
          question: "Uma peça de MDF de 25 mm tem menos de 200 mm de comprimento. O que muda no prensor?",
          alternatives: [
            { id: "a", text: "O relógio permanece em 00250", correct: false },
            { id: "b", text: "O relógio sai de 00250 e vai para 00240", correct: true },
            { id: "c", text: "O relógio vai para 00180, valor do MDF de 18 mm", correct: false },
            { id: "d", text: "Peça curta não usa prensor", correct: false }
          ],
          explanation: "Abaixo de 200 mm, reduza 00010 no valor da espessura. No MDF de 25 mm, 00250 vira 00240.",
          review: "Peça curta no prensor"
        }
      ]
    },
    {
      id: 4,
      title: "Gestão de Riscos, Proteções, Layout de Fábrica e Responsabilidades",
      objective: "Operar com as proteções no lugar, manter o layout livre, usar o EPI certo e cumprir os deveres da NR-12.",
      titleUnlock: {
        title: "CADA CUIDADO CONTA",
        body: "Você não abre a máquina energizada, não burla proteção e avisa a liderança quando algo falha.",
        icon: "🛡️"
      },
      screens: [
        {
          id: "nr12-m4-capa",
          type: "cover",
          icon: "🛡️",
          title: "Módulo 4 — Riscos e responsabilidades",
          subtitle: "Partes móveis, acesso ao setor, layout, EPI e deveres de quem opera."
        },
        {
          id: "nr12-m4-moveis",
          type: "content",
          fit: true,
          kicker: "Partes móveis",
          title: "O risco continua com a máquina aberta",
          body: "Dentro da rebordadeira há corte, prensagem e queimadura, mesmo numa tarefa simples como carregar a fita.",
          cards: [
            { icon: "1", title: "Energia zerada", body: "Nenhuma intervenção mecânica com o equipamento energizado. Limpeza e lubrificação só com a máquina desativada por completo." },
            { icon: "2", title: "Tampa traseira", body: "Colar chapa só com a tampa fechada. Esta máquina não tem intertravamento: abrir a tampa não para o movimento sozinho." },
            { icon: "3", title: "Quem entra", body: "Cliente, visitante e gente de outro setor não entram na área de corte. Porta fechada e placa visível." }
          ],
          note: { label: "Regra da tampa", text: "Tampa aberta e máquina ligada é operação proibida, não um atalho." }
        },
        {
          id: "nr12-m4-protecoes",
          type: "content",
          fit: true,
          kicker: "Proteções",
          title: "O que o operador não faz",
          items: [
            { icon: "🚫", title: "Não burlar", text: "É proibido remover ou anular proteção mecânica e dispositivo de segurança." },
            { icon: "👤", title: "Parada autorizada", text: "Parar a máquina para intervenção pede liberação prévia do supervisor ou do gestor da área." },
            { icon: "🔧", title: "Manutenção", text: "A preventiva é de quem a empresa autorizou tecnicamente. O operador não abre o reparo." },
            { icon: "📣", title: "Pane", text: "Defeito se comunica na hora à liderança, para a manutenção corretiva. O operador não intervém." },
            { icon: "📖", title: "Manual", text: "Testes e inspeções periódicos seguem o manual do fabricante." }
          ]
        },
        {
          id: "nr12-m4-layout",
          type: "content",
          fit: true,
          kicker: "Arranjo físico",
          title: "O posto em volta da máquina",
          items: [
            { icon: "📐", title: "Perímetro livre", text: "A coladeira fica desobstruída em toda a volta." },
            { icon: "↔️", title: "Distância", text: "Há afastamento entre a rebordadeira e as serras, seccionadora e esquadrejadeira, para operar e manter." },
            { icon: "🚶", title: "Circulação", text: "As vias de chapa de MDF são amplas, limpas e sem obstáculo." },
            { icon: "🧱", title: "Piso", text: "Piso resistente, nivelado, sem tropeço e sem escorregão." },
            { icon: "🧰", title: "Ferramentas", text: "Ferramenta fica em suporte ou local próprio, não em cima da máquina." },
            { icon: "⚓", title: "Fixação", text: "Máquina estacionária é chumbada. Máquina móvel tem rodízios, e pelo menos dois com trava." },
            { icon: "⛔", title: "Carga suspensa", text: "Não se movimenta carga por cima de posto de trabalho nem de via de pedestre." }
          ]
        },
        {
          id: "nr12-m4-epi",
          type: "content",
          fit: true,
          kicker: "EPI",
          title: "Proteção individual, junto da coletiva",
          body: "O EPI não substitui proteção de máquina. Ele entra quando a proteção coletiva não elimina o risco por completo.",
          cards: [
            { icon: "👢", title: "Calçado", body: "Calçado de segurança com biqueira e solado adequado ao piso." },
            { icon: "🧤", title: "Luvas", body: "Luvas tricotadas para manusear a chapa cortada, com palma que não escorregue." },
            { icon: "🎧", title: "Audição", body: "Protetor auricular tipo concha, o abafador." },
            { icon: "😷", title: "Poeira", body: "Máscara contra poeira de madeira e de MDF." }
          ],
          note: { label: "Ordem", text: "Primeiro a proteção da máquina e o layout. O EPI completa o que ainda resta de risco." }
        },
        {
          id: "nr12-m4-deveres",
          type: "content",
          fit: true,
          kicker: "Deveres",
          title: "O que a NR-12 cobra de quem opera",
          items: [
            { n: "1", title: "POP", text: "Cumprir o procedimento de abastecimento, operação, limpeza, manutenção, desativação e descarte." },
            { n: "2", title: "Aviso", text: "Comunicar na hora dano, desgaste ou retirada de proteção e de dispositivo de parada." },
            { n: "3", title: "Treino", text: "Comparecer e participar dos treinamentos de NR-12 do empregador." },
            { n: "4", title: "Cooperação", text: "Ajudar a manter as regras da norma no dia a dia, não só na aula." },
            { n: "5", title: "Proibição", text: "Operar a rebordadeira sem capacitação prévia na NR-12 é proibido." }
          ],
          quote: "Cada cuidado conta."
        },
        {
          id: "nr12-m4-desafio",
          type: "quiz-intro",
          title: "Pode operar assim?",
          body: "Três situações de turno. Acerte no mínimo <strong>2</strong> de <strong>3</strong>.",
          count: 3,
          minCorrect: 2,
          icon: "🎯"
        },
        {
          id: "nr12-m4-p1",
          type: "question",
          icon: "🚪",
          question: "A tampa traseira da rebordadeira está aberta. Dá para colar a chapa?",
          alternatives: [
            { id: "a", text: "Sim, porque a máquina para sozinha ao abrir a tampa", correct: false },
            { id: "b", text: "Sim, se a peça for curta e a velocidade estiver baixa", correct: false },
            { id: "c", text: "Não. A colagem só ocorre com a tampa fechada, pois não há intertravamento", correct: true },
            { id: "d", text: "Sim, desde que outro operador fique olhando a traseira", correct: false }
          ],
          explanation: "Esta máquina não interrompe o movimento ao abrir a tampa. Por isso a colagem só é permitida com a tampa traseira fechada.",
          review: "Tampa traseira"
        },
        {
          id: "nr12-m4-p2",
          type: "question",
          icon: "🦺",
          question: "Qual é o papel do EPI nesta operação?",
          alternatives: [
            { id: "a", text: "Substitui a tampa e as demais proteções da máquina", correct: false },
            { id: "b", text: "É medida complementar, usada junto das proteções coletivas", correct: true },
            { id: "c", text: "Só é obrigatório na manutenção, nunca na operação", correct: false },
            { id: "d", text: "Basta a máscara; calçado e abafador são opcionais", correct: false }
          ],
          explanation: "O EPI não elimina o risco no lugar da proteção coletiva. Calçado, luva tricotada, abafador e máscara de poeira completam o que a máquina ainda não elimina.",
          review: "EPI complementar"
        },
        {
          id: "nr12-m4-p3",
          type: "question",
          icon: "📣",
          question: "O refilador apresenta defeito no meio da peça. O que o operador faz?",
          alternatives: [
            { id: "a", text: "Abre a tampa e ajusta o motor com a máquina ligada", correct: false },
            { id: "b", text: "Remove a proteção para enxergar melhor e continua", correct: false },
            { id: "c", text: "Para, não intervém e comunica a liderança para a manutenção corretiva", correct: true },
            { id: "d", text: "Termina o lote e só então avisa, para não perder produção", correct: false }
          ],
          explanation: "Pane não é tarefa do operador. A comunicação é imediata e o reparo fica com a manutenção autorizada.",
          review: "Conduta na pane"
        },
        {
          id: "nr12-m4-final",
          type: "finale",
          kicker: "Conclusão",
          eyebrow: "Treinamento concluído",
          title: "Parabéns",
          body: "Você concluiu o treinamento NR-12 de operação da rebordadeira automática.",
          quote: "Cada cuidado conta.",
          chips: ["NR-12", "Rebordadeira automática", "Capacitação"]
        }
      ]
    }
  ]
};
