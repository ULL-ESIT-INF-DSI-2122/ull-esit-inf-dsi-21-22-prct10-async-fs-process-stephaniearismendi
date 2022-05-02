import * as net from 'net';
import {spawn} from 'child_process';

/**
 * @param description server that executes a command over a file
 */
const servidor = net.createServer({allowHalfOpen: true}, (connection) => {
  console.log('Client connected');
  let message = '';
  connection.on('data', (dataChunk) => {
    message += dataChunk;
  });


  connection.on('end', () => {
    console.log('Peticion recibida');

    const solicitud = JSON.parse(message);
    const comando = spawn(solicitud.comando, [solicitud.filename]);
    let output = '';
    comando.stdout.on('data', (dataChunk) => {
      output += dataChunk;
    });

    comando.on('close', (peticion) => {
      if (peticion == 0) {
        connection.write(`Output: \n${output}\n`, () => {
          connection.end();
        });
      } else {
        connection.write(`Something went wrong\n`, () => {
          connection.end();
        });
      }
    });
  });

  connection.on('error', (err) => {
    if (err) {
      console.log(`Connection error: ${err}`);
    }
  });

  connection.on('close', () => {
    console.log('Client disconnected');
  });
});

servidor.listen(6060, () => {
  console.log('Waiting for connections');
});