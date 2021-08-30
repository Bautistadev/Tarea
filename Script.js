var valores=[];
var datos;
var mayor=0;



while(Valor=prompt('Alergrar o  Cancelar')){
    if( !isNaN(Valor)){
        valores.push(parseInt(Valor));
    }

    console.log(valores);
}

for (var i = 0 ; i<valores.length; i++){
    if(valores[i]>mayor){
        mayor=valores[i];
    }
}

console.log('El valor mas grande del array es el: '+mayor)