import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import './App.css';
import { StockItem } from './components/StockItem/StockItem';
import { WatchList } from './components/WatchList/WatchList';

function App() {
const [stocks, setStocks] = useState(null);
const [watchList, setWatchList] = useState(['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA']);
const [stocksList, setStocksList] = useState([]);
const [interval, setInterval] = useState(5000);

const socket = io('http://localhost:4000');

useEffect(
  () => {
    getData();

    return () => unsubscribe();
  }, [watchList]
)

const getData = () => {
  socket.on("connect", () => {
    console.log('Connected: ', socket.connected);
    socket.emit("start");

    socket.on("ticker", (tickers) => {
      const result = tickers.filter(ticker => (watchList.includes(ticker.ticker)))
      setStocks(result);
    })
  });
}

const unsubscribe = () => {
  socket.disconnect()
  console.log('Connected: ', socket.connected)
}

const deleteTickerFromWatchList = (ticker) => {
  const copyWatchList = [...watchList].filter(element => element !== ticker);
  const copyStocksList = [...stocksList, ticker];

  setWatchList(copyWatchList);
  setStocksList(copyStocksList);
}

const addTickerToWatchList = (ticker) => {
  const copyWatchList = [...watchList, ticker];
  const copyStocksList = [...stocksList].filter(element => element !== ticker);

  setWatchList(copyWatchList);
  setStocksList(copyStocksList);
}

const changeInterval = (event) => {
  setInterval(event.target.value);
}

const submitInterval = () => {
  socket.emit("changeInterval", (interval));
  unsubscribe();
  setWatchList([...watchList]);
}

  return (
    <div className="App">
      <h1 className="App__title">Your stock portfolio: </h1>
      <WatchList 
        watchList={watchList}
        stocksList={stocksList}
        deleteTicker={deleteTickerFromWatchList}
        addTicker={addTickerToWatchList}
      />
      <div className="App__interval Interval">
        <h2 className="Interval__title">Update interval: </h2>
        <form className="Interval__form">
          <input type="number" value={interval} onChange={changeInterval}></input>
          <button type="button" onClick={() => submitInterval()}>Change</button>
        </form>
      </div>
      <ul className="App__list">
        {stocks && stocks.map(stock => (
          <StockItem stock={stock} key={stock.ticker} />
        ))}
      </ul>
    </div>
  );
}

export default App;
