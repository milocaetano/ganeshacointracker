import React from 'react';
import CoinRow from './CoinRow';
import config from '../config';
const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter(
    coin =>
      coin.symbol.toLowerCase().includes(search.toLowerCase()) &&
      config.binanceList.some(c => c.includes(coin.symbol.toUpperCase()))
  );

  if (!coins) return <div>no coins</div>;

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
