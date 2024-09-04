// oppgave 1
/* function navn() {
  let fornavn = prompt("Skriv ditt fornavn")
  let etternavn = prompt("Skriv ditt etternanvn")
  fornavn = fornavn.substring(0,1).toUpperCase() + fornavn.substring(1).toLowerCase();

  etternavn = etternavn.substring(0,1).toUpperCase() + etternavn.substring(1).toLowerCase();
  return (`${fornavn} ${etternavn}`)
}

document.write(navn()); */

//oppgave 2
/* function stringLength() {
  let ord = prompt("Skriv inn en setning")
  const array = ord.trim().split(/\s+/);
  return array.length;
}

document.write("Word count:" + stringLength()); */

//oppgave 3
/* function erstatt() {
  let ord = prompt("Skriv inn en setning")
  ord = ord.replace(/a/g, "@");
  return ord;

}

document.write(erstatt()); */

//oppgave 4
function lengsteOrd() {
  let ord = prompt("Skriv inn en setning")
  ord = ord.split(' ')
  let lengste = ord.sort((a, b) => b.length - a.length)[0];

  return lengste.length;
}

document.write("Antall bokstaver i det lengste ordet:" + lengsteOrd());