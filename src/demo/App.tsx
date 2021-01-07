import React from "react";
import Slider, { useSlider } from "../lib";

const App = () => {
  const { currentMs, onChange, setCurrentMs } = useSlider((ms) => {
    return new Promise((res) => {
      setTimeout(() => {
        setCurrentMs(ms);
        res(ms);
      }, 100);
    });
  });

  console.log("currentMs", currentMs);
  return (
    <div>
      <Slider
        play={true}
        currentMs={currentMs}
        mediaId={1}
        totalMs={3000}
        handleChange={onChange}
        onEnd={() => console.log("end")}
      />
    </div>
  );
};

export default App;
