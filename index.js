// 1. Criação de Arrays
let notas = [8.5, 7.0, 6.5, 9.0, 5.5];

// 2. Acesso aos Elementos
console.log("Primeira nota:", notas[0]); // Primeira nota
console.log("Última nota:", notas[notas.length - 1]); // Última nota

// 3. Adicionando nova nota
notas.push(7.5); // Adiciona a nota 7.5 ao final do array
console.log("Notas após push:", notas);

// 4. Removendo a primeira nota
notas.shift(); // Remove a primeira nota
console.log("Notas após shift:", notas);

// 5. Iteração com forEach
notas.forEach((nota, index) => {
    console.log(`Nota ${index + 1}:`, nota);
});

// 6. Cálculo da Média
const soma = notas.reduce((acc, nota) => acc + nota, 0);
const media = soma / notas.length;
console.log("Média das notas:", media);

// 7. Filtro de Notas
const notasMaioresQue7 = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasMaioresQue7);

// 8. Ordenação
notas.sort((a, b) => a - b);
console.log("Notas em ordem crescente:", notas);

// 9. Busca de Elementos
const temNota6_5 = notas.includes(6.5);
console.log("Nota 6.5 está presente?", temNota6_5);

// 10. Encontrar o Índice
const indiceNota8 = notas.indexOf(8.0);
console.log("Índice da nota 8.0:", indiceNota8);

// 11. Mapeamento
const notasAoQuadrado = notas.map(nota => nota ** 2);
console.log("Notas ao quadrado:", notasAoQuadrado);
