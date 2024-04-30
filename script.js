import { barcelona, roma, paris, londres } from "./ciudades.js";

document.addEventListener("DOMContentLoaded",() =>{
    let enlaces = document.querySelectorAll("a");
    let tituloElemento = document.querySelector("#titulo");
    let subtituloElemento = document.querySelector("#subtitulo");
    let parrafoElemento = document.querySelector("#parrafo");
    let precioElemento = document.querySelector("#precio");

    enlaces.forEach((enlace) => {
            enlace.addEventListener("click", function(enlace) {
                //REMOVE ACTIVE OF ELEMENTS a
                enlaces.forEach((enlace) => enlace.classList.remove("active"));

                //ADD ACTTIVE
                this.classList.add("active");

                //GET INFORMATION
                let contenido = obtenerContenido(this.textContent);

                //SHOW DOM
                tituloElemento.textContent = contenido.titulo;
                subtituloElemento.textContent = contenido.subtitulo;
                parrafoElemento.textContent = contenido.parrafo;
                precioElemento.textContent = contenido.precio;
            });
        });

    //GET CITIES FROM ciudades.js
    function obtenerContenido(enlace){
        let contenido = {
            'Barcelona' : barcelona,
            'Roma' : roma,
            'París' : paris,
            'Londres' : londres
        };
        return contenido[enlace];
    }
});
