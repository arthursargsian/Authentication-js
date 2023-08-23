import React, {useCallback, useEffect, useState} from "react";
import SocialContainer from "./SocialContainer";
import {useDispatch, useSelector} from "react-redux";
import {signIn, userContent} from "../redux/actions/client";
import {useNavigate} from "react-router-dom";
import Utils from "../Utils";
import {toast} from "react-toastify";

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signInList, setSignInList] = useState({username: "", password: ""});

    const clientMessage = useSelector((store) => store.client.clientMessage);
    const clientStatus = useSelector((store) => store.client.clientStatus);

    useEffect(() => {
        if (clientStatus === "rejected") {
            toast.error(clientMessage, {
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
    }, [clientStatus, clientMessage]);

    const handleInputInfo = useCallback((key, value) => {
        setSignInList((prevSignUpList) => ({
            ...prevSignUpList,
            [key]: value,
        }));
    }, [signInList]);

    const handleSignIn = useCallback(async (ev) => {
        ev.preventDefault();
        if (signInList.username && signInList.password) await dispatch(signIn(signInList));
        setSignInList({username: "", password: ""});
        if (Utils.getToken()) navigate("/user");
    }, [signInList]);

    return (
        <>
            <div className="form-container sign-in-container">
                <form onSubmit={(ev) => handleSignIn(ev)}>
                    <h1>Sign in</h1>
                    <SocialContainer/>
                    <span>or use your account</span>
                    <input onChange={(ev) => handleInputInfo("username", ev.target.value)} value={signInList.username}
                           type="text"
                           placeholder="User Name"/>
                    <input onChange={(ev) => handleInputInfo("password", ev.target.value)} value={signInList.password}
                           type="password"
                           placeholder="Password"/>
                    <br/>
                    <button>Sign In</button>
                </form>
            </div>
        </>
    );
}

export default SignIn;
