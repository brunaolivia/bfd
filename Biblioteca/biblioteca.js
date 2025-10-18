class Livro {
 constructor(titulo, autor, anoPublicacao) {
 this.titulo = titulo;
 this.autor = autor;
 this.anoPublicacao = anoPublicacao;
 this.disponivel = true;
 }
 
 obterInformacoes() {
 return `${this.titulo} por ${this.autor} (${this.anoPublicacao})`;
 }
 
 estaDisponivel() {
 return this.disponivel;
 }
 
 emprestar() {
 this.disponivel = false;
 }
 
 devolver() {
 this.disponivel = true;
 }
}

const meuLivro = new Livro("A longa marcha", "Stephen King", 1979);
console.log(meuLivro.obterInformacoes());
console.log("Disponível:", meuLivro.estaDisponivel());
meuLivro.emprestar();
console.log("Disponível após empréstimo:", meuLivro.estaDisponivel());
meuLivro.devolver();
console.log("Disponível após devolução:", meuLivro.estaDisponivel());

const meuLivro2 = new Livro("Frankenstein", "Mary Shelley", 1818);
console.log(meuLivro2.obterInformacoes());
console.log("Disponível:", meuLivro2.estaDisponivel());
meuLivro2.emprestar();
console.log("Disponível após empréstimo:", meuLivro2.estaDisponivel());
meuLivro2.devolver();
console.log("Disponível após devolução:", meuLivro2.estaDisponivel());

const meuLivro3 = new Livro(" Os Crimes ABC", "Agatha Christei", 1936);
console.log(meuLivro3.obterInformacoes());
console.log("Disponível:", meuLivro3.estaDisponivel());
meuLivro3.emprestar();
console.log("Disponível após empréstimo:", meuLivro3.estaDisponivel());
meuLivro3.devolver();
console.log("Disponível após devolução:", meuLivro3.estaDisponivel());

const meuLivro4 = new Livro(" O Gato Preto", "Edgar A. Poe", 1849);
console.log(meuLivro4.obterInformacoes());
console.log("Disponível:", meuLivro4.estaDisponivel());
meuLivro4.emprestar();
console.log("Disponível após empréstimo:", meuLivro4.estaDisponivel());
meuLivro4.devolver();
console.log("Disponível após devolução:", meuLivro4.estaDisponivel());

function carregarLivrosTabela(){
    const livros = [
        new Livro("A Longa Marcha", "Stephen King", 1979),
        new Livro("Frankenstein", "Mary Shelley", 1818),
        new Livro("Os Crimes ABC", "Agatha Christie", 1936),
        new Livro("O Gato Preto", "Edgar A. Poe", 1849),
        new Livro("O Morro dos Ventos Uivantes", "Emily Bronte", 1847),
        new Livro("Declínio de um Homem", "Osamu Dazai", 1948),
        new Livro("O Retrato de Dorian Gray", "Oscar Wilde", 1890),
        new Livro("O Médico e o Monstro", "Louis Stevenson", 1886)
    ];

    livros[0].emprestar();
    livros[3].emprestar();
    livros[7].emprestar();
    let tableLivros = document.getElementById("livros-tbody");
    for (let livro of livros) {
        let row = document.createElement("tr");
        let titulo = document.createElement("td");
        titulo.textContent = livro.titulo;
        let autor = document.createElement("td");
        autor.textContent = livro.autor;
        let ano = document.createElement("td");
        ano.textContent = livro.anoPublicacao;
        let disponivel = document.createElement("td");
        disponivel.textContent = livro.estaDisponivel() ? "Sim" : "Não";
        let tdEmprestar = document.createElement("td");

        let btnEmprestar = document.createElement("button");
        btnEmprestar.textContent = "Emprestar";
        btnEmprestar.disabled = !livro.estaDisponivel();
        btnEmprestar.addEventListener("click", ()=> {
            livro.emprestar();
            disponivel.textContent = "Não";
            btnEmprestar.disabled = true;
        });
        tdEmprestar.appendChild(btnEmprestar);
        row.appendChild(titulo);
        row.appendChild(autor);
        row.appendChild(ano);
        row.appendChild(disponivel);
        row.appendChild(tdEmprestar);
        tableLivros.appendChild(row);   
    }
}
document.addEventListener("DOMContentLoaded", carregarLivrosTabela);
