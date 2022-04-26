"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reduce = void 0;
/**
 * Clase abstracta reduce que llevará a cabo todo el proceso
 */
class Reduce {
    constructor(values) {
        this.values = values;
        this.data = values;
    }
    /**
     * Función map que coge como parámetro una función y la realiza sobre un número
     * @param f función a aplicar
     * @returns number[]
     */
    map2(f) {
        const aux = [];
        for (let i = 0; i < this.data.length; i++) {
            aux.push(f(this.data[i]));
        }
        return aux;
    }
    /**
     * Método que ejecuta el programa
     * @param f funcion
     * @returns number[]
     */
    run(f) {
        this.beforeMap();
        this.map2(f);
        this.afterMap();
        this.beforeReduce();
        this.reduce();
        this.afterReduce();
        return this.data;
    }
    /**
     * Métodos intermedios para ejecutar antes de map y después de reduce
     */
    beforeMap() {
        console.log(`The values are: ${this.data}`);
    }
    ;
    afterMap() {
        console.log(`The values after the map are: ${this.data}`);
    }
    ;
    afterReduce() { }
    ;
    beforeReduce() { }
    ;
    // getters
    getArray() {
        return this.data;
    }
}
exports.Reduce = Reduce;
