//guardo las imágenes en un array que voy a mostrar en el banner.
const imagenes = [
    "img/Imagen1.jpeg",
    "img/Imagen2.jpeg",
    "img/Imagen3.jpeg",
    "img/Imagen4.jpg",
    "img/Sierras Comechingones.jpg"
];
//imagen con que comienza el banner.
let indice = 0;
//busco en html la imagen que voy a cambiar.
const imagenBanner = document.getElementById("carrusel-img");
//cambio la imagen del banner
function cambiarImagen(){
    indice++;
    if(indice>= imagenes.length){
        indice = 0;
    }

    imagenBanner.src = imagenes[indice];
    imagenBanner.alt = "Fotografía turística de San Luis";
}
//cambio la imagen cada 4 segundos.
setInterval(cambiarImagen, 4000);

//carrusel para las imagenes de los paisajes.
const imagenesCarrusel = [
    "img/PotrerodelosFunes.JPG",
    "img/Potrero de los Funes. Cascada de agua.JPG",
    "img/vista de la carolina.JPG",
    "img/Salto del Chispeadero.JPG",
    "img/Nieve en Potrero de los Funes.JPG"
];
//describo cada fotografía para mejorar la accesibilidad.
const descripcionesCarrusel = [
    "Paisaje de Potrero de los Funes",
    "Cascada de agua en Potrero de los Funes",
    "Vista panorámica de La Carolina",
    "Salto del Chispeadero",
    "Paisaje nevado en Potrero de los Funes"
];
//posicion actual de la imagen del carrusel
let indiceCarrusel = 0;

//imagenes y botones del carrusel
const fotoCarrusel = document.getElementById("imagen-carrusel");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

//imagen que corresponde a la posicion actual 
function mostrarImagenCarrusel(){
    fotoCarrusel.src = imagenesCarrusel[indiceCarrusel];
    fotoCarrusel.alt = descripcionesCarrusel[indiceCarrusel];
}

// boton siguiente
botonSiguiente.addEventListener("click", function(){
    indiceCarrusel++;
    if(indiceCarrusel>=imagenesCarrusel.length){
        indiceCarrusel= 0;
    }
    mostrarImagenCarrusel();
});

// boton anterior
botonAnterior.addEventListener("click", function(){
    indiceCarrusel--;
    if(indiceCarrusel< 0){
        indiceCarrusel= imagenesCarrusel.length -1;
    }
    mostrarImagenCarrusel();
});
//muestro la primera foto al abrir la pagina.
mostrarImagenCarrusel();



