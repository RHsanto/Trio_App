import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { serviceApi } from "./features/api/apiSlice";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./components/service/Service";
import Menubar from "./components/common/Menubar";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={serviceApi}>
        <Router>
          <Menubar/>
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/:id" element={<Service />} />
          </Routes>
        </Router>
      </ApiProvider>
    </Provider>
  );
}

export default App;
