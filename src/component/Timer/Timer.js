import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div>token is expired</div>;
    }

    return (
      <div>
        <div>Remaining</div>
        <div>{remainingTime}</div>
        <div>seconds</div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <div>
          <CountdownCircleTimer
            isPlaying
            duration={3600}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      </div>
    </div>
  );
};

export default Timer;
