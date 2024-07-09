import WeatherCard from "components/weather-card";
import { useAppSelector } from "state/store";
import { selectWeatherDetails } from "../state/selector.hooks";

const WeatherDetails = () => {
  const weatherDetails = useAppSelector((state) => selectWeatherDetails(state));

  if (!weatherDetails) return null;

  const {
    isImperial,
    loading,
    cityData: data,
    currentDay,
    next6Hours,
  } = weatherDetails;

  switch (loading) {
    case "idle":
      return <p>Enter a city name to get the weather details</p>;
    case "pending":
      return <p>Loading...</p>;
    case "failed":
      return <p>Something went wrong! Please try reentering the city name.</p>;
    default:
      break;
  }

  if (!data?.days.length) return;

  return (
    <div>
      <div className="flex flex-row" data-testid="weather-details-container">
        <div className="w-96">
          <WeatherCard
            size="large"
            icon={currentDay.icon}
            temp={currentDay.temp}
            conditions={currentDay.conditions}
            isImperial={isImperial}
          />
        </div>
        <div className="card bg-base-100 shadow-xl w-full p-8 ml-4">
          <p>
            <strong>Address:</strong> {data.resolvedAddress}
          </p>
          <p>
            <strong>Timezone:</strong> {data.timezone}
          </p>
        </div>
      </div>

      <h3 className="text-lg font-bold my-8 border-b-2">Forecast</h3>
      <div
        className="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-2 justify-center items-center"
        data-testid="weather-forecast-container"
      >
        {next6Hours.map((hoursData) => (
          <div key={hoursData.datetime} className="m-auto">
            <WeatherCard
              icon={hoursData.icon}
              temp={hoursData.temp}
              conditions={hoursData.conditions}
              isImperial={isImperial}
            />
            <p className="text-center">{hoursData.datetime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
