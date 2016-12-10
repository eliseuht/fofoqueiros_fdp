import $ from 'jquery';
import Rx from 'rxjs/Rx';

//*********************************************************//
//***** Exemplo 1 ****************************************//
const $btn = $('#btn'); // só para economizar algumas linhas
//Fofoqueiro escutando o Evento 'click'
const btnStream$ = Rx.Observable.fromEvent($btn,'click');
/* fofoca sendo gerada e recebendo como parametros ( se a fofoca deu certo , se deu errado ,se fofoca terminou) */
btnStream$.subscribe(
  fofoca=>{console.info('A criatura clicou no botão');},
  zicou=>{console.error(zicou);},
  ()=>console.log('Fim')
);

//********************************************************//
//******Exemplo 2 ****************************************//
const $output = $('#output');
const $input = $('#input');
const inputStream$ = Rx.Observable.fromEvent($input,'keyup');
inputStream$.subscribe(
  evento => {
    console.log(evento.currentTarget.value);
    $output.html(evento.currentTarget.value);
  }
);
//*********************************************************//
//******Exemplo 3 *****************************************//
const $mouse = $('#mouse');
const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');
moveStream$.subscribe(
  evento => $mouse.html('<b>X:</b> '+evento.clientX+'<b>Y:</b>'+evento.clientY)
);
