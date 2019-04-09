// Golondrinas pueden comer y volar, cuando comen ganan 2 de energia por cada gramo que consuman
// y cuando vuelan pierden 3 de energia por cada kilometro

export function crearGolondrina() {
     return { 
        energia: 30,
        volar: function(km){
            this.energia -= km * 3
        },
        comer: function(gramos){
            this.energia += gramos * 2
        },
     }
 }

export class Golondrina {
    constructor(energia = 30){
        this.energia = energia
    }

    volar(km){
        this.energia -= km *3
    }

    comer(gramos){
        this.energia += gramos * 2
    }
}

export const GolondrinasInmutables = {

   crear(nombre, edad = 1, energia = 30){
       return {nombre, edad,  energia}
   },

   volar(golondrina, km){
    return {...golondrina, energia: golondrina.energia - km * 3}
   },

   comer(golondrina, gramos) {
       return {...golondrina, energia: golondrina.energia + gramos * 2 }
   }
}