let seccionTareas = document.querySelector('#tareas');


function pintarTareas(pTareas) {

    //crear los elementos primero
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    let liEdad = document.createElement('li');
    let liSS = document.createElement('li');
    let div = document.createElement('div');
    //creo la clase para el div
    div.className = "diagnostico";

    //creamos los contenidos
    let contentH3 = document.createTextNode(pTareas[0].titulo + " " + pTareas[0].prioridad);
    let contentliEdad = document.createTextNode('EDAD: ' + pTareas.edad);
    let contentliSS = document.createTextNode('NUMERO SEGURIDAD SOCIAL: ' + pTareas.numeroSS);
    let contentDiagnostico = document.createTextNode('Diagnostico: ' + pTareas.diagnostico);

    //tiro los contenidos dentro de los elementos
    liSS.appendChild(contentliSS);
    liEdad.appendChild(contentliEdad);
    h3.appendChild(contentH3);
    div.appendChild(contentDiagnostico);

    //Tirar dentro del article los diferentes elementos en orden
    ul.appendChild(liEdad);
    ul.appendChild(liSS);

    article.appendChild(h3);
    article.appendChild(ul);
    article.appendChild(div);

    seccionTareas.appendChild(article);

}
pintarTareas(listaTareas);