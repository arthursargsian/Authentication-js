import React, {useCallback, useState} from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

function LogIn() {
    const [rightPanelActive, setRightPanelActive] = useState(false);
    return (
        <>
            <div className={`container ${rightPanelActive ? "right-panel-active" : ""}`} id="container">
                <SignUp/>
                <SignIn/>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={() => setRightPanelActive(false)} className="ghost" id="signIn">Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={() => setRightPanelActive(true)} className="ghost" id="signUp">Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default LogIn;
