/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Immaginiamo che i data type in JavaScript siano come delle scatole dove possono essere inserite diverse cose, ogni specifica scatola può contenere solo certi tipi di cose.
I principali tipi di datatype sono:

-NUMBER: è una "scatola" dove inseriamo dei numeri che utilizziamo per fare dei calcoli, con questi numeri quindi possiamo fare delle addizioni, sottrazioni, moltiplicazioni e divisioni.
I numeri che andiamo ad inserire possono essere numeri interi o decimali.

STRING: è una "scatola" dove possiamo inserire qualisiasi cosa che sia fatta di testo come parole o frasi e serve a rappresentare il testo che noi mettiamo all'interno.

BOOLEAN: è una scatola che può contenere solo i valori vero o falso e serve per dire se qualcosa è vero o falso.

*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


let myName = "Lorenzo"
console.log(myName)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let addizzione = 12 + 20;
console.log(addizzione)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* const myName = "Lorenzo";
myName = "Cara";
console.log(myName) */



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione = 4 - x ;
console.log(sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "Jhon"

console.log (name1 !== name2);
console.log ( name1.toLowerCase() === name2.toLowerCase() )
