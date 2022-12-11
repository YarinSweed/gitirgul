

//targil 1:

const btn = document.querySelector('.btn1');
const input = document.querySelector('.input1');
console.log(btn);

btn.addEventListener('click', function(event){
    alert(input.value);
})

//targil 2: 
const body = document.querySelector('body');

body.addEventListener('mouseenter', function(event){
    console.log(event.clientX, event.clientY);
})

//targil 3:

const btn2 = document.querySelector('.btn2');
const input2 = document.querySelector('.input2');
const image = document.querySelector('img');

btn2.addEventListener('click', function(event){
    image.src = input2.value;
})

//targil 4:
const arr = [1, 2, 3, 4, 5];
const remove = document.querySelector('.remove')
remove.addEventListener('click', function(event){
    console.log(arr);
    arr.pop();
})

//targil 5:

const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const black = document.querySelector('.black');
red.style.backgroundColor = 'red';
green.style.backgroundColor = 'green';
blue.style.backgroundColor = 'blue';
black.style.backgroundColor = 'black';
black.style.color = 'white';

red.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})
green.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})
blue.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
})
black.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
})

//targil 6:

let colorArr = ['red', 'green', 'blue', 'pink'];
let colorSel = document.querySelector('.tag6');

setInterval(colore, 2000);

function colore(){
    colorSel.style.backgroundColor = colorArr[(Math.round((Math.random()*4))-1)];
}