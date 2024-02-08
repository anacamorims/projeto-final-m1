let perguntasQuiz = [
    {
      pergunta:"Qual a capital do Brasil?",
      respostas: {
        a: 'Porto Velho',
        b: 'São Paulo',
        c: 'Brasilia'
      },
      respostaCorreta: 'c'
    },
    {
      pergunta:"Quantos dias tem um ano?",
      respostas:{
        a:'362',
        b:'365',
        c:'487'
      },
      respostaCorreta: 'b'
    }
  ];
  
  let quizContainer = document.getElementById('quiz');
  let resultadoContainer = document.getElementById('resultado');
  let botaoEnviar = document.getElementById('enviar');
  
  generateQuiz(perguntasQuiz, quizContainer, resultadoContainer, botaoEnviar);
  
  function generateQuiz(pergunta, quizContainer, resultadoContainer, botaoEnviar){
  
    function mostrePerguntas(pergunta, quizContainer){
      let saida = [];
      let respostas;
  
      for(let i=0; i<pergunta.length; i++){
        respostas = [];
  
        for(letra in pergunta[i].respostas){
  
  
          respostas.push(
            '<label>'
              +'<input type="radio" name="pergunta'+i+'" value="'+letra+'">'
              +pergunta[i].respostas[letra]
              +'</label>'
          );
        }
  
        saida.push(
          '<div class="pergunta">'+ pergunta[i].pergunta + '</div>' + '<div class="respostas">' + respostas.join('') + '</div>'
        );
      }
  
      quizContainer.innerHTML = saida.join('');
    }
  
    function mostreResultados(pergunta, quizContainer, resultadoContainer){
  
      let respostaContainers = quizContainer.querySelectorAll('.respostas');
  
      let respostaUsuario = '';
      let numCorreto = 0;
  
  
        for(let i=0; i<pergunta.length; i++){
  
          respostaUsuario = (respostaContainers[i].querySelector('input[name=pergunta'+i+']:checked')||{}).value;
  
          if(respostaUsuario===pergunta[i].respostaCorreta){
  
            numCorreto++;
  
            respostaContainers[i].style.color = 'lightgreen';
          }
          else{
            respostaContainers[i].style.color = 'red';
          }
        }
  
        resultadoContainer.innerHTML = numCorreto + ' de ' + pergunta.length;
    }
  
    mostrePerguntas(pergunta, quizContainer);
  
    botaoEnviar.onclick = function(){
      mostreResultados(pergunta, quizContainer, resultadoContainer)
    }
  }