import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Expense from "./Components//Expense/Expense";
import Notfound from "./Components/Home/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/todo-version2" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Expense" element={<Expense />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
