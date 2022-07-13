const botao = document.querySelector("[data-tipo=botao]");
let corDeFundo = document.querySelector(".principal__main");
let paragrafo = document.querySelector(".principal__cor");
const hexaDecimal = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];


/**
 * 
 * @returns Gera número aleatório para ser utilizado no índice do for, 
 * limitado a quantidade de itens doa array de cores
 */
function numeroAleatorio(){
    return Math.floor(Math.random() * hexaDecimal.length);
}

/**
 * Cor hexadecimal sempre tem limite máximo de 6 posições, mais # no começo
 * A variável corHexa acumula o valor recebido da posição aleatória do array,
 * gerando cores aleatórias a cada loop
 */
function criaCor(){
    let corHexa = "#";
    for (let index = 0; index < 6; index++) {
        corHexa += hexaDecimal[numeroAleatorio()]
    }
    corDeFundo.style.backgroundColor = corHexa;
    paragrafo.textContent = corHexa;
}

botao.addEventListener("click", criaCor);




