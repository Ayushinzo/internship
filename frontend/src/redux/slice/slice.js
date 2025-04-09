import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    login: false,
    username: "",
    email: ""
}

const slice = createSlice({
    name: "login",
    initialState,
    reducers: {
        isLogin: (state, action) => {
            state.login = action.payload
        },

        setUser: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
        }
    }
})

export { slice };
export const { isLogin, setUser } = slice.actions;
export default slice.reducer;