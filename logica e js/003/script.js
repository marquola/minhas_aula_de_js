let Name = prompt("Coloque seu nome");
let Nota1 = prompt("Fale sua primeira nota");
let Nota2 = prompt("Fale sua segunda nota");
let Nota3 = prompt("Fale sua terceira nota");

let average = (Number(Nota1) + Number(Nota2) + Number(Nota3)) / 3;



let result = average > 6;

average = average.toFixed(2)


if (result) {
  alert(
    "Parabéns sua media foi " + average + " seu filho da puta kkkk"
  );
} else {
  alert ("Olha essa média " + average + "  Se mata kkkk ");
}
2