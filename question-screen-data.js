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
              id: "c1",
              text: "Rebordadeira motorizada em operação no chão de fábrica.",
              bin: "ok",
              hint: "O treinamento é desta máquina. A NR-12 vale na operação no chão de fábrica."
            },
            {
              id: "c2",
              text: "Arado ou carroça movidos por tração animal.",
              bin: "nok",
              hint: "Primeira exceção do item 12.1.4: tração animal."
            },
            {
              id: "c3",
              text: "Paleteira manual acionada só por força humana.",
              bin: "nok",
              hint: "Segunda exceção: força humana, sem motorização."
            },
            {
              id: "c4",
              text: "Eletrodoméstico com selo do INMETRO.",
              bin: "nok",
              hint: "Quarta exceção: eletrodoméstico com selo do INMETRO."
            },
            {
              id: "c5",
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
          image: "assets/fotos/capa-modulo2.png",
          imageAlt: "Operadora ao lado da rebordadeira automática no galpão",
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
          image: "assets/fotos/m2i1.png",
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
          image: "assets/fotos/m2i2.png",
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
          image: "assets/fotos/m2i3.png",
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
          image: "assets/fotos/capa-modulo3.png",
          imageAlt: "Rebordadeira automática no galpão, com a tampa aberta e a fita na entrada",
          title: "Módulo 3 — Partida e regulagem",
          subtitle: "Painéis Verry e Baldan, temperatura da cola, prensor, fita e destopador."
        },
        {
          id: "nr12-m3-verry",
          type: "video",
          kicker: "Vídeo",
          title: "Ligação do Painel Verry e Regra de Ouro do Inversor",
          playerId: "panda-e8ab4c09-a47d-4631-8222-59c0781079a0",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e8ab4c09-a47d-4631-8222-59c0781079a0"
        },
        {
          id: "nr12-m3-inversor",
          type: "video",
          kicker: "Vídeo",
          title: "Comandos e Sinalizações do Painel Baldan CB-5",
          playerId: "panda-fa9b7e56-b90c-417f-9298-0bb9ab516fd2",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fa9b7e56-b90c-417f-9298-0bb9ab516fd2"
        },
        {
          id: "nr12-m3-baldan-1",
          type: "video",
          kicker: "Vídeo",
          title: "Temperatura da Cola e Ajuste dos Controladores",
          playerId: "panda-432e7558-53bc-4add-9961-fca021fd0001",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=432e7558-53bc-4add-9961-fca021fd0001"
        },
        {
          id: "nr12-m3-baldan-2",
          type: "content",
          layout: "side",
          kicker: "Prensor",
          title: "Regulagem do prensor",
          body: "Para regular o prensor, observe a espessura do painel. A regulagem é por alavanca ou por parafusos e porcas, conforme o modelo, girando no sentido horário ou anti-horário. O relógio indicador de passo marca a altura.",
          images: [
            {
              image: "assets/fotos/alavanca.png",
              imageAlt: "Relógio indicador acoplado à alavanca de regulagem do prensor",
              caption: "Regulagem por alavanca"
            },
            {
              image: "assets/fotos/parafuso.png",
              imageAlt: "Relógio indicador acoplado ao parafuso de regulagem do prensor",
              caption: "Regulagem por parafuso"
            }
          ],
          stats: [
            { num: "00250", label: "MDF 25 mm" },
            { num: "00180", label: "MDF 18 mm" },
            { num: "00150", label: "MDF 15 mm" },
            { num: "00100", label: "MDF 10 mm" }
          ],
          note: { label: "Abaixo de 200 mm", text: "Com MDF abaixo de 200 mm de comprimento, diminua a regulagem em 00010. No MDF de 25 mm, o relógio sai de 00250 e vai para 00240." }
        },
        {
          id: "nr12-m3-temperatura",
          type: "video",
          kicker: "Vídeo",
          title: "Ajuste da Guia de Fita e do Rolo Estabilizador",
          playerId: "panda-fc50f71b-a3c2-4bc4-b231-ad7c7cbb45db",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fc50f71b-a3c2-4bc4-b231-ad7c7cbb45db"
        },
        {
          id: "nr12-m3-inova",
          type: "content",
          layout: "side",
          title: "Destopador",
          body: "O destopador já vem regulado de fábrica e corta a fita de borda de 0,45 a 3 mm de espessura. Para funcionar, trabalhe com ar comprimido tratado e isento de água, e faça a peça entrar sempre alinhada na guia de entrada.",
          note: { label: "Alinhamento", text: "Posicione o MDF na guia de entrada para alinhar a peça com os grupos de trabalho. Se o MDF entrar desalinhado, pode comprometer o funcionamento do destopador." },
          images: [
            {
              image: "assets/fotos/destopador 1.png",
              imageAlt: "Conjunto destopador com válvulas, manômetros e mangueiras de ar"
            }
          ]
        },
        {
          id: "nr12-m3-coel",
          type: "content",
          layout: "side",
          title: "Regulagem do destopador",
          body: "Desaperte o parafuso A, que prende o sistema do motor inferior do destopador. Gire o parafuso B para avançar ou recuar o motor e regular conforme o topo da madeira. Depois da regulagem, aperte o parafuso A de novo. No motor superior, repita o mesmo procedimento.",
          images: [
            {
              image: "assets/fotos/destopador 2.png",
              imageAlt: "Parafuso A de fixação e parafuso B de avanço do motor do destopador"
            }
          ]
        },
        {
          id: "nr12-m3-desafio",
          type: "quiz-intro",
          title: "Verdadeiro ou falso?",
          body: "Quatro frases dos vídeos deste módulo. Jogue cada uma em <strong>Verdadeiro</strong> ou <strong>Falso</strong>. Acerte no mínimo <strong>3</strong> de <strong>4</strong>.",
          count: 4,
          minCorrect: 3,
          icon: "🎯"
        },
        {
          id: "nr12-m3-vf",
          type: "sort",
          title: "Verdadeiro ou falso?",
          body: "Use só o que os vídeos do módulo 3 ensinaram.",
          time: 40,
          minCorrect: 3,
          review: "Partida, cola, prensor e destopador",
          left: { id: "nok", label: "Falso", icon: "✕" },
          right: { id: "ok", label: "Verdadeiro", icon: "✓" },
          items: [
            {
              id: "c1",
              text: "Ao ligar, o inversor entra antes do refilador e do destopador.",
              bin: "ok",
              hint: "Regra de ouro: o inversor liga antes desses grupos. Na parada, a ordem se inverte."
            },
            {
              id: "c2",
              text: "No Inova, o ALR fica 10 graus acima do SP-T.",
              bin: "nok",
              hint: "É o contrário. SP-T fica 10 graus acima do ALR. Exemplo: 170 e 160."
            },
            {
              id: "c3",
              text: "MDF de 25 mm com menos de 200 mm de comprimento continua em 00250.",
              bin: "nok",
              hint: "Peça curta diminui 00010. O relógio sai de 00250 e vai para 00240."
            },
            {
              id: "c4",
              text: "No destopador, solta o parafuso A, gira o B e aperta o A de novo.",
              bin: "ok",
              hint: "O A fixa o motor. O B avança ou recua conforme o topo da madeira. Vale para o motor de cima e o de baixo."
            }
          ]
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
          image: "assets/fotos/capa-modulo4.png",
          imageAlt: "Operadora de EPI ao lado da rebordadeira, com capacete, óculos, luvas e botina sobre a bancada",
          title: "Módulo 4 — Riscos e responsabilidades",
          subtitle: "Partes móveis, acesso ao setor, layout, EPI e deveres de quem opera."
        },
        {
          id: "nr12-m4-moveis",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos em Partes Móveis e a Regra da Tampa Traseira",
          playerId: "panda-0b8a26de-c05d-4723-8c57-b76068cdfe33",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0b8a26de-c05d-4723-8c57-b76068cdfe33"
        },
        {
          id: "nr12-m4-protecoes",
          type: "video",
          kicker: "Vídeo",
          title: "Controle de Acesso e Proteções de Segurança",
          playerId: "panda-8303a758-791c-4b0b-9eea-80e8444a77ae",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8303a758-791c-4b0b-9eea-80e8444a77ae"
        },
        {
          id: "nr12-m4-layout",
          type: "video",
          kicker: "Vídeo",
          title: "Arranjo Físico e Layout Fabril Seguro",
          playerId: "panda-8b9d0fe0-d107-4751-9b8b-65ea50bbf3e7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8b9d0fe0-d107-4751-9b8b-65ea50bbf3e7"
        },
        {
          id: "nr12-m4-arranjo",
          type: "content",
          steps: true,
          topics: true,
          title: "Arranjo físico adequado",
          items: [
            { id: "t1", n: "1", title: "Máquina livre", text: "Manter a rebordadeira, ou coladeira de borda, desobstruída." },
            { id: "t2", n: "2", title: "Distância do corte", text: "Distanciamento mínimo entre a rebordadeira e a máquina de corte de madeira, para facilitar a operação e a manutenção." },
            { id: "t3", n: "3", title: "Circulação", text: "As áreas de circulação de materiais devem ser seguras para as pessoas e permitir o livre manuseio de chapas de MDF." },
            { id: "t4", n: "4", title: "Piso", text: "Pisos resistentes e que não ofereçam riscos às pessoas." },
            { id: "t5", n: "5", title: "Ferramentas", text: "Ferramentas devem ser armazenadas em local seguro e apropriado." },
            { id: "t6", n: "6", title: "Máquina fixa", text: "Máquinas estacionárias devem estar fixadas de forma segura." },
            { id: "t7", n: "7", title: "Máquina móvel", text: "Máquinas móveis devem possuir rodízios, pelo menos 2 deles com travas." },
            { id: "t8", n: "8", title: "Carga no posto", text: "Não movimentar materiais nos postos de trabalho onde haja pessoas, nem sobre as áreas de circulação." }
          ]
        },
        {
          id: "nr12-m4-epi",
          type: "video",
          kicker: "Vídeo",
          title: "Equipamentos de Proteção Individual (EPI)",
          playerId: "panda-d1111ea3-8452-46f8-923c-bb0e4bec5618",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=d1111ea3-8452-46f8-923c-bb0e4bec5618"
        },
        {
          id: "nr12-m4-deveres-video",
          type: "video",
          kicker: "Vídeo",
          title: "Deveres do Trabalhador e o Lema \"Cada Cuidado Conta\"",
          playerId: "panda-69d6176d-9e4c-47d8-a74c-6b422db563c4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=69d6176d-9e4c-47d8-a74c-6b422db563c4"
        },
        {
          id: "nr12-m4-desafio",
          type: "quiz-intro",
          title: "Pode ou não pode?",
          body: "Cinco situações dos vídeos deste módulo. Jogue cada uma em <strong>Pode</strong> ou <strong>Não pode</strong>. Acerte no mínimo <strong>4</strong> de <strong>5</strong>.",
          count: 5,
          minCorrect: 4,
          icon: "🎯"
        },
        {
          id: "nr12-m4-pode",
          type: "sort",
          title: "Pode ou não pode?",
          body: "Use só o que os vídeos do módulo 4 ensinaram.",
          time: 45,
          minCorrect: 4,
          review: "Tampa, acesso, layout, EPI e o dever de quem opera",
          left: { id: "nok", label: "Não pode", icon: "🚫" },
          right: { id: "ok", label: "Pode", icon: "✅" },
          items: [
            {
              id: "c1",
              text: "Colar a chapa com a tampa traseira aberta.",
              bin: "nok",
              hint: "A colagem só é permitida com a tampa fechada. Este modelo não para sozinho se a tampa abrir."
            },
            {
              id: "c2",
              text: "Cliente da loja entrando no setor de corte.",
              bin: "nok",
              hint: "O setor é de acesso restrito. Cliente, visitante e colega de outro setor não entram."
            },
            {
              id: "c3",
              text: "Máquina móvel com pelo menos dois rodízios travados.",
              bin: "ok",
              hint: "Máquina móvel precisa de rodízios, e no mínimo dois com trava de frenagem."
            },
            {
              id: "c4",
              text: "Manusear o MDF de luva tricotada, com botina, óculos, máscara e abafador.",
              bin: "ok",
              hint: "Esses são os EPIs do operador. A proteção coletiva da máquina continua em primeiro lugar."
            },
            {
              id: "c5",
              text: "Operar a rebordadeira sem este treinamento.",
              bin: "nok",
              hint: "Por lei é proibido operar sem o treinamento. Cada cuidado conta."
            }
          ]
        },
        {
          id: "nr12-m4-final",
          type: "finale",
          kicker: "Conclusão",
          image: "assets/fotos/capafinal.png",
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
