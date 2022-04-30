import {spawn} from 'child_process';
import {access, constants} from 'fs';
import chalk from 'chalk';
import * as fs from 'fs';

export class Wrapper {
  constructor() {
  }
  public checkIfDirectory(path:string):boolean {
    let isDirectory:boolean = false;
    if (fs.existsSync(path)) {
      const stats = fs.statSync(path);
      if (stats.isDirectory()) {
        isDirectory = true;
        console.log(chalk.green(`${path} is a directory`));
      } else if (stats.isFile()) {
        isDirectory = false;
        console.log(chalk.green(`${path} is a file`));
      }
    } else {
      console.log(chalk.red(`${path} does not exist`));
    }
    return isDirectory;
  }
  public createDirectory(path:string):void {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
      console.log(chalk.green(`Directory ${path} has been created`));
    } else {
      console.log(chalk.red(`Directory ${path} already exists`));
    }
  }
  public listDirectory(path:string):void {
    if (fs.existsSync(path)) {
      console.log(chalk.green(`Directory ${path} exists. It contains: `));
      const files = fs.readdirSync(path);
      if (files.length > 0) {
        for (const file of files) {
          console.log(chalk.green(`${file}`));
        }
      } else {
        console.log(chalk.red(`${path} is empty`));
      }
    } else {
      console.log(chalk.red(`Directory ${path} does not exist`));
    }
  }
  public showContentFile(path:string):void {
    if (fs.existsSync(path)) {
      console.log(chalk.green(`File ${path} exists. It contains: `));
      const content = fs.readFileSync(path, 'utf8');
      console.log(chalk.green(`${content}`));
    } else {
      console.log(chalk.red(`File ${path} does not exist`));
    }
  }
  public deleteFileAndDirectory(path:string) {
    access(path, constants.F_OK, (err) => {
      if (err) {
        console.log(chalk.red(`${path} does not exist`));
      } else {
        if (this.checkIfDirectory(path) == true) {
          fs.rm(path, {recursive: true}, (err) => {
            if (err) {
              throw err;
            } else {
              console.log(chalk.green(`Directory ${path} has been deleted`));
            }
          });
        } else if (!this.checkIfDirectory(path)) {
          fs.rmSync(path);
          console.log(chalk.green(`File ${path} has been deleted`));
        }
      }
    });
  }
  public moveAndCopy(path:string, newPath:string) {
    if (fs.existsSync(path)) {
      const mv = spawn('mv', [path, newPath]);
      mv.stderr.on('data', (data) => {
        console.log(chalk.red(`${data}`));
      });
      mv.on('close', (code) => {
        console.log(chalk.green(`${path} has been moved to ${newPath}`));
      });
    } else {
      console.log(chalk.red(`${path} does not exist`));
    }
  }
}