const perguntas = [
  {
      pergunta: "1-Como que todo código de HTML começa?",
      alternativas: ["a)<head></head>", "b)<html></html>", "c)<start></start>", "d)<!DOCTYPE html>"],
      iRespostaCorreta: 3
  },
  {
      pergunta: "2-Qual tag que define o título de uma página em HTML?",
      alternativas: ["a)<page></page>", "b)<name></name>", "c)<title></title>", "d)<p></p>"],
      iRespostaCorreta: 2
  },
  {
      pergunta: "3-Qual tag define um parágrafo em HTML?",
      alternativas: ["a)<h1></h1>", "b)<text></text>", "c)<h1></h1>", "d)<p></p>"],
      iRespostaCorreta: 3
  },
  {
      pergunta: "4-Qual tag coloca uma foto no Website?",
      alternativas: ["a)<photo></photo>", "b)<src></src>", "c)<img></img>", "d)<media></media>"],
      iRespostaCorreta: 2
  },
  {
      pergunta: "5-Qual tag adiciona uma lista ordenada no HTML?",
      alternativas: ["a)<ol></ol>", "b)<p></p>", "c)<hr></hr>", "d)<li></li>"],
      iRespostaCorreta: 0
  },
  {
      pergunta: "6-Qual tag adiciona uma lista não ordenada no HTML?",
      alternativas: ["a)<src></src>", "b)<p></p>", "c)<ul></ul>", "d)<hr></hr>"],
      iRespostaCorreta: 2
  },
  {
      pergunta: "7-Qual tag HTML é usada para criar um link clicável?",
      alternativas: ["a)<link></link>", "b)<a></a>", "c)<href></href>", "d)<url></url>"],
      iRespostaCorreta: 1
  }
]


const divQuiz = document.getElementById("quiz-container")
const divPergunta = document.getElementById("question")
const divAlternativas = document.getElementById("alternativas")
const restartPageEl = document.getElementById("restart-page")
const btnRestart = document.getElementById("btnReiniciar")

let iPerguntaAtual = 0
let pontuacao = 0


function mostraPergunta() {
  const perguntaAtual = perguntas[iPerguntaAtual]
  
  // restart question section
  divPergunta.style.display = 'block'
  divPergunta.innerHTML = ""
  divPergunta.textContent = perguntaAtual.pergunta

  // restart alternativas section
  divAlternativas.style.display = 'flex'
  divAlternativas.innerHTML = ""

  hiddenRestartPage()
  

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

      showRestartPage()

      return;  
  }
  

  iPerguntaAtual++;

//ou perguntas.length
if (iPerguntaAtual < 7) {
    mostraPergunta()
} else {
    exibirResultado()
}
}



function reiniciarQuiz() {
    iPerguntaAtual = 0
    pontuacao = 0
    divPergunta.innerHTML = ""
    divAlternativas.innerHTML = ""
    mostraPergunta()
}


function exibirResultado() {
    divQuiz.innerHTML = `<h2 class="result-phrase">Quiz concluído!</h2><p class="result-phrase">Sua pontuação: ${pontuacao} de ${perguntas.length}</p>`;
}


function showRestartPage() {
    document.getElementById("question").style.display = 'none'
    document.getElementById("alternativas").style.display = 'none'

    restartPageEl.style.display = 'flex'
    restartPageEl.addEventListener("click", reiniciarQuiz);
}

function hiddenRestartPage() {
    restartPageEl.style.display = 'none'
}


mostraPergunta()