import $ from 'jquery';
import Rx from 'rxjs/Rx';
/* Interval , Timer , & Range*/
//const source$ = Rx.Observable.interval(1000).take(5).subscribe(x => {console.log(x); $('#result').html(x)});
//const source$ = Rx.Observable.timer(5000, 2000).take(15).subscribe(x => {console.log(x); $('#result').html(x)});
const source$ = Rx.Observable.range(0, 5).subscribe(x => {console.log(x); $('#result').append(x)});
