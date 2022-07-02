// Variáveis
let currentInput = document.querySelector('.currentInput'); // recebe o valor
let answerScreen = document.querySelector('.answerScreen'); // mostra 
let buttons = document.querySelectorAll('button'); // os botoes
let erasebtn = document.querySelector('#erase'); // apaga o ultimo 
let clearbtn = document.querySelector('#clear'); //  apaga tudo 
let evaluate = document.querySelector('#evaluate'); // mostra o resultado 
 
// Variaveis de validação //
const validacion1 = new RegExp('^[%*+\/]');
const validacion2 = new RegExp('[*-\/+.%]{2}');

// Visor da calculadora
let realTimeScreenValue = []

// Limpar
clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// Função anexada a todos os botões
buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // Se o botão clicado não é o botão de apagar
        if (!btn.id.match('erase')) {
            // Mostrar o valor do botão pressionado
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            //Caso ja tenha clickado em igual e depois clickou em outro botão
            currentInput.className = 'currentInput';
            answerScreen.className = 'answerScreen';
            answerScreen.style.color = "rgba(150, 150, 150, 0.87)";



            //Não deixa digitar algum caracter no começo
            if(validacion1.test(currentInput.innerHTML)){
                realTimeScreenValue.pop();
                currentInput.innerHTML = realTimeScreenValue.join('');
            }
            //Não deixa digitar caracteres multiplos em seguida
            if(validacion2.test(currentInput.innerHTML)){
                realTimeScreenValue.pop();
                currentInput.innerHTML = realTimeScreenValue.join('');

            }

            // Executar e mostrar a resposta em tempo real
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
                //answerScreen.innerHTML = realTimeScreenValue.join('');

            }


        }

        // Quando o evento for um botão de apagar
        if (btn.id.match('erase')) {
            //Caso ja tenha clickado em igual e depois clickou em outro botão
            currentInput.className = 'currentInput';
            answerScreen.className = 'answerScreen';
            answerScreen.style.color = "rgba(150, 150, 150, 0.87)";

            // Tirei o eval() que estava aqui //
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = realTimeScreenValue.join('');
        }

        // Ao clicar em igual
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // Previnir erro de undefined
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})



/* TENTEI IMPLEMENTAR ESSE LOGICA AQUI, MAS TAVA DANDO UNS ERRO E NÃO DEU CERTO. //
// AI POR CONTA DO TEMPO NÃO CONSEGUI CORRIGIR OS ERROS //

buttons = realTimeScreenValue[1];
        if (realTimeScreenValue.length === 3) {
              if (buttons === "+") {
                addition = realTimeScreenValue[0] + realTimeScreenValue[2];
                realTimeScreenValue.push(addition);
                currentInput.value = addition;
              } else if (buttons === "-") {
                subtraction = realTimeScreenValue[0] - realTimeScreenValue[2];
                realTimeScreenValue.push(subtraction);
                currentInput.value = subtraction;
              } else if (buttons === "/") {
                division = realTimeScreenValue[0] / realTimeScreenValue[2];
                realTimeScreenValue.push(division);
                currentInput.value = division;
              } else if (buttons === "*") {
                multiplication = realTimeScreenValue[0] * realTimeScreenValue[2];
                realTimeScreenValue.push(multiplication);
                currentInput.value = multiplication;
              }
              realTimeScreenValue = [];
              console.log("Array atual", realTimeScreenValue);
        }
    
  
});
*/