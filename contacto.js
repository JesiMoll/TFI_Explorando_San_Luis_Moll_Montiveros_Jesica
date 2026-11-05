
// Busco el formulario y el espacio donde voy a mostrar despues el resultado.
const formulario = document.getElementById("formulario-contacto");
const resultado = document.getElementById("resultado-contacto");

//Envío el formulario con el evento.
formulario.addEventListener("submit", function(evento) {

    //Evito que la página se recargue.
    evento.preventDefault();

    //Obtengo los datos y elimino espacios sobrantes.
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    //Limpio los errores anteriores.
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-correo").textContent = "";
    document.getElementById("error-telefono").textContent = "";
    document.getElementById("error-mensaje").textContent = "";

    resultado.textContent = "";

    //Supongo que el formulario es válido hasta encontrar un error.
    let valido = true;

    //Verifico que el nombre tenga entre 2 y 50 caracteres.
    if (nombre.length < 2 || nombre.length > 50) {
        document.getElementById("error-nombre").textContent =
            "Ingresá un nombre de entre 2 y 50 caracteres.";
        valido = false;
    }

    //Verifico el formato del correo.
    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {
        document.getElementById("error-correo").textContent =
            "Ingresá un correo electrónico válido.";
        valido = false;
    }

    //Verifico los caracteres permitidos en el teléfono.
    const expresionTelefono = /^\+?[0-9\s()-]+$/;
    const soloNumeros = telefono.replace(/\D/g, "");

    if (!expresionTelefono.test(telefono) ||
        soloNumeros.length < 7 ||
        soloNumeros.length > 15) {

        document.getElementById("error-telefono").textContent =
            "Ingresá un teléfono válido de 7 a 15 números.";
        valido = false;
    }

    //Verifico la longitud de la consulta.
    if (mensaje.length < 10 || mensaje.length > 500) {
        document.getElementById("error-mensaje").textContent =
            "La consulta debe tener entre 10 y 500 caracteres.";
        valido = false;
    }

    //Digo con if, si hay algún error, detengo el envío.
    if (!valido) {
        return;
    }

    //Creo elementos HTML para mostrar los datos ingresados.
    const titulo = document.createElement("h2");
    titulo.textContent = "Consulta enviada correctamente";

    const datosNombre = document.createElement("p");
    datosNombre.textContent = "Nombre: " + nombre;

    const datosCorreo = document.createElement("p");
    datosCorreo.textContent = "Correo: " + correo;

    const datosTelefono = document.createElement("p");
    datosTelefono.textContent = "Teléfono: " + telefono;

    const datosMensaje = document.createElement("p");
    datosMensaje.textContent = "Consulta: " + mensaje;

    //Agrego los elementos creados a mi página.
    resultado.appendChild(titulo);
    resultado.appendChild(datosNombre);
    resultado.appendChild(datosCorreo);
    resultado.appendChild(datosTelefono);
    resultado.appendChild(datosMensaje);

    //Limpio el formulario para una nueva consulta.
    formulario.reset();
});
