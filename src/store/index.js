// http://211.62.106.225/app_api/auth/login
//{
//     "username": "student01",
//     "password": "student01"
//   } 
//

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './user'
import logger from "redux-logger";
export const store = configureStore({
    reducer:{
        userSlice
    },
    middleware: getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production"
})