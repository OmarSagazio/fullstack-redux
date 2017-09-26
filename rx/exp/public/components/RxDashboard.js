import React from 'react';
import Rx from 'rxjs/Rx';


const squarePair = arr => (
    Rx.Observable.of(...arr)
    .filter(num => (num % 2) === 0)
    .map(num => num * num)
    .subscribe(val => console.log(val))
);

class RxDashboard extends React.Component {


    render() {


        console.log("\nRX\n");
        squarePair([1,2,3,4,5,6,7,8,9,10]);

        return (
            <h1>It Works!</h1>
        );
    }
}

export default RxDashboard;
