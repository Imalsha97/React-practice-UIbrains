
import React, {useState} from 'react';

let AthenticationUser = () => {

    let [ state , setState ] = useState({
        isLoggedIn : false

    });
    let Login = () => {
        setState((state) => ({
            isLoggedIn : true
        }));
    };
    let LogOut = () => {
        setState((state) => ({
            isLoggedIn : false
        }));
    };
    return (
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            {
                                state.isLoggedIn ? <p className="h3">Welcome Miss Imalsha</p> : 
                                                    <p className="h3">Welcome Guy!!</p> 
                            }
                            {
                                state.isLoggedIn ? <button onClick={LogOut} className="btn btn-warning btn-sm">LogOut</button> :
                                <button onClick={Login} className="btn btn-success btn-sm">Login</button>
                            }
                            
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

};

export default AthenticationUser;
