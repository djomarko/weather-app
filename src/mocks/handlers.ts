import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Melbourne/*",
    () =>
      HttpResponse.json({
        queryCost: 1,
        latitude: -37.8174,
        longitude: 144.968,
        resolvedAddress: "Melbourne, VIC 3000, Australia",
        address: "Melbourne",
        timezone: "Australia/Melbourne",
        tzoffset: 11.0,
        days: [
          {
            datetime: "2024-01-08",
            temp: 18.7,
            conditions: "Rain, Overcast",
            description:
              "Cloudy skies throughout the day with a chance of rain throughout the day.",
            icon: "rain",
            hours: [
              {
                datetime: "00:00:00",
                temp: 20.0,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-night",
              },
              {
                datetime: "01:00:00",
                temp: 20.0,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "02:00:00",
                temp: 20.0,
                conditions: "Rain, Overcast",
                icon: "rain",
              },
              {
                datetime: "03:00:00",
                temp: 20.0,
                conditions: "Rain, Overcast",
                icon: "rain",
              },
              {
                datetime: "04:00:00",
                temp: 20.0,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "05:00:00",
                temp: 20.0,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "06:00:00",
                temp: 20.0,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-night",
              },
              {
                datetime: "07:00:00",
                temp: 20.0,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "08:00:00",
                temp: 20.0,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "09:00:00",
                temp: 20.0,
                conditions: "Rain, Overcast",
                icon: "rain",
              },
              {
                datetime: "10:00:00",
                temp: 19.8,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "11:00:00",
                temp: 19.0,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "12:00:00",
                temp: 18.8,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "13:00:00",
                temp: 18.0,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "14:00:00",
                temp: 18.0,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "15:00:00",
                temp: 17.2,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "16:00:00",
                temp: 17.2,
                conditions: "Rain, Partially cloudy",
                icon: "rain",
              },
              {
                datetime: "17:00:00",
                temp: 17.1,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-day",
              },
              {
                datetime: "18:00:00",
                temp: 17.3,
                conditions: "Rain, Overcast",
                icon: "rain",
              },
              {
                datetime: "19:00:00",
                temp: 17.7,
                conditions: "Rain, Overcast",
                icon: "rain",
              },
              {
                datetime: "20:00:00",
                temp: 17.8,
                conditions: "Rain, Overcast",
                icon: "rain",
              },
              {
                datetime: "21:00:00",
                temp: 17.5,
                conditions: "Rain, Overcast",
                icon: "rain",
              },
              {
                datetime: "22:00:00",
                temp: 17.2,
                conditions: "Rain, Overcast",
                icon: "rain",
              },
              {
                datetime: "23:00:00",
                temp: 17.1,
                conditions: "Rain, Overcast",
                icon: "rain",
              },
            ],
          },
          {
            datetime: "2024-01-09",
            temp: 19.8,
            conditions: "Partially cloudy",
            description: "Partly cloudy throughout the day.",
            icon: "partly-cloudy-day",
            hours: [
              {
                datetime: "00:00:00",
                temp: 16.8,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-night",
              },
              {
                datetime: "01:00:00",
                temp: 16.6,
                conditions: "Overcast",
                icon: "cloudy",
              },
              {
                datetime: "02:00:00",
                temp: 16.6,
                conditions: "Overcast",
                icon: "cloudy",
              },
              {
                datetime: "03:00:00",
                temp: 16.6,
                conditions: "Overcast",
                icon: "cloudy",
              },
              {
                datetime: "04:00:00",
                temp: 16.2,
                conditions: "Overcast",
                icon: "cloudy",
              },
              {
                datetime: "05:00:00",
                temp: 15.9,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-night",
              },
              {
                datetime: "06:00:00",
                temp: 15.5,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-night",
              },
              {
                datetime: "07:00:00",
                temp: 15.8,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-day",
              },
              {
                datetime: "08:00:00",
                temp: 16.9,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-day",
              },
              {
                datetime: "09:00:00",
                temp: 18.3,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-day",
              },
              {
                datetime: "10:00:00",
                temp: 19.8,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-day",
              },
              {
                datetime: "11:00:00",
                temp: 21.4,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-day",
              },
              {
                datetime: "12:00:00",
                temp: 23.0,
                conditions: "Partially cloudy",
                icon: "partly-cloudy-day",
              },
              {
                datetime: "13:00:00",
                temp: 24.3,
                conditions: "Clear",
                icon: "clear-day",
              },
              {
                datetime: "14:00:00",
                temp: 25.0,
                conditions: "Clear",
                icon: "clear-day",
              },
              {
                datetime: "15:00:00",
                temp: 24.8,
                conditions: "Clear",
                icon: "clear-day",
              },
              {
                datetime: "16:00:00",
                temp: 24.3,
                conditions: "Clear",
                icon: "clear-day",
              },
              {
                datetime: "17:00:00",
                temp: 23.5,
                conditions: "Clear",
                icon: "clear-day",
              },
              {
                datetime: "18:00:00",
                temp: 22.9,
                conditions: "Clear",
                icon: "clear-day",
              },
              {
                datetime: "19:00:00",
                temp: 22.6,
                conditions: "Clear",
                icon: "clear-day",
              },
              {
                datetime: "20:00:00",
                temp: 21.5,
                conditions: "Clear",
                icon: "clear-day",
              },
              {
                datetime: "21:00:00",
                temp: 19.7,
                conditions: "Clear",
                icon: "clear-night",
              },
              {
                datetime: "22:00:00",
                temp: 18.8,
                conditions: "Overcast",
                icon: "cloudy",
              },
              {
                datetime: "23:00:00",
                temp: 18.3,
                conditions: "Overcast",
                icon: "cloudy",
              },
            ],
          },
        ],
      })
  ),
  http.get(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Error/*",
    () =>
      new HttpResponse(null, {
        status: 404,
        statusText: "No data",
      })
  ),
];
