const chessboard = document.getElementById("chessboard");
const ghost = document.getElementById("ghost");
const placeholder = document.getElementById("placeholder");

let innerGhost = null;
let isReadyToDrag = false;
let startRow = null;
let startColumn = null;
let finishRow = null;
let finishColumn = null;

const mouseDown = (e) => {
    if(e.target.matches('.square') && e.target.innerText !== ''){
        console.log(e.target.innerText);
        startRow = e.target.dataset.row;
        startColumn = e.target.dataset.column;
        innerGhost = e.target.innerHTML;
        isReadyToDrag = true;
    }
}

const mouseMove = (e) => {
    if(isReadyToDrag){
        ghost.style.display = "block";
        ghost.innerHTML = innerGhost;

        const startIndex = document.querySelector(`[data-row="${startRow}"][data-column="${startColumn}"]`);
        startIndex.innerHTML = "";
        ghost.style.top = e.clientY - 40 + "px";
        ghost.style.left = e.clientX - 40 + "px";
        // console.log(e.target.dataset.row, e.target.dataset.column);
    }
}

const mouseUp = (e) => {
    if(isReadyToDrag){
        isReadyToDrag = false;
        ghost.style.display = "none";
        finishRow = e.target.dataset.row;
        finishColumn = e.target.dataset.column;
        const finishIndex = document.querySelector(`[data-row="${finishRow}"][data-column="${finishColumn}"]`);
        finishIndex.innerHTML = innerGhost;
        console.log(finishRow, finishColumn);
    }
}
chessboard.addEventListener('mousedown', (e) => mouseDown(e));
chessboard.addEventListener('mousemove', (e) => mouseMove(e));
chessboard.addEventListener('mouseup', (e) => mouseUp(e));