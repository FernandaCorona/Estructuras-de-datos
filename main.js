var arrayNombres = [];

function submit() {

    // FOR para guardar todos los nombres
    for (let i = 1; i <= 4; i++) {
        var nombre = document.getElementById("nombre_alumno_" + i).value;
        arrayNombres.push(nombre);

        console.log(nombre);
    }

    console.log(arrayNombres);      // Imprimir todo el arreglo

    // FOR para mostrar array en HTML
    var verArray = [];

    for (let i = 0; i < arrayNombres.length; i++) {
        verArray.push("<h3>NOMBRE: " + arrayNombres[i] + "</h3>");
    }

    document.getElementById("ver_nombre_con_comas").innerHTML = verArray;

    var removerComas = verArray.join(" ");     // .join quita las comas
    document.getElementById("ver_nombre_sin_comas").innerHTML = removerComas;

    // OCULTAR EL BOTÓN DE ENVIAR
    document.getElementById("boton_enviar").style.display = "none";
    // HACER VISIBLE AL BOTON PARA ORDENAR
    document.getElementById("boton_ordenar").style.display = "inline-block";
}

function sorting() {
    arrayNombres.sort();        // Ordena el arreglo alfabeticamente
    console.log(arrayNombres);

    // ORDENAR ARREGLO DE HTML
    var verArrayOrdenado = [];

    for (let i = 0; i < arrayNombres.length; i++) {
        verArrayOrdenado.push("<h3>NOMBRE: " + arrayNombres[i] + "</h3>");
    }

    // ELIMINAR COMAS DEL ARRAY
    var removerComas = verArrayOrdenado.join(" ");
    document.getElementById("ver_nombre_sin_comas").innerHTML = removerComas;
}

function new_update() {
    document.getElementById("ver_nombre_sin_comas").innerHTML = "<h1>" + arrayNombres +"</h1>";
}
