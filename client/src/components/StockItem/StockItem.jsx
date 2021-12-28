import React from "react";
import './StockItem.css';

export const StockItem = ({ stock }) => {
  const { 
    ticker, price, exchange, change, change_percent, dividend, yield: yieldd,
  } = stock; 

  return (
    <li className="StockItem">
      <div className="StockItem__row">
        <p>Ticker: </p>
        <p>{`${ticker} on ${exchange}`}</p>
      </div>
      <div className="StockItem__row">
        <p>Price: </p>
        <p>{price}</p>
      </div>
      <div className="StockItem__row">
        <p>Change: </p>
        <p>{change}</p>
      </div>
      <div className="StockItem__row">
        <p>Change, %: </p>
        <p>{change_percent}</p>
      </div>
      <div className="StockItem__row">
        <p>Dividends: </p>
        <p>{dividend}</p>
      </div>
      <div className="StockItem__row">
        <p>Yield: </p>
        <p>{yieldd}</p>
      </div>
    </li>
  )
};