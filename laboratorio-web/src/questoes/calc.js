const questoesMatematica = [
    {
        id: 1,
        titulo: "Calor Sensível na Água",
        descricao: "Para aquecer 500 g de água (calor específico $c = 1,0\\text{ cal/(g}\\cdot{}^{\\circ}\\text{C)}$) desde $20\\,^{\\circ}\\text{C}$ até a sua ebulição a $100\\,^{\\circ}\\text{C}$, qual é a quantidade de calor necessária em quilocalorias (kcal)?",
        opcoes: [
            { letra: "a", texto: "20 kcal", valor: false },
            { letra: "b", texto: "40 kcal", valor: true },
            { letra: "c", texto: "50 kcal", valor: false },
            { letra: "d", texto: "80 kcal", valor: false }
        ]
    },
    {
        id: 2,
        titulo: "Fusão do Gelo",
        descricao: "Determine a quantidade de calor necessária, em calorias, para fundir totalmente 200 g de gelo que estão a $0\\,^{\\circ}\\text{C}$. (Considere o calor latente de fusão do gelo $L_f = 80\\text{ cal/g}$).",
        opcoes: [
            { letra: "a", texto: "8.000 cal", valor: false },
            { letra: "b", texto: "12.000 cal", valor: false },
            { letra: "c", texto: "16.000 cal", valor: true },
            { letra: "d", texto: "20.000 cal", valor: false }
        ]
    },
    {
        id: 3,
        titulo: "Equilíbrio Térmico",
        descricao: "Misturam-se 200 g de água a $80\\,^{\\circ}\\text{C}$ com 300 g de água a $20\\,^{\\circ}\\text{C}$ em um calorímetro ideal. Qual será a temperatura de equilíbrio térmico da mistura?",
        opcoes: [
            { letra: "a", texto: "44 °C", valor: true },
            { letra: "b", texto: "50 °C", valor: false },
            { letra: "c", texto: "38 °C", valor: false },
            { letra: "d", texto: "60 °C", valor: false }
        ]
    },
    {
        id: 4,
        titulo: "Primeira Lei da Termodinâmica",
        descricao: "Um gás ideal absorve 500 J de calor do ambiente e realiza um trabalho de 300 J sobre o meio externo. Qual foi a variação da energia interna ($\\Delta U$) do gás?",
        opcoes: [
            { letra: "a", texto: "-200 J", valor: false },
            { letra: "b", texto: "200 J", valor: true },
            { letra: "c", texto: "800 J", valor: false },
            { letra: "d", texto: "500 J", valor: false }
        ]
    },
    {
        id: 5,
        titulo: "Trabalho em Transformação Isobárica",
        descricao: "Um gás sofre uma expansão isobárica sob pressão constante de $2\\times 10^5\\text{ N/m}^2$. Seu volume varia de $0,01\\text{ m}^3$ para $0,03\\text{ m}^3$. Qual o trabalho realizado pelo gás em Joules?",
        opcoes: [
            { letra: "a", texto: "2.000 J", valor: false },
            { letra: "b", texto: "4.000 J", valor: true },
            { letra: "c", texto: "6.000 J", valor: false },
            { letra: "d", texto: "8.000 J", valor: false }
        ]
    },
    {
        id: 6,
        titulo: "Rendimento de Máquina de Carnot",
        descricao: "Uma máquina térmica de Carnot opera entre uma fonte quente a $500\\text{ K}$ e uma fonte fria a $300\\text{ K}$. Qual é o rendimento percentual máximo dessa máquina?",
        opcoes: [
            { letra: "a", texto: "30%", valor: false },
            { letra: "b", texto: "40%", valor: true },
            { letra: "c", texto: "50%", valor: false },
            { letra: "d", texto: "60%", valor: false }
        ]
    },
    {
        id: 7,
        titulo: "Capacidade Térmica",
        descricao: "Um corpo feito de alumínio possui massa de 400 g e calor específico de $0,22\\text{ cal/(g}\\cdot{}^{\\circ}\\text{C)}$. Qual é a capacidade térmica desse corpo em $\\text{cal/}^{\\circ}\\text{C}$?",
        opcoes: [
            { letra: "a", texto: "44 cal/°C", valor: true },
            { letra: "b", texto: "88 cal/°C", valor: false },
            { letra: "c", texto: "22 cal/°C", valor: false },
            { letra: "d", texto: "110 cal/°C", valor: false }
        ]
    },
    {
        id: 8,
        titulo: "Calor Latente de Vaporização",
        descricao: "Determine a quantidade de calor necessária, em quilocalorias (kcal), para vaporizar 100 g de água a $100\\,^{\\circ}\\text{C}$. (Dado: calor latente de vaporização da água $L_v = 540\\text{ cal/g}$).",
        opcoes: [
            { letra: "a", texto: "27 kcal", valor: false },
            { letra: "b", texto: "54 kcal", valor: true },
            { letra: "c", texto: "108 kcal", valor: false },
            { letra: "d", texto: "540 kcal", valor: false }
        ]
    },
    {
        id: 9,
        titulo: "Transformação Isométrica (Isoicórica)",
        descricao: "Certa massa de gás ideal sofre um aquecimento a volume constante. Sua pressão inicial era de $2\\text{ atm}$ a $300\\text{ K}$. Se a temperatura final subir para $600\\text{ K}$, qual será a pressão final do gás?",
        opcoes: [
            { letra: "a", texto: "1 atm", valor: false },
            { letra: "b", texto: "2 atm", valor: false },
            { letra: "c", texto: "4 atm", valor: true },
            { letra: "d", texto: "6 atm", valor: false }
        ]
    },
    {
        id: 10,
        titulo: "Escalas Termométricas",
        descricao: "Em um dia muito quente, a temperatura de uma cidade registra $35\\,^{\\circ}\\text{C}$. Qual é o valor correspondente dessa temperatura na escala Fahrenheit?",
        opcoes: [
            { letra: "a", texto: "85 °F", valor: false },
            { letra: "b", texto: "95 °F", valor: true },
            { letra: "c", texto: "99 °F", valor: false },
            { letra: "d", texto: "104 °F", valor: false }
        ]
    },
    {
        id: 11,
        titulo: "Dilatação Linear",
        descricao: "Uma barra metálica de comprimento inicial igual a 2 metros sofre uma variação de temperatura de $50\\,^{\\circ}\\text{C}$. Sabendo que o coeficiente de dilatação linear do metal é $\\alpha = 2\\times 10^{-5}\\,^{\\circ}\\text{C}^{-1}$, qual é a dilatação linear sofrida pela barra em milímetros?",
        opcoes: [
            { letra: "a", texto: "1 mm", valor: false },
            { letra: "b", texto: "2 mm", valor: true },
            { letra: "c", texto: "4 mm", valor: false },
            { letra: "d", texto: "5 mm", valor: false }
        ]
    },
    {
        id: 12,
        titulo: "Equação de Clapeyron (Gases Ideais)",
        descricao: "Determine o volume ocupado por 2 mols de um gás ideal mantido a uma temperatura de $300\\text{ K}$ sob pressão de $8,2\\text{ atm}$. (Considere a constante universal dos gases $R = 0,082\\text{ atm}\\cdot\\text{L}/(\\text{mol}\\cdot\\text{K})$).",
        opcoes: [
            { letra: "a", texto: "6 litros", valor: false },
            { letra: "b", texto: "12 litros", valor: false },
            { letra: "c", texto: "30 litros", valor: false },
            { letra: "d", texto: "60 litros", valor: true }
        ]
    },
    {
        id: 13,
        titulo: "Transformação Isotérmica",
        descricao: "Um gás ideal ocupa um volume de 4 litros sob pressão de $3\\text{ atm}$ em temperatura constante. Se o volume for expandido para 12 litros, qual será a nova pressão do gás?",
        opcoes: [
            { letra: "a", texto: "1 atm", valor: true },
            { letra: "b", texto: "1,5 atm", valor: false },
            { letra: "c", texto: "9 atm", valor: false },
            { letra: "d", texto: "36 atm", valor: false }
        ]
    },
    {
        id: 14,
        titulo: "Potência Térmica",
        descricao: "Uma fonte térmica fornece calor a uma taxa constante de $200\\text{ cal/s}$ para aquecer um bloco de 1 kg de chumbo. Quanto tempo (em segundos) é necessário para elevar a temperatura do bloco em $10\\,^{\\circ}\\text{C}$? (Calor específico do chumbo = $0,03\\text{ cal/(g}\\cdot{}^{\\circ}\\text{C)}$).",
        opcoes: [
            { letra: "a", texto: "15 s", valor: false },
            { letra: "b", texto: "30 s", valor: false },
            { letra: "c", texto: "150 s", valor: true },
            { letra: "d", texto: "300 s", valor: false }
        ]
    },
    {
        id: 15,
        titulo: "Energia Interna de Gás Monoatômico",
        descricao: "Qual é a energia interna de 3 mols de um gás ideal monoatômico a uma temperatura de $400\\text{ K}$? (Considere $R = 8,31\\text{ J}/(\\text{mol}\\cdot\\text{K})$ e use $U = \\frac{3}{2} n R T$).",
        opcoes: [
            { letra: "a", texto: "14.958 J", valor: true },
            { letra: "b", texto: "9.972 J", valor: false },
            { letra: "c", texto: "4.986 J", valor: false },
            { letra: "d", texto: "29.916 J", valor: false }
        ]
    },
    {
        id: 16,
        titulo: "Calor Rejeitado em Máquina Térmica",
        descricao: "Uma máquina térmica recebe $1.000\\text{ J}$ de calor da fonte quente em cada ciclo e realiza um trabalho útil de $250\\text{ J}$. Qual é a quantidade de calor rejeitada para a fonte fria?",
        opcoes: [
            { letra: "a", texto: "250 J", valor: false },
            { letra: "b", texto: "750 J", valor: true },
            { letra: "c", texto: "1.000 J", valor: false },
            { letra: "d", texto: "1.250 J", valor: false }
        ]
    },
    {
        id: 17,
        titulo: "Dilatação Superficial",
        descricao: "Uma placa metálica quadrada de área inicial igual a $1\\text{ m}^2$ sofre um aquecimento que eleva sua temperatura em $100\\,^{\\circ}\\text{C}$. Sabendo que o coeficiente de dilatação linear do material é $\\alpha = 1,5\\times 10^{-5}\\,^{\\circ}\\text{C}^{-1}$, qual é a nova área da placa em $\\text{m}^2$?",
        opcoes: [
            { letra: "a", texto: "1,0015 m²", valor: false },
            { letra: "b", texto: "1,0030 m²", valor: true },
            { letra: "c", texto: "1,0150 m²", valor: false },
            { letra: "d", texto: "1,0300 m²", valor: false }
        ]
    },
    {
        id: 18,
        titulo: "Transformação Adiabática",
        descricao: "Em uma expansão adiabática rápida de um gás ideal, o gás realiza um trabalho de $400\\text{ J}$ sobre o ambiente. Como não há troca de calor com o meio externo ($Q = 0$), qual foi a variação da energia interna do gás?",
        opcoes: [
            { letra: "a", texto: "+400 J", valor: false },
            { letra: "b", texto: "-400 J", valor: true },
            { letra: "c", texto: "0 J", valor: false },
            { letra: "d", texto: "+800 J", valor: false }
        ]
    },
    {
        id: 19,
        titulo: "Fluxo de Calor por Condução (Lei de Fourier)",
        descricao: "Através de uma parede de vidro de área $2\\text{ m}^2$ e espessura de $0,05\\text{ m}$, há uma passagem de calor. Sabendo que a condutividade térmica do vidro é $k = 0,8\\text{ W}/(\\text{m}\\cdot{}^{\\circ}\\text{C})$ e a diferença de temperatura entre as faces é $20\\,^{\\circ}\\text{C}$, qual é o fluxo de calor (potência térmica) em Watts?",
        opcoes: [
            { letra: "a", texto: "320 W", valor: true },
            { letra: "b", texto: "160 W", valor: false },
            { letra: "c", texto: "640 W", valor: false },
            { letra: "d", texto: "80 W", valor: false }
        ]
    },
    {
        id: 20,
        titulo: "Trabalho em Ciclo Termodinâmico",
        descricao: "Um gás ideal realiza um ciclo termodinâmico fechado em um diagrama pressão-volume. Sabendo que ao longo de todo o ciclo o sistema absorveu uma quantidade líquida de calor igual a $600\\text{ J}$, qual foi o trabalho total realizado pelo gás ao final do ciclo?",
        opcoes: [
            { letra: "a", texto: "0 J", valor: false },
            { letra: "b", texto: "300 J", valor: false },
            { letra: "c", texto: "600 J", valor: true },
            { letra: "d", texto: "1.200 J", valor: false }
        ]
    }
];

export default questoesMatematica;