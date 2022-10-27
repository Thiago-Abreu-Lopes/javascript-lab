var lista1=[3,2,2,2, 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function popularValue(lista){
    var aparicoes = 1;
    var aparicoesAtuais = 0;
    var elementoPopular;
    for(var i = 0; i<lista.length;i++){
        for(var j = 0; j<lista.length;j++){
            if(lista[i]==lista[j]){
                aparicoesAtuais++;
            }
            if(aparicoes<aparicoesAtuais){
                aparicoes=aparicoesAtuais;
                elementoPopular = lista[i];
            }
        }
        aparicoesAtuais=0;
    }
    return elementoPopular;
}

console.log(popularValue(lista1)) ;