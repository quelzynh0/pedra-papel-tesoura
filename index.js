//Variáveis Global
const computerSelection = getComputerChoice();
let styles;
let PontuacaoJogador = 0;
let PontuacaoMaquina = 0;

//Função que retorna randomicamente Pedra Papel ou Tesoura para o computador
function getComputerChoice() {
    let resultadoComputer;
    let n = Math.floor(Math.random() * 3);
    if (n < 1) {
        resultadoComputer = 'Pedra';
    } else if (n === 1) {
        resultadoComputer = 'Papel';
    } else {
        resultadoComputer = 'Tesoura';
    }
    return resultadoComputer;
  }

//Função que recebe a escolha do Jogador e dá máquina e retorna o resultado do confronto 
function playRound(playerSelection, computerSelection) {

    //Pedra contra Tesoura
    if (playerSelection === 'Pedra' && computerSelection === 'Tesoura') {
        resultadoPlayer = 'Você ganhou! Pedra ganha de Tesoura!';
        PontuacaoJogador++;
    //Pedra contra Papel
    } else if (playerSelection === 'Pedra' && computerSelection === 'Papel') {
        resultadoPlayer = 'Você perdeu! Pedra perde para Papel!';
        PontuacaoMaquina++;
    //Pedra contra Pedra
    } else if (playerSelection === 'Pedra' && computerSelection === 'Pedra') {
        resultadoPlayer = 'Empatou!';
    //Papel contra Tesoura
    } else if (playerSelection === 'Papel' && computerSelection === 'Tesoura') {
        resultadoPlayer = 'Você perdeu! Papel perde para Tesoura!';
        PontuacaoMaquina++;
      //Papel contra Papel
    } else if (playerSelection === 'Papel' && computerSelection === 'Papel') {
        resultadoPlayer = 'Empatou!';
            //Papel contra Pedra
    } else if (playerSelection === 'Papel' && computerSelection === 'Pedra') {
        resultadoPlayer = 'Você ganhou! Papel ganha de Pedra!';
        PontuacaoJogador++;
    //Tesoura contra Tesoura
    } else if (playerSelection === 'Tesoura' && computerSelection === 'Tesoura') {
        resultadoPlayer = 'Empatou!';
            //Tesoura contra Papel
    } else if (playerSelection === 'Tesoura' && computerSelection === 'Papel') {
        resultadoPlayer = 'Você ganhou! Tesoura ganha de Papel!';
        PontuacaoJogador++;
    //Tesoura contra Pedra
    } else if (playerSelection === 'Tesoura' && computerSelection === 'Pedra') {
        resultadoPlayer = 'Você perdeu! Tesoura perde para Pedra!';
          PontuacaoMaquina++;
    } else {
    //Valor inputado diferente de Pedra, Papel ou Tesoura
        resultadoPlayer = 'Valor Incompativel!';
        
    }
    return resultadoPlayer;
  }

//Função que faz 5 batalhas seguidas.
function game() {
    if (playerSelection == `Pedra` || playerSelection == `Papel` || playerSelection == `Tesoura`) {
        for (let i = 0; i < 5; i++) {
            const computerSelection = getComputerChoice();
            let message = `>`+playRound(playerSelection, computerSelection);
            console.log('Sua escolha é %s', playerSelection);
            console.log('A escolha do computador é %s', computerSelection);
            console.log(message);
            console.log('Sua pontuação é %s | A pontuação do computador é %s', PontuacaoJogador, PontuacaoMaquina);
            console.log('%c-------------', 'color: purple');
        }
        if (PontuacaoJogador>PontuacaoMaquina){
            console.log('%cVocê ganhou a melhor de 5!', 'color: green');
        } else if (PontuacaoJogador<PontuacaoMaquina) {
            console.log('%cVocê perdeu a melhor de 5!', 'color: red');
        }else {
            console.log('%cEmpate!', 'color: orange');
        }
    } else { 
        console.log('%c`%s` não e uma palavra aceita, você deve digitar Pedra, Papel ou Tesoura! ', 'color: yellow', playerSelection);
    }
}

//Armazena a escolha do usuário.
let playerSelection = prompt("Pedra, Papel ou Tesoura?");

//Envoca a função criada para fazer as 5 batalhas seguidas.
game();
