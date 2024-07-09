interface WeatherCardProps {
  icon: string;
  conditions: string;
  temp: number;
  isImperial: boolean;
  size?: "small" | "large";
}

const WeatherCard = ({
  icon,
  temp,
  conditions,
  isImperial,
  size = "small",
}: WeatherCardProps) => {
  return (
    <div
      className={`card w-${
        size === "small" ? "32" : "full"
      } bg-base-100 shadow-xl`}
    >
      <figure className="px-10 pt-10">
        <img
          src={`/2nd Set - Color/${icon}.svg`}
          alt={conditions}
          title={conditions}
        ></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {temp}&deg;{isImperial ? "F" : "C"}
        </h2>
        <p>{conditions}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
