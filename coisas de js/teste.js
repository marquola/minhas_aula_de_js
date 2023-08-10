let techs = ["html", "css", "js"]

//add item no fim
techs.push ("nodejs")
// add no começo
techs.unshift ("react")
// //remover do fim
// techs.pop ()
// //remover do começo
// techs.shift ()



//pegar somente alguns elementos do array
// console.log (techs.slice (1, 3))

//remover 1 ou mais items em qlqr position do array
// techs.splice (1, 2)
//encontrar a posição de um elemento no array

let index = techs.indexOf ("nodejs")
techs.splice (index, 1)

console.log (techs)
