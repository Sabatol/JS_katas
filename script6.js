
chaine = prompt("Envoie ta chaîne d'ARN !")

function machineries(chocolat) {
  let array_of_3 = chocolat.match(/.{1,3}/g)
  let new_array = [] 
  array_of_3.forEach(codon => {
    switch (codon) { 
      case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC":
        new_array.push("serine")
        break; 
      case "CCU": case "CCC": case "CCA": case "CCG":
        new_array.push("proline")
        break;
      case "UUU": case "UUC":
        new_array.push("phenylalanine")
        break;
      case "UUG": case "UUA":
        new_array.push("leucine")
        break;
      case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG":
        new_array.push("arginine")
        break;
      case "UAU": case "UAC":
        new_array.push("tyrosine")
        break;
      default:
        new_array.push("AA inconnue")
        break;
    }
  });
  console.log(new_array.join("-"));
}

machineries(chaine)

// Prototype avec 'if'
// array_of_3.forEach(codon => {
//   if (codon = "UCU" || "UCC" || "UCA" || "UCG" || "AGU" || "AGC") {
//     codon = "serine"
//   } else { if (codon == "CCU" || "CCC" || "CCA" || "CCG") {
//     codon = "proline"
//   } else { if (codon == "UUU" || "UUC") {
//     codon = "phenylalanine"
//   } else { if (codon == "UUG" || "UUA") {
//     codon = "leucine"
//   } else { if (codon == "CGU" || "CGC" || "CGA" || "CGG" || "AGA" || "AGG") {
//     codon = "arginine"
//   } else { if (codon == "UAU" || "UAC") {
//     codon = "tyrosine"
//   } else {
//     codon = "AA inconnue"
//   }
    
//   }
    
//   }
    
//   }
    
//   }
    
//   } 
// });