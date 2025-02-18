import { useRef, useState } from "react";
import {useNavigate} from "react-router-dom";

const Signup = () =>{
    const nav=useNavigate();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    const [error, setError] = useState(false);
    const [errmsg, seterrmsg] = useState("");

    const handleSingup = (event) => {
        event.preventDefault();
        if (password.current.value !== confirmPassword.current.value) {
            setError((error) => !error);
            seterrmsg("Password Mismatch!!");
        } else {
            setError(false);
            const obj = {
                email: email.current.value,
                password: password.current.value,
                confirmPassword: confirmPassword.current.value,
            };
            fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_GYM_-GbIIIlVFVcDFdx_Aly77vePXeg",
                {
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                }
            )
                .then((res) => {
                    if (res.ok) {
                        res.json().then((data) => {
                            console.log("User has successfully signed up with", data.email);
                            //handleaction();
                        });
                    } else {
                        throw new Error("Something went wrong");
                    }
                })
                .catch((res) => {
                    console.log(res);
                    setError(true);
                    seterrmsg("Something went wrong");
                });
        }
    };

    const handleSwitch = () =>{
        nav("/login");
    }

    return(
        <>
        <div className="Signup">
        <form onSubmit={handleSingup} className="form">
                        <h3>Signup for Foodiii..</h3>
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
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Confirm Password</label>
                            </div>
                            <div className="col-75"> <input type="text" name="Password" ref={confirmPassword} placeholder="Confirm Password.." /> </div>
                        </div>
                        <br />
                        <div>
                            <input type="submit" value="Signup"/>
                        </div>
                        </form>
                        </div>
                        <div>
                        <h5>Have an account? Click <button className="button1" onClick={handleSwitch}>here</button> to login</h5>
                    </div>
                    </>
    );
}

export default Signup;