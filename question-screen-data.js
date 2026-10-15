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
          type: "video",
          kicker: "Vídeo",
          title: "Boas-Vindas e Fundamentos da NR 12",
          playerId: "panda-91c92ad1-003b-4707-905e-02ba9e0453dc",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=91c92ad1-003b-4707-905e-02ba9e0453dc"
        },
        {
          id: "nr12-m1-eixos-1",
          type: "video",
          kicker: "Vídeo",
          title: "Capacitação Obrigatória: Os 9 Eixos do Anexo II",
          playerId: "panda-f0fa0f34-5c86-43df-a1b1-6b1a9761c65a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=f0fa0f34-5c86-43df-a1b1-6b1a9761c65a"
        },
        {
          id: "nr12-m1-eixos-2",
          type: "content",
          fit: true,
          kicker: "Anexos · 1 de 2",
          title: "Disposição da NR 12 (Anexos)",
          body: "Anexos I a VI.",
          items: [
            { n: "I", title: "Detectores", text: "Requisitos para o uso de detectores de presença optoeletrônicos." },
            { n: "II", title: "Capacitação", text: "Conteúdo programático da capacitação." },
            { n: "III", title: "Acesso", text: "Meios de acesso a máquinas e equipamentos." },
            { n: "IV", title: "Glossário", text: "Glossário." },
            { n: "V", title: "Motosserras", text: "Motosserras." },
            { n: "VI", title: "Panificação", text: "Máquinas para panificação e confeitaria." }
          ]
        },
        {
          id: "nr12-m1-eixos-3",
          type: "content",
          fit: true,
          kicker: "Anexos · 2 de 2",
          title: "Disposição da NR 12 (Anexos)",
          body: "Anexos VII a XII.",
          items: [
            { n: "VII", title: "Alimentação", text: "Máquinas para açougue, mercearia, bares e restaurantes." },
            { n: "VIII", title: "Prensas", text: "Prensas e similares." },
            { n: "IX", title: "Plásticos", text: "Injetora de materiais plásticos." },
            { n: "X", title: "Calçados", text: "Máquinas para fabricação de calçados e afins." },
            { n: "XI", title: "Agrícola", text: "Máquinas e implementos para uso agrícola e florestal." },
            { n: "XII", title: "Guindar", text: "Equipamentos de guindar para elevação de pessoas e realização de trabalho em altura." }
          ]
        },
        {
          id: "nr12-m1-excecoes",
          type: "video",
          kicker: "Vídeo",
          title: "Onde a NR-12 não se aplica",
          playerId: "panda-7a94601d-eb52-47c6-ba72-5c42b7361f1b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7a94601d-eb52-47c6-ba72-5c42b7361f1b"
        },
        {
          id: "nr12-m1-excecoes-2",
          type: "video",
          kicker: "Vídeo",
          title: "Onde a NR-12 não se aplica, parte 2",
          playerId: "panda-fb1601e0-2599-40ae-813c-54bd341a9afd",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fb1601e0-2599-40ae-813c-54bd341a9afd"
        },
        {
          id: "nr12-m1-desafio",
          type: "quiz-intro",
          title: "Aplica ou não aplica?",
          body: "Cinco casos dos vídeos deste módulo. Jogue cada um em <strong>Aplica</strong> ou <strong>Não se aplica</strong>. Acerte no mínimo <strong>4</strong> de <strong>5</strong>.",
          count: 5,
          minCorrect: 4,
          icon: "🎯"
        },
        {
          id: "nr12-m1-sorteio",
          type: "sort",
          title: "Aplica ou não aplica?",
          body: "Use só o que os vídeos do módulo 1 ensinaram.",
          time: 45,
          minCorrect: 4,
          review: "A rebordadeira na NR-12 e as principais exceções do item 12.1.4",
          left: { id: "nok", label: "Não se aplica", icon: "⛔" },
          right: { id: "ok", label: "Aplica", icon: "✅" },
          items: [
            {
              text: "Rebordadeira motorizada em operação no chão de fábrica.",
              bin: "ok",
              hint: "O treinamento é desta máquina. A NR-12 vale na operação no chão de fábrica."
            },
            {
              text: "Arado ou carroça movidos por tração animal.",
              bin: "nok",
              hint: "Primeira exceção do item 12.1.4: tração animal."
            },
            {
              text: "Paleteira manual acionada só por força humana.",
              bin: "nok",
              hint: "Segunda exceção: força humana, sem motorização."
            },
            {
              text: "Eletrodoméstico com selo do INMETRO.",
              bin: "nok",
              hint: "Quarta exceção: eletrodoméstico com selo do INMETRO."
            },
            {
              text: "Furadeira ou tupia manual que cumpre norma do Tipo C.",
              bin: "nok",
              hint: "Sexta exceção: ferramenta elétrica portátil na norma Tipo C."
            }
          ]
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
          type: "video",
          kicker: "Vídeo",
          title: "O que é a Rebordadeira e suas Aplicações",
          playerId: "panda-99dfe241-f367-4bdb-abc8-9a137bae0d5a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=99dfe241-f367-4bdb-abc8-9a137bae0d5a"
        },
        {
          id: "nr12-m2-tipos",
          type: "video",
          kicker: "Vídeo",
          title: "Rebordadeira Manual versus Automática",
          playerId: "panda-040a0cac-0362-44fe-9481-29d2c9aa1a7f",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=040a0cac-0362-44fe-9481-29d2c9aa1a7f"
        },
        {
          id: "nr12-m2-componentes",
          type: "content",
          title: "Componentes rebordadeira automática",
          stack: [
            {
              image: "assets/fotos/REBORDADEIRA AUTOMATICA.png",
              imageAlt: "Conjunto refilador, conjunto destopador, guia de fita e coleiro"
            },
            {
              image: "assets/fotos/REBORDADEIRA AUTOMATICA 2.png",
              imageAlt: "Suporte de fita, raspador superior, raspador inferior, pistola de ar, chave geral e saída de pó"
            },
            {
              image: "assets/fotos/REBORDADEIRA AUTOMATICA 3.png",
              imageAlt: "Vista interna com conjunto polidor, refilador, destopador, prensor, suporte da faca, caixa coleiro e puxador da fita"
            }
          ]
        },
        {
          id: "nr12-m2-grupos-1",
          type: "video",
          kicker: "Vídeo",
          title: "O Ciclo de Entrada: Fita, Cola e Pressão",
          playerId: "panda-4b0ed609-90f8-4a7b-b3a4-1188d32a40c7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4b0ed609-90f8-4a7b-b3a4-1188d32a40c7"
        },
        {
          id: "nr12-m2-grupos-2",
          type: "video",
          kicker: "Vídeo",
          title: "Usinagem e Acabamento: Destopador, Refilador e Polidor",
          playerId: "panda-c6ecfd6e-e9df-4a87-831e-28a79eda7d53",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c6ecfd6e-e9df-4a87-831e-28a79eda7d53"
        },
        {
          id: "nr12-m2-raspadores",
          type: "video",
          kicker: "Vídeo",
          title: "Raspadores e Acessórios Periféricos",
          playerId: "panda-ef298dc1-2133-485a-8f05-49b00f581b5b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=ef298dc1-2133-485a-8f05-49b00f581b5b"
        },
        {
          id: "nr12-m2-desafio",
          type: "quiz-intro",
          title: "A máquina nos vídeos",
          body: "Quatro perguntas dos vídeos deste módulo. Acerte no mínimo <strong>3</strong> de <strong>4</strong>.",
          count: 4,
          minCorrect: 3,
          icon: "🎯"
        },
        {
          id: "nr12-m2-q2",
          type: "question",
          icon: "🔄",
          image: "assets/fotos/M2I1.png",
          imageAlt: "Rebordadeira automática com esteira ao lado da rebordadeira manual de bancada",
          question: "Qual é a diferença entre a rebordadeira manual e a automática Baldan CB-5?",
          alternatives: [
            { id: "a", text: "Na manual o operador empurra o painel e corta com alavanca. Na automática a esteira motorizada puxa a madeira e os grupos de corte ficam na traseira", correct: true },
            { id: "b", text: "Na automática o operador empurra a peça na bancada aberta e a manual tem esteira motorizada", correct: false },
            { id: "c", text: "A automática serve só para peças curvas e a manual é a linha contínua", correct: false },
            { id: "d", text: "As duas trabalham do mesmo jeito. Muda só a cabine frontal", correct: false }
          ],
          explanation: "A manual é bancada aberta: o operador empurra o painel no rolo de cola e aciona a alavanca. A Baldan CB-5 tem esteira rolante, cabine frontal e os grupos de corte alinhados na traseira.",
          review: "Manual e automática"
        },
        {
          id: "nr12-m2-q3",
          type: "question",
          icon: "🧴",
          image: "assets/fotos/M2I2.png",
          imageAlt: "Fita saindo da bobina e seguindo para o painel na esteira da rebordadeira",
          question: "O que acontece na caixa coleiro?",
          alternatives: [
            { id: "a", text: "A faca corta a fita no tamanho da peça", correct: false },
            { id: "b", text: "Os roletes apertam a fita no MDF", correct: false },
            { id: "c", text: "A cola quente é fundida e passa para a madeira pelo eixo aplicador", correct: true },
            { id: "d", text: "Os discos de escova lustram a fita", correct: false }
          ],
          explanation: "A fita sai da bobina, passa pela guia e pelo estabilizador e o puxador a puxa. A faca corta o tamanho. Na caixa coleiro a cola quente vai para a madeira pelo eixo aplicador. Depois o prensor assenta a fita.",
          review: "A caixa coleiro"
        },
        {
          id: "nr12-m2-q4",
          type: "question",
          icon: "✂️",
          image: "assets/fotos/M2I3.png",
          imageAlt: "Conjunto de corte retirando as sobras de fita no início e no fim do painel",
          question: "Qual conjunto corta as sobras de fita no início e no fim do painel?",
          alternatives: [
            { id: "a", text: "O conjunto polidor, com discos de escova", correct: false },
            { id: "b", text: "O conjunto destopador, com serras de alta velocidade", correct: true },
            { id: "c", text: "O conjunto refilador, que tira o excesso em cima e embaixo", correct: false },
            { id: "d", text: "O conjunto prensor, com os roletes de pressão", correct: false }
          ],
          explanation: "O destopador corta as pontas. O refilador usina o excesso de cima e de baixo. O polidor limpa o resto de cola e lustra a fita.",
          review: "O destopador"
        },
        {
          id: "nr12-m2-q5",
          type: "question",
          icon: "🧽",
          image: "assets/fotos/M2I4.png",
          imageAlt: "Raspadores retirando a rebarba fina da fita na borda do painel",
          question: "Qual é a função dos raspadores superior e inferior?",
          alternatives: [
            { id: "a", text: "Ligar e desligar a alimentação elétrica da máquina", correct: false },
            { id: "b", text: "Aspirar cavacos pelo bocal de saída de pó", correct: false },
            { id: "c", text: "Fazer a raspagem fina das rebarbas depois do refilador", correct: true },
            { id: "d", text: "Fundir a cola antes do conjunto prensor", correct: false }
          ],
          explanation: "Os raspadores tiram a rebarba fina depois do refilador. A chave geral corta a energia, a saída de pó vai para a exaustão e a pistola de ar limpa a bancada.",
          review: "Os raspadores"
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
