/* eslint-disable no-unused-vars */
import  { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        if (seconds < 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
        }
        if (minutes < 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
        }
        if (hours < 0) {
            setHours(0);
            setMinutes(0);
            setSeconds(0);
            setIsRunning(false);
        }
    }, [seconds, minutes, hours]);

    const formatTime = (time) => time.toString().padStart(2, '0');

    const handleStart = () => {
        setIsRunning(true);

    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
    };

    const handleIncrementHours = () => {
        setHours((prevHours) => prevHours + 1);
    };

    const handleDecrementHours = () => {
        setHours((prevHours) => (prevHours > 0 ? prevHours - 1 : 0));
    };

    const handleIncrementMinutes = () => {
        setMinutes((prevMinutes) => prevMinutes + 1);
    };

    const handleDecrementMinutes = () => {
        setMinutes((prevMinutes) => (prevMinutes > 0 ? prevMinutes - 1 : 0));
    };

    const handleIncrementSeconds = () => {
        setSeconds((prevSeconds) => prevSeconds + 1);
    };

    const handleDecrementSeconds = () => {
        setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    };

    const totalSec = formatTime(hours) * 3600 + formatTime(minutes) * 60 + seconds;


    return (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>

            <div>
                <div className='bg-[#191E39] w-55 h-55 m-8 ml-12 rounded-full'>
                    <div className='text-white font-bold text-3xl'>

                        <CountdownCircleTimer
                            isPlaying
                            colors={['#FF6A6A']}
                            duration={totalSec}
                        >
                            {({ remainingTime }) => {
                                const hours = Math.floor(remainingTime / 3600);
                                const minutes = Math.floor((remainingTime % 3600) / 60);
                                const seconds = remainingTime % 60;
                                return `0${hours}:0${minutes}:${seconds}`;
                            }}
                        </CountdownCircleTimer>

                    </div>
                </div>
            </div>
                        


            <div className='ml-40'>
            <button className='bg-[#FF6A6A] text-white rounded-3xl w-20 mt-2 m-2' onClick={handleStop}>
                            Stop
                        </button>
                        <button className='bg-[#FF6A6A] text-white rounded-3xl w-20 mt-2 m-2' onClick={handleReset}>Reset</button>
                <div className=' text-[#949494]'>

                    <div className='flex mb-2'>
                        <p className='mr-10 ml-5'>Hours</p>

                        <p className='mr-8'>Minutes</p>
                        <p>Seconds</p>
                    </div>


                    <button className='text-[#949494]' style={{ marginRight: '4.5rem' }} onClick={handleIncrementHours}>
                        ▲
                    </button>


                    <button className='text-[#949494]' style={{ marginRight: '5rem' }} onClick={handleIncrementMinutes}>
                        ▲
                    </button>



                    <button className='text-[#949494]' style={{ marginRight: '0.5rem' }} onClick={handleIncrementSeconds}>
                        ▲
                    </button>

                </div>
                <div style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>
                    {formatTime(hours)} : {formatTime(minutes)}  :  {formatTime(seconds)}
                </div>
                <div>


                    <button className='text-[#949494]' style={{ marginRight: '4.5rem' }} onClick={handleDecrementHours}>
                        ▼
                    </button>


                    <button className='text-[#949494]' style={{ marginRight: '5rem' }} onClick={handleDecrementMinutes}>
                        ▼
                    </button>

                    <button className='text-[#949494]' onClick={handleDecrementSeconds}>
                        ▼
                    </button>


                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className='bg-[#FF6A6A] text-white rounded-3xl w-60 mt-2 m-2' style={{ marginRight: '1rem' }} onClick={handleStart}>
                        Start
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Timer;