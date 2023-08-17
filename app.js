import readlineSync from 'readline-sync';

const repo = "https://github.com/konnylisethalucematorresCAMPUS/KonnyWebApi.git";
console.log(`Bienvenidos :3\n\nAquí aprenderemos todos los comandos dotnet del repositorio de referencia: ${repo}`);

const input = readlineSync.question(`Ingresa 1 para iniciar el programa...`);
if (input === '1') {
    console.log("Ingresando...");
} else {
    console.log("Nimodo");
}
