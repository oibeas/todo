// INICIO PINTAR TAREAS
function pintarTareas(pTareas) {
    seccionTareas.innerHTML = "";
    // numeroTareas.innerHTML = pTareas.length;
    pTareas.forEach(tarea => pintarUnaTarea(tarea));
}

function pintarUnaTarea(pTarea) {
    seccionTareas.innerHTML += `<div data-id="${pTarea.idTarea}" id="tarea_${pTarea.idTarea}">
                                    <ul>
                                        <li>${pTarea.titulo}</li>
                                        
                                        <button class="btn btn-danger btn-sm" onclick="borrarTarea('tarea_${pTarea.idTarea}')">Eliminar</button>
                                    </ul>
                                </div>`;
    let divtarea = document.getElementById(`tarea_${pTarea.idTarea}`);
    switch (pTarea.prioridad) {
        case 'urgente':
            divtarea.setAttribute('style', `background-color: red`);
            break;
        case 'diaria':
            divtarea.setAttribute('style', `background-color: lightskyblue`);
            break;
        case 'mensual':
            divtarea.setAttribute('style', `background-color: greenyellow`);
            break;
    }

}

pintarTareas(listaTareas);
// FIN PINTAR TAREAS

// INICIO GUARDAR TAREA
function guardarTarea(pTareaGuardar) {
    listaTareas.push(pTareaGuardar)
}

btnGuardar.addEventListener('click', capturarDatosForm);

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
// FIN GUARDAR TAREA

// INICIO BORRAR TAREA
function borrarTarea(pBorrarTarea) {
    let tareaBorrarId = document.getElementById(pBorrarTarea);
    seccionTareas.removeChild(tareaBorrarId);
    let id = pBorrarTarea.substring(6)
    console.log(id);
    borrar(id)
}

function borrar(pId) {
    let id = parseInt(pId);
    let posicionBorrar = listaTareas.findIndex(tareaBorrar => tareaBorrar.idTarea == id);
    listaTareas.splice(posicionBorrar, 1);
}
// FIN BORRAR TAREA

// INICIO FILTROS
filtroPrioridad.addEventListener('change', capturarPrioridad);

function capturarPrioridad(event) {
    let priority = event.target.value;
    if (priority != "") {
        let listaFiltradaPorPrioridad = filtrarXprioridad(listaTareas, priority);
        pintarTareas(listaFiltradaPorPrioridad);
    } else {
        pintarTareas(listaTareas);
    }
}

function filtrarXprioridad(listaTareas, pPrioridad) {
    let listaXprioridad = new Array();
    listaXprioridad = listaTareas.filter(tarea => tarea.prioridad == pPrioridad.toLowerCase());
    return listaXprioridad;
}


filtroTarea.addEventListener('input', capturarBusquedaTarea);

function capturarBusquedaTarea(event) {
    let busquedaTarea = event.target.value.toLowerCase();
    console.log(busquedaTarea);
    let listaFiltradaTarea = buscarXtarea(busquedaTarea);
    pintarTareas(listaFiltradaTarea);
}

function buscarXtarea(pTareaBusqueda) {
    const listaFiltrada = listaTareas.filter(tareaBusq => tareaBusq.titulo.toLowerCase().includes(pTareaBusqueda));
    return listaFiltrada;
}

// FIN FILTROS

