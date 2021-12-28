import React from "react";
import './WatchList.css'

export const WatchList = ({ watchList, stocksList, deleteTicker, addTicker }) => {
  return (
    <div className="WatchList">
      <div className="WatchList__parts">
        <h2>Your watch list: </h2>
        <ul className="WatchList__list">
          {watchList.map(ticker => (
          <li key={ticker} className="WatchList__item">
            <span>{ticker}</span>
            <button onClick={() => deleteTicker(ticker)}>x</button>
          </li>
        ))}
        </ul>
      </div>
      <div className="WatchList__parts">
        <h2>All available stocks: </h2>
        <ul className="WatchList__list">
          {stocksList.map(ticker => (
            <li key={ticker} className="WatchList__item">
              <span>{ticker}</span>
              <button onClick={() => addTicker(ticker)}>+</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};