import { palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, comoDarUmaBicicleta, palavrasPapoFurado, mostProbablyQuestion, temasValidos } from './can-i-answer.js';

// Separe a frase em uma array de palavras
let pergunta = "O que é melhor que futebol ?";
pergunta = pergunta.toLowerCase().split(' ');
// Tirar da pergunta o "?"
if (pergunta[pergunta.length - 1] === "?") {
    pergunta.pop();
}

// Verifica se a pergunta inclui palavras inválidas
const palavrasInvalidas = temasValidos.invalidas;
const possuiPalavraInvalida = palavrasInvalidas.some(word => pergunta.includes(word));
if (possuiPalavraInvalida) {
    console.log("Desculpe, não entendi a pergunta.");
} else {
    console.log(mostProbablyQuestion(pergunta));
}

