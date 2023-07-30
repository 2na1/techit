import { useEffect, useState } from "react";

function App() {
  const [loding, setLoding] = useState(true);
  const [Coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!({Coins.length})</h1>
      {loding ? <strong>Loding...</strong> : null}
      <ul>
        {Coins.map((coin) => (
          <li>
            {coin.name}({coin.symbol}):${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
