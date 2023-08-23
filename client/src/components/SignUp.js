import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../redux/actions/client";
import {ToastContainer, toast} from 'react-toastify';
import SocialContainer from "./SocialContainer";

function SignUp() {
    const dispatch = useDispatch();

    const [signUpList, setSignUpList] = useState({username: "", email: "", password: ""});

    const clientSignUpMessage = useSelector((store) => store.client.clientSignUpMessage);
    const clientSignUpStatus = useSelector((store) => store.client.clientSignUpStatus);

    useEffect(() => {
        if (clientSignUpStatus === "fulfilled") {
            toast.success(clientSignUpMessage, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        if (clientSignUpStatus === "rejected") {
            toast.error(clientSignUpMessage, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [clientSignUpStatus, clientSignUpMessage]);

    const handleSignUp = useCallback((ev) => {
        ev.preventDefault();
        if (signUpList.username && signUpList.email && signUpList.password) dispatch(signUp(signUpList));
        setSignUpList({username: "", email: "", password: ""});
    }, [signUpList, clientSignUpStatus, clientSignUpMessage]);

    const handleInputInfo = useCallback((key, value) => {
        setSignUpList((prevSignUpList) => ({
            ...prevSignUpList,
            [key]: value,
        }));
    }, [signUpList]);

    return (
        <> <ToastContainer/>
            <div className="form-container sign-up-container">
                <form onSubmit={(ev) => handleSignUp(ev)}>
                    <h1>Create Account</h1>
                    <SocialContainer/>
                    <span>or use your email for registration</span>
                    <input onChange={(ev) => handleInputInfo("username", ev.target.value)} value={signUpList.username}
                           type="text"
                           placeholder="User Name"/>
                    <input onChange={(ev) => handleInputInfo("email", ev.target.value)} value={signUpList.email}
                           type="email"
                           placeholder="Email"/>
                    <input onChange={(ev) => handleInputInfo("password", ev.target.value)} value={signUpList.password}
                           type="password"
                           placeholder="Password"/>
                    <button>Sign Up</button>
                </form>
            </div>
        </>
    );
}

export default SignUp;
