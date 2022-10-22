// Criado por Hannah Lisie

// Aula de Introdução ao Java Script

/* var nome = "Hannah Lisie";
var idade = "26";
alert("Hello, " + nome + ". Sua idade é " + idade + " anos." ); */

/* var nome = "Hannah Lisie";
var idade = "16";
var idade2 = "10";
// Imprime a String, apenas o concatenar!
alert(idade + idade2); */

/* var nome = "Hannah Lisie";
var idade = 16;
var idade2 = 10;
// Imprime o Número, soma!
alert(idade + idade2); */

/* var nome = "Hannah Lisie";
var idade = 16;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
console.log(nome);
console.log(idade + idade2); 
console.log(frase);
// Console é onde você consegue fazer o debug
// toUperCase= Tudo em Maiscula, toLowerCase = tudo em minuscula.
alert(frase.replace("Japão", "Brasil")); */

/* var lista = ["Maçã", "Pêra", "Laranja"];
lista.push("Uva"); // Adiciona na lista
lista.pop(); // Tira da lista
console.log(lista.length); // Tamanho da lista
console.log(lista.reverse()); // Altera Ordem da lista
alert(lista[1]); // Imprime em Popup
console.log(lista[1]); // Imprime o número na ordem
console.log(lista);
console.log(lista.toString()); // Trás para uma String e perde a referência de Array
console.log(lista.join(" - ")); // Coloca entre os valores */

/* var fruta =  {nome: "Morango", cor: "Vermelho"}
console.log(fruta.nome);
alert(fruta.cor); */

/* var frutas = [{nome: "Morango", cor: "Vermelho"}, {nome: "Goiaba",cor: "Branca"}]
console.log(frutas);
alert(frutas[1].nome); */

/* var idade = prompt("Qual sua idade?");
// var idade = 18;
if (idade >= 18){
    alert("Maior de Idade!");
}else{
    alert("Menor de Idade!");
}; */

/* var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++; // = count + 1;
} */

/* var count;
for(count=0; count < 5; count++){
    alert(count);
} */

/* var d = new Date();
alert(d); // Visualiza a data completa com hora e região
// alert(d.getMonth()+1); // O mês sempre conta do zero, então para ter o certo soma + 1
// alert(d.getMinutes());
// alert(d.getHours());
// alert(d.getDay());
// alert(d.getSeconds()); */

/*function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão!", "Japão", "Brasil")); */


/* // var validar;
var validar = 0;

function validaIdade(idade){

    // validar
    // var validar

    if (idade >= 18){
        // return true;
        validar = true
    }else{
        // return false;
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
//console.log(validaIdade(idade));
validaIdade(idade)
console.log(validar); */

function clique(){
    document.getElementById("agradecimento").innerHTML = "Obrigada! Clique novamente para abrir a pagina na mesma aba!";
    // console.log(document.getElementById("agradecimento"))
    // alert("Obrigada por clicar!");
}

function redirecionando(){
    window.open("https://google.com/"); // Abre o link em outra aba
}

function redirecionar(){
    window.location.href = "https://google.com/"; // Abre o link na mesma aba
}

function passe(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse por aqui!"; // Dessa forma posso tirar o ID do html
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse por aqui!";
    // alert("Trocar Texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    // alert("Trocar Texto");
}

function load(){
    alert("Página Carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}