
const userName = prompt('Inserisci il tuo Nome');
console.log(userName);

const userSurname= prompt('Inserisci il tuo Cognome');
console.log(userSurname);

const userColor= prompt('Inserisci il tuo colore preferito');
console.log(userColor);

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

let passwordRandom = `${userName}${userSurname}${userColor}${randomNumber}`;
console.log(passwordRandom);

document.getElementById('pwrandom').innerHTML = `${passwordRandom}`