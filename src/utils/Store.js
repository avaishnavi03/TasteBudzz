import { configureStore } from "@reduxjs/toolkit";
// import logoSlice from "./logoSlice";
import titleReducer from "./titleSlice";


const store = configureStore({
    reducer:{
        // header:logoSlice,
        title:titleReducer,
    },
});
export default store;
