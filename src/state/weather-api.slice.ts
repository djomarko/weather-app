import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherResponse } from "./data.models";

export const weatherApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
  }),
  tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<WeatherResponse, string>({
      query(city: string) {
        return `${city}/today/tomorrow?key=${
          import.meta.env.VITE_API_KEY
        }&unitGroup=metric&include=hours&elements=temp,icon,datetime,conditions,description`;
      },
      providesTags: (_result, _error, city) => [{ type: "Weather", city }],
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApiSlice;
