class Sede {
    constructor(ubicacion) {
        this.ubicacion = ubicacion;
    }

    obtenerUbicacion() {
        return this.ubicacion;
    }
}

class Compañia {
    constructor(nombre, ubicacion) {
        this.nombre = nombre;
        this.sede = new Sede(ubicacion) // <----------- Composicion
    }

    mostrarInfo() {
        return `Compañía: ${this.nombre}, Ubicación: ${this.sede.obtenerUbicacion()}`;
    }
}



document.querySelector('#agregarCompania').addEventListener('click', () => {
    let nombre = document.querySelector('#nombreCompania').value;
    let ubicacion = document.querySelector('#ubicacionSede').value;

    let compañia = new Compañia(nombre, ubicacion);

    let Ul = document.querySelector('#detallesCompania');
    let compaSede = document.createElement('li');

    let detalle = compañia.mostrarInfo();
    compaSede.innerText = detalle;

    Ul.append(compaSede);
});
