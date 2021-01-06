import React from "react";
import Slider, { useSlider } from "../lib";

const App = () => {
  const { currentMs, setMs } = useSlider();

  return (
    <div>
      <Slider
        play={true}
        currentMs={currentMs}
        mediaId={1}
        handleChange={setMs}
        totalMs={3000}
      />
    </div>
  );
};

export default App;
