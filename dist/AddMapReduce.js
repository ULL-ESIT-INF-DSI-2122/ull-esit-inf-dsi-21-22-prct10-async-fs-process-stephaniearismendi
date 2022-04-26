"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMapReduce = void 0;
const reduce_1 = require("./reduce");
/**
 * Clase abstracta AddMapReduce que realiza la reducción por suma
 */
class AddMapReduce extends reduce_1.Reduce {
    constructor(values) {
        super(values);
        this.values = values;
    }
    /**
     * Método protegido reduce que ejecuta las operaciones principales de la clase
     * @returns void
     */
    reduce() {
        let result = 0;
        for (let i = 0; i < this.data.length; i++) {
            result += this.values[i];
        }
        return result;
    }
    /**
     * Método intermedio para ejecutar después de reduce
     */
    afterReduce() {
        console.log(`The sum of the values is ${this.data}`);
    }
    beforeReduce() {
        console.log(`The values are: ${this.data}`);
    }
}
exports.AddMapReduce = AddMapReduce;
