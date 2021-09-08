import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";
import config from './config';
const sma = require('trading-indicator').sma;
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");


  const getData = async () => {
    try {

      let smaData = await sma(8, "close", "binance", "BTC/USDT", "15m", true)
      console.log(smaData);
      
      const res = await axios.get(
        config.coinCheckUrl
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
