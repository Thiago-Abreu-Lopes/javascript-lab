function unirArrays(listaInicial,listaAgregada){
    var vetorResultante = [...listaInicial,...listaAgregada];
    return vetorResultante;
}

var vetorPilha = [1,2,3,4,5];
var vetorAdicionar = [6,7,8,9,10];

console.log("vetorPilha " + vetorPilha);
console.log("vetorAdicionar " + vetorAdicionar)
console.log("#########################");
console.log("vetorResultante " + unirArrays(vetorPilha,vetorAdicionar));