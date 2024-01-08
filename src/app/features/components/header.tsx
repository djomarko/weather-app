import MeticToggle from "../../../components/metric-toggle";

const Header = () => {
  return (
    <header className="flex flex-grow pt-16 -mx-4 sm:mx-0 px-4 bg-slate-400">
      <h1 className="flex-auto text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-4 sm:mb-8 text-white">
        Weather app
      </h1>
      <div className="w-28 flex-none">
        <MeticToggle />
      </div>
    </header>
  );
};

export default Header;
