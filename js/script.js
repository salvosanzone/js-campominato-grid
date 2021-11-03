/**
 *L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */

//aggancio il pulsante play tramite l'id poi al click farà partire la funzione 'game'
document.getElementById('play').addEventListener('click',function(){
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

  console.log('numero celle:',cellNumbers);
  console.log('numero celle per riga',cellsPerRow);
  //prima attivare la funzione generatePlayGround do una stringa vuota cosi resetta il main
  document.querySelector('main').innerHTML = '';
  generatePlayGround();

//adesso devo creare il mio container(il playground 500*500)

function generatePlayGround(){
  const container = document.createElement('div');
  container.className = 'container'; //prendo la classe .container nel css
  //celle
  for (let i = 1; i <= cellNumbers; i++){
    //creo ogni singolo square
    const square = document.createElement('div');
    square.className = 'square'; //prendo la classe .square nel css
    square.innerHTML = `<span>${i}</span>`; //inserisco i numeri
    //modifico la dimensione degli square in base al numero di celle per riga(cellsPerRow)
    const cellSize = `calc(100% / ${cellsPerRow})`;
    square.style.width = cellSize;
    square.style.height = cellSize;
    console.log(cellSize);



   //appendo al container gli square
   container.append(square);



  }
  //appendo al main il container
  document.querySelector('main').append(container);

}


}

 