import { Provider } from "react-redux";
import { store } from "../state/store";
import HomePage from "./features/home-page";

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
