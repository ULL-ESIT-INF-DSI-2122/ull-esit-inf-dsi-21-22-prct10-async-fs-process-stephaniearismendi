import {watch} from 'fs';
import {spawn} from 'child_process';

/**
 * Clase Watcher que permite observar un fichero y ejecutar distintas acciones
 */
export class Watcher {
  private results:string[] = [];
  constructor(private commands:string[]) {
    this.commands = commands;
  }
  /**
   * Método que inicia el watcher
   */
  public init() {
    watch('prueba.txt', (eventType, name) => {
      console.log(`event type is: ${eventType}`);
      if (name) {
        console.log(`filename provided: ${name}`);
      } else {
        console.log('filename not provided');
      }
      if (eventType == 'change') {
        this.changeHandler(name);
      } else if (eventType == 'rename') {
        console.log('file does not exists anymore');
      }
    });
  }
  /**
   * Método que ejecuta ls -l -h cada vez que el archivo se modifica
   */
  private changeHandler(name:string) {
    const command:string = this.commands[0];
    this.commands.splice(1, 0);
    console.log(this.commands);
    this.commands.push(name);
    // const ls = spawn(command, ['-l', '-h', name]);
    constt ls = spawn(command, commands);
    ls.stdout.on('data', (data) => {
      this.results.push(data.toString());
      console.log(`stdout: ${data}`);
    //   for (let i:number = 0; i < this.results.length; i++) {
    //     console.log(this.results[i]);
    //   }
    });
    ls.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    },
    );
  }
}