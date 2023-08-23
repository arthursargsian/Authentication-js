import {createReducer} from "@reduxjs/toolkit";
import {logOutUser, signIn, signUp, userContent} from "../actions/client";

const initialState = {
    clientSignUpStatus: "",
    clientSignUpMessage: "",
    clientStatus: "",
    clientMessage: "",
    client: [],
    token: "",
    content: "",
    contentStatus: false,
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(signUp.pending, (state, action) => {
            state.clientSignUpStatus = "pending";
        })
        .addCase(signUp.fulfilled, (state, action) => {
            state.clientSignUpMessage = action.payload.message;
            state.clientSignUpStatus = "fulfilled";
        })
        .addCase(signUp.rejected, (state, action) => {
            state.clientSignUpMessage = action.payload.response.data.message;
            state.clientSignUpStatus = "rejected";
        })
        .addCase(signIn.pending, (state, action) => {
            state.clientStatus = "pending";
        })
        .addCase(signIn.fulfilled, (state, action) => {
            state.client = action.payload;
            state.clientStatus = "fulfilled";
            localStorage.setItem("client", JSON.stringify(action.payload));
            localStorage.setItem("token", action.payload.token);
        })
        .addCase(signIn.rejected, (state, action) => {
            state.clientMessage = action.payload.response.data.message;
            state.clientStatus = "rejected";
        })
        .addCase(userContent.pending, (state, action) => {
            state.contentStatus = false;
        })
        .addCase(userContent.fulfilled, (state, action) => {
            state.content = action.payload;
            state.contentStatus = true;
        })
        .addCase(userContent.rejected, (state, action) => {
            state.contentStatus = false;
        })
        .addCase(logOutUser, (state, action) => {
            localStorage.removeItem("token");
            localStorage.removeItem("client");
        });
});

