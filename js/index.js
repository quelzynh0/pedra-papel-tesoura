//Variáveis Global
let playerScore = 0;
let computerScore = 0;

//Função que retorna randomicamente Pedra Papel ou Tesoura para o computador
function getComputerChoice() {
    let resultComputer;
    let n = Math.floor(Math.random() * 3);
    if (n < 1) {
        resultComputer = 'Pedra';
    } else if (n === 1) {
        resultComputer = 'Papel';
    } else {
        resultComputer = 'Tesoura';
    }
    return resultComputer;
}

//Função que recebe a escolha do Jogador e dá máquina e retorna o resultado do confronto 
function playRound(playerSelection, computerSelection) {

    //Pedra contra Tesoura
    if (playerSelection === 'Pedra' && computerSelection === 'Tesoura') {
        resultPlayer = 'Você ganhou! Pedra ganha de Tesoura!';
        playerScore++;
        //Pedra contra Papel
    } else if (playerSelection === 'Pedra' && computerSelection === 'Papel') {
        resultPlayer = 'Você perdeu! Pedra perde para Papel!';
        computerScore++;
        //Pedra contra Pedra
    } else if (playerSelection === 'Pedra' && computerSelection === 'Pedra') {
        resultPlayer = 'Empatou!';
        //Papel contra Tesoura
    } else if (playerSelection === 'Papel' && computerSelection === 'Tesoura') {
        resultPlayer = 'Você perdeu! Papel perde para Tesoura!';
        computerScore++;
        //Papel contra Papel
    } else if (playerSelection === 'Papel' && computerSelection === 'Papel') {
        resultPlayer = 'Empatou!';
        //Papel contra Pedra
    } else if (playerSelection === 'Papel' && computerSelection === 'Pedra') {
        resultPlayer = 'Você ganhou! Papel ganha de Pedra!';
        playerScore++;
        //Tesoura contra Tesoura
    } else if (playerSelection === 'Tesoura' && computerSelection === 'Tesoura') {
        resultPlayer = 'Empatou!';
        //Tesoura contra Papel
    } else if (playerSelection === 'Tesoura' && computerSelection === 'Papel') {
        resultPlayer = 'Você ganhou! Tesoura ganha de Papel!';
        playerScore++;
        //Tesoura contra Pedra
    } else if (playerSelection === 'Tesoura' && computerSelection === 'Pedra') {
        resultPlayer = 'Você perdeu! Tesoura perde para Pedra!';
        computerScore++;
    } else {
        //Valor inputado diferente de Pedra, Papel ou Tesoura
        resultPlayer = 'Valor Errado!';

    }
    return resultPlayer;
}

function result(value) {
    const computerSelection = getComputerChoice();


    if (computerSelection == 'Pedra') {
        let buttons = document.getElementById('botoes-item5')
        buttons.style.backgroundColor = 'white';
        buttons = document.getElementById('botoes-item6')
        buttons.style.backgroundColor = 'white';
        buttons = document.getElementById('botoes-item4')
        buttons.style.backgroundColor = 'red';

    }
    else if (computerSelection == 'Papel') {
        let buttons = document.getElementById('botoes-item4')
        buttons.style.backgroundColor = 'white';
        buttons = document.getElementById('botoes-item6')
        buttons.style.backgroundColor = 'white';
        buttons = document.getElementById('botoes-item5')
        buttons.style.backgroundColor = 'red';

    }
    else {
        let buttons = document.getElementById('botoes-item4')
        buttons.style.backgroundColor = 'white';
        buttons = document.getElementById('botoes-item5')
        buttons.style.backgroundColor = 'white';
        buttons = document.getElementById('botoes-item6')
        buttons.style.backgroundColor = 'red';

    }
    document.getElementById("result1").innerHTML = playRound(value, computerSelection);
    document.getElementById("scorePlayer").innerHTML = 'Pontuação: ' + playerScore;
    document.getElementById("scoreComputer").innerHTML = 'Pontuação: ' + computerScore;

    if (playerScore === 5) {
        document.getElementById("resusltBestOfFive").innerHTML = 'Parabéns, você ganhou!';
        document.getElementById("resusltBestOfFive").style.color = 'green';
        document.getElementById("result").innerHTML = 'Jogador: ' + playerScore + ' | Computador: ' + computerScore;

        const buttons = document.getElementsByClassName("botoes-item");
        for (const button of buttons) {
            button.onclick = '';
            button.href = '#popup1'
            button.style.backgroundColor = 'white';
        }
        let btnCreate = document.createElement("input");
        btnCreate.type = 'button';
        btnCreate.value = 'Jogar de novo';
        btnCreate.className = 'botoes-item';
        btnCreate.style.fontFamily = 'poppinsmedium';
        btnCreate.style.width = '200px'
        btnCreate.style.height = '50px'
        btnCreate.style.display = 'block';
        btnCreate.style.margin = '0 auto';
        btnCreate.style.marginTop = '15px';
        btnCreate.href = "#";
        btnCreate.onclick = function () { window.location.href = "../index.html"; };
        document.getElementById('result').append(btnCreate);

    } else if (computerScore === 5) {
        document.getElementById("resusltBestOfFive").innerHTML = 'Que pena, o computador ganhou!';
        document.getElementById("resusltBestOfFive").style.color = 'red';
        document.getElementById("result").innerHTML = 'Jogador: ' + playerScore + ' | Computador: ' + computerScore;
        const buttons = document.getElementsByClassName("botoes-item");


        for (const button of buttons) {
            button.onclick = '';
            button.href = '#popup1'
            button.style.backgroundColor = 'white';
        }
        let btnCreate = document.createElement("input");
        btnCreate.type = 'button';
        btnCreate.value = 'Jogar de novo';
        btnCreate.className = 'botoes-item';
        btnCreate.style.fontFamily = 'poppinsmedium';
        btnCreate.style.width = '200px'
        btnCreate.style.height = '50px'
        btnCreate.style.display = 'block';
        btnCreate.style.margin = '0 auto';
        btnCreate.style.marginTop = '15px';
        btnCreate.href = "#";
        btnCreate.onclick = function () { window.location.href = "../index.html"; };
        document.getElementById('result').append(btnCreate);
    }
}

