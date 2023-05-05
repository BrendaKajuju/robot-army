/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import BotCollection from "./pages/BotCollection/BotCollection";
import YourBotArmy from "./pages/YourBotArmy/YourBotArmy";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BotCollection />} />
        <Route path="/cart" element={<YourBotArmy />} />
      </Routes>
    </div>
  );
}

export default App;
