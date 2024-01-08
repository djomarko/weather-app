import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import WeatherCard from "./weather-card";

describe("WeatherCard", () => {
  test("renders the weather card correctly", () => {
    const weatherData = {
      icon: "sun",
      conditions: "Sunny",
      temp: 25,
      isImperial: false,
    };

    const { getByText, getByAltText } = render(
      <WeatherCard {...weatherData} />
    );

    expect(getByText("25°C")).toBeInTheDocument();
    expect(getByText("Sunny")).toBeInTheDocument();
    expect(getByAltText("Sunny")).toBeInTheDocument();
    expect(getByAltText("Sunny")).toHaveAttribute(
      "src",
      "/2nd Set - Color/sun.svg"
    );
  });

  test("test if the imperial units have been selected", () => {
    const weatherData = {
      icon: "sun",
      conditions: "Sunny",
      temp: 25,
      isImperial: true,
    };

    const { getByText } = render(<WeatherCard {...weatherData} />);

    expect(getByText("77°F")).toBeInTheDocument();
  });

  test("test imperial unit with decimal number", () => {
    const weatherData = {
      icon: "sun",
      conditions: "Sunny",
      temp: 25.5,
      isImperial: true,
    };

    const { getByText } = render(<WeatherCard {...weatherData} />);

    expect(getByText("77.9°F")).toBeInTheDocument();
  });
});
