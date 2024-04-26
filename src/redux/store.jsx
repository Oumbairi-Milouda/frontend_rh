import { configureStore } from "@reduxjs/toolkit";
import InformationsReducer from "./slices/InformationsSlice";

const Store=configureStore({
    reducer: {
        InformationsReducer
    }
})

export default Store;