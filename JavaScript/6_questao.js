function numberIntoArray(number){
    var arrOfDigits = Array.from(String(number), Number);
    return arrOfDigits;
}

function putTrace(lista,position){
    if(position >= lista.length){
        lista.push("-");
    } else if(position <= 0){
        lista.unshift("-");
    }else{
        for(var i = lista.length; i>=position;i--){
            lista[i] = lista[i-1];
        }
        lista[position] = "-";
    }
}

function tracerEvenNumber(lista){
    for(var i = 0; i<lista.length;i++){
        if( lista[i]%2===0 && lista[i+1]%2===0){
            putTrace(lista,i+1);
            i+1;
        }
    }
}

function arrayToString(lista){
    var listaEmString = lista.toString();
    return listaEmString
}

var number = 625468;
var lista1 = numberIntoArray(number);
tracerEvenNumber(lista1);
console.log(lista1);
console.log("############");
console.log(arrayToString(lista1));