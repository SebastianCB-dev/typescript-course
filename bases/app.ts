// Crear interfaces
interface Auto {
  encender       : boolean;
  velocidadMaxima: number;
  acelerar()     :void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(): void{
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales
interface Guason {
  reir  ?:boolean,
  comer ?:boolean,
  llorar?:boolean
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
  (ciudadanos: string[]): number;
}
const ciudadGotica: CiudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface PersonaI {
  edad: number;
  estadoCivil: string;  
  nombre: string;
  sexo: string;
  imprimirBio(): void;
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

class Persona implements PersonaI {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  public imprimirBio(): void {
    console.log(`${this.nombre} - ${this.edad} - ${this.estadoCivil}` );
  }



}