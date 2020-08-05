const lookup = {
    "1" : "purple",
    "-1" : "lime",
    null : "white",
};

// app variables
let board, turn, winner;

// cache elements
const squares = document.querySelectorAll("td div");
const message = document.querySelector("h1");

//Event Listeners
document.querySelector("table").addEventListener("click", handleMove);
document.querySelector("#reset-button").addEventListener("click", initialize);

// Functions
function initialize() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
} 

function render() {
    board.forEach(function (square, idx) {
        squares[idx].style.backgroundColor = lookup[square];
    });
}

function handleMove(event) {
    const index = parseInt(event.target.id.replace("sq", ""));
    if (board[index]) {
        return;
    }

    board[index] = turn;
    turn *= -1;
    render();

}
initialize();

