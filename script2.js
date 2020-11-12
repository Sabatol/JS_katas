
function factorielle(number){
  var i, number, f = 1;
  for(i = 1; i <= number; i++)  
  {
    f = f * i;   // ou f *= i;
  }  
  return f;
}

answer = prompt("De quel nombre veux-tu calculer la factorielle ?")
while (true) {if (!answer) {
  answer = prompt("De quel nombre veux-tu calculer la factorielle ?")
} else {
  console.log(`La factorielle de ${answer} c'est ${factorielle(answer)}.`);
  break
}
  
}
