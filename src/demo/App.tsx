import React from "react";
import Slider, { useSlider } from "../lib";

const App = () => {
  const [currentMs, setCurrentMs] = React.useState(0);
  const [play, setPlay] = React.useState(false);

  const { state, handleDragStart, handleEnd, handleMsChange } = useSlider({
    currentMsSong: currentMs,
    media: { mediaId: 1, totalMs: 200000 },
    isPlaying: play,
    stateUpdateIntervall: 3000,
    onSettledChange: () => console.log("setteld"),
    onMsChange: (ms: number) => setCurrentMs(ms),
    statusRequestMsChange: "idle",
  });

  return (
    <div>
      <div>{JSON.stringify(state)}</div>
      <button onClick={() => setPlay(!play)}>TOGGLE PLAY</button>
      <button
        onClick={() => {
          setCurrentMs(Math.random() * 200000);
        }}
      >
        Random Ms
      </button>

      <Slider
        state={state}
        handleChange={handleMsChange}
        handleDragStart={handleDragStart}
        onEnd={handleEnd}
      />
    </div>
  );
};

export default App;
