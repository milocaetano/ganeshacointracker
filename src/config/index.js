const binanceList = require('./BinanceList');

const config = { 
  coinCheckUrl: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=trade_volume_24h_btc_desc&per_page=1000&page=1&sparkline=false",
  binanceList: binanceList
}

module.exports = config;