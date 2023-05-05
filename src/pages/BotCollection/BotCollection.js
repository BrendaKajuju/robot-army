/** @format */

import { useContext, useEffect, useState } from "react";
import "../BotCollection/BotCollection.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";

const BotCollection = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8001/bots");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div className="home">
      {data.map((bots, index) => {
        bots.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={bots.avatar_url} alt={bots.name} />
            <small>{bots.bot_class}</small>
            <h2>{bots.name}</h2>
            <small>Health: {bots.health}</small>
            <small>Armor: {bots.armor}</small>
            <small>Damage: {bots.damage}</small>
            <p>Code: {bots.catchphrase}</p>
            <button color="red" onClick={() => dispatch({ type: "ADD", payload: bots })}>
             Join the Force
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BotCollection;
