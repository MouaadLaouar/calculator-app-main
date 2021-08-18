import {
    theme
} from './theme.js';
theme();


const output = document.querySelector('.num-screen');
const numbers = document.querySelectorAll('.num-btn .num');
const btns = document.querySelectorAll('.num-btn');
const operators = document.querySelectorAll('.num-btn .oper');
const del = document.querySelector('.del');
const rest = document.querySelector('.rest-btn');
const equal = document.querySelector('.equal-btn');




btns.forEach((e) => {
    if (e.classList.contains("num") || e.classList.contains("oper"))
        e.addEventListener('click', () => {
            console.log("hi");


            // let opRegex = RegExp("[+-*/]");
            // if (opRegex.compile().test(output.innerText[output.innerText.length - 1]))
            output.innerText += e.innerText;
        });

});

rest.addEventListener('click', () => {
    output.innerText = "";
});


del.addEventListener('click', () => {
    output.innerText = output.innerText.slice(0, -1);
});


equal.addEventListener('click', () => {
    const result = eval(output.innerText);
    output.innerText = result;
});