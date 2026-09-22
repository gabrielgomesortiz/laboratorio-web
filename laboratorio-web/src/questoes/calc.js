const questoesMatematica = [
    {
        id: 1,
        titulo: "Conceito de Calor",
        descricao: "Em Física, o calor pode ser definido como:",
        opcoes: [
            { letra: "a", texto: "A energia armazenada permanentemente em um corpo", valor: false },
            { letra: "b", texto: "A energia transferida entre corpos devido a uma diferença de temperatura", valor: true },
            { letra: "c", texto: "A temperatura de um corpo", valor: false },
            { letra: "d", texto: "A quantidade de matéria de um corpo", valor: false }
        ]
    },
    {
        id: 2,
        titulo: "Temperatura",
        descricao: "A temperatura de um corpo está relacionada principalmente:",
        opcoes: [
            { letra: "a", texto: "À energia cinética média das partículas que o constituem", valor: true },
            { letra: "b", texto: "À quantidade total de matéria do corpo", valor: false },
            { letra: "c", texto: "Ao seu volume exclusivamente", valor: false },
            { letra: "d", texto: "À sua massa exclusivamente", valor: false }
        ]
    },
    {
        id: 3,
        titulo: "Equilíbrio Térmico",
        descricao: "Dois corpos estão em equilíbrio térmico quando:",
        opcoes: [
            { letra: "a", texto: "Possuem necessariamente a mesma massa", valor: false },
            { letra: "b", texto: "Possuem necessariamente o mesmo calor específico", valor: false },
            { letra: "c", texto: "Possuem a mesma temperatura e não há transferência líquida de calor entre eles", valor: true },
            { letra: "d", texto: "Possuem necessariamente o mesmo volume", valor: false }
        ]
    },
    {
        id: 4,
        titulo: "Transferência de Calor",
        descricao: "Quando dois corpos com temperaturas diferentes são colocados em contato, o calor tende espontaneamente a:",
        opcoes: [
            { letra: "a", texto: "Passar do corpo mais frio para o mais quente", valor: false },
            { letra: "b", texto: "Passar do corpo mais quente para o mais frio", valor: true },
            { letra: "c", texto: "Permanecer sempre no corpo mais quente", valor: false },
            { letra: "d", texto: "Desaparecer durante o contato", valor: false }
        ]
    },
    {
        id: 5,
        titulo: "Calor Sensível",
        descricao: "O calor sensível está associado a uma transferência de energia que provoca:",
        opcoes: [
            { letra: "a", texto: "Mudança de temperatura sem necessariamente ocorrer mudança de estado físico", valor: true },
            { letra: "b", texto: "Sempre uma mudança de estado físico", valor: false },
            { letra: "c", texto: "Apenas a mudança de volume", valor: false },
            { letra: "d", texto: "Apenas a mudança de massa", valor: false }
        ]
    },
    {
        id: 6,
        titulo: "Calor Latente",
        descricao: "O calor latente está relacionado principalmente:",
        opcoes: [
            { letra: "a", texto: "À mudança de estado físico de uma substância", valor: true },
            { letra: "b", texto: "À variação da velocidade das partículas sem mudança de estado", valor: false },
            { letra: "c", texto: "À mudança da massa da substância", valor: false },
            { letra: "d", texto: "À alteração obrigatória da pressão atmosférica", valor: false }
        ]
    },
    {
        id: 7,
        titulo: "Calor Específico",
        descricao: "O calor específico de uma substância representa:",
        opcoes: [
            { letra: "a", texto: "A quantidade de massa existente em um corpo", valor: false },
            { letra: "b", texto: "A quantidade de calor necessária para variar a temperatura de uma unidade de massa da substância em uma unidade de temperatura", valor: true },
            { letra: "c", texto: "A temperatura máxima que a substância pode atingir", valor: false },
            { letra: "d", texto: "A quantidade de calor liberada durante uma mudança de estado", valor: false }
        ]
    },
    {
        id: 8,
        titulo: "Capacidade Térmica",
        descricao: "A capacidade térmica de um corpo representa:",
        opcoes: [
            { letra: "a", texto: "A quantidade de calor necessária para variar sua temperatura em uma unidade", valor: true },
            { letra: "b", texto: "A quantidade de massa do corpo", valor: false },
            { letra: "c", texto: "A temperatura de fusão do material", valor: false },
            { letra: "d", texto: "A pressão exercida pelo corpo", valor: false }
        ]
    },
    {
        id: 9,
        titulo: "Mudança de Estado",
        descricao: "Durante uma mudança de estado físico de uma substância pura, sob condições constantes, o calor fornecido é utilizado principalmente para:",
        opcoes: [
            { letra: "a", texto: "Aumentar obrigatoriamente a temperatura", valor: false },
            { letra: "b", texto: "Alterar as interações entre as partículas, permitindo a mudança de estado", valor: true },
            { letra: "c", texto: "Diminuir a massa da substância", valor: false },
            { letra: "d", texto: "Eliminar completamente a energia interna", valor: false }
        ]
    },
    {
        id: 10,
        titulo: "Fusão",
        descricao: "A fusão corresponde à passagem:",
        opcoes: [
            { letra: "a", texto: "Do estado líquido para o gasoso", valor: false },
            { letra: "b", texto: "Do estado sólido para o líquido", valor: true },
            { letra: "c", texto: "Do estado gasoso para o líquido", valor: false },
            { letra: "d", texto: "Do estado líquido para o sólido", valor: false }
        ]
    },
    {
        id: 11,
        titulo: "Vaporização",
        descricao: "A vaporização corresponde à passagem:",
        opcoes: [
            { letra: "a", texto: "Do estado sólido para o líquido", valor: false },
            { letra: "b", texto: "Do estado líquido para o gasoso", valor: true },
            { letra: "c", texto: "Do estado gasoso para o sólido", valor: false },
            { letra: "d", texto: "Do estado líquido para o sólido", valor: false }
        ]
    },
    {
        id: 12,
        titulo: "Condensação",
        descricao: "A condensação corresponde à passagem:",
        opcoes: [
            { letra: "a", texto: "Do estado gasoso para o líquido", valor: true },
            { letra: "b", texto: "Do estado sólido para o líquido", valor: false },
            { letra: "c", texto: "Do estado líquido para o gasoso", valor: false },
            { letra: "d", texto: "Do estado sólido para o gasoso", valor: false }
        ]
    },
    {
        id: 13,
        titulo: "Solidificação",
        descricao: "A solidificação corresponde à passagem:",
        opcoes: [
            { letra: "a", texto: "Do estado gasoso para o líquido", valor: false },
            { letra: "b", texto: "Do estado líquido para o sólido", valor: true },
            { letra: "c", texto: "Do estado sólido para o líquido", valor: false },
            { letra: "d", texto: "Do estado gasoso para o sólido", valor: false }
        ]
    },
    {
        id: 14,
        titulo: "Sublimação",
        descricao: "A sublimação corresponde à mudança direta:",
        opcoes: [
            { letra: "a", texto: "Do sólido para o gasoso", valor: true },
            { letra: "b", texto: "Do líquido para o sólido", valor: false },
            { letra: "c", texto: "Do gasoso para o líquido", valor: false },
            { letra: "d", texto: "Do líquido para o gasoso", valor: false }
        ]
    },
    {
        id: 15,
        titulo: "Energia Interna",
        descricao: "A energia interna de um sistema está relacionada:",
        opcoes: [
            { letra: "a", texto: "À soma das energias microscópicas associadas às partículas do sistema", valor: true },
            { letra: "b", texto: "Somente à energia potencial gravitacional do sistema", valor: false },
            { letra: "c", texto: "Somente à velocidade do sistema como um todo", valor: false },
            { letra: "d", texto: "Apenas à pressão atmosférica", valor: false }
        ]
    },
    {
        id: 16,
        titulo: "Primeira Lei da Termodinâmica",
        descricao: "A Primeira Lei da Termodinâmica expressa essencialmente:",
        opcoes: [
            { letra: "a", texto: "A conservação da energia aplicada aos processos termodinâmicos", valor: true },
            { letra: "b", texto: "A impossibilidade de qualquer transformação de energia", valor: false },
            { letra: "c", texto: "A conservação exclusiva da temperatura", valor: false },
            { letra: "d", texto: "A relação exclusiva entre pressão e volume", valor: false }
        ]
    },
    {
        id: 17,
        titulo: "Calor Recebido pelo Sistema",
        descricao: "Quando um sistema recebe calor do ambiente, considerando a convenção usual da Primeira Lei, o valor de Q é:",
        opcoes: [
            { letra: "a", texto: "Negativo", valor: false },
            { letra: "b", texto: "Positivo", valor: true },
            { letra: "c", texto: "Sempre igual a zero", valor: false },
            { letra: "d", texto: "Indefinido", valor: false }
        ]
    },
    {
        id: 18,
        titulo: "Trabalho Realizado pelo Gás",
        descricao: "Quando um gás se expande e realiza trabalho sobre o ambiente, considerando a convenção usual, o trabalho realizado pelo gás é:",
        opcoes: [
            { letra: "a", texto: "Positivo", valor: true },
            { letra: "b", texto: "Negativo", valor: false },
            { letra: "c", texto: "Sempre nulo", valor: false },
            { letra: "d", texto: "Necessariamente igual ao calor recebido", valor: false }
        ]
    },
    {
        id: 19,
        titulo: "Trabalho sobre o Gás",
        descricao: "Quando o ambiente realiza trabalho sobre um gás, ocorre uma transferência de energia:",
        opcoes: [
            { letra: "a", texto: "Do gás para o ambiente", valor: false },
            { letra: "b", texto: "Do ambiente para o gás", valor: true },
            { letra: "c", texto: "Sem transferência de energia", valor: false },
            { letra: "d", texto: "Exclusivamente na forma de calor", valor: false }
        ]
    },
    {
        id: 20,
        titulo: "Transformação Isotérmica",
        descricao: "Uma transformação isotérmica é aquela em que:",
        opcoes: [
            { letra: "a", texto: "A pressão permanece constante", valor: false },
            { letra: "b", texto: "O volume permanece constante", valor: false },
            { letra: "c", texto: "A temperatura permanece constante", valor: true },
            { letra: "d", texto: "A massa do gás varia constantemente", valor: false }
        ]
    },
    {
        id: 21,
        titulo: "Transformação Isobárica",
        descricao: "Uma transformação isobárica ocorre quando:",
        opcoes: [
            { letra: "a", texto: "A temperatura permanece constante", valor: false },
            { letra: "b", texto: "A pressão permanece constante", valor: true },
            { letra: "c", texto: "O volume permanece constante", valor: false },
            { letra: "d", texto: "Não existe troca de energia", valor: false }
        ]
    },
    {
        id: 22,
        titulo: "Transformação Isocórica",
        descricao: "Uma transformação isocórica, também chamada isovolumétrica, ocorre quando:",
        opcoes: [
            { letra: "a", texto: "A pressão permanece constante", valor: false },
            { letra: "b", texto: "A temperatura permanece constante", valor: false },
            { letra: "c", texto: "O volume permanece constante", valor: true },
            { letra: "d", texto: "O calor permanece constante", valor: false }
        ]
    },
    {
        id: 23,
        titulo: "Transformação Adiabática",
        descricao: "Em uma transformação adiabática ideal:",
        opcoes: [
            { letra: "a", texto: "A temperatura necessariamente permanece constante", valor: false },
            { letra: "b", texto: "Não ocorre troca de calor entre o sistema e o ambiente", valor: true },
            { letra: "c", texto: "A pressão necessariamente permanece constante", valor: false },
            { letra: "d", texto: "O volume necessariamente permanece constante", valor: false }
        ]
    },
    {
        id: 24,
        titulo: "Gás Ideal",
        descricao: "O modelo de gás ideal considera, de forma simplificada, que:",
        opcoes: [
            { letra: "a", texto: "As partículas possuem interações intermoleculares significativas em qualquer situação", valor: false },
            { letra: "b", texto: "As partículas possuem volume próprio desprezível e interações intermoleculares desprezíveis", valor: true },
            { letra: "c", texto: "As partículas permanecem completamente paradas", valor: false },
            { letra: "d", texto: "A temperatura não influencia o comportamento do gás", valor: false }
        ]
    },
    {
        id: 25,
        titulo: "Pressão de um Gás",
        descricao: "A pressão exercida por um gás em um recipiente resulta principalmente:",
        opcoes: [
            { letra: "a", texto: "Das colisões das partículas do gás com as paredes do recipiente", valor: true },
            { letra: "b", texto: "Da ausência de movimento das partículas", valor: false },
            { letra: "c", texto: "Da massa do recipiente exclusivamente", valor: false },
            { letra: "d", texto: "Da cor do recipiente", valor: false }
        ]
    },
    {
        id: 26,
        titulo: "Temperatura Absoluta",
        descricao: "A escala de temperatura utilizada nas relações fundamentais dos gases ideais é a escala:",
        opcoes: [
            { letra: "a", texto: "Celsius", valor: false },
            { letra: "b", texto: "Fahrenheit", valor: false },
            { letra: "c", texto: "Kelvin", valor: true },
            { letra: "d", texto: "Réaumur", valor: false }
        ]
    },
    {
        id: 27,
        titulo: "Lei de Boyle",
        descricao: "Para uma quantidade fixa de gás em temperatura constante, a Lei de Boyle estabelece que:",
        opcoes: [
            { letra: "a", texto: "Pressão e volume são inversamente proporcionais", valor: true },
            { letra: "b", texto: "Pressão e volume são diretamente proporcionais", valor: false },
            { letra: "c", texto: "Pressão e temperatura são inversamente proporcionais", valor: false },
            { letra: "d", texto: "Volume e temperatura são inversamente proporcionais", valor: false }
        ]
    },
    {
        id: 28,
        titulo: "Lei de Charles",
        descricao: "Para uma quantidade fixa de gás sob pressão constante, a Lei de Charles relaciona diretamente:",
        opcoes: [
            { letra: "a", texto: "Pressão e volume", valor: false },
            { letra: "b", texto: "Volume e temperatura absoluta", valor: true },
            { letra: "c", texto: "Pressão e temperatura", valor: false },
            { letra: "d", texto: "Massa e pressão", valor: false }
        ]
    },
    {
        id: 29,
        titulo: "Lei de Gay-Lussac",
        descricao: "Para uma quantidade fixa de gás mantida em volume constante, a pressão é diretamente proporcional:",
        opcoes: [
            { letra: "a", texto: "À temperatura absoluta", valor: true },
            { letra: "b", texto: "Ao volume", valor: false },
            { letra: "c", texto: "À massa do recipiente", valor: false },
            { letra: "d", texto: "À área externa do recipiente", valor: false }
        ]
    },
    {
        id: 30,
        titulo: "Equação de Clapeyron",
        descricao: "A equação de Clapeyron para um gás ideal relaciona principalmente:",
        opcoes: [
            { letra: "a", texto: "Pressão, volume, quantidade de matéria e temperatura", valor: true },
            { letra: "b", texto: "Somente massa e temperatura", valor: false },
            { letra: "c", texto: "Somente pressão e massa", valor: false },
            { letra: "d", texto: "Somente volume e calor específico", valor: false }
        ]
    },
    {
        id: 31,
        titulo: "Constante Universal dos Gases",
        descricao: "Na equação dos gases ideais, a constante R representa:",
        opcoes: [
            { letra: "a", texto: "A constante universal dos gases", valor: true },
            { letra: "b", texto: "O calor específico do gás", valor: false },
            { letra: "c", texto: "A massa molar do gás", valor: false },
            { letra: "d", texto: "A pressão atmosférica", valor: false }
        ]
    },
    {
        id: 32,
        titulo: "Quantidade de Matéria",
        descricao: "A quantidade de matéria de uma substância é expressa, no Sistema Internacional, em:",
        opcoes: [
            { letra: "a", texto: "Gramas", valor: false },
            { letra: "b", texto: "Litros", valor: false },
            { letra: "c", texto: "Mols", valor: true },
            { letra: "d", texto: "Joules", valor: false }
        ]
    },
    {
        id: 33,
        titulo: "Processo Cíclico",
        descricao: "Em um processo termodinâmico cíclico, ao final de um ciclo completo, o sistema:",
        opcoes: [
            { letra: "a", texto: "Retorna ao seu estado inicial", valor: true },
            { letra: "b", texto: "Necessariamente perde toda a sua energia", valor: false },
            { letra: "c", texto: "Necessariamente dobra sua temperatura", valor: false },
            { letra: "d", texto: "Não pode realizar trabalho", valor: false }
        ]
    },
    {
        id: 34,
        titulo: "Energia Interna em um Ciclo",
        descricao: "Como a energia interna é uma função de estado, em um ciclo termodinâmico completo sua variação líquida é:",
        opcoes: [
            { letra: "a", texto: "Positiva", valor: false },
            { letra: "b", texto: "Negativa", valor: false },
            { letra: "c", texto: "Zero", valor: true },
            { letra: "d", texto: "Sempre igual ao calor recebido", valor: false }
        ]
    },
    {
        id: 35,
        titulo: "Máquina Térmica",
        descricao: "Uma máquina térmica tem como função principal:",
        opcoes: [
            { letra: "a", texto: "Transformar parte do calor recebido em trabalho", valor: true },
            { letra: "b", texto: "Transformar todo o calor em trabalho em qualquer situação", valor: false },
            { letra: "c", texto: "Eliminar completamente o calor", valor: false },
            { letra: "d", texto: "Produzir matéria a partir de energia térmica", valor: false }
        ]
    },
    {
        id: 36,
        titulo: "Fonte Quente",
        descricao: "Em uma máquina térmica, a fonte quente é responsável por:",
        opcoes: [
            { letra: "a", texto: "Receber o calor rejeitado pela máquina", valor: false },
            { letra: "b", texto: "Fornecer calor ao sistema", valor: true },
            { letra: "c", texto: "Impedir a realização de trabalho", valor: false },
            { letra: "d", texto: "Manter necessariamente a temperatura em zero Kelvin", valor: false }
        ]
    },
    {
        id: 37,
        titulo: "Fonte Fria",
        descricao: "Em uma máquina térmica, a fonte fria normalmente:",
        opcoes: [
            { letra: "a", texto: "Recebe parte do calor que não foi convertido em trabalho", valor: true },
            { letra: "b", texto: "Fornece todo o calor à máquina", valor: false },
            { letra: "c", texto: "Impede qualquer troca de energia", valor: false },
            { letra: "d", texto: "Transforma todo o calor recebido em trabalho", valor: false }
        ]
    },
    {
        id: 38,
        titulo: "Rendimento Térmico",
        descricao: "O rendimento de uma máquina térmica representa:",
        opcoes: [
            { letra: "a", texto: "A razão entre o trabalho útil realizado e o calor recebido da fonte quente", valor: true },
            { letra: "b", texto: "A razão entre o calor rejeitado e a massa da máquina", valor: false },
            { letra: "c", texto: "A temperatura da fonte quente dividida pela massa", valor: false },
            { letra: "d", texto: "A quantidade total de calor existente no universo", valor: false }
        ]
    },
    {
        id: 39,
        titulo: "Máquina de Carnot",
        descricao: "Uma máquina de Carnot é uma máquina térmica ideal que:",
        opcoes: [
            { letra: "a", texto: "Opera segundo um ciclo reversível ideal", valor: true },
            { letra: "b", texto: "Possui necessariamente rendimento de 100%", valor: false },
            { letra: "c", texto: "Não possui fonte fria", valor: false },
            { letra: "d", texto: "Funciona sem qualquer troca de calor", valor: false }
        ]
    },
    {
        id: 40,
        titulo: "Rendimento de Carnot",
        descricao: "O rendimento máximo teórico de uma máquina de Carnot depende:",
        opcoes: [
            { letra: "a", texto: "Somente das temperaturas absolutas das fontes quente e fria", valor: true },
            { letra: "b", texto: "Somente da massa do gás", valor: false },
            { letra: "c", texto: "Somente do volume inicial", valor: false },
            { letra: "d", texto: "Somente da pressão atmosférica", valor: false }
        ]
    },
    {
        id: 41,
        titulo: "Segunda Lei da Termodinâmica",
        descricao: "A Segunda Lei da Termodinâmica estabelece, entre outros aspectos, que:",
        opcoes: [
            { letra: "a", texto: "Existem limitações naturais para a transformação de calor em trabalho", valor: true },
            { letra: "b", texto: "Todo calor pode ser convertido integralmente em trabalho em um ciclo", valor: false },
            { letra: "c", texto: "A energia não pode ser transformada", valor: false },
            { letra: "d", texto: "Todo processo térmico é reversível", valor: false }
        ]
    },
    {
        id: 42,
        titulo: "Sentido Espontâneo do Calor",
        descricao: "De acordo com a Segunda Lei da Termodinâmica, em condições espontâneas, o calor flui:",
        opcoes: [
            { letra: "a", texto: "Do corpo frio para o corpo quente", valor: false },
            { letra: "b", texto: "Do corpo quente para o corpo frio", valor: true },
            { letra: "c", texto: "Sempre do corpo de maior massa para o de menor massa", valor: false },
            { letra: "d", texto: "Sem uma direção definida", valor: false }
        ]
    },
    {
        id: 43,
        titulo: "Refrigerador",
        descricao: "Um refrigerador tem como objetivo principal:",
        opcoes: [
            { letra: "a", texto: "Transferir calor de uma região fria para uma região quente utilizando trabalho externo", valor: true },
            { letra: "b", texto: "Produzir frio sem consumir energia", valor: false },
            { letra: "c", texto: "Transformar todo o calor em trabalho", valor: false },
            { letra: "d", texto: "Impedir qualquer transferência de calor", valor: false }
        ]
    },
    {
        id: 44,
        titulo: "Bomba de Calor",
        descricao: "Uma bomba de calor é um dispositivo que utiliza trabalho para:",
        opcoes: [
            { letra: "a", texto: "Transferir calor de uma região fria para uma região quente", valor: true },
            { letra: "b", texto: "Eliminar a energia interna de um sistema", valor: false },
            { letra: "c", texto: "Transformar matéria em calor", valor: false },
            { letra: "d", texto: "Reduzir simultaneamente todas as temperaturas", valor: false }
        ]
    },
    {
        id: 45,
        titulo: "Entropia",
        descricao: "A entropia é uma grandeza termodinâmica relacionada:",
        opcoes: [
            { letra: "a", texto: "À direção dos processos espontâneos e à dispersão da energia", valor: true },
            { letra: "b", texto: "Somente à massa do sistema", valor: false },
            { letra: "c", texto: "Somente ao volume do recipiente", valor: false },
            { letra: "d", texto: "Exclusivamente à pressão atmosférica", valor: false }
        ]
    },
    {
        id: 46,
        titulo: "Processo Reversível",
        descricao: "Um processo termodinâmico reversível é idealizado como um processo que:",
        opcoes: [
            { letra: "a", texto: "Pode ser invertido sem produzir efeitos líquidos irreversíveis no sistema e no ambiente", valor: true },
            { letra: "b", texto: "Ocorre sempre de maneira instantânea", valor: false },
            { letra: "c", texto: "Não envolve nenhuma forma de energia", valor: false },
            { letra: "d", texto: "Necessariamente ocorre com atrito intenso", valor: false }
        ]
    },
    {
        id: 47,
        titulo: "Processo Irreversível",
        descricao: "Um processo irreversível é caracterizado por:",
        opcoes: [
            { letra: "a", texto: "Poder retornar espontaneamente ao estado inicial sem nenhuma alteração no ambiente", valor: false },
            { letra: "b", texto: "Apresentar efeitos que impedem a reversão perfeita do processo", valor: true },
            { letra: "c", texto: "Não envolver nenhuma transferência de energia", valor: false },
            { letra: "d", texto: "Possuir sempre temperatura constante", valor: false }
        ]
    },
    {
        id: 48,
        titulo: "Condução Térmica",
        descricao: "A condução térmica ocorre principalmente por:",
        opcoes: [
            { letra: "a", texto: "Transferência de energia através de interações entre partículas, sem transporte macroscópico de matéria", valor: true },
            { letra: "b", texto: "Movimento obrigatório de grandes massas de fluido", valor: false },
            { letra: "c", texto: "Emissão exclusiva de ondas eletromagnéticas", valor: false },
            { letra: "d", texto: "Mudança da massa do material", valor: false }
        ]
    },
    {
        id: 49,
        titulo: "Convecção Térmica",
        descricao: "A convecção térmica está associada principalmente:",
        opcoes: [
            { letra: "a", texto: "Ao movimento de massas de um fluido devido a diferenças de temperatura e densidade", valor: true },
            { letra: "b", texto: "Apenas à condução em sólidos", valor: false },
            { letra: "c", texto: "À ausência de movimento das partículas", valor: false },
            { letra: "d", texto: "Somente à emissão de luz visível", valor: false }
        ]
    },
    {
        id: 50,
        titulo: "Irradiação Térmica",
        descricao: "A transferência de calor por irradiação ocorre por meio de:",
        opcoes: [
            { letra: "a", texto: "Ondas eletromagnéticas", valor: true },
            { letra: "b", texto: "Movimento obrigatório de um líquido", valor: false },
            { letra: "c", texto: "Contato direto entre partículas de dois corpos", valor: false },
            { letra: "d", texto: "Somente colisões mecânicas", valor: false }
        ]
    },
    {
        id: 51,
        titulo: "Vácuo e Transferência de Calor",
        descricao: "Qual mecanismo de transferência de calor pode ocorrer mesmo através do vácuo?",
        opcoes: [
            { letra: "a", texto: "Condução", valor: false },
            { letra: "b", texto: "Convecção", valor: false },
            { letra: "c", texto: "Irradiação", valor: true },
            { letra: "d", texto: "Condução e convecção simultaneamente", valor: false }
        ]
    },
    {
        id: 52,
        titulo: "Condutores Térmicos",
        descricao: "Materiais considerados bons condutores térmicos possuem, em geral:",
        opcoes: [
            { letra: "a", texto: "Maior facilidade para transferir energia térmica", valor: true },
            { letra: "b", texto: "Capacidade de impedir completamente qualquer transferência de calor", valor: false },
            { letra: "c", texto: "Temperatura necessariamente constante", valor: false },
            { letra: "d", texto: "Massa necessariamente igual a zero", valor: false }
        ]
    },
    {
        id: 53,
        titulo: "Isolantes Térmicos",
        descricao: "Um isolante térmico é um material que:",
        opcoes: [
            { letra: "a", texto: "Dificulta a transferência de energia térmica", valor: true },
            { letra: "b", texto: "Produz calor continuamente", valor: false },
            { letra: "c", texto: "Possui temperatura igual a zero Kelvin", valor: false },
            { letra: "d", texto: "Transforma calor diretamente em matéria", valor: false }
        ]
    },
    {
        id: 54,
        titulo: "Dilatação Térmica",
        descricao: "A dilatação térmica ocorre, em geral, quando um material:",
        opcoes: [
            { letra: "a", texto: "Sofre variação de temperatura que altera suas dimensões", valor: true },
            { letra: "b", texto: "Perde necessariamente toda sua energia interna", valor: false },
            { letra: "c", texto: "Muda obrigatoriamente de estado físico", valor: false },
            { letra: "d", texto: "Tem sua massa necessariamente aumentada", valor: false }
        ]
    },
    {
        id: 55,
        titulo: "Dilatação Linear",
        descricao: "A dilatação linear está relacionada principalmente à variação:",
        opcoes: [
            { letra: "a", texto: "Do comprimento de um corpo", valor: true },
            { letra: "b", texto: "Da massa de um corpo", valor: false },
            { letra: "c", texto: "Da quantidade de matéria", valor: false },
            { letra: "d", texto: "Da pressão atmosférica", valor: false }
        ]
    },
    {
        id: 56,
        titulo: "Dilatação Superficial",
        descricao: "A dilatação superficial está relacionada principalmente à variação:",
        opcoes: [
            { letra: "a", texto: "Da área de uma superfície", valor: true },
            { letra: "b", texto: "Da massa do corpo", valor: false },
            { letra: "c", texto: "Da quantidade de mols", valor: false },
            { letra: "d", texto: "Da pressão interna exclusivamente", valor: false }
        ]
    },
    {
        id: 57,
        titulo: "Dilatação Volumétrica",
        descricao: "A dilatação volumétrica está relacionada principalmente à variação:",
        opcoes: [
            { letra: "a", texto: "Do volume de um corpo", valor: true },
            { letra: "b", texto: "Da massa do corpo", valor: false },
            { letra: "c", texto: "Da temperatura de fusão exclusivamente", valor: false },
            { letra: "d", texto: "Da quantidade de calor latente exclusivamente", valor: false }
        ]
    },
    {
        id: 58,
        titulo: "Zero Absoluto",
        descricao: "O zero absoluto corresponde, aproximadamente, a:",
        opcoes: [
            { letra: "a", texto: "0 °C", valor: false },
            { letra: "b", texto: "-100 °C", valor: false },
            { letra: "c", texto: "-273 °C", valor: true },
            { letra: "d", texto: "273 °C", valor: false }
        ]
    },
    {
        id: 59,
        titulo: "Conservação da Energia",
        descricao: "Em um sistema isolado, a energia total:",
        opcoes: [
            { letra: "a", texto: "É criada continuamente", valor: false },
            { letra: "b", texto: "É destruída continuamente", valor: false },
            { letra: "c", texto: "Permanece conservada", valor: true },
            { letra: "d", texto: "Depende exclusivamente da temperatura ambiente", valor: false }
        ]
    },
    {
        id: 60,
        titulo: "Limitação das Máquinas Térmicas",
        descricao: "De acordo com a Segunda Lei da Termodinâmica, uma máquina térmica que opera em ciclo não pode:",
        opcoes: [
            { letra: "a", texto: "Receber calor de uma fonte quente", valor: false },
            { letra: "b", texto: "Realizar trabalho", valor: false },
            { letra: "c", texto: "Rejeitar parte do calor para uma fonte fria", valor: false },
            { letra: "d", texto: "Converter todo o calor recebido em trabalho", valor: true }
        ]
    }
];

export default questoesMatematica;