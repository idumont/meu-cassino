const result = document.querySelector('.result') /*Foi criado uma tag paragrafo vazia com a clase result
                                                  para colocar o resultado do jogo*/

const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => { /*Escolha do clique do humano*/
    
    playTheGame(humanChoice, playMachine())
} 

const playMachine = () => { /*Escolha aleatória da máquina*/
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)   /*O Math.random() sempre gera um resultado entre 0 e 1, 
                                            ou seja de 0,1 a 0.9. Multiplicando o resultado por 3 vai 
                                            dar no máximo 2,7. Então, colocamos o Math.floor() para arredondar
                                            para baixo. O que for maior que 2, arredonda pra 2, o que for 
                                            maior que 1 e menor que 2, arredonda pra 1 e o que for menor
                                            que 1 arredonda pra 0*/
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + "Maquina: " + machine)

    if(human === machine){
        result.innerHTML = "Deu Empate!"
    } else if ( 
        (human === 'paper' && machine === 'rock') || 
        (human === 'rock' && machine === 'scissors') || 
        (human === 'scissors' && machine === 'paper')
    ){
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
    } else{
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu para Alexa"
    }
}