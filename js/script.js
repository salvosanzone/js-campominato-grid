/**
 *L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */

//aggancio il pulsante play tramite l'id poi al click farà partire la funzione 'game'
document.getElementById('play').addEventListener('click',function(){
  console.log('ho cliccato:',play);
  //inserisco la funzione
  game();
})


//questa è la funzione collegata al pulsante
function game(){

  //aggancio la select con l' id,la inizializzo e poi aggiungo alla fine value in modo tale da mostrarmeli
  const levelOfDifficulty = parseInt(document.getElementById('level').value);
  //ricaviamo il numero di celle in base al livello 
  let cellNumbers;
  let cellsPerRow;
  switch (levelOfDifficulty) {
    case 1:
      cellNumbers = 100; //numero di celle
      cellsPerRow = 10; //numero di celle per riga
      break;
    case 2:
      cellNumbers = 81;
      cellsPerRow = 9;
      break;
    case 3:
      cellNumbers = 49;
      cellsPerRow = 7;
      break;
  }
  const BOMBS_NUMBER = 16;
  const bombs = generateBombs();
  console.log('square dove si trovano le bombe',bombs);
  console.log('numero celle:',cellNumbers);
  console.log('numero celle per riga',cellsPerRow);
  //prima di attivare la funzione generatePlayGround do una stringa vuota cosi resetta il main
  document.querySelector('main').innerHTML = '';
  generatePlayGround(); //funzione dentro un'altra funzione

//adesso devo creare il mio container(il playground 500*500px)

function generatePlayGround(){
  const container = document.createElement('div');
  container.className = 'container'; //prendo la classe .container nel css
  //ciclo for
  for (let i = 1; i <= cellNumbers; i++){
    //creo ogni singolo square
    const square = document.createElement('div');
    square.className = 'square'; //prendo la classe .square dal css
    square.innerHTML = `<span>${i}</span>`; //inserisco i numeri
    //modifico la dimensione degli square in base al numero di celle per riga(cellsPerRow)
    const cellSize = `calc(100% / ${cellsPerRow})`;
    square.style.width = cellSize;
    square.style.height = cellSize;
    console.log(cellSize);
    //aggancio con un click la cella (square)
    square.addEventListener('click',function(event){
      console.log('square cliccato:',event.target.innerText);
      this.classList.add('blu');//aggiungo la classe blu
      console.log('ho cliccato lo square:', square);
    })
    //appendo al container gli square
    container.append(square);
  }
    //appendo al main il container
    document.querySelector('main').append(container);

}
  //creo la function che genera le bombe
  function generateBombs(){
    const bombs = [];
    //creazione di tutte le bombe
    while(bombs.length < BOMBS_NUMBER){
      const bomb = getRandomInt(1, cellNumbers);
      if(!bombs.includes(bomb)){
        //inserisco all'array bombs --> bomb
        bombs.push(bomb);
      }
    }
    
    //restituisco l'array riempito
    return bombs;
    }
  }


//funzione utilities quindi la faccio fuori
function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)+ min);
}



 /**
  1. disegnare su html la grafica 

  2. selezioniamo il livello
  aa leggiamo il valore della select
  bb let valueSelected = dddd.value;

  3. facciamo click su 'play' per far partire il gioco
  aa aggancio con  eventlistener il click del bottone play
  bb

  4. generiamo la griglia in base al livello selezionato
  aa inserisco le celle in funzione del livello di difficoltà dentro la griglia
  bb leggiamo il value della select e disegniamo di conseguenza il nomero di celle
  le creiamo con un ciclo for e facciamo l'append nel contenitore (ogni cella avrà delle regole css, quindi gli diamo una classe quando la creiamo)

  5. clicco in maniera casuale su una cella 
  aa aggancio con eventlistner il click della cella (al div che stiamo aggiungendo nel contenitore. vedi sopra)
  bb 

  // --------------- arriviamo al punto che abbiamo creato una griglia in base alla difficoltà e quando clicchiamo una casella ci faccia un alert dicendo (ciao, sono la casella cliccata. col numero della casella.)

  // ------------------

  6. se la cella è una bomba ho perso e "finisce il gioco"
  aa condizione (if???) tale per cui il gioco si arresta e la cella si cololerà di rosso. cioè verifico che il testo dentro la cella, convertito in intero, sia presente all'interno dell'array delle bombe. come? con la funzine includes dell'array. se è una bomba andiamo alla funzione endGame()
  bb

  7. se la cella non è una bomba continuo a giocare finchè ci sono celle da cliccare, altrimenti "finisce il gioco"
  aa se non si verifica la condizione(if???) la cella si colora di blu
  bb colorare una cella in blu : aggiungere una classe alla cella
  bb 

  8. "finisce il gioco" : verifichiamo se abbiamo vinto o perso
  aa non ci sono piu celle blu da cliccare
  bb il nostro endGame() : vediamo se abbiamo toccato una bomba.

  */