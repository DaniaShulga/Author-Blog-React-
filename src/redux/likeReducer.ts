import { createSlice } from "@reduxjs/toolkit";

type Like = {
    [id:number]: boolean,
}

const initialState: Like = {
    1: false,
    2: false,
}


export const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        toggleLike: (state,action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
        addArticletoFav: (state,action) => ({
            ...state,
            [action.payload.id]: state[action.payload.id]
        })
    },
})

export const {toggleLike} = likeSlice.actions

export default likeSlice.reducer