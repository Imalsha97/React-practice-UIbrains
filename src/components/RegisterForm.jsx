import React, {useState} from 'react';

let RegisterForm = () => {
    let [state, setState] = useState({
        user : {
            username : '',
            email : '',
            password : '',
            designation : '',
            bio : '',
            terms: false
        }
    });
    let {user} = state;

    let changeInput = (event) => {
        setState((state) => ({
            user : {
                ...state.user,
                // password: event.target.value
                [event.target.name] : event.target.value
            }
        }));
    };
    let changeCheck = (event) => {
        setState((state) => ({
            user : {
                ...state.user,
                // password: event.target.value
                [event.target.name] : event.target.checked
            }
        }));
    };
    let submitRegister = (event) => {
        //avoid the form submit
        event.preventDefault();
        console.log(user);
    }
    return (
        <>
        {/* <pre>{JSON.stringify(state.user)}</pre> */}
         <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <p className="h4">Register Here</p>
                        </div>
                        <div className="card-body bg-light">
                           <form onSubmit={submitRegister}>
                               <div className="mb-3">
                                <input 
                                name="username"
                                value={user.username}
                                onChange={changeInput}
                                type="text" 
                                className="form-control" placeholder="Username"/>
                               </div>
                               <div className="mb-3">
                                <input 
                                name="email"
                                value={user.email}
                                onChange={changeInput}
                                type="email" className="form-control" placeholder="Email"/>
                               </div>
                               <div className="mb-3">

                                <input
                                name="password"
                                value={user.password}
                                onChange={changeInput}
                                 type="password" className="form-control" placeholder="password"/>
                               </div>
                               <div className="mb-3">
                                   <select
                                   name="designation"
                                   value={user.designation}
                                   onChange={changeInput}
                                    className="form-control">
                                       <option value="">Select Designation</option>
                                       <option value="Software Engineer">Software Engineer</option>
                                       <option value=" Sr.Software Engineer">Sr.Software Engineer</option>
                                       <option value="Tech Lead Software Engineer">Tech Lead Software Engineer</option>
                                   </select>
                               
                               </div>
                               <div className="mb-3">
                                   <textarea 
                                   name="bio"
                                   value={user.bio}
                                   onChange={changeInput}
                                   rows={4} className="form-control" placeholder="Bio" />
                               </div>
                               <div className="mb-3">
                                <input 
                                name="terms"
                                onChange={changeCheck}
                                type="checkbox" className="form-check-input" /> Accept Terms
                               </div>
                               <div className="mb-3">
                                <input type="submit" className="btn btn-primary btn-sm" value="Register"/>
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

export default RegisterForm;
