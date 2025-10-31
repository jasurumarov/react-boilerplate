import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/index";
// import authSlice from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        // auth: authReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
