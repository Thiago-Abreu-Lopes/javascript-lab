function arrayNUltimoslista(){
    if(arguments.length==1){
        console.log(arguments[0][arguments[0].length - 1]);
    }else{
        if(arguments[0].lenght>arguments[1]){
            console.log("Array é pequeno demais para esse parametro!");
        }else{
            for(var i = arguments[0].length - 1; i>=arguments[1]; i--) {
                console.log(arguments[0][i]);
            }
        }
    }
    
}

var lista1 = [1,2,3,4,5,6,7,8,9,10];

arrayNUltimoslista(lista1);
console.log("######");
arrayNUltimoslista(lista1,5);