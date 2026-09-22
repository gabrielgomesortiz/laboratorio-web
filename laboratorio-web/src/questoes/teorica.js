// src/data/questoes.js
const questoes = [
    {
        id: 1,
        titulo: 'O Gás sob Pressão',
        descricao: 'Um gás é aquecido dentro de um recipiente fechado e de volume constante. O que acontece com a pressão?',
        opcoes: [
            { letra: 'A', texto: 'A pressão diminui.', valor: false },
            { letra: 'B', texto: 'A pressão permanece constante.', valor: false },
            { letra: 'C', texto: 'A pressão se torna zero.', valor: false },
            { letra: 'D', texto: 'A pressão aumenta.', valor: true }
        ]
    },
    {
        id: 2,
        titulo: 'A Válvula de Emergência',
        descricao: 'Um gás se expande e realiza trabalho sobre o ambiente. Considerando que não recebe calor durante o processo, o que acontece com sua energia interna?',
        opcoes: [
            { letra: 'A', texto: 'A energia interna diminui.', valor: true },
            { letra: 'B', texto: 'A energia interna aumenta.', valor: false },
            { letra: 'C', texto: 'A energia interna permanece sempre constante.', valor: false },
            { letra: 'D', texto: 'A energia interna se torna infinita.', valor: false }
        ]
    },
    {
        id: 3,
        titulo: 'Transferência de Calor',
        descricao: 'Um corpo quente é colocado em contato com um corpo frio. Para qual direção ocorre espontaneamente a transferência de calor?',
        opcoes: [
            { letra: 'A', texto: 'Do corpo quente para o corpo frio.', valor: true },
            { letra: 'B', texto: 'Do corpo frio para o corpo quente.', valor: false },
            { letra: 'C', texto: 'Nos dois sentidos com a mesma intensidade.', valor: false },
            { letra: 'D', texto: 'Não ocorre transferência de calor.', valor: false }
        ]
    },
    {
        id: 4,
        titulo: 'Equilíbrio Térmico',
        descricao: 'Dois corpos atingem o equilíbrio térmico. O que pode ser afirmado sobre suas temperaturas?',
        opcoes: [
            { letra: 'A', texto: 'Um deles necessariamente está a 0 °C.', valor: false },
            { letra: 'B', texto: 'Possuem a mesma temperatura.', valor: true },
            { letra: 'C', texto: 'Possuem temperaturas diferentes.', valor: false },
            { letra: 'D', texto: 'Ambos necessariamente estão a 100 °C.', valor: false }
        ]
    },
    {
        id: 5,
        titulo: 'Transformação Isotérmica',
        descricao: 'Em uma transformação isotérmica de um gás ideal, qual grandeza permanece constante?',
        opcoes: [
            { letra: 'A', texto: 'A pressão.', valor: false },
            { letra: 'B', texto: 'A quantidade de calor.', valor: false },
            { letra: 'C', texto: 'O volume.', valor: false },
            { letra: 'D', texto: 'A temperatura.', valor: true }
        ]
    },
    {
        id: 6,
        titulo: 'Transformação Isocórica',
        descricao: 'Em uma transformação isocórica, qual grandeza permanece constante?',
        opcoes: [
            { letra: 'A', texto: 'O volume.', valor: true },
            { letra: 'B', texto: 'A temperatura.', valor: false },
            { letra: 'C', texto: 'O trabalho.', valor: false },
            { letra: 'D', texto: 'A pressão.', valor: false }
        ]
    },
    {
        id: 7,
        titulo: 'Transformação Isobárica',
        descricao: 'Em uma transformação isobárica, qual grandeza permanece constante?',
        opcoes: [
            { letra: 'A', texto: 'A temperatura.', valor: false },
            { letra: 'B', texto: 'A pressão.', valor: true },
            { letra: 'C', texto: 'O volume.', valor: false },
            { letra: 'D', texto: 'A energia interna.', valor: false }
        ]
    },
    {
        id: 8,
        titulo: 'Transformação Adiabática',
        descricao: 'Em uma transformação adiabática, o que acontece com a troca de calor entre o sistema e o ambiente?',
        opcoes: [
            { letra: 'A', texto: 'O sistema libera calor constantemente.', valor: false },
            { letra: 'B', texto: 'O sistema recebe calor constantemente.', valor: false },
            { letra: 'C', texto: 'A troca de calor é sempre infinita.', valor: false },
            { letra: 'D', texto: 'Não há troca de calor.', valor: true }
        ]
    },
    {
        id: 9,
        titulo: 'Trabalho de um Gás',
        descricao: 'Quando um gás se expande e realiza trabalho sobre o ambiente, o que acontece com seu volume?',
        opcoes: [
            { letra: 'A', texto: 'O volume aumenta.', valor: true },
            { letra: 'B', texto: 'O volume diminui.', valor: false },
            { letra: 'C', texto: 'O volume obrigatoriamente se torna zero.', valor: false },
            { letra: 'D', texto: 'O volume não pode ser alterado.', valor: false }
        ]
    },
    {
        id: 10,
        titulo: 'Primeira Lei da Termodinâmica',
        descricao: 'Um sistema recebe calor e não realiza trabalho. O que pode acontecer com sua energia interna?',
        opcoes: [
            { letra: 'A', texto: 'A energia interna diminui.', valor: false },
            { letra: 'B', texto: 'A energia interna desaparece.', valor: false },
            { letra: 'C', texto: 'A energia interna aumenta.', valor: true },
            { letra: 'D', texto: 'A energia interna necessariamente permanece igual.', valor: false }
        ]
    },
    {
        id: 11,
        titulo: 'Energia Interna',
        descricao: 'Para um gás ideal, de quais fatores depende diretamente a energia interna?',
        opcoes: [
            { letra: 'A', texto: 'Somente do volume.', valor: false },
            { letra: 'B', texto: 'Somente da temperatura.', valor: true },
            { letra: 'C', texto: 'Somente do trabalho realizado.', valor: false },
            { letra: 'D', texto: 'Somente da pressão.', valor: false }
        ]
    },
    {
        id: 12,
        titulo: 'Significado do Calor Sensível',
        descricao: 'O que caracteriza essencialmente a absorção de calor sensível por parte de um corpo?',
        opcoes: [
            { letra: 'A', texto: 'A alteração exclusiva da sua massa sem mudança térmica.', valor: false },
            { letra: 'B', texto: 'A variação da sua temperatura sem mudança de estado físico.', valor: true },
            { letra: 'C', texto: 'A mudança de estado físico do corpo sem alteração de temperatura.', valor: false },
            { letra: 'D', texto: 'A expansão imediata do recipiente onde está confinado.', valor: false }
        ]
    },
    {
        id: 13,
        titulo: 'Calor Latente',
        descricao: 'Durante uma mudança de estado físico de uma substância pura, o que ocorre com a temperatura do sistema?',
        opcoes: [
            { letra: 'A', texto: 'Permanece constante enquanto houver mudança de estado.', valor: true },
            { letra: 'B', texto: 'Aumenta proporcionalmente ao calor recebido.', valor: false },
            { letra: 'C', texto: 'Diminui drasticamente até zerar.', valor: false },
            { letra: 'D', texto: 'Oscila desordenadamente durante todo o processo.', valor: false }
        ]
    },
    {
        id: 14,
        titulo: 'Máquina Térmica',
        descricao: 'Qual é uma das funções básicas de uma máquina térmica em funcionamento cíclico?',
        opcoes: [
            { letra: 'A', texto: 'Eliminar completamente a energia do universo.', valor: false },
            { letra: 'B', texto: 'Impedir qualquer transferência de calor.', valor: false },
            { letra: 'C', texto: 'Transformar todo o calor recebido integralmente em trabalho.', valor: false },
            { letra: 'D', texto: 'Transformar parte do calor recebido em trabalho útil.', valor: true }
        ]
    },
    {
        id: 15,
        titulo: 'Segunda Lei da Termodinâmica',
        descricao: 'Uma máquina térmica pode transformar integralmente todo o calor recebido em trabalho, sem nenhuma outra alteração no ambiente?',
        opcoes: [
            { letra: 'A', texto: 'Sim, desde que a pressão seja mantida constante.', valor: false },
            { letra: 'B', texto: 'Não.', valor: true },
            { letra: 'C', texto: 'Sim, sempre que operar com gases nobres.', valor: false },
            { letra: 'D', texto: 'Somente quando o volume do sistema for nulo.', valor: false }
        ]
    },
    {
        id: 16,
        titulo: 'Máquina de Carnot',
        descricao: 'De quais fatores depende exclusivamente o rendimento máximo teórico de uma máquina de Carnot?',
        opcoes: [
            { letra: 'A', texto: 'Das temperaturas da fonte quente e da fonte fria.', valor: true },
            { letra: 'B', texto: 'Somente da temperatura ambiente.', valor: false },
            { letra: 'C', texto: 'Somente da pressão exercida pela fonte quente.', valor: false },
            { letra: 'D', texto: 'Da natureza química do gás utilizado.', valor: false }
        ]
    },
    {
        id: 17,
        titulo: 'Refrigerador',
        descricao: 'Qual é a principal função e o sentido de operação de um refrigerador?',
        opcoes: [
            { letra: 'A', texto: 'Transferir calor espontaneamente da região fria para a quente.', valor: false },
            { letra: 'B', texto: 'Produzir frio sem consumir nenhum tipo de energia.', valor: false },
            { letra: 'C', texto: 'Transferir calor da região fria para a quente com auxílio de trabalho externo.', valor: true },
            { letra: 'D', texto: 'Eliminar completamente todo o calor contido nos alimentos.', valor: false }
        ]
    },
    {
        id: 18,
        titulo: 'Temperatura Absoluta',
        descricao: 'Qual é o significado físico atribuído ao zero absoluto na escala Kelvin?',
        opcoes: [
            { letra: 'A', texto: 'A temperatura na qual a água entra em ebulição sob pressão normal.', valor: false },
            { letra: 'B', texto: 'O ponto de fusão do gelo ao nível do mar.', valor: false },
            { letra: 'C', texto: 'O limite inferior de temperatura onde cessa a agitação molecular clássica.', valor: true },
            { letra: 'D', texto: 'A temperatura média da superfície do Sol.', valor: false }
        ]
    },
    {
        id: 19,
        titulo: 'Lei de Boyle-Mariotte',
        descricao: 'Mantendo a massa e a temperatura de um gás constantes, o que acontece com a pressão se o volume for reduzido à metade?',
        opcoes: [
            { letra: 'A', texto: 'A pressão dobra de valor.', valor: true },
            { letra: 'B', texto: 'A pressão é reduzida pela metade.', valor: false },
            { letra: 'C', texto: 'A pressão permanece inalterada.', valor: false },
            { letra: 'D', texto: 'A pressão cai instantaneamente a zero.', valor: false }
        ]
    },
    {
        id: 20,
        titulo: 'Transferência Espontânea de Calor',
        descricao: 'O calor pode passar espontaneamente de um corpo frio para um corpo mais quente sem a realização de trabalho externo?',
        opcoes: [
            { letra: 'A', texto: 'Sim, sempre que houver diferença de pressão.', valor: false },
            { letra: 'B', texto: 'Não.', valor: true },
            { letra: 'C', texto: 'Sim, em dias de umidade elevada.', valor: false },
            { letra: 'D', texto: 'Sim, se os corpos possuírem massas iguais.', valor: false }
        ]
    },
    {
        id: 21,
        titulo: 'Condução Térmica',
        descricao: 'Qual é o principal mecanismo de propagação de calor através de um corpo sólido metálico?',
        opcoes: [
            { letra: 'A', texto: 'Movimento macroscópico de massas fluidas.', valor: false },
            { letra: 'B', texto: 'Vibração reticular e colisão de elétrons livres entre átomos.', valor: true },
            { letra: 'C', texto: 'Emissão exclusiva de ondas eletromagnéticas de rádio.', valor: false },
            { letra: 'D', texto: 'Convecção forçada das moléculas superficiais.', valor: false }
        ]
    },
    {
        id: 22,
        titulo: 'Convecção Térmica',
        descricao: 'Por que o processo de convecção térmica ocorre estritamente em líquidos e gases, e não em sólidos?',
        opcoes: [
            { letra: 'A', texto: 'Porque os fluidos permitem o deslocamento físico de massas com diferentes densidades.', valor: true },
            { letra: 'B', texto: 'Porque os sólidos possuem condutividade térmica nula.', valor: false },
            { letra: 'C', texto: 'Porque os gases não possuem moléculas dotadas de massa.', valor: false },
            { letra: 'D', texto: 'Porque a gravidade não atua sobre os corpos sólidos.', valor: false }
        ]
    },
    {
        id: 23,
        titulo: 'Irradiação Térmica',
        descricao: 'Qual é a principal característica que diferencia a irradiação dos demais processos de transmissão de calor?',
        opcoes: [
            { letra: 'A', texto: 'Exige contato físico direto e rígido entre os corpos.', valor: false },
            { letra: 'B', texto: 'Depende obrigatoriamente da presença de ar atmosférico.', valor: false },
            { letra: 'C', texto: 'Propaga-se por meio de ondas eletromagnéticas, podendo ocorrer no vácuo.', valor: true },
            { letra: 'D', texto: 'Ocorre unicamente em temperaturas abaixo de 0 Kelvin.', valor: false }
        ]
    },
    {
        id: 24,
        titulo: 'Dilatação dos Líquidos',
        descricao: 'Quando aquecemos um recipiente totalmente cheio de líquido, por que o líquido transborda?',
        opcoes: [
            { letra: 'A', texto: 'Porque o líquido sofre dilatação maior que o recipiente.', valor: true },
            { letra: 'B', texto: 'Porque o recipiente se contrai enquanto o líquido se expande.', valor: false },
            { letra: 'C', texto: 'Porque a massa do líquido aumenta com o aquecimento.', valor: false },
            { letra: 'D', texto: 'Porque a pressão atmosférica local diminui bruscamente.', valor: false }
        ]
    },
    {
        id: 25,
        titulo: 'Comportamento Anômalo da Água',
        descricao: 'O que acontece com o volume de uma certa massa de água pura quando sua temperatura é elevada de 0 °C para 4 °C?',
        opcoes: [
            { letra: 'A', texto: 'O volume aumenta linearmente.', valor: false },
            { letra: 'B', texto: 'O volume diminui (contração anômala).', valor: true },
            { letra: 'C', texto: 'O volume permanece absolutamente inalterado.', valor: false },
            { letra: 'D', texto: 'A água congela instantaneamente.', valor: false }
        ]
    },
    {
        id: 26,
        titulo: 'Capacidade Térmica',
        descricao: 'O que indica uma alta capacidade térmica em um determinado corpo?',
        opcoes: [
            { letra: 'A', texto: 'Que ele precisa de muito pouco calor para variar sua temperatura.', valor: false },
            { letra: 'B', texto: 'Que ele conduz eletricidade com facilidade extrema.', valor: false },
            { letra: 'C', texto: 'Que ele necessita de uma grande quantidade de calor para sofrer variação de temperatura.', valor: true },
            { letra: 'D', texto: 'Que seu ponto de fusão é igual ao zero absoluto.', valor: false }
        ]
    },
    {
        id: 27,
        titulo: 'Calor Específico',
        descricao: 'Substâncias diferentes possuem calores específicos diferentes. O que significa uma substância ter alto calor específico?',
        opcoes: [
            { letra: 'A', texto: 'Ela aquece e resfria muito rapidamente.', valor: false },
            { letra: 'B', texto: 'Sua resistência mecânica é elevada.', valor: false },
            { letra: 'C', texto: 'Ela resiste bem a mudanças de temperatura, exigindo mais calor por grama.', valor: true },
            { letra: 'D', texto: 'Ela evapora espontaneamente à temperatura ambiente.', valor: false }
        ]
    },
    {
        id: 28,
        titulo: 'Equivalente Mecânico do Calor',
        descricao: 'O que demonstra a experiência clássica do equivalente mecânico do calor?',
        opcoes: [
            { letra: 'A', texto: 'Que trabalho mecânico e calor são formas equivalentes de transferência de energia.', valor: true },
            { letra: 'B', texto: 'Que o calor pode ser transformado em trabalho com 100% de eficiência.', valor: false },
            { letra: 'C', texto: 'Que a energia mecânica de um sistema isolado é sempre destruída.', valor: false },
            { letra: 'D', texto: 'Que a temperatura independe da agitação microscópica.', valor: false }
        ]
    },
    {
        id: 29,
        titulo: 'Trabalho em Ciclos',
        descricao: 'Em um diagrama Pressão x Volume (P-V), o que representa geometricamente a área interna de um ciclo fechado sentido horário?',
        opcoes: [
            { letra: 'A', texto: 'A variação total da temperatura absoluta.', valor: false },
            { letra: 'B', texto: 'O trabalho total líquido realizado pelo gás no ciclo.', valor: true },
            { letra: 'C', texto: 'O calor total dissipado para o ambiente externo.', valor: false },
            { letra: 'D', texto: 'A energia interna inicial do sistema.', valor: false }
        ]
    },
    {
        id: 30,
        titulo: 'Entropia e a Natureza',
        descricao: 'O que enuncia a Segunda Lei da Termodinâmica no contexto da entropia do universo?',
        opcoes: [
            { letra: 'A', texto: 'A entropia total de um sistema isolado tende sempre a aumentar ou permanecer constante em processos reais.', valor: true },
            { letra: 'B', texto: 'A entropia do universo diminui continuamente com o tempo.', valor: false },
            { letra: 'C', texto: 'A energia total do universo é convertida integralmente em atrito.', valor: false },
            { letra: 'D', texto: 'Processos naturais são perfeitamente reversíveis sem perdas.', valor: false }
        ]
    },
    {
        id: 31,
        titulo: 'Pressão Atmosférica e Ebulição',
        descricao: 'O que ocorre com o ponto de ebulição da água quando nos deslocamos para uma região de altitude elevada?',
        opcoes: [
            { letra: 'A', texto: 'O ponto de ebulição aumenta porque o ar é mais rarefeito.', valor: false },
            { letra: 'B', texto: 'O ponto de ebulição diminui devido à menor pressão atmosférica local.', valor: true },
            { letra: 'C', texto: 'O ponto de ebulição permanece rigidamente em 100 °C.', valor: false },
            { letra: 'D', texto: 'A água deixa de evaporar completamente em qualquer temperatura.', valor: false }
        ]
    },
    {
        id: 32,
        titulo: 'Gases Ideais: Hipóteses',
        descricao: 'Quais são as principais considerações teóricas atribuídas a um gás ideal ou perfeito?',
        opcoes: [
            { letra: 'A', texto: 'Moléculas com volume próprio considerável e fortes forças de coesão.', valor: false },
            { letra: 'B', texto: 'Colisões perfeitamente inelásticas entre as paredes e as moléculas.', valor: false },
            { letra: 'C', texto: 'Ausência de forças intermoleculares atrativas e volume molecular desprezível.', valor: true },
            { letra: 'D', texto: 'Temperatura fixa em zero absoluto sob qualquer condição.', valor: false }
        ]
    },
    {
        id: 33,
        titulo: 'Processo Reversível',
        descricao: 'O que caracteriza um processo termodinâmico idealmente reversível?',
        opcoes: [
            { letra: 'A', texto: 'Pode retornar ao estado inicial sem deixar quaisquer vestígios ou alterações no ambiente.', valor: true },
            { letra: 'B', texto: 'Envolve sempre grande quantidade de atrito mecânico.', valor: false },
            { letra: 'C', texto: 'Acontece de maneira instantânea e explosiva.', valor: false },
            { letra: 'D', texto: 'Viola obrigatoriamente a conservação da energia.', valor: false }
        ]
    },
    {
        id: 34,
        titulo: 'Trabalho em Transformação Cíclica',
        descricao: 'Em um ciclo termodinâmico completo, qual é a variação líquida da energia interna (ΔU) do sistema?',
        opcoes: [
            { letra: 'A', texto: 'Igual ao calor total fornecido.', valor: false },
            { letra: 'B', texto: 'Igual ao dobro do trabalho realizado.', valor: false },
            { letra: 'C', texto: 'Nula, pois a energia interna é uma função de estado.', valor: true },
            { letra: 'D', texto: 'Sempre máxima e positiva.', valor: false }
        ]
    },
    {
        id: 35,
        titulo: 'Dilatação Linear de Sólidos',
        descricao: 'Ao aquecer uma placa metálica que possui um orifício circular em seu centro, o que acontece com o tamanho do orifício?',
        opcoes: [
            { letra: 'A', texto: 'O orifício diminui de tamanho.', valor: false },
            { letra: 'B', texto: 'O orifício permanece com o diâmetro constante.', valor: false },
            { letra: 'C', texto: 'O orifício se expande da mesma forma que o restante do material da placa.', valor: true },
            { letra: 'D', texto: 'O orifício deforma-se transformando-se em um quadrado.', valor: false }
        ]
    },
    {
        id: 36,
        titulo: 'Fusão e Solidificação',
        descricao: 'Durante o processo de solidificação de uma substância pura cristalina, o que ocorre com o calor?',
        opcoes: [
            { letra: 'A', texto: 'A substância absorve calor do meio externo.', valor: false },
            { letra: 'B', texto: 'A substância libera calor para o meio externo.', valor: true },
            { letra: 'C', texto: 'Não há qualquer troca de calor envolvida.', valor: false },
            { letra: 'D', texto: 'O calor é convertido instantaneamente em luz.', valor: false }
        ]
    },
    {
        id: 37,
        titulo: 'Vaporização',
        descricao: 'Quais são as três formas distintas em que o fenômeno da vaporização de um líquido pode ocorrer?',
        opcoes: [
            { letra: 'A', texto: 'Condução, convecção e irradiação.', valor: false },
            { letra: 'B', texto: 'Isoterma, adiabática e isocórica.', valor: false },
            { letra: 'C', texto: 'Evaporação, ebulição e calefação.', valor: true },
            { letra: 'D', texto: 'Fusão, sublimação e condensação.', valor: false }
        ]
    },
    {
        id: 38,
        titulo: 'Calefação',
        descricao: 'Como se caracteriza o processo de calefação em um líquido?',
        opcoes: [
            { letra: 'A', texto: 'Vaporização extremamente rápida ao entrar em contato com uma superfície cuja temperatura está muito acima do ponto de ebulição.', valor: true },
            { letra: 'B', texto: 'Evaporação lenta e gradual à temperatura ambiente.', valor: false },
            { letra: 'C', texto: 'Transformação do estado sólido diretamente para o gasoso.', valor: false },
            { letra: 'D', texto: 'Congelamento instantâneo provocado por choque térmico.', valor: false }
        ]
    },
    {
        id: 39,
        titulo: 'Propagação de Calor no Vácuo',
        descricao: 'Se colocarmos uma garrafa térmica ideal perfeitamente vedada, qual processo de troca de calor ela tenta barrar simultaneamente?',
        opcoes: [
            { letra: 'A', texto: 'Apenas a condução.', valor: false },
            { letra: 'B', texto: 'Apenas a convecção.', valor: false },
            { letra: 'C', texto: 'Condução, convecção e irradiação.', valor: true },
            { letra: 'D', texto: 'Apenas a dilatação térmica.', valor: false }
        ]
    },
    {
        id: 40,
        titulo: 'Zero Absoluto e Teorema de Nernst',
        descricao: 'O que estabelece a Terceira Lei da Termodinâmica em relação ao zero absoluto?',
        opcoes: [
            { letra: 'A', texto: 'É impossível alcançar o zero absoluto em um número finito de etapas experimentais.', valor: true },
            { letra: 'B', texto: 'A energia interna de qualquer sistema torna-se infinita no zero absoluto.', valor: false },
            { letra: 'C', texto: 'A entropia de qualquer substância cristalina pura é máxima a 0 K.', valor: false },
            { letra: 'D', texto: 'Todos os gases tornam-se líquidos perfeitos nessa temperatura.', valor: false }
        ]
    },
    {
        id: 41,
        titulo: 'Teoria Cinética dos Gases',
        descricao: 'Na teoria cinética dos gases, a pressão exercida por um gás nas paredes do recipiente é devida a quê?',
        opcoes: [
            { letra: 'A', texto: 'Às forças atrativas de longo alcance entre as moléculas.', valor: false },
            { letra: 'B', texto: 'Às colisões elásticas das moléculas contra as paredes internas.', valor: true },
            { letra: 'C', texto: 'Ao peso próprio das moléculas gasosas.', valor: false },
            { letra: 'D', texto: 'À reação química contínua entre o gás e o recipiente.', valor: false }
        ]
    },
    {
        id: 42,
        titulo: 'Energia Cinética Média',
        descricao: 'De acordo com a teoria cinética, a temperatura absoluta de um gás ideal é uma medida direta de quê?',
        opcoes: [
            { letra: 'A', texto: 'Da energia potencial gravitacional das moléculas.', valor: false },
            { letra: 'B', texto: 'Da energia cinética translacional média de suas moléculas.', valor: true },
            { letra: 'C', texto: 'Do volume total ocupado pelo gás.', valor: false },
            { letra: 'D', texto: 'Da quantidade total de calor armazenada no recipiente.', valor: false }
        ]
    },
    {
        id: 43,
        titulo: 'Comportamento dos Gases Reais',
        descricao: 'Em quais condições de temperatura e pressão um gás real se comporta de maneira mais próxima a um gás ideal?',
        opcoes: [
            { letra: 'A', texto: 'Altas pressões e baixas temperaturas.', valor: false },
            { letra: 'B', texto: 'Altas pressões e temperaturas extremamente altas.', valor: false },
            { letra: 'C', texto: 'Baixas pressões e altas temperaturas.', valor: true },
            { letra: 'D', texto: 'Condições de liquefação iminente.', valor: false }
        ]
    },
    {
        id: 44,
        titulo: 'Processo Expansivo Adiabático',
        descricao: 'Quando um gás sofre uma expansão adiabática rápida, o que ocorre com sua temperatura?',
        opcoes: [
            { letra: 'A', texto: 'A temperatura aumenta.', valor: false },
            { letra: 'B', texto: 'A temperatura diminui (resfriamento adiabático).', valor: true },
            { letra: 'C', texto: 'A temperatura permanece constante.', valor: false },
            { letra: 'D', texto: 'A temperatura atinge instantaneamente o ponto de ebulição.', valor: false }
        ]
    },
    {
        id: 45,
        titulo: 'Processo de Compressão Adiabática',
        descricao: 'Se um gás é comprimido adiabaticamente de forma rápida, o que acontece com a sua temperatura?',
        opcoes: [
            { letra: 'A', texto: 'A temperatura diminui.', valor: false },
            { letra: 'B', texto: 'A temperatura aumenta.', valor: true },
            { letra: 'C', texto: 'A temperatura não sofre nenhuma alteração.', valor: false },
            { letra: 'D', texto: 'A temperatura zera por falta de calor.', valor: false }
        ]
    },
    {
        id: 46,
        titulo: 'Rendimento de Máquinas Reais',
        descricao: 'Por que o rendimento de qualquer máquina térmica real é sempre inferior ao de uma máquina de Carnot operando entre as mesmas temperaturas?',
        opcoes: [
            { letra: 'A', texto: 'Devido à presença de irreversibilidades como atrito, turbulências e perdas térmicas.', valor: true },
            { letra: 'B', texto: 'Porque a primeira lei da termodinâmica proíbe rendimentos altos.', valor: false },
            { letra: 'C', texto: 'Porque as fontes quentes reais possuem temperaturas negativas.', valor: false },
            { letra: 'D', texto: 'Porque o volume do motor varia de forma caótica.', valor: false }
        ]
    },
    {
        id: 47,
        titulo: 'Enunciado de Clausius',
        descricao: 'Como pode ser enunciado o postulado de Clausius para a Segunda Lei da Termodinâmica?',
        opcoes: [
            { letra: 'A', texto: 'É impossível construir uma máquina que funcione em ciclos cujo único efeito seja transferir calor de um corpo frio para um quente.', valor: true },
            { letra: 'B', texto: 'Todo o calor do universo será convertido em trabalho mecânico.', valor: false },
            { letra: 'C', texto: 'A energia interna de um sistema isolado diminui com o tempo.', valor: false },
            { letra: 'D', texto: 'A pressão de um gás é inversamente proporcional à sua temperatura.', valor: false }
        ]
    },
    {
        id: 48,
        titulo: 'Enunciado de Kelvin-Planck',
        descricao: 'O que afirma o enunciado de Kelvin-Planck da Segunda Lei da Termodinâmica?',
        opcoes: [
            { letra: 'A', texto: 'É impossível construir uma máquina térmica que, operando em ciclos, transforme todo o calor recebido em trabalho útil.', valor: true },
            { letra: 'B', texto: 'O calor flui espontaneamente de corpos frios para corpos quentes.', valor: false },
            { letra: 'C', texto: 'O trabalho mecânico pode ser convertido integralmente em calor sem perdas.', valor: false },
            { letra: 'D', texto: 'A entropia de um sistema fechado diminui espontaneamente.', valor: false }
        ]
    },
    {
        id: 49,
        titulo: 'Transformação Cíclica e Energia',
        descricao: 'Em uma máquina térmica que opera realizando um ciclo completo, o que se pode afirmar sobre a variação total da energia interna?',
        opcoes: [
            { letra: 'A', texto: 'É sempre positiva e máxima.', valor: false },
            { letra: 'B', texto: 'É nula, pois o estado final do ciclo coincide com o inicial.', valor: true },
            { letra: 'C', texto: 'É igual à soma de todas as fontes frias.', valor: false },
            { letra: 'D', texto: 'Depende do formato geométrico do diagrama P-V.', valor: false }
        ]
    },
    {
        id: 50,
        titulo: 'Dilatação Volumétrica',
        descricao: 'O coeficiente de dilatação volumétrica (γ) de um sólido é aproximadamente quantas vezes o seu coeficiente de dilatação linear (α)?',
        opcoes: [
            { letra: 'A', texto: 'Duas vezes.', valor: false },
            { letra: 'B', texto: 'Três vezes.', valor: true },
            { letra: 'C', texto: 'Quatro vezes.', valor: false },
            { letra: 'D', texto: 'Igual (uma vez).', valor: false }
        ]
    },
    {
        id: 51,
        titulo: 'Dilatação Superficial',
        descricao: 'O coeficiente de dilatação superficial (β) de uma placa sólida é aproximadamente quantas vezes o seu coeficiente de dilatação linear (α)?',
        opcoes: [
            { letra: 'A', texto: 'Uma vez (igual).', valor: false },
            { letra: 'B', texto: 'Três vezes.', valor: false },
            { letra: 'C', texto: 'Duas vezes.', valor: true },
            { letra: 'D', texto: 'Quatro vezes.', valor: false }
        ]
    },
    {
        id: 52,
        titulo: 'Pressão de Vapor',
        descricao: 'O que é a pressão máxima de vapor de um líquido a uma dada temperatura?',
        opcoes: [
            { letra: 'A', texto: 'A pressão exercida pelos vapores em equilíbrio dinâmico com o próprio líquido.', valor: true },
            { letra: 'B', texto: 'A pressão atmosférica externa exercida sobre o recipiente aberto.', valor: false },
            { letra: 'C', texto: 'A pressão hidrostática exercida no fundo do reservatório.', valor: false },
            { letra: 'D', texto: 'A pressão necessária para congelar o líquido instantaneamente.', valor: false }
        ]
    },
    {
        id: 53,
        titulo: 'Sublimação',
        descricao: 'Como se define a mudança de estado físico denominada sublimação?',
        opcoes: [
            { letra: 'A', texto: 'Passagem direta do estado líquido para o gasoso.', valor: false },
            { letra: 'B', texto: 'Passagem direta do estado sólido para o gasoso (e vice-versa).', valor: true },
            { letra: 'C', texto: 'Passagem do estado líquido para o sólido.', valor: false },
            { letra: 'D', texto: 'Condensação de vapores nas paredes de um vidro.', valor: false }
        ]
    },
    {
        id: 54,
        titulo: 'Higrometria e Umidade',
        descricao: 'O que mede a umidade relativa do ar em meteorologia?',
        opcoes: [
            { letra: 'A', texto: 'A quantidade absoluta de água líquida em gramas por metro cúbico.', valor: false },
            { letra: 'B', texto: 'A razão entre a quantidade de vapor d\'água presente e a quantidade máxima que o ar pode suportar à mesma temperatura.', valor: true },
            { letra: 'C', texto: 'A temperatura exata do ponto de orvalho da atmosfera.', valor: false },
            { letra: 'D', texto: 'A pressão barométrica corrigida pela altitude.', valor: false }
        ]
    },
    {
        id: 55,
        titulo: 'Ponto Triplo da Água',
        descricao: 'O que representa o ponto triplo da água em termodinâmica?',
        opcoes: [
            { letra: 'A', texto: 'O estado onde coexistem em equilíbrio térmico e físico as fases sólida, líquida e gasosa.', valor: true },
            { letra: 'B', texto: 'A temperatura na qual a água ferve sob três atmosferas de pressão.', valor: false },
            { letra: 'C', texto: 'O ponto de congelamento da água salgada nos oceanos.', valor: false },
            { letra: 'D', texto: 'O limite máximo de pressão suportado pelo gelo.', valor: false }
        ]
    },
    {
        id: 56,
        titulo: 'Condução e Isolantes',
        descricao: 'Por que os materiais chamados de maus condutores térmicos (isolantes) são muito utilizados em construções?',
        opcoes: [
            { letra: 'A', texto: 'Porque eles geram calor espontaneamente para aquecer os ambientes.', valor: false },
            { letra: 'B', texto: 'Porque dificultam a propagação do calor por condução entre o interior e o exterior.', valor: true },
            { letra: 'C', texto: 'Porque possuem densidade superior à dos metais.', valor: false },
            { letra: 'D', texto: 'Porque refletem 100% da luz visível recebida.', valor: false }
        ]
    },
    {
        id: 57,
        titulo: 'Expansão Livre de Joule',
        descricao: 'O que ocorre com a temperatura de um gás ideal quando ele sofre uma expansão livre em um recipiente adiabático vácuo?',
        opcoes: [
            { letra: 'A', texto: 'A temperatura aumenta consideravelmente.', valor: false },
            { letra: 'B', texto: 'A temperatura diminui de forma drástica.', valor: false },
            { letra: 'C', texto: 'A temperatura permanece rigorosamente constante.', valor: true },
            { letra: 'D', texto: 'O gás se liquefaz instantaneamente.', valor: false }
        ]
    },
    {
        id: 58,
        titulo: 'Trabalho em Transformação Isométrica',
        descricao: 'Qual é o valor do trabalho realizado por um gás ideal em uma transformação isométrica (isocórica)?',
        opcoes: [
            { letra: 'A', texto: 'Nulo (zero), pois não há variação de volume.', valor: true },
            { letra: 'B', texto: 'Máximo, igual ao produto da pressão pelo volume inicial.', valor: false },
            { letra: 'C', texto: 'Igual à variação total da energia interna.', valor: false },
            { letra: 'D', texto: 'Negativo e proporcional à temperatura.', valor: false }
        ]
    },
    {
        id: 59,
        titulo: 'Equilíbrio Termodinâmico',
        descricao: 'Para que um sistema físico seja considerado em completo equilíbrio termodinâmico, quais condições devem ser satisfeitas simultaneamente?',
        opcoes: [
            { letra: 'A', texto: 'Apenas equilíbrio mecânico e elétrico.', valor: false },
            { letra: 'B', texto: 'Equilíbrio térmico, mecânico e químico.', valor: true },
            { letra: 'C', texto: 'Apenas equilíbrio térmico com o ambiente externo.', valor: false },
            { letra: 'D', texto: 'Ausência total de moléculas no interior do sistema.', valor: false }
        ]
    },
    {
        id: 60,
        titulo: 'Direção do Fluxo de Entropia',
        descricao: 'De acordo com a física estatística e a termodinâmica, para onde evoluem espontaneamente os sistemas isolados?',
        opcoes: [
            { letra: 'A', texto: 'Para estados de menor desordem e maior energia livre.', valor: false },
            { letra: 'B', texto: 'Para estados de máxima ordem molecular estruturada.', valor: false },
            { letra: 'C', texto: 'Para estados de maior probabilidade estatística e maior desordem (maior entropia).', valor: true },
            { letra: 'D', texto: 'Para o estado de zero absoluto permanente.', valor: false }
        ]
    }
];

export default questoes;