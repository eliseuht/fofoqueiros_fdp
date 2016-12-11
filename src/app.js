import $ from 'jquery';
import Rx from 'rxjs/Rx';

const myPromise = new Promise((resolve, reject) => {
    console.log('Criando uma promise');
    setTimeout(() => {
        resolve('Olá');
    }, 3000);
});
/**Resolvendo a promise **/
//myPromise.then((value) => {console.log(value)});
/*Usando um observable */
//const source$ = Rx.Observable.fromPromise(myPromise).subscribe(x => console.log(x));
function getUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/' + username,
        dataType: 'jsonp'
    }).promise();
}
const input$ = Rx.Observable.fromEvent($('#input'), 'keyup').subscribe(x => {

    Rx.Observable.fromPromise(getUser(x.target.value))
        .subscribe(x => {
          console.log(x.data);
          $('#name').html(x.data.name);
          $('#email').html(x.data.email);
        });

});
