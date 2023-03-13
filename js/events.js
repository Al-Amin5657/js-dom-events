// option-1: DIRECTLY SET ON THE html ELEMENT.
// * <button onclick="console.log(7)">Click Me</button> */
// Option-2: make onclick function on the HTML element
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// Option-3
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option-3 another

const makePurpleButton = document.getElementById('makePurple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// Option-4

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// Option-4 Another

const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// option-4 final

const goldenRodButton = document.getElementById('make-goldenRod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenRod';
})