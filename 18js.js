
function primer_boton() {
    for (ficha=2;ficha<=cuantas;ficha=ficha+2){
        if (ficha===cuantas) {
   
     for (fila = 1; fila <= cuantas; fila++) {
        for (columna = (cuantas/3+1); columna <= cuantas-(cuantas/3); columna++) {
                
                document.getElementById("F" + fila + "C" + columna).style.backgroundColor = "red";
                document.getElementById("F" + fila + "C" + columna).innerHTML = "";
        }}
  

 
}

 if (ficha+1===cuantas){
     
        for (fila = 1; fila <= cuantas; fila++) {
        for (columna = (cuantas-1/3)+1; columna <= cuantas-(cuantas-1/3); columna++) {
            document.getElementById("F" + fila + "C" + columna).style.backgroundColor = "red";
            document.getElementById("F" + fila + "C" + columna).innerHTML = "";
       }}}
 
if (ficha+2===cuantas){
             
        for (fila = 1; fila <= cuantas; fila++) {
            for (columna = (cuantas+1/3)+1; columna <= cuantas-(cuantas+1/3); columna++) {
                document.getElementById("F" + fila + "C" + columna).style.backgroundColor = "red";
                document.getElementById("F" + fila + "C" + columna).innerHTML = "";

    }}}
}}
  

























function segundo_boton() {

    cuantas = prompt("¿Cuántas cajas quiere en cada fila?", "5")-0;

    codigo = "";
    lado = 100/cuantas;


// inicio - final - saltos
for (f=1; f<=cuantas; f++) { // HACE LAS FILAS

    for (c=1; c<=cuantas; c++) { // HACE LAS COLUMNAS

        codigo = codigo + '<div class="hijoA" id="F'+f+'C'+c+'" style="width:'+lado+'%; height:'+lado+'%">F'+f+'C'+c+'</div>';

    }
}


    document.getElementById("padre1").innerHTML = codigo;

    
}