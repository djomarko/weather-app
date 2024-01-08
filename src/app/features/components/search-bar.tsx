interface SearchBarProps {
  city: string;
  onSubmit: (city: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const city = new FormData(event.currentTarget).get("city");
    if (!city) return;
    onSubmit(city.toString());
  };

  return (
    <form className="flex flex-row mb-8" onSubmit={handleSubmit}>
      <input
        placeholder="City"
        name="city"
        type="text"
        className="input input-bordered w-full max-w-lg"
      />

      <button
        type="submit"
        className="flex-none ml-4 bg-blue-600 hover:bg-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
