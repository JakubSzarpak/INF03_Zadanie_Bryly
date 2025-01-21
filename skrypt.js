const przycisk1 = document.getElementById("przycisk1");
const przycisk2 = document.getElementById("przycisk2");
const przycisk3 = document.getElementById("przycisk3");
const oblicz = document.getElementById("oblicz");


przycisk1.addEventListener("click", clickBtn1);
przycisk2.addEventListener("click", clickBtn2);
przycisk3.addEventListener("click", clickBtn3);
oblicz.addEventListener("click", Liczenie);

let num;

function clickBtn1(){

    document.getElementById("nazwafigury").innerHTML = 'STOŻEK';
    document.querySelector('#obrazek').src = 'stożek.png';
    document.querySelector('#obrazek').alt = 'stożek';
    document.getElementById("wzorlicz").innerHTML = 'V1=1/3*π*R2*H';
    num = 1;
}

function clickBtn2(){

    document.getElementById("nazwafigury").innerHTML = 'WALEC';
    document.querySelector('#obrazek').src = 'walec.png';
    document.querySelector('#obrazek').alt = 'walec';
    document.getElementById("wzorlicz").innerHTML = 'V1=π*R*R*H';
    num = 2;
}

function clickBtn3(){

    document.getElementById("nazwafigury").innerHTML = 'KULA';
    document.querySelector('#obrazek').src = 'kula.png';
    document.querySelector('#obrazek').alt = 'kula';
    document.getElementById("wzorlicz").innerHTML = 'V1=4/3*π*R*R*H';
    num = 3;
}

function Liczenie(){

    
    let inputval1 = document.getElementById('inpt1').value;
    let inputval2 = document.getElementById('inpt2').value;
    const wynik = document.getElementById('wynik');
    
    
    switch(num) {

        case 1:
            wynik.innerHTML = (1/3)*3.14*inputval1*inputval1*inputval2;
            break
        case 2:
            wynik.innerHTML = 3.14*inputval1*inputval1*inputval2;
            break
        case 3:
            wynik.innerHTML = (4/3)*3.14*inputval1*inputval1*inputval2;
            break
    }

}


