<<<<<<< HEAD
console.log('Iniciando 🚀🚀🚀') 
import { join, dirname } from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { setupMaster, fork } from "cluster";
import { watchFile, unwatchFile } from "fs";
import cfonts from "cfonts";
import chalk from "chalk";
import { createInterface } from "readline";
import yargs from "yargs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const { name, author } = require(join(__dirname, "./package.json"));
const { say } = cfonts;
const rl = createInterface(process.stdin, process.stdout);

say('venom & sokuna\nBot\nMD', {
font: 'chrome',
align: 'center',
gradient: ['red', 'magenta']})
say(`by KARZMA & SHEKO`, {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']});

var isRunning = false;
=======
console.log('✅ㅤIniciando...');
import {join, dirname} from 'path';
import {createRequire} from 'module';
import {fileURLToPath} from 'url';
import {setupMaster, fork} from 'cluster';
import {watchFile, unwatchFile} from 'fs';
import cfonts from 'cfonts';
import {createInterface} from 'readline';
import yargs from 'yargs';
const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const {name, author} = require(join(__dirname, './package.json'));
const {say} = cfonts;
const rl = createInterface(process.stdin, process.stdout);

say('Mystic - Bot\nWhatsApp Bot MD', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']});
say(`Bot creado por Bruno Sobrino`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']});

let isRunning = false;
>>>>>>> 821b4d2 (🧿 𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝 🔮)
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
<<<<<<< HEAD
if (isRunning) return
isRunning = true;
let args = [join(__dirname, file), ...process.argv.slice(2)]

setupMaster({
exec: args[0],
args: args.slice(1),
})
let p = fork()
p.on('message', data => {
console.log('╭--------- - - - ✓\n┆ ✅ TIEMPO DE ACTIVIDAD ACTUALIZADA\n╰-------------------- - - -', data)
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break
}})
p.on('exit', (_, code) => {
isRunning = false
console.error('⚠️ Error Inesperado ⚠️', code)
if (code === 0) return
watchFile(args[0], () => {
unwatchFile(args[0])
start(file)
})
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())
})
//console.log(p)
}
start('main.js')
=======
  if (isRunning) return;
  isRunning = true;
  const args = [join(__dirname, file), ...process.argv.slice(2)];

  say('Ajuste la pantalla para escanear el codigo QR', {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']});

  setupMaster({
    exec: args[0],
    args: args.slice(1)});
  const p = fork();
  p.on('message', (data) => {
    console.log('[RECEIVED]', data);
    switch (data) {
      case 'reset':
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });
  p.on('exit', (_, code) => {
    isRunning = false;
    console.error('❎ㅤOcurrio un error inesperado:', code);

    p.process.kill();
    isRunning = false;
    start.apply(this, arguments);

    if (process.env.pm_id) {
      process.exit(1);
    } else {
      process.exit();
    }
  });
  const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
  if (!opts['test']) {
    if (!rl.listenerCount()) {
      rl.on('line', (line) => {
        p.emit('message', line.trim());
      });
    }
  }
}
start('main.js');
>>>>>>> 821b4d2 (🧿 𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝 🔮)
