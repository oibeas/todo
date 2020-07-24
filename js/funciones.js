let seccionTareas = document.querySelector('#tareas');

function pintarTareas(pTareas) {
    seccionTareas.innerHTML = "";
    pTareas.forEach(element => {
        seccionTareas.innerHTML += `<div>
                                    <ul>
                                        <li>${pTareas.titulo}</li>
                                        <li>${pTareas.prioridad}</li>
                                    </ul>
                                </div>`;
    });

}


pintarTareas(listaTareas);

// function pintarNoticias(pListaNoticias) {
//     seccionNoticias.innerHTML = "";

//     pListaNoticias.forEach(noticia => {
//         pintarNoticia(noticia);
//     });

// }

// function borrarNoticia(pNoticiaBorrar) {

//     let noticiaBorrar = document.getElementById(pNoticiaBorrar);
//     seccionNoticias.removeChild(noticiaBorrar);
//         let id = pNoticiaBorrar.substring(8)
//     console.log(id);
//     borrar(id)
// }




// pintarNoticias(blog);
