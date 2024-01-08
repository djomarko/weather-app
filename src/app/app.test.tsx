import { render, screen, within } from "@testing-library/react";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  test,
  vi,
} from "vitest";
import { server } from "../mocks/server";
import App from "./app";

describe("App", () => {
  test("should render input and toggle elements", () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const toggleElement = screen.getByRole("checkbox");

    expect(inputElement).toBeInTheDocument();
    expect(toggleElement).toBeInTheDocument();
  });

  describe('when the user enters a city name and clicks the "Get Weather" button', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    test("should display the current weather details", async () => {
      render(<App />);

      const inputElement: HTMLInputElement = screen.getByRole("textbox");
      const buttonElement = screen.getByRole("button");

      inputElement.value = "Melbourne";
      inputElement.blur();

      buttonElement.click();

      const weatherDetailsContainer = await screen.findByTestId(
        "weather-details-container"
      );

      expect(weatherDetailsContainer).toBeInTheDocument();
      expect(
        within(weatherDetailsContainer).getByText(
          "Melbourne, VIC 3000, Australia"
        )
      ).toBeInTheDocument();
      expect(
        within(weatherDetailsContainer).getByText("Rain, Overcast")
      ).toBeInTheDocument();
      expect(
        within(weatherDetailsContainer).getByText("18.7°C")
      ).toBeInTheDocument();
      expect(
        within(weatherDetailsContainer).getByAltText("Rain, Overcast")
      ).toHaveAttribute("src", "/2nd Set - Color/rain.svg");
    });

    test("should display the weather data in fahrenheit when checkbox is clicked", async () => {
      render(<App />);

      const inputElement: HTMLInputElement = screen.getByRole("textbox");
      const buttonElement = screen.getByRole("button");
      const toggleElement = screen.getByRole("checkbox");

      inputElement.value = "Melbourne";
      inputElement.blur();

      buttonElement.click();
      toggleElement.click();

      const weatherDetailsContainer = await screen.findByTestId(
        "weather-details-container"
      );
      expect(weatherDetailsContainer).toBeInTheDocument();
      expect(
        within(weatherDetailsContainer).getByText("65.7°F")
      ).toBeInTheDocument();
    });

    test("should display the current weather details", async () => {
      vi.useFakeTimers();

      // set timer to 19:00:00 Melbourne time
      const date = new Date("2021-09-01T09:00:00.000Z");
      vi.setSystemTime(date);

      render(<App />);

      const inputElement: HTMLInputElement = screen.getByRole("textbox");
      const buttonElement = screen.getByRole("button");

      inputElement.value = "Melbourne";
      inputElement.blur();

      buttonElement.click();

      const weatherForecatContainer = await screen.findByTestId(
        "weather-forecast-container"
      );

      expect(weatherForecatContainer).toBeInTheDocument();
      expect(
        within(weatherForecatContainer).getByText("20:00:00")
      ).toBeInTheDocument();
      expect(
        within(weatherForecatContainer).getByText("21:00:00")
      ).toBeInTheDocument();
      expect(
        within(weatherForecatContainer).getByText("22:00:00")
      ).toBeInTheDocument();
      expect(
        within(weatherForecatContainer).getByText("23:00:00")
      ).toBeInTheDocument();
      expect(
        within(weatherForecatContainer).getByText("00:00:00")
      ).toBeInTheDocument();
      expect(
        within(weatherForecatContainer).getByText("01:00:00")
      ).toBeInTheDocument();

      vi.useRealTimers();
    });

    test("should display an error message when the city name is invalid", async () => {
      render(<App />);

      const inputElement: HTMLInputElement = screen.getByRole("textbox");
      const buttonElement = screen.getByRole("button");

      inputElement.value = "Error";
      inputElement.blur();

      buttonElement.click();

      const errorMessage = await screen.findByText(
        "Something went wrong! Please try reentering the city name."
      );

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
