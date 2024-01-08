import Header from "app/features/components/header";
import SearchBar from "app/features/components/search-bar";
import WeatherDetails from "app/features/components/weather-details";
import { useState } from "react";

const HomePage = () => {
  const [city, setCity] = useState("");

  const handleSubmit = (city: string) => {
    if (!city?.trim()) return;

    setCity(city);
  };

  return (
    <main>
      <Header />
      <section className="mt-0 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div>
          <p className="pb-4 text-lg">
            Welcome to the weather app, start by entering a name of the city
          </p>
          <SearchBar city={city} onSubmit={handleSubmit} />
        </div>
        {city && <WeatherDetails city={city} />}
      </section>

      <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
        Marko D. @ {new Date().getFullYear()}
      </footer>
    </main>
  );
};

export default HomePage;
