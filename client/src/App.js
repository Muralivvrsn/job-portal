import "./App.css";
import { Routes, Route } from "react-router-dom";
import Pagination from "./components/Pagination";
import Details from './components/Details'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Pagination />}></Route>
        <Route path="/:id" exact element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
