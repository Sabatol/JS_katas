answer = prompt("C'est quoi ton ptit nom ?");
while (true) { if (!answer) {
  answer = prompt("C'est quoi ton ptit nom ?");
} else {
  break
}
}
console.log(`Bonjour ${answer}`);
