import $ from 'jquery';
import Rx from 'rxjs/Rx';
/*Map for Math*/
const source$ =
    Rx.Observable.interval(1000)
    .take(10)
    .map(v => v * 2)
    .subscribe(v => console.log(v));
/*Map for Arrays*/
const sourceArray$ =
    Rx.Observable.from(['Jão', 'Maria', 'Elijah'])
    .map(v => v.toUpperCase())
    .map(v => 'Eu sou  '+v)
    .subscribe(v => console.log(v));
