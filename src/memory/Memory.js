/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect, useRef } from "react";
import "./memory.css";
import { MemoryGame } from "./memory-game";
import { FlipCard } from "../components";

const Memory = ({ children, level = 1 }) => {
  const [gameDeck, setGameDeck] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [matchesStack, setMatchesStack] = useState([]);
  const [columnSize, setColumnSize] = useState(0);
  const rowSize = 3;
  const deck = {
    1: 24,
    2: 36,
    3: 48,
  };

  const refContainer = useRef();
  const wrapperContainer = useRef("#wrapper");

  const getGameDeck = async () => {
    const newGameDeck = await MemoryGame.init(level);
    setGameDeck([...newGameDeck]);
  };

  const addCardToStack = (elem) => {
    setMatchesStack([...matchesStack, elem]);
  };

  const checkCardsMatch = (container) => {
    const [card_one, card_two] = matchesStack;
    setTimeout(() => {
      if (card_one.dataset.type === card_two.dataset.type) {
        card_one.classList.add("freeze", "flipped");
        card_two.classList.add("freeze", "flipped");
      } else {
        card_one.classList.remove("flip");
        card_two.classList.remove("flip");
      }
      setMatchesStack([]);
      container.classList.remove("freeze");
    }, 1000);
  };

  const flipStack = (evt) => {
    evt.stopPropagation();
    const elem = evt.target;
    if (elem.classList.contains("card")) {
      elem.classList.toggle("flip");
      addCardToStack(elem);
    }
  };

  useEffect(() => {
    getGameDeck();
    const ref$ = wrapperContainer.current;
    ref$.style.gridTemplateColumns = `repeat(${deck[level] / rowSize}, 1fr)`;
    console.log(wrapperContainer.current.style.gridTemplateColumns);
    setIsLoading((t) => !t);
  }, []);

  useEffect(() => {
    const { current: container } = refContainer;
    if (matchesStack.length === 2) {
      container.classList.add("freeze");
      checkCardsMatch(container);
    }
  }, [matchesStack.length]);

  return (
    <Fragment>
      <div id="memory" onClick={flipStack} ref={refContainer}>
        <header>
          <h1>Memory Game</h1>
        </header>
        <div className="wrapper" ref={wrapperContainer}>
          {gameDeck.map((face, idx) => {
            return (
              <FlipCard key={idx} type={face}>
                <span>{face}</span>
              </FlipCard>
            );
          })}
        </div>
        <footer>
          <small>Click refresh to start a new game</small>
        </footer>
      </div>
    </Fragment>
  );
};

export default Memory;
