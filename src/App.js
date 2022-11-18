import "./App.css";
import Navbar from "./components/Navbar";
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </>
  );
}

export default App;

