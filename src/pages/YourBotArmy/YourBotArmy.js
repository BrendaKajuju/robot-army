/** @format */

import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import "./YourBotArmy.css";

const YourBotArmy = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  return (
    <div className="cart">
      {state.map((bots, index) => {
        return (
          <div className="card" key={index}>
            <img src={bots.avatar_url} alt={bots.name} />
            <small>{bots.bot_class}</small>
            <h2>{bots.name}</h2>
            <small>Health: {bots.health}</small>
            <small>Armor: {bots.armor}</small>
            <small>Damage: {bots.damage}</small>
            <p>Code: {bots.catchphrase}</p>
            <button style={{backgroundColor: "red"}}  onClick={() => dispatch({ type: "REMOVE", payload: bots })}>
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default YourBotArmy;
