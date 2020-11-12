const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 12 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 4 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Tous les livres ont été déjà loué une fois ?");
let bookcount = 0 ;
books.forEach((book) => {
  if (book.rented === 0) {
    bookcount += 1
  }
});
if (bookcount > 0) {
  console.log("Malheureusement, non.");
} else {
  console.log("Oui, ils ont tous été loués au moins une fois.");
}

console.log("Quel est livre le plus emprunté ?");
books.sort(function (a , b) {
  return b.rented - a.rented
});
console.log(books[0]);

console.log("Quel est livre le moins emprunté ?");
books.sort(function (a , b) {
  return a.rented - b.rented
});
console.log(books[0]);

console.log("Quel est le livre avec l'ID 873495 ?");
books.find(book => {
  if (book.id == 873495) {
    console.log(book)
  }
});

console.log("Supprime l'élément d'id 133712 de la liste !");
for( var i = 0; i < books.length; i++){ 
  if ( books[i].id === 133712) { 
    books.splice(i, 1);
}};
console.log(books);

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
books.sort(function (a , b) {
  return a.title.localeCompare(b.title)
});
console.log(books);