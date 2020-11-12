function condition1(reponse) {
  pioupiou = reponse.split([[,]])
  if (pioupiou[pioupiou.length-1] === "?") {
    return true
  }
}
function condition2(reponse) {
  roar = reponse.toUpperCase()
  if (reponse === roar && reponse && reponse !== " ") {
    return true
  }
}
function condition3(reponse) {
  if (reponse.includes("Fornite") || reponse.includes("fornite")) {
    return true
  }  
}
function condition4(reponse) {
  if (!reponse || reponse == " ") {
    return true
  } 
}




let answer = prompt("Salut ! Qu'est ce que tu veux ?")
if (condition1(answer)) {
  console.log("Ouais ouais...");
} else { if (condition2(answer)) {
  console.log("Pwa, calme toi...");
} else { if (condition3(answer)) {
  console.log("...on s' fait une partie soum-soum ?");
} else { if (condition4(answer)) {
  console.log("T'es en pls ?");
} else { 
  console.log("Balek");
}
  
}
  
}
  
}