import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"dashboard",
    initialState:{
        openSideBar :true,
        

    },
    reducers:{
        toggleSideBar:(state,action)=>{
            state.openSideBar = ! state.openSideBar
        },

        closeSideBar :(state,action)=>{
            state.openSideBar = false
        }
    }
})

export const {toggleSideBar,closeSideBar} = slice.actions
export default slice.reducer;