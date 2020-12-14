import React, { Fragment, useState, useEffect } from "react";
import "./memory.css";
import { MemoryGame } from "./memory-game";
import { FlipCard } from "../components";

const Memory = ({ children, level = 2 }) => {
  const [gameDeck, setGameDeck] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGameDeck = async () => {
    const newGameDeck = await MemoryGame.init();
    setGameDeck([...newGameDeck]);
    console.log(gameDeck);
  };

  const flipStack = (evt) => {
    evt.stopPropagation();
    const elem = evt.target;
    if (elem.classList.contains("card")) {
      elem.classList.toggle("flip");
      console.log(elem);
    }
  };

  useEffect(() => {
    getGameDeck();
    if (gameDeck.length > 0) setIsLoading((t) => !t);
  }, []);

  return (
    <Fragment>
      <div id="memory" onClick={flipStack}>
        {gameDeck.map((face, idx) => {
          return (
            <FlipCard key={idx} type={face}>
              <span>{face}</span>
            </FlipCard>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Memory;
