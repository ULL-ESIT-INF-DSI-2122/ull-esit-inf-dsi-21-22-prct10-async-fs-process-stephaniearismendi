import { Reduce } from './reduce';
/**
 * Clase abstracta AddMapReduce que realiza la reducción por suma
 */
export declare class AddMapReduce extends Reduce {
    protected values: number[];
    constructor(values: number[]);
    /**
     * Método protegido reduce que ejecuta las operaciones principales de la clase
     * @returns void
     */
    protected reduce(): number;
    /**
     * Método intermedio para ejecutar después de reduce
     */
    protected afterReduce(): void;
    protected beforeReduce(): void;
}
