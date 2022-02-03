import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Coin from './Coin'

const ENDPOINT = 'http://127.0.0.1:5000'
function App() {
  const [coins, setcoins] = useState([])
  const [search, setsearch] = useState('')
  useEffect(() => {
    axios.get('YOUR COINGECKO API KRY').then(res => {
      setcoins(res.data)  
    }).catch(error => console.error(error)); 
  }, [])

  const handleChange = e =>{
    setsearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.price_change_24h}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
