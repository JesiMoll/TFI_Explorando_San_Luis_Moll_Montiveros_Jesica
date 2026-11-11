
// Busco el formulario y el espacio donde voy a mostrar despues el resultado.
const formulario = document.getElementById("formulario-contacto");
const resultado = document.getElementById("resultado-contacto");

//Envío el formulario con el evento.
formulario.addEventListener("submit", function(evento) {

    //Evito que la página se me recargue.
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

    //Verifico la cantidad de caracteres y que el nombre tenga solo letras.
    const expresionNombre = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]+$/;

    //Verifico que el nombre tenga entre 2 y 50 caracteres .
    if (nombre.length < 2 || nombre.length > 50 || !expresionNombre.test(nombre)) {
        document.getElementById("error-nombre").textContent =
            "Ingresá un nombre válido de 2 y 50 caracteres, usando letras y espacios.";
        valido = false;
    }

    //Verifico el formato del correo.
    const expresionCorreo = /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

    if (!expresionCorreo.test(correo)) {
        document.getElementById("error-correo").textContent =
            "Ingresá un correo electrónico válido.";
        valido = false;
    }

    //Verifico los caracteres permitidos en el teléfono.
    const expresionTelefono = /^\+?[0-9]+([ -][0-9]+)*$/;
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
    titulo.textContent = "Datos ingresados correctamente";

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
