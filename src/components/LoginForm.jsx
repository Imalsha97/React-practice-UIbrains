import React, {useState} from 'react';

let LoginForm = () => {

    let [state , setState] = useState({
        user : {
            username : '',
            password : ''
        }
    });

    let {user} = state;

    // let changeUserName = (event) => {
    //     setState((state) => ({
    //         user : {
    //             ...state.user,
    //             // username: event.target.value
    //             [event.target.name] : event.target.value
    //         }
    //     }));
    // };
    // let changePassword = (event) => {
    //     setState((state) => ({
    //         user : {
    //             ...state.user,
    //             // password: event.target.value
    //             [event.target.name] : event.target.value
    //         }
    //     }));
    // };

    //get all input
    let changeInput = (event) => {
        setState((state) => ({
            user : {
                ...state.user,
                // password: event.target.value
                [event.target.name] : event.target.value
            }
        }));
    };
    let submitLogin = (event) => {
        //avoid the form submit
        event.preventDefault();
        console.log(user);
    }
    return (
        <>
        <pre>{JSON.stringify(state)}</pre>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card ">
                        <div className="card-header bg-success text-white">
                            <p className="h4">Login Here</p>
                        </div>
                        <div className="card-body bg-light">
                            <form onSubmit={submitLogin}>
                                <div className="mb-3">
                                    <input 
                                    name="username"
                                    value={user.username}
                                    onChange={changeInput}
                                    className ="form-control"
                                    type ="text"
                                    placeholder="Username"/>
                                </div>
                                <div className="mb-3">
                                    <input 
                                    name="password"
                                    value={user.password}
                                    onChange={changeInput}
                                    className ="form-control"
                                    type ="password"
                                    placeholder="Password"/>
                                </div>
                                <div className="mb-3">
                                    <input 
                                    className ="btn btn-success btn-sm"
                                    type ="submit"
                                    value="Login"/>
                                </div>
                               
                            </form>
                        </div>
                
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )

};

export default LoginForm;
