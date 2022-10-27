function somaValores(lista1,lista2){
    var listaResultante = [];
    if(lista1.length>lista2.length){
        var diferenca1 = lista1.length-lista2.length;
        for(var x = 0;x<diferenca1;x++){
            lista2.push(0);
        }
    }else if(lista2.length>lista1.length){
        var diferenca2 = lista2.length-lista1.length;
        for(var y = 0;y<diferenca2;y++){
            lista1.push(0);
        }
    }
    for(var i =0;i<lista1.length;i++){
        listaResultante[i]=lista1[i]+lista2[i];
    }
    return listaResultante;
}

var lista1 = [1,2,3,4,5,6,7,8,9,10];
var lista2 = [8,7,6,5,4,3,2,1];
console.log(somaValores(lista1,lista2));

