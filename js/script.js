/**
 *L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */


//richiamo e inizializzo la classe, ossia il container, dove poi andrò a costruire i quadratini(square)
const container =document.querySelector('.container');
console.log('ho richiamato:', container);


//costruisco gli square utilizzando un ciclo for (level:easy)
for(let i = 0; i < 100; i++){
  const sq = document.createElement('div');
  sq.className = ('square-easy-level');
  container.append(sq);
  console.log('elemento creato', sq);
}
//costruisco gli square utilizzando un ciclo for (level:hard)
// for(let i = 0; i < 81; i++){
//   const sq = document.createElement('div');
//   sq.className = ('square-hard-level');
//   container.append(sq);
//   console.log(sq);
// }
//costruisco gli square utilizzando un ciclo for (level:crazy)
// for(let i = 0; i < 49; i++){
//   const sq = document.createElement('div');
//   sq.className = ('square-crazy-level');
//   container.append(sq);
//   console.log(sq);
// }

