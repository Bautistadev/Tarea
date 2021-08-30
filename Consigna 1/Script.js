var Valor;

Valor = prompt('Ingrese la distancia a recorrer');

if (Valor >= 0 && Valor <1000 )
    document.write('Medio de transporte: Los pies :ˆ)')
else if (Valor >=1000 && Valor < 10000)
    document.write('Medio de transporte: Bicicleta')
else if (Valor >=10000 && Valor < 30000)
    document.write('Medio de transporte: Colectivo')
else if (Valor >=30000 && Valor < 100000)
    document.write('Medio de transporte: Auto')
else 
    document.write('Medio de transporte: Avion (Empaca tus cosas, es hora de volar)')