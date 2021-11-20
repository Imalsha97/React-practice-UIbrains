import React, {useState} from 'react';

let Counter = () => {
    let [ state, setState ] = useState(
        {
            count : 0
        }
    );
    let incrementCounter = () => {
        // alert('increment counter');
        //setState is function whice replace new data
        //state->current state
        setState((state)=> ({
            count : state.count + 1
        }));
    }
    let decrementCounter = () => {
        // alert('decrement counter');
        setState((state) => ({
            count : state.count -1
        }));
    }
    return (
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <p className="h4">Counter</p>
                        </div>
                        <div className="card-body">
                            <h5 className>{state.count}</h5>
                            <button onClick={incrementCounter} className="btn btn-success btn-sm">Increment</button>
                            <button onClick={decrementCounter} className="btn btn-warning btn-sm">Decrement</button>
                        </div>
                
                    </div>
                </div>
                
            </div>
        </div>

        </>
    )

};

export default Counter;
