

class Persona {


    constructor( nombre, apellido, pais ) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }

    getInfo() {
        console.log( `info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }` );
    }

}

const nombre1   = 'Melisa',
      apellido1 = 'Flores',
      pais1     = 'Honduras';

const persona1 = new Persona( nombre1, apellido1, pais1 );

persona1.getInfo();