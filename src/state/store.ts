import { configureStore } from "@reduxjs/toolkit/react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { tempUnitSlice } from "./temp-unit.slice";
import { weatherApiSlice } from "./weather-api.slice";

export const store = configureStore({
  reducer: {
    tempUnit: tempUnitSlice.reducer,
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
