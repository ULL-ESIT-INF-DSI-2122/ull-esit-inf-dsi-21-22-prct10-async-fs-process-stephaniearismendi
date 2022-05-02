import * as net from 'net';

/**
 * @param {string} comando
 * @param {string} filename
 * @description Cliente que ejecuta un comando sobre un fichero y devuelve el resultado.
 * @use node client.js <comando> <filename>
 */
if (process.argv.length < 4) {
  console.log('Must provide file and command');
} else {
  const cliente = net.connect({port: 6060});

  const peticion = {
    comando: process.argv[2],
    filename: process.argv[3],
  };
  console.log(`Connection start`);

  cliente.write(JSON.stringify(peticion), () => {
    cliente.end();
  });

  let data = '';
  cliente.on('data', (dataChunk) => {
    data += dataChunk;
  });

  cliente.on('end', () => {
    console.log(`Connection finish`);
    console.log(data);
  });

  cliente.on('error', (err) => {
    console.log(`Connection error: ${err}`);
  });
}