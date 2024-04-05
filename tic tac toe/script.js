const box = document.querySelectorAll('.box');
const resetgame = document.querySelector('#resetgame');
const newgame = document.querySelector('#newgame');
const winner = document.querySelector('#winner');
let player0 = true;
let endgame = false;
let winpatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

box.forEach((box) => {
    box.addEventListener('click',() => {
        if (!endgame && box.innerText === '') {
            if (player0) {
                box.innerText = 'O';
            } else {
                box.innerText = 'X';
            }
            player0 = !player0;
            checkpattern();
        }
    });
});

newgame.addEventListener('click', () => {
    let result = confirm("Are you sure you want to start a new game?");
    if (result) {
        box.forEach((box) => {
            box.innerText = '';
        });
        endgame = false;
        winner.innerText = '';
    }
});

resetgame.addEventListener('click', () => {
    let result = confirm("Are you sure you want to reset the game?");
    if (result) {
        // Reset the game state
        console.log("Resetting game...");
    }
});

const showwinner = (player) => {
    winner.innerText = `Congratulation to ${player}`;
    endgame = true;
};

const checkpattern = () => {
    for (let pattern of winpatterns) {
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;

        if (pos1 !== '' && pos1 === pos2 && pos2 === pos3) {
            showwinner(pos1);
            return;
        }
    }

    // Check for a draw
    let isDraw = true;
    for (let i = 0; i < box.length; i++) {
        if (box[i].innerText === '') {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        winner.innerText = 'The game is a draw!';
        endgame = true;
    }
};
