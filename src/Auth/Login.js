import { useRef, useState } from "react";
import {useNavigate} from "react-router-dom";

const Login = () =>{

    const [error_message,setError]=useState('');

    const nav=useNavigate();
    const email = useRef();
    const password = useRef();

    const handleForgot = () =>{
        console.log("forgot")
    }
   

    const handleSubmit = (event) => {
        event.preventDefault();
        const obj = {
            email: email.current.value,
            password: password.current.value,
        };
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_GYM_-GbIIIlVFVcDFdx_Aly77vePXeg",
                {
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                }
            )
            .then((res) => {
                if(res.ok){
                    res.json().then((data) => { 
                        localStorage.setItem("Token", data.idToken)
                        localStorage.setItem("Name", data.email)
                        if(data.localId==="ge2YlSn9dOOfHdwLnAKK2jQkQ7n2")
                            nav("/admin");
                        else
                        nav("/user");
                    })
                }
                else{
                    res.json().then((data)=>{
                        setError(data.error.message);
                    });
                     
                }  
            })
            .catch((er)=>console.log(er));
        
    }
    const handleSwitch = () =>{
        nav("/signup");
    }

    return(
        <>
        <div className="Signup">
        <form onSubmit={handleSubmit} className="form">
                        <h3>Login for Foodiii..</h3>
                        <div className="row">
                            <div className="col-25">
                                <label>Email id</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="Email id" ref={email} placeholder="Enter Email id.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Password</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="lname" name="Password" ref={password} placeholder="Password.." />
                            </div>
                            <div>
                                <p style={{color: "red", fontFamily: "Times New Roman", fontSize: 14}}>{error_message}</p>
                            </div>
                        </div>
                        <br />
                        <div>
                            <input type="submit" value="Login"/>
                        </div>
                        </form>
                        </div>
                        <div>
                        <h5>Forgot password? click <button className="button1" onClick={handleForgot}>here</button> to reset/Dont have an account? click <button className="button1" onClick={handleSwitch}>here</button>to Signup</h5>
                    </div>
                    </>
    );
}

export default Login;