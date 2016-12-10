import $ from 'jquery';
import Rx from 'rxjs/Rx';
const numbers = [33, 44, 55, 66, 77];
const numbers$ = Rx.Observable.from(numbers);
numbers$.subscribe(
    v => {
        console.info(v);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('Completed');
    }
);
const posts = [{
        title: 'Post One',
        body: 'This is the body of Post One'
    }, {
        title: 'Post Two',
        body: 'This is the body of Post Two'
    }, {
        title: 'Post Three',
        body: 'This is the body of Post Three'
    }

];
const posts$ = Rx.Observable.from(posts).subscribe(v => {
    console.log(v);
    $('#posts').append(`<li><h3>${v.title}</h3><p>${v.body}</p>`);
});

const set = new Set(['Hello', 44, {
    title: 'My title'
}]);
const set$ = Rx.Observable.from(set).subscribe(
    v => {
        console.log(v);
    }
);
