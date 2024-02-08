import "./render.css"
import Image from "next/image";

const Renderer = ({ data }) => {
    if (!data) {
        return (
            <div className='weather-container'>
                <div className="main">
                    <div className="main-texts">
                        <h1 className="temp">...<sup className="font-super">°C</sup></h1>
                        <div className="location-weather">
                            <div className="location">Location</div>
                            <div className="weather">Weather</div>
                        </div>
                    </div>
                    <Image
                        src="/circle.svg"
                        width={50}
                        height={50}
                        alt="sun"
                        priority={true}
                    />
                </div>
                <div className="list-container">
                    <ul>
                        <li>Feels like: <span className="highlight">...</span>°C</li>
                        <li>Min-temp: <span className="highlight">...</span>°C</li>
                        <li>Max-temp: <span className="highlight">...</span>°C</li>
                    </ul>
                    <ul>
                        <li>Pressure: <span className="highlight">...</span>hPa</li>
                        <li>Humidity: <span className="highlight">...</span>%</li>
                        <li>Visibility: <span className="highlight">...</span>m</li>
                    </ul>
                    <ul>
                        <li>Wind speed: <span className="highlight">...</span>m/s</li>
                        <li>Wind angle: <span className="highlight">...</span>°</li>
                    </ul>
                </div>
            </div>
        );
    }

    let currentTime = data.dt;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;

    return (
        <div className='weather-container'>
            <div className="main">
                <div className="main-texts">
                    <h1 className="temp">{data.main.temp}<sup className="font-super">°C</sup></h1>
                    <div className="location-weather">
                        <div className="location">{data.name}</div>
                        <div className="weather">{data.weather[0].main}</div>
                    </div>
                </div>

                {(currentTime >= sunrise && currentTime < sunset) ?
                    <Image
                        src="/sun.svg"
                        width={50}
                        height={50}
                        alt="sun"
                        priority={true}
                    />
                    :
                    <Image
                        src="/moon.svg"
                        width={50}
                        height={50}
                        alt="moon"
                        priority={true}
                    />
                }
            </div>
            <div className="list-container">
                <ul>
                    <li>Feels like: <span className="highlight">{data.main.feels_like}</span>°C</li>
                    <li>Min-temp: <span className="highlight">{data.main.temp_min}</span>°C</li>
                    <li>Max-temp: <span className="highlight">{data.main.temp_max}</span>°C</li>
                </ul>
                <ul>
                    <li>Pressure: <span className="highlight">{data.main.pressure}</span>hPa</li>
                    <li>Humidity: <span className="highlight">{data.main.humidity}</span>%</li>
                    <li>Visibility: <span className="highlight">{data.visibility}</span>m</li>
                </ul>
                <ul>
                    <li>Wind speed: <span className="highlight">{data.wind.speed}</span>m/s</li>
                    <li>Wind angle: <span className="highlight">{data.wind.deg}</span>°</li>
                </ul>
            </div>
        </div>
    );
}

export default Renderer;
