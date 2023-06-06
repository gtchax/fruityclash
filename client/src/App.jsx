import AppRouter from "./routes";
import "./App.css";
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store";

const FruityClash = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default FruityClash;
