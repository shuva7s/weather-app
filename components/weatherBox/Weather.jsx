
'use client'
import "./Weather.css"
import { useState } from 'react';
import getWeatherData from '../getData/Getdata';
import Renderer from '../renderer/Renderer';

function Weather() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await getWeatherData(new FormData(event.target));
    setData(data);
  }

  return (
    <section className="all">
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input-city"
          name="city"
          type="text"
          placeholder='Enter a city name'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button className="submit" type="submit">Submit</button>
      </form>

      <Renderer data={data} />
    </section>
  );
}

export default Weather;
