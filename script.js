const btnChangeRed = document.getElementById('btnChangeRed');

const btnChangeGreen = document.getElementById('btnChangeGreen');

const btnChangeYellow = document.getElementById('btnChangeYellow');

const btnReset = document.getElementById('btnReset');

const textStyle = document.getElementById('textStyle');

const textStyle1 = document.getElementById('textStyle1');

const textStyle2 = document.getElementById('textStyle2');

const textStyle3 = document.getElementById('textStyle3');

const textStyle4 = document.getElementById('textStyle4');

const textStyle5 = document.getElementById('textStyle5');

const textStyle6 = document.getElementById('textStyle6');

const textStyle7 = document.getElementById('textStyle7');

const textStyle8 = document.getElementById('textStyle8');

const textStyle9 = document.getElementById('textStyle9');

btnChangeRed.addEventListener('click', changecolortored);

function changecolortored() {
    textStyle.style = 'color: red';
    textStyle1.style = 'color: red';
    textStyle2.style = 'color: red';
    textStyle3.style = 'color: red';
    textStyle4.style = 'color: red';
    textStyle5.style = 'color: red';
    textStyle6.style = 'color: red';
    textStyle7.style = 'color: red';
    textStyle8.style = 'color: red';
    textStyle9.style = 'color: red';
}

btnChangeGreen.addEventListener('click', changecolortogreen);

function changecolortogreen() {
    textStyle.style = 'color: green';
    textStyle1.style = 'color: green';
    textStyle2.style = 'color: green';
    textStyle3.style = 'color: green';
    textStyle4.style = 'color: green';
    textStyle5.style = 'color: green';
    textStyle6.style = 'color: green';
    textStyle7.style = 'color: green';
    textStyle8.style = 'color: green';
    textStyle9.style = 'color: green';
}

btnChangeYellow.addEventListener('click', changecolortoyellow);

function changecolortoyellow() {
    textStyle.style = 'color: yellow';
    textStyle1.style = 'color: yellow';
    textStyle2.style = 'color: yellow';
    textStyle3.style = 'color: yellow';
    textStyle4.style = 'color: yellow';
    textStyle5.style = 'color: yellow';
    textStyle6.style = 'color: yellow';
    textStyle7.style = 'color: yellow';
    textStyle8.style = 'color: yellow';
    textStyle9.style = 'color: yellow';
}

btnReset.addEventListener('click', resetcolor);

function resetcolor() {
    textStyle.style = 'color: ';
    textStyle1.style = 'color: ';
    textStyle2.style = 'color: ';
    textStyle3.style = 'color: ';
    textStyle4.style = 'color: ';
    textStyle5.style = 'color: ';
    textStyle6.style = 'color: ';
    textStyle7.style = 'color: ';
    textStyle8.style = 'color: ';
    textStyle9.style = 'color: ';
}

const btnMobile = document.getElementById('btnMobile'); 

const navMob = document.getElementById('navMob');

btnMobile.addEventListener('click', showmenu);

function showmenu() {
    let x = document.getElementById('navMob');
        if (x.style.display == "none"){
        x.style.display = "flex";
        } else {
        x.style.display = "none"}
}
