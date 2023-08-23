import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Utils from "../Utils";

function OnPrivateRoute(props) {
    const navigate = useNavigate();
    const {children} = props;
    const token = Utils.getToken();

    useEffect(() => {
        if (token) {
            navigate("/user");
        }
    }, [token, navigate]);

    return !token ? children : null;
}

export default OnPrivateRoute;
