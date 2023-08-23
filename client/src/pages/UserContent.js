import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logOutUser, userContent} from "../redux/actions/client";
import {useNavigate} from "react-router-dom";
import Utils from "../Utils";

function UserContent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const content = useSelector((store) => store.client.content);

    useEffect(() => {
        dispatch(userContent());
    }, [dispatch]);

    const handleLogOut = useCallback(async () => {
        await dispatch(logOutUser());
        if (!Utils.getToken()) navigate("/");
    }, [dispatch, navigate]);

    return (
        <>
            <p onClick={handleLogOut} className="log-out">Log Out</p>
            <h2>{content}</h2>
        </>
    );
}

export default UserContent;
