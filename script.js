//guardo las imágenes en un array que voy a mostrar en el banner.
const imagenes = [
    "img/Imagen1.jpeg",
    "img/Imagen2.jpeg",
    "img/Imagen3.jpeg"
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
}
//cambio la imagen cada 4 segundos.
setInterval(cambiarImagen, 4000);