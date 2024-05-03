import { useState, useEffect } from "react";
import windSpeed from '../../assets/windspeed.svg'
import humidity from '../../assets/humidity.svg'
import pressure from '../../assets/pressure.svg'

export default function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=Pune&timezone=auto&language=en&units=auto';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '892e65461emshf056c2413f92de8p1cc016jsn8a2744f0cfaa',
                'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
            }
        };

        try {
            fetch(url, options)
                .then((response) => response.json())
                .then((data) => setWeatherData(data));
        } catch (error) {
            console.error(error);
        }
    }, []);

    // Get the current date and time
    const currentDateTime = new Date();

    // Extract the date and time components
    const currentDate = currentDateTime.toLocaleDateString(); // Format the date according to the locale
    const currentTime = currentDateTime.toLocaleTimeString();
    console.log(currentDate)

    return (
        <div className="text-white bg-[#101744] w-[49vw] h-[20vh] rounded-lg mt-6 p-2">
            {weatherData ? (
                <div>

                    <div className="flex flex-row justify-around bg-[#FF4ADE] text-white rounded-t-lg text-2xl font-bold mt-0">
                        <div>
                            {currentDate}
                        </div>
                        <div>
                            {currentTime}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 items-center text-center">
                        <div>
                            <p className="upper">Sky: {weatherData.current.summary}</p>
                        </div>
                        <div>
                            <div className="flex flex-col gap-1 items-center">
                                <div>
                                    <p className="text-2xl">{weatherData.current.temperature}&nbsp;<sup>o</sup>F </p>
                                </div>

                                <div className="flex flex-row gap-2 text-xs">
                                    <img src={pressure} alt="pressure" />
                                    <p>{weatherData.current.pressure}mbar<br />Pressure</p>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className="flex flex-row ml-5 mt-2 gap-3">
                                <div>
                                    <img src={windSpeed} alt="windspeed" />
                                </div>
                                <div>
                                    <p className="text-xs">{weatherData.current.wind.speed}&nbsp;km/hr</p>
                                    <p className="text-xs">Wind</p>
                                </div>
                            </div>

                            <div className="flex flex-row ml-5 mt-3 gap-5">
                                <div>
                                    <img src={humidity} alt="humidity" />
                                </div>
                                <div>
                                    <p className="text-xs">{weatherData.current.humidity}&nbsp;%</p>
                                    <p className="text-xs">Humidity</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}