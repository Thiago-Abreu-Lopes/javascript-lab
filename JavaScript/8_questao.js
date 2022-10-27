function deleteDuplicates(lista){
    var listaUnica = [...new Set(lista)];
    return listaUnica;
}

var lista1 = [1, 1, 3, 4, 4, 5, 9, 8, 5, 8, 6, 6, 5, 5, 7, 7, 9];
console.log(lista1);
console.log("###########");
console.log(deleteDuplicates(lista1));