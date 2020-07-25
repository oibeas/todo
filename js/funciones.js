let seccionTareas = document.querySelector('#tareas');

function pintarTareas(pTareas) {
    seccionTareas.innerHTML = "";
    // numeroTareas.innerHTML = pTareas.length;
    pTareas.forEach(tarea => pintarUnaTarea(tarea));
}

function pintarUnaTarea(pTarea) {
    seccionTareas.innerHTML += `<div>
                                    <ul>
                                        <li>${pTarea.titulo}</li>
                                        <li>${pTarea.prioridad}</li>
                                        <button id="eliminar">Eliminar</button>
                                    </ul>
                                </div>`;
}

function guardarTarea(pTareaGuardar) {
    listaTareas.push(pTareaGuardar)
}

let btnGuardar = document.getElementById('botonGuardar');
btnGuardar.addEventListener('click', capturarDatosForm);
let contadorTareas = 4

function capturarDatosForm(event) {
    event.preventDefault();

    let titulo = inputTarea.value;
    let prioridad = inputPrioridad.value;

    const newTarea = {
        idTarea: contadorTareas,
        titulo: titulo,
        prioridad: prioridad,
    }
    guardarTarea(newTarea);
    pintarUnaTarea(newTarea);

    //vaciamos los campos del formulario
    inputTarea.value = "";
    // inputPrioridad.value = "diaria";
    contadorTareas++;
}

function borrarTarea(pNoticiaBorrar) {

    let noticiaBorrar = document.getElementById(pNoticiaBorrar);
    seccionNoticias.removeChild(noticiaBorrar);
    //poniendo un data-id a todo el div del articulo puedo pasar el parametro que necesite la funcion de borrar, en este caso puedo pasarle directamente el id de la noticia que voy a borrar en el array.
    //opcion 1 con dataset
    //borrar(noticiaBorrar.dataset.id);

    //opcion2. cortando la cadena de caracteres.
    //split es una funcion que parte una cadena caracteres en dos o mas elementos noticia_1. split crea un array de elementos por cada uno de los elementos que no sean el elemento
    //let id = pNoticiaBorrar.split('_')[1];
    //substring me permite tambien partir un string en otros string mas pequeños.
    let id = pNoticiaBorrar.substring(8)
    console.log(id);
    borrar(id)
}



pintarTareas(listaTareas);
