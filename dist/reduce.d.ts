/**
 * Clase abstracta reduce que llevará a cabo todo el proceso
 */
export declare abstract class Reduce {
    protected values: number[];
    protected data: number[];
    constructor(values: number[]);
    /**
     * Función map que coge como parámetro una función y la realiza sobre un número
     * @param f función a aplicar
     * @returns number[]
     */
    protected map2(f: (x: number) => number): number[];
    /**
     * método abstracto reduce
     */
    protected abstract reduce(): number;
    /**
     * Método que ejecuta el programa
     * @param f funcion
     * @returns number[]
     */
    run(f: (x: number) => number): number[];
    /**
     * Métodos intermedios para ejecutar antes de map y después de reduce
     */
    protected beforeMap(): void;
    protected afterMap(): void;
    protected afterReduce(): void;
    protected beforeReduce(): void;
    getArray(): number[];
}
