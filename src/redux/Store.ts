import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from './slices/User.slice'
import { PopupMenuControllerReducer } from "./slices/PopupMenuController.slice";

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { combineReducers } from "@reduxjs/toolkit";

// const rootReducers = combineReducers({
//     UserReducer
// })

// const persistedReducer = persistReducer({ key: 'user', storage }, rootReducers);

const Store = configureStore({
    reducer: {
        // persistedReducer,
        UserReducer,
        PopupMenuControllerReducer
    }
})

export default Store;

export type IStoreState = ReturnType<typeof Store.getState>