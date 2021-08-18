const body = document.querySelector('body');

// the-head
const text = document.querySelector('.text');
const theme1 = document.querySelector('.theme-01');
const numberOfTheme = document.querySelector('.number-of-theme');
const themeBtn = document.querySelector('.theme-btn');
const circle = document.querySelector('.circle');

// the screen 

const theScreen = document.querySelector('.the-screen');
const numScreen = document.querySelector('.num-screen');

// the button 

const allBtn = document.querySelector('.all-btn');
const del = document.querySelector('.del');
const restBtn = document.querySelector('.rest-btn');
const equal = document.querySelector('.equal-btn');
const numButton = document.getElementsByClassName('num');
const gg = document.getElementsByClassName('num-btn');

// the circle button




const theme01 = () => {
    body.style.backgroundColor = 'hsl(222, 26%, 31%)';
    themeBtn.style.justifyContent = 'flex-start';
    themeBtn.style.backgroundColor = 'hsl(223, 31%, 20%)';
    circle.style.backgroundColor = '';
    //the-head
    text.style.color = 'white';
    theme1.style.color = 'white';
    numberOfTheme.style.color = 'white';

    //the screen 
    theScreen.style.backgroundColor = 'hsl(224, 36%, 15%)';
    numScreen.style.color = 'white';

    //the button
    allBtn.style.backgroundColor = 'hsl(223, 31%, 20%)';
    del.style.backgroundColor = 'hsl(225, 21%, 49%)';
    restBtn.style.backgroundColor = 'hsl(225, 21%, 49%)';

    restBtn.style.color = '';
    del.style.color = '';
    equal.style.backgroundColor = '';

    for (var i = 0; i < numButton.length; i++) {
        numButton[i].style.color = '';
        numButton[i].style.backgroundColor = '';
    }
};

const theme02 = () => {
    body.style.backgroundColor = 'hsl(0, 0%, 90%)';
    themeBtn.style.justifyContent = 'center';
    themeBtn.style.backgroundColor = 'hsl(0, 5%, 81%)';
    circle.style.backgroundColor = '';
    //the-head
    text.style.color = 'hsl(60, 10%, 19%)';
    theme1.style.color = 'hsl(60, 10%, 19%)';
    numberOfTheme.style.color = 'hsl(60, 10%, 19%)';

    //the screen 
    theScreen.style.backgroundColor = 'hsl(0, 0%, 93%)';
    numScreen.style.color = 'hsl(60, 10%, 19%)';

    //the button
    allBtn.style.backgroundColor = 'hsl(0, 5%, 81%)';
    del.style.backgroundColor = 'hsl(185, 42%, 37%)';
    restBtn.style.backgroundColor = 'hsl(185, 42%, 37%)';
    restBtn.style.color = '';
    del.style.color = '';
    equal.style.backgroundColor = '';

    for (var i = 0; i < numButton.length; i++) {
        numButton[i].style.color = '';
        numButton[i].style.backgroundColor = '';
    }
};




const theme03 = () => {
    body.style.backgroundColor = 'hsl(268, 75%, 9%)';
    themeBtn.style.justifyContent = 'flex-end';
    themeBtn.style.backgroundColor = 'hsl(268, 71%, 12%)';
    circle.style.backgroundColor = 'hsl(176, 100%, 44%)';
    //the-head
    text.style.color = 'hsl(52, 100%, 62%)';
    theme1.style.color = 'hsl(52, 100%, 62%)';
    numberOfTheme.style.color = 'hsl(52, 100%, 62%)';

    //the screen 
    theScreen.style.backgroundColor = 'hsl(268, 71%, 12%)';
    numScreen.style.color = 'hsl(52, 100%, 62%)';

    //the button
    allBtn.style.backgroundColor = 'hsl(268, 71%, 12%)';
    del.style.backgroundColor = 'hsl(281, 89%, 26%)';
    del.style.color = 'white';
    restBtn.style.backgroundColor = 'hsl(281, 89%, 26%)';
    restBtn.style.color = 'white';
    equal.style.backgroundColor = 'hsl(176, 100%, 44%)';

    for (var i = 0; i < numButton.length; i++) {
        numButton[i].style.color = 'hsl(52, 100%, 62%)';
        numButton[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
    }
};



let x = 0;

function choice() {
    x++;
    switch (x) {


        case 0:
            theme01();
            break;
        case 1:
            theme02();
            break;
        case 2:
            theme03();
            break;

        default:
            x = 0;
            theme01();
            break;
    }
}



function theme() {
    console.log('i coock');
    themeBtn.addEventListener('click', choice);
}


export {
    theme
};