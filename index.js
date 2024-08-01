const choices = ['rock', 'paper', 'scissors'];
const results = {
    'rock': {'rock': 'It\'s a tie!', 'paper': 'You lose!', 'scissors': 'You win!'},
    'paper': {'rock': 'You win!', 'paper': 'It\'s a tie!', 'scissors': 'You lose!'},
    'scissors': {'rock': 'You lose!', 'paper': 'You win!', 'scissors': 'It\'s a tie!'}
};

let userScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', event => {
        const userChoice = event.target.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = results[userChoice][computerChoice];
        
        document.getElementById('result').innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
        
        if (result === 'You win!') {
            userScore++;
        } else if (result === 'You lose!') {
            computerScore++;
        }
        
        document.getElementById('user-score').innerText = userScore;
        document.getElementById('computer-score').innerText = computerScore;
    });
});

document.getElementById('reset').addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('result').innerText = 'Make your choice!';
});
