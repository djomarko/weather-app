import WeatherCard from "components/weather-card";
import { useAppSelector } from "state/store";
import { useGetWeatherByCityQuery } from "state/weather-api.slice";

interface WeatherDetailsProps {
  city: string;
}

const WeatherDetails = ({ city }: WeatherDetailsProps) => {
  const { data, isLoading, isError } = useGetWeatherByCityQuery(city);
  const isImperial = useAppSelector((state) => state.tempUnit.isImperial);

  if (isLoading) return <p>Loading...</p>;

  if (isError)
    return <p>Something went wrong! Please try reentering the city name.</p>;

  if (!data?.days.length) return;

  const currentTime = new Date().getHours();

  const currentDay = data.days[0];
  const listOfTimes = data.days.map((day) => day.hours).flat();
  const nextHour = listOfTimes.findIndex(
    (time) => parseInt(time.datetime.split(":")[0]) > currentTime
  );

  const next6Hours = listOfTimes.slice(nextHour, nextHour + 6);

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
