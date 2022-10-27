var lista = [1,2,3,4,5,6,7,8,9,10];
var letra = "a";

function arrayValidation(object){
    if(Array.isArray(object)){
        console.log("Eh array!");
    }else{
        console.log("Não eh array!")
    }
}

arrayValidation(lista);