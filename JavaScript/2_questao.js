var lista1 = [1,2,3,4,5,6,7,8,9,10];
var lista2 = [];

function arrayClone(seraClonado, clone){
    var i = seraClonado.length;
    while(i--){
        clone[i]=seraClonado[i];
    } 
}
arrayClone(lista1,lista2);
console.log(lista2); 