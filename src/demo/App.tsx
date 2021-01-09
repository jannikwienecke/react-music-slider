import React from "react";
import Slider, { useSlider } from "../lib";

const App = () => {
  const { currentMs, onChange, setCurrentMs, setPlay, play } = useSlider(
    (ms) => {
      setTimeout(() => {
        setCurrentMs(ms);
      }, 100);
    }
  );

  return (
    <div>
      <button onClick={() => setPlay(!play)}>TOGGLE PLAY</button>
      <button
        onClick={() => {
          setCurrentMs(Math.random() * 200000);
        }}
      >
        Random Ms
      </button>

      <Slider
        play={play}
        currentMs={currentMs}
        mediaId={1}
        totalMs={200000}
        handleChange={onChange}
        onEnd={() => console.log("end")}
      />
    </div>
  );
};

export default App;
