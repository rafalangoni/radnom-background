const botao = document.querySelector("[data-tipo=botao]");
const hexaDecimal = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];

botao.addEventListener("click", criaCor);

function criaCor(){
    for (let index = 0; index < hexaDecimal.length; index++) {
        let element = hexaDecimal[index];
        console.log(element)
    }
}

