import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetail";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/cart/:id" element={<CardsDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
