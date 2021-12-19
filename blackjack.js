function getRandomCard() {
    return Math.floor(1 + Math.random() * 10.99);
}

var player1Sum = 0;
var player2Sum = 0;
var playerTurn = 1; // 1 or 2 depending on which player's turn is it now

var player1Buttons = document.getElementById('player-1-buttons');
var player2Buttons = document.getElementById('player-2-buttons');
var backdrop = document.getElementById('backdrop');
var player1SumElement = document.getElementById('player-1-sum');
var player2SumElement = document.getElementById('player-2-sum');
var player1GameElement = document.getElementById('player-1-game');
var player2GameElement = document.getElementById('player-2-game');
var messageElement = document.getElementById('message');

function appendElement(appendTo, newElement) {
    appendTo.appendChild(newElement);
}

function createTakeDiv() {
    var div = document.createElement('div');
    div.classList.add('take');
    div.innerText = 'Take!';
    return div;
}
function createCardDiv(newCard) {
    var div = document.createElement('div');
    div.classList.add('card-info');
    div.innerText = 'Your card is ' + newCard;
    return div;
}
function createStopDiv(newSum) {
    var div = document.createElement('div');
    div.classList.add('stop');
    div.innerText = 'Stop! your sum is: ' + newSum;
    return div;
}
function showElement(element) {
    element.style.display = 'flex';
}

function hideElement(element) {
    element.style.display = 'none';
}
function handleMoreForPlayer1() {
    var card = getRandomCard(); // get random card
    player1Sum = player1Sum + card; // add card value to player 1 sum
    // display Sum for player 1
    player1SumElement.innerText = player1Sum;
    // display "Take message"
    var takeMessage = createTakeDiv();
    appendElement(player1GameElement, takeMessage);
    // display "Your card is ..., your sum ..."
    var cardMessage = createCardDiv(card);
    appendElement(player1GameElement, cardMessage);
    if (player1Sum >= 21) {
        handleStopForPlayer1();
    }
}
function handleMoreForPlayer2() {
    var card = getRandomCard(); // get random card
    player2Sum = player2Sum + card; // add card value to player 1 sum
    // display Sum for player 2
    player2SumElement.innerText = player2Sum;
    // display "Take message"
    var takeMessage = createTakeDiv();
    appendElement(player2GameElement, takeMessage);
    // display "Your card is ..., your sum ..."
    var cardMessage = createCardDiv(card);
    appendElement(player2GameElement, cardMessage);
    if (player2Sum >= 21) {
        handleStopForPlayer2();
    }
}

function handleStopForPlayer1() {
    // display Stop message
    var stopMessage = createStopDiv(player1Sum);
    appendElement(player1GameElement, stopMessage);
    // it's player 2 turn now
    playerTurn = 2;
    // hide player 1 buttons
    hideElement(player1Buttons);
    // show player 2 buttons
    showElement(player2Buttons);
}

function showMessage(text) {
    messageElement.innerText = text;
}

function handleStopForPlayer2() {
    // display Stop message
    var stopMessage = createStopDiv(player2Sum);
    appendElement(player2GameElement, stopMessage);
    // hide player 2 buttons
    hideElement(player2Buttons);
    // show "Play again button"
    showElement(backdrop);
    if (player1Sum < 21 && player2Sum < 21) {
        // decide who won by difference
        // player1Sum 13
        // player2Sum 18
        var player1Differece = 21 - player1Sum; // 8
        var player2Differece = 21 - player2Sum; // 3
        if (player2Differece < player1Differece) {
            // player 2 won
            showMessage('Player 2 won');
        }
        if (player2Differece > player1Differece) {
            // player 1 won
            showMessage('Player 1 won');
        }
        if (player2Differece == player1Differece) {
            // draw
            showMessage('Draw');
        }
        return;
    }
    if (player1Sum == 21 && player2Sum == 21) {
        // it's draw, show draw message
        showMessage('Draw');
        return;
    }
    if (player1Sum == 21) {
        // player 1 won, show message
        showMessage('Player 1 won');
        return;
    }
    if (player2Sum == 21) {
        // player 2 won, show message
        showMessage('Player 2 won');
        return;
    }
    if (player1Sum > 21 && player2Sum < 21) {
        showMessage('Player 2 won');
        return;
    }
    if (player1Sum < 21 && player2Sum > 21) {
        showMessage('Player 1 won');
        return;
    }
    showMessage('Draw');
    // it's draw, show draw message
}
