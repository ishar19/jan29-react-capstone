import  { useEffect, useState } from 'react';


import profileImg from '../assets/image 15.png'
import Timer from './StopWatcher';
import windVector from '../assets/Vector.png'
import humidityVector from '../assets/Group.png';
import pressureBar from '../assets/Vector (1).png';
import { NavLink } from 'react-router-dom';

function DashBoard() {
    const data = JSON.parse(localStorage.getItem("formdata")) // localstorage returns a string we need to parse every time.
    const userfav = localStorage.getItem("selectedMovies")
    const userfavArray = userfav.split(",");

    const [text, setText] = useState('   /* Write down your notes here */');


    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up the interval
    }, []);

    const [weatherData, setWeatherData] = useState(null);
    const [temp, setTemp] = useState(0)

    const [newsData, setNewsData] = useState(null);


    // console.log(text)
    const city = 'Eluru';
    const API_key = "62ec2eb21cff1747cf1512da7be6a8fd";

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
            .then(response => response.json())
            .then((response) => {
                setWeatherData(response);
                setTemp(Math.round(response.main.temp - 273.15));
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=movies&apiKey=7e8b91d76c3a4b8588d5d34ca1b4f5d2`)
            .then(response => response.json())
            .then((response) => {
                console.log(response.articles[0])
                const randomIndex = Math.floor(Math.random() * 100);
                setNewsData(response.articles[randomIndex])
            })
            .catch((err) => {
                alert("There is error in fetching news!", err)
                console.log(err)
            })
    }, [])





    return (

        <>

            <div className='bg-[#000000] max-w-full max-h-full pb-6'>

                <div className='flex'>

                    <div className='bg-[#5746EA] w-80 h-60 rounded-3xl ml-4 mt-6 flex'>
                        <div className='w-24 p-4 '>
                            <img src={profileImg} alt='' />
                        </div>

                        <div>
                            <div className='text-white m-3'>
                                <p>{data.name}</p>
                                <p>{data.email}</p>
                                <p className='font-bold text-4xl'>{data.username}</p>
                            </div>

                            <div className='grid gap-2 grid-cols-2 m-3 mt-8'>

                                {userfavArray.map((ele, ind) => (
                                    <div key={ind} className='w-20 bg-[#9F94FF] rounded-full text-white text-opacity-70'>
                                        {ele}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className='bg-[#F1C75B] w-80 h-80 m-6 rounded-3xl ml-24'>
                        {/* notes component here */}
                        <h2 className="text-xl font-bold">All notes</h2>
                        <textarea className='bg-[#F1C75B] w-full h-full p-2 rounded-3xl'
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        >


                        </textarea>
                    </div>

                    {newsData ? (

                        <div className='bg-white w-60 m-6 rounded-2xl relative left-4' style={{ height: '30rem' }}>
                            {/* news component here */}



                            <div>
                                <img src={newsData.urlToImage} alt='' />

                                <div className='bg-[#000000] bg-opacity-75 w-60 h-20 relative top-1'>
                                    <div className='text-white mt-6'>
                                        {newsData.title}
                                    </div>

                                </div>
                            </div>


                            <div>
                                {newsData.content}
                            </div>


                        </div>
                    ) : (
                        <p>Loading....</p>
                    )
                    }

                </div>


                <div className='ml-4 w-80 h-40 bg-[#101744] text-white rounded-3xl relative bottom-48'>

                    <div className=' w-80 h-10 rounded-3xl bg-[#FF4ADE] text-white font-bold flex text-xl'>

                        <p className='m-2 ml-8'>{currentTime.toLocaleDateString()}</p>
                        <p className='m-2 ml-8'>{currentTime.toLocaleTimeString()}</p>
                    </div>

                    {/* Weather component here */}

                    <div>
                        {weatherData ? (
                            <div className='grid grid-cols-3 divide-x-1'>
                                <div>
                                    <div className='w-20 h-10 m-2 absolute top-6'>
                                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='' />
                                    </div>

                                    <div className='w-20 h-10 mt-4 m-2 absolute top-20'>
                                        <p>{weatherData.weather[0].description}</p>
                                    </div>
                                </div>

                                <div>
                                    <div className='w-20 h-10 m-2'>
                                        <p className='text-2xl'>{temp}°C</p>
                                    </div>

                                    <div className='w-20 h-10 mt-4 m-2 absolute top-20 flex'>
                                        <img className='w-6 h-6' src={pressureBar} alt='' />
                                        <p className='text-xs'>{weatherData.main.pressure} mbar Pressure</p>
                                    </div>
                                </div>


                                <div>
                                    <div className='w-20 h-10 m-2 flex'>
                                        <img className='w-6 h-6' src={windVector} alt='' />
                                        <p className='text-xs'>{weatherData.wind.speed} km/h Wind</p>
                                    </div>

                                    <div className='w-20 h-10 mt-4 m-2 flex'>
                                        <img className='w-6 h-6' src={humidityVector} alt='' />
                                        <p className='text-xs'>{weatherData.main.humidity}% Humidity</p>
                                    </div>
                                </div>



                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>


                </div>

                <div className='bg-[#1E2343] w-2/3 h-54 ml-6 relative bottom-24 rounded-2xl flex justify-between'>

                    <div className='mr-12 m-2'>
                        <Timer />
                    </div>


                </div>
                <div>
                    <NavLink to='/browse'>
                        <button className='w-20 mr-16 rounded-3xl bg-[#148A08] text-white float-right relative right-8 bottom-8'>
                            Browse
                        </button>
                    </NavLink>
                </div>


            </div>

        </>
    )
}

export default DashBoard