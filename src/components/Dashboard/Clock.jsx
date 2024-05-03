import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useEffect, useState } from "react";
export default function Clock() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0); // in seconds
  const [remainingTime, setRemainingTime] = useState(null);
  useEffect(() => {
    if (remainingTime === 0) {
      console.log("Time is up!");
      setRemainingTime(null);
      setIsPlaying(false);
      setDuration((duration) => duration + 5);
    }
  }, [remainingTime]);
  const decreaseSecond = () => {
    if (remainingTime >= 1) {
      setDuration(remainingTime - 1);
    }
  };
  const increaseSecond = () => {
    setDuration(remainingTime + 1);
  };
  const increaseMinute = () => {
    setDuration(remainingTime + 60);
  };
  const decreaseMinute = () => {
    if (remainingTime > 60) {
      setDuration(remainingTime - 60);
    } else {
      setDuration(0);
    }
  };
  const increaseHour = () => {
    setDuration(remainingTime + 3600);
  };
  const decreaseHour = () => {
    if (remainingTime > 3600) {
      setDuration(remainingTime - 3600);
    } else {
      setDuration(0);
    }
  };
  const startPause="rounded-[30px] text-xl bg-[#FF6A6A] w-[200px] p-2"
  const smallBtns = "rounded-[30px] text-m bg-[#FF6A6A] w-[100px] p-2 ml-3"

  return (
    <div className="flex flex-row justify-around items-center text-white bg-[#1E2343] w-[73vw] h-[26vh] ml-2 rounded-lg">
      <div>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={duration}
          colors={["#FF6A6A"]}
        >
          {({ remainingTime }) => {
            setRemainingTime(remainingTime);
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
      <div>
        {isPlaying ? (
          <button  className={startPause} onClick={() => setIsPlaying(false)}>Pause</button>
        ) : (
          <button className={startPause} onClick={() => setIsPlaying(true)}>Start</button>
        )}
      </div>
      <div>
        <p>Seconds: <button className={smallBtns} disabled={isPlaying} onClick={decreaseSecond}>
          -1 second
        </button>
        <button className={smallBtns} disabled={isPlaying} onClick={increaseSecond}>
          +1 second
        </button></p><br />

        <p>Minutes: <button className={smallBtns} disabled={isPlaying} onClick={increaseMinute}>
          +1 minute
        </button>
        <button className={smallBtns} disabled={isPlaying} onClick={decreaseMinute}>
          -1 minute
        </button></p><br />

        <p>Hours:<button className={smallBtns} disabled={isPlaying} onClick={increaseHour}>
          +1 hour
        </button>
        <button className={smallBtns} disabled={isPlaying} onClick={decreaseHour}>
          -1 hour
        </button></p>
      </div>

    </div>
  );
}