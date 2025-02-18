import { useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";


const Auth = () => {
const nav= useNavigate();

    const code = useRef();

    const handleaction = () => {
        nav("/signup");
    };
    
    return (
        <div className="container">
            <img src="https://static.vecteezy.com/system/resources/previews/036/804/331/non_2x/ai-generated-assorted-indian-food-on-dark-wooden-background-free-photo.jpg" alt=" "/>
            <div className="child1">
                <button onClick={handleaction}>User ? Click here</button>
            </div>
            <div className="child">    
                </div>
                    <div className="child">
                        <form>
                            <br></br>
                        </form>
                    </div>
        </div>
    );


}

export default Auth;