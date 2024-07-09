import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "state/store";

export const selectWeatherDetails = createSelector(
  (state: RootState) => state.weather,
  (weather) => {
    const data = weather.cityData;
    if (!data) return;

    const currentTime = new Date().getHours();

    let currentDay = data.days[0];
    const listOfTimes = data.days.map((day) => day.hours).flat();
    const nextHour = listOfTimes.findIndex(
      (time) => parseInt(time.datetime.split(":")[0]) > currentTime
    );

    let next6Hours = listOfTimes.slice(nextHour, nextHour + 6);

    if (weather.isImperial) {
      const convertToImperial = (temp: number) =>
        Math.round((temp * 9 * 10) / 5) / 10 + 32;
      currentDay = { ...currentDay, temp: convertToImperial(currentDay.temp) };
      next6Hours = next6Hours.map((hour) => {
        const temp = convertToImperial(hour.temp);
        return {
          ...hour,
          temp,
        };
      });
    }

    return {
      ...weather,
      currentDay,
      next6Hours,
    };
  }
);
