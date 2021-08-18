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


const regex = /[\/\*\.\-\+]{1}$/;


btns.forEach((e) => {
    if (e.classList.contains("num") || e.classList.contains("oper"))
        e.addEventListener('click', () => {

            if (!(regex.test(output.innerText) && regex.test(e.innerText)))
                output.innerText += e.innerText;
            console.log(output.innerText.length);
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


//  regex to test for operator AT THE END OF string