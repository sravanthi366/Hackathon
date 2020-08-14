let container = document.createElement('div')
container.setAttribute('class', 'page')
document.body.append(container)

let header = document.createElement('header')
header.setAttribute('class', 'header')
header.innerText = "Number Master Game"
container.appendChild(header)

let hints = document.createElement('div')
hints.setAttribute('class', 'hints')
hints.innerText = "Guess The Four Digit Random Number With In 5 chances!!!!"
container.appendChild(hints)

let label = document.createElement('label')
label.setAttribute('for', 'display')
let display = document.createElement('input')
display.setAttribute('id', 'gess')
display.maxlength = "4"
display.setAttribute('placeholder', 'Please enter your gess')
display.setAttribute('type', 'number')
container.appendChild(label)
container.appendChild(display)

let gamebtn = document.createElement('button')
gamebtn.setAttribute('Id', 'game')
gamebtn.innerText = 'Paly Game'
container.appendChild(gamebtn)

let submitbtn = document.createElement('button')
submitbtn.setAttribute('Id', 'submit')
submitbtn.innerText = 'Submit Guess'
container.appendChild(submitbtn)

let numbers = document.createElement('div')
numbers.setAttribute('class', 'buttons')
container.appendChild(numbers)

var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "a")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "b")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "c")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "d")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "e")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "f")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "g")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "h")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "i")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "j")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "k")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "l")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "m")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "n")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "o")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "p")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "q")
numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "r")

numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "s")
numbers.appendChild(btn)
var btn = document.createElement('button')
btn.setAttribute('class', 'number')
btn.setAttribute('id', "t")

numbers.appendChild(btn)

document.getElementById("gess").disabled = true;

game.addEventListener("click", function() {

    document.getElementById("gess").disabled = false;
});

// user Input validation

document.getElementById("submit").onclick = function() {
    let arr = [];
    ranNum = Math.floor(1000 + Math.random() * 9000) + 1;


    console.log("X: " + ranNum)


    let toIntArray = (n) => ([...n + ""].map(Number));
    console.log(toIntArray(ranNum));
    //console.log("arr1: " + arr)


    let arr1 = [];
    let userInp = document.getElementById("gess").value;

    let utoIntArray = (n) => ([...n + ""].map(Number));
    console.log(utoIntArray(userInp));

    let greenNum = [],
        orangeNum = [];


    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if ((arr[i] == arr1[j]) && (i == j)) {

                greenNum.push(arr[i])
            }
            if ((arr[i] == arr1[j]) && (i != j)) {

                orangeNum.push(arr[i])
            }
        }
    }

    console.log(greenNum)
    console.log(orangeNum)


}