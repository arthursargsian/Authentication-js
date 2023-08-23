import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";
import {createAction} from "@reduxjs/toolkit";

export const signUp = createAsyncThunk("client/signUp", async (payload, {rejectWithValue}) => {
    try {
        const {data} = await Api.signUp(payload);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const signIn = createAsyncThunk("client/signIn", async (payload, {rejectWithValue}) => {
    try {
        const {data} = await Api.signIn(payload);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const userContent = createAsyncThunk("client/userContent", async (payload) => {
    const {data} = await Api.userContent();
    return data;
});

export const logOutUser = createAction("client/logOutUser");
