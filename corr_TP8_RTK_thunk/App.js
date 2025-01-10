import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./composants/Navbar";
import Home from "./composants/Home";
import List from "./composants/List";
import Ajout from "./composants/Ajout";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./features/Store";
import Modification from "./composants/Modification";

const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Ajout />}></Route>
            <Route path="/all" element={<List />}></Route>
            <Route path="/edit/:id" element={<Modification />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};
export default App;
