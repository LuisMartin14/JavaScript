

class Singleton {

    static instancia;

    nombre = '';

    constructor( nombre = '') {

        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instacia1 = new Singleton('Ironman');
const instacia2 = new Singleton('Spiderman');

console.log(`Nombre en la instancia es: ${ instacia1.nombre }`);
console.log(`Nombre en la instancia es: ${ instacia2.nombre }`);