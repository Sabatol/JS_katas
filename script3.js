answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function pyramid(stage) {
  const space = " "
  const brick = "#"
  answer = stage*2

  for (let i = 1; i <= answer; i++ && answer--) {
    console.log(`${space.repeat(answer) + brick.repeat(i)} ${stage--}`)
  }
}

pyramid(answer)