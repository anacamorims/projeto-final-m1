const perguntas = [
  {
    pergunta: "Como que todo código de HTML começa?",
    alternativas: ["a) <head></head>", "b) <html></html>", "c) <!DOCTYPE html>", "d) <start></start>"],
    iRespostaCorreta: 2
  },
  {
    pergunta: "Qual tag que define o título de uma página em HTML?",
    alternativas: ["a) <page></page>", "b) <name></name>", "c) <title></title>", "d) <p></p>"],
    iRespostaCorreta: 2
  },
  {
    pergunta: "Qual tag define um parágrafo em HTML?",
    alternativas: ["a) <p></p>", "b) <text></text>", "c) <h1></h1>", "d) <page></page>"],
    iRespostaCorreta: 0
  }
]


const divQuiz = document.getElementById("quiz-container")
const divPergunta = document.getElementById("question")
const divAlternativas = document.getElementById("alternatives")

let iPerguntaAtual = 0
let pontuacao = 0


function mostraPergunta() {
  const perguntaAtual = perguntas[iPerguntaAtual]
  divPergunta.innerHTML = ""
  divPergunta.textContent = perguntaAtual.pergunta
  divAlternativas.innerHTML = ""

//ou perguntaAtual.alternativas.length
  for (let i = 0; i <= 3; i++) {
    const alternativa = perguntaAtual.alternativas[i]
    const botao = document.createElement("button")
    botao.textContent = alternativa
    botao.addEventListener("click", () => verificar(i))
    divAlternativas.appendChild(botao);
  }
  
}

function verificar(botaoApertado) {
  const perguntaAtual = perguntas[iPerguntaAtual]

  if (botaoApertado == perguntaAtual.iRespostaCorreta) {
    pontuacao = pontuacao + 1
    alert("Tá sabendo muito, você acertou.")
    
  } else {
    alert("Vixi você errou, reinicie o quiz e tente de novo")
    
    
    if (!document.getElementById("btnReiniciar")) {
      const botaoReiniciar = document.createElement("button");
      botaoReiniciar.id = "btnReiniciar";
      botaoReiniciar.textContent = "Reiniciar Quiz";
      botaoReiniciar.addEventListener("click", reiniciarQuiz);
      divAlternativas.appendChild(botaoReiniciar);
  
    }
    return;  
  }
  

  iPerguntaAtual++;

//ou perguntas.length
if (iPerguntaAtual < 3) {
  mostraPergunta()
} else {
  exibirResultado()
}
}



mostraPergunta()