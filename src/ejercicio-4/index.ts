import {Wrapper} from './wrapper';
import * as yargs from 'yargs';

yargs.command({
  command: 'type',
  describe: 'checks if a path is a file or a directory',
  builder: {
    path: {
      describe: 'path to check',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === 'string') {
      const wrapper = new Wrapper();
      wrapper.checkIfDirectory(argv.path);
    }
  },
});

yargs.command({
  command: 'create-directory',
  describe: 'creates a directory',
  builder: {
    path: {
      describe: 'directory path to create',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === 'string') {
      const wrapper = new Wrapper();
      wrapper.createDirectory(argv.path);
    }
  },
});

yargs.command({
  command: 'list',
  describe: 'lists the content of a directory',
  builder: {
    path: {
      describe: 'directory path to list',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === 'string') {
      const wrapper = new Wrapper();
      wrapper.listDirectory(argv.path);
    }
  },
});

yargs.command({
  command: 'show',
  describe: 'shows the content of a file',
  builder: {
    path: {
      describe: 'path of the file to show',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === 'string') {
      const wrapper = new Wrapper();
      wrapper.showContentFile(argv.path);
    }
  },
});

yargs.command({
  command: 'remove',
  describe: 'delete a file or a directory',
  builder: {
    path: {
      describe: 'path of the file or directory to delete',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === 'string') {
      const wrapper = new Wrapper();
      wrapper.deleteFileAndDirectory(argv.path);
    }
  },
});

yargs.command({
  command: 'move',
  describe: 'move a file or a directory to another',
  builder: {
    path: {
      describe: 'path of the file or directory to move',
      demandOption: true,
      type: 'string',
    },
    newPath: {
      describe: 'new path of the file or directory',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.path === 'string' && typeof argv.newPath === 'string') {
      const wrapper = new Wrapper();
      wrapper.moveAndCopy(argv.path, argv.newPath);
    }
  },
});

yargs.parse();
