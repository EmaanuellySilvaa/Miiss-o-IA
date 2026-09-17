const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Na sua visão, qual é o caminho mais eficaz para combater a desigualdade social e o desemprego em uma sociedade?"
        alternativas: [
            {
                texto: "Focar no forte investimento em educação pública, capacitação técnica e inovação, garantindo que as pessoas tenham oportunidades reais de competir e prosperar por conta própria no mercado.
"
",
                afirmacao: "Visão de Mundo: Acredita que a solução sustentável para a desigualdade e a falta de trabalho passa pela geração de oportunidades e qualificação.",
                    escrever algo parecido
"
            },
            {
                texto:"Fortalecer a rede de proteção social, os direitos trabalhistas e a distribuição de renda, garantindo estabilidade básica e segurança socioeconômica para todos antes de qualquer coisa."  
            
                afirmacao: "Pontos Fortes: Empatia social, foco na redução imediata da pobreza, valorização da justiça distributiva e combate às disparidades estruturais."                        
                 escrever algo parecido

            }    
           
        ]
    },
    {
       
            enunciado: "Qual das seguintes opções descreve corretamente o conceito de "Pobreza Multidimensional?"
"

                {
                    texto: "A Pobreza Multidimensional é uma abordagem que define a pobreza não apenas pela falta de dinheiro, mas pela sobreposição de privações que uma pessoa enfrenta no dia a dia. Isso inclui a falta de acesso a serviços essenciais como saúde de qualidade, educação, saneamento básico, moradia digna, eletricidade e segurança."
                    afirmacao: "Tem uma visão técnica, acadêmica e focada em indicadores sociais. Prioriza compreender a pobreza de forma holística para criar políticas públicas eficientes e medir o bem-estar humano além dos índices puramente econômicos.",
                    escrever algo parecido
"
                {
                    texto:  "Na prática, a Pobreza Multidimensional significa que ser pobre não é só ter uma renda baixa, é ter o futuro limitado por barreiras estruturais. É a realidade de uma família que até pode ter um emprego, mas precisa escolher entre comprar comida ou remédio porque não tem posto de saúde no bairro, nem transporte público adequado para buscar oportunidades melhores."
"
                    afirmacao: "Tem uma visão humanizada, empática e focada na vivência real das pessoas. Busca traduzir conceitos teóricos para o impacto direto no cotidiano e na dignidade das comunidades vulneráveis."
                    escrever algo parecido
"
               
            ]
        },
        {
            enunciado: "Qual é a estratégia principal que as empresas e a sociedade devem adotar para combater a desigualdade salarial entre trabalhadores que exercem funções semelhantes?"
"
            alternativas: [
                {
                    texto: "implementar políticas rigorosas de transparência salarial e auditorias periódicas, garantindo equidade de remuneração com base em critérios objetivos e prazos definidos."
                                        afirmacao: "O Guardião da Transparência e Equidade Você acredita que a correção da desigualdade salarial exige métricas claras, fiscalização e regras objetivas. Sua abordagem é estruturada e focada em eliminar vieses inconscientes por meio de processos padronizados e visibilidade total sobre os critérios de remuneração.",
                                        escrever algo parecido
                {
                    texto:   "Criar programas contínuos de mentoria, aceleração de carreira e capacitação voltados a grupos sub-representados, preparando-os para ocupar cargos de liderança e maior remuneração.
"
               
                    afirmacao: "O Catalisador de Desenvolvimento Social Você enxerga o combate à disparidade salarial como um processo contínuo de fortalecimento de competências e abertura de caminhos. Sua prioridade é empoderar os profissionais por meio de conhecimento, acesso a redes de apoio e aceleração de oportunidades de topo.."
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta()