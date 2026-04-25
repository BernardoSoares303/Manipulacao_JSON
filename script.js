const catalogo = [
  {
    id: 1,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 2,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção", "drama"],
    nota: 9.0,
    assistido: true
  },
  {
    id: 3,
    titulo: "Matrix",
    tipo: "filme",
    ano: 1999,
    generos: ["ação"],
    nota: 8.7,
    assistido: false
  },
  {
    id: 4,
    titulo: "The Office",
    tipo: "serie",
    ano: 2005,
    generos: ["comédia"],
    nota: 8.9,
    assistido: true
  },
  {
    id: 5,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["ficção", "mistério"],
    nota: 8.8,
    assistido: false
  },
  {
    id: 6,
    titulo: "Vingadores: Ultimato",
    tipo: "filme",
    ano: 2019,
    generos: ["ação", "aventura"],
    nota: 8.5,
    assistido: true
  }
];

console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

const terceiro = catalogo[2];
if (terceiro.generos[1]) {
  console.log("Segundo gênero do terceiro item:", terceiro.generos[1]);
} else {
  console.log("O terceiro item não possui segundo gênero.");
}

catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Não assistidos:", naoAssistidos.length);

const topItem = catalogo.find(item => item.nota >= 9);
if (topItem) {
  console.log("Top encontrado:", topItem.titulo, topItem.nota);
} else {
  console.log("Nenhum item com nota >= 9");
}

const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));

const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Tem item antes de 2000?", temAntigo);
console.log("Todos têm gênero?", todosTemGenero);

const total = catalogo.length;
const filmes = catalogo.filter(item => item.tipo === "filme").length;
const series = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
  <p>Total de itens: ${total}</p>
  <p>Filmes: ${filmes} | Séries: ${series}</p>
  <p>Não assistidos: ${naoAssistidos.length}</p>
  <p>Média geral: ${mediaGeral.toFixed(2)}</p>
  <h3>Top 3:</h3>
  <ul>
    ${ranking.map(item => `<li>${item.titulo} (${item.nota})</li>`).join("")}
  </ul>
`;