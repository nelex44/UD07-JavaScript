// Esto nos printará en la consola del navegador Hola Mundo
    console.log("Hola Mundo!");
// Esto nos mostrará un banner en la página que nos mostrará el texto: Soy el primer script
var msg = alert("Hola mundo!" + "\n" + "Que facil es incluir 'comillas simples' y " + "\"" + "comillas dobles" +"\"")
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    meses.forEach(function(mes) {
        console.log(mes);
    })
var valores = [ true, 5, false, "hola", "adios", 2 ];
var max = 0;
var masTexto;
valores.forEach( function( valor ) {
  if((typeof(valor) === 'string') && (valor.length > max ) ) {
    max = valor.length;
    masTexto = valor;
  }
} )
console.log( masTexto );

// Printamos valores para comprobar el cambio:
console.log(valores);
// Hacemos un forEach que nos recorra el array, 
// y los True que encuentre seran False y viceversa
valores.forEach((valor, index, valores) =>  {
    if (valor === true) {
       valores[index] = false
    }

    
    if (valor === false) {
        valores[index]  = true
     }
} );
console.log(valores); // Volvemos a printar para comprobar si
                      // Si ha cambiado

valores.forEach((valor, index, valores) =>  {
    if (valor === Number) {
       valores[index] = false
    }

    
    if (valor === false) {
        valores[index]  = true
     }
} );
console.log(valores);
