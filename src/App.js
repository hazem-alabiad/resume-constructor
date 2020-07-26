import store from "configureStore";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer newestOnTop={true} autoClose={3000} />
        <Main />
      </Provider>
    </div>
  );
};

export default App;
