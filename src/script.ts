let numero1 = document.querySelector("#numero1") as HTMLInputElement;
let numero2 = document.querySelector("#numero2") as HTMLInputElement;
let botao = document.querySelector("#calcular")as HTMLInputElement ;
let res = document.querySelector("#resultado")as HTMLInputElement;

function calcular( n1:number, n2:number ){
    return n1 + n2;
}

botao.addEventListener('click', function(){
    res.innerHTML = calcular( +numero1.value, +numero2.value ).toString();
});