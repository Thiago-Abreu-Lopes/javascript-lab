function arrayNlista(){
    if(arguments.length==1){
        console.log(arguments[0][0]);
    }else{
        if(arguments[0].lenght>arguments[1]){
            console.log("Array é pequeno demais para esse parametro!");
        }else{
            for(var i = 0; i<arguments[1]; i++) {
                console.log(arguments[0][i]);
            }
        }
    }
    
}

var lista1 = [1,2,3,4,5,6,7,8,9,10];

arrayNlista(lista1);
console.log("######");
arrayNlista(lista1,5);