import {configureStore} from "@reduxjs/toolkit";
import globalData from './reducers/globalData'
import getUsers from './reducers/usersReduser'
import profileReducer from './reducers/profileReduser'
import dialogsReducer from './reducers/dialogsReduser'
import settingsReducer from './reducers/settingsReduser'


export const store = configureStore({
    reducer: {
        globalData,
        getUsers,
        profileReducer,
        dialogsReducer,
        settingsReducer
    },
})