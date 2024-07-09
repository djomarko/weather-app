import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { WeatherResponse } from "./data.models";

const { VITE_API_KEY } = import.meta.env;

interface WeatherState {
  isImperial: boolean;
  city: string;
  cityData: WeatherResponse | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: WeatherState = {
  isImperial: false,
  city: "",
  cityData: null,
  loading: "idle",
};

const fetchCity = async (city: string) => {
  const response = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today/tomorrow?key=${VITE_API_KEY}&unitGroup=metric&include=hours&elements=temp,icon,datetime,conditions,description`
  );
  return response.data;
};

export const fetchCityData = createAsyncThunk(
  "cityData",
  async (city: string, { dispatch }) => {
    city = city?.trim();
    dispatch(setCity(city));

    if (!city) return;

    const cityData = await fetchCity(city);
    return cityData;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    toggleUnit(state) {
      state.isImperial = !state.isImperial;
    },
    setCity(state, action: PayloadAction<string>) {
      const city = action.payload;
      state.city = city;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchCityData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.cityData = action.payload;
      })
      .addCase(fetchCityData.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { toggleUnit, setCity } = weatherSlice.actions;
