import { Provider } from "react-redux";
import "./App.css";
import Bugs from "./components/Bugs";
import configureStore from "./store/configureStore";
import BugsList from "./components/BugsList";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BugsList />
    </Provider>
  );
}

export default App;
