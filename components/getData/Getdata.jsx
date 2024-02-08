"use server"

export default async function getWeatherData(formData) {
  const city = formData.get('city');
  const apiKey = process.env.WEATHER_API_KEY;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  return data;
}
