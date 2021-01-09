import React from "react";
import Slider, { useSlider } from "../lib";
import { StateSliderProps } from "../lib/types";

const App = () => {
  const stateUpdateRef = React.useRef<number | undefined>();

  const {
    currentMs,
    onChange,
    setCurrentMs,
    setPlay,
    play,
    // setMedia,
    media,
  } = useSlider((ms) => {
    setTimeout(() => {
      setCurrentMs(ms);
    }, 2000);
  });

  const [state, setState] = React.useState<StateSliderProps>({
    isPlaying: play,
    currentMediaId: 1,
    currentMsSong: currentMs,
    totalMsSong: 200000,
  });

  // React.useEffect(() => {
  //   window.setInterval(() => {
  //     setMedia((media) => {
  //       return { mediaId: media.mediaId + 1, totalMs: Math.random() * 200000 };
  //     });
  //   }, 3000);
  // }, [setMedia, media]);

  React.useEffect(() => {}, [state]);

  const playRef = React.useRef(play);
  const currentMsRef = React.useRef(currentMs);
  const mediaRef = React.useRef(media);

  const startInterval = () => {
    stateUpdateRef.current = window.setInterval(() => {
      // console.log("mediaIdRef====", mediaRef);
      // console.log("playRef====", playRef);
      // console.log("currentMsRef====", currentMsRef);

      setState({
        currentMediaId: mediaRef.current.mediaId,
        currentMsSong: currentMsRef.current,
        isPlaying: playRef.current,
        totalMsSong: mediaRef.current.totalMs,
      });
    }, 2000);
  };

  React.useEffect(() => {
    playRef.current = play;
  }, [play]);

  React.useEffect(() => {
    currentMsRef.current = currentMs;
  }, [currentMs]);

  React.useEffect(() => {
    mediaRef.current = media;
  }, [media]);

  React.useEffect(() => {
    if (stateUpdateRef.current) return;
    console.log("START INTERVALL");

    startInterval();

    return () => {
      console.log("==============clear intervall.....");
      window.clearInterval(stateUpdateRef.current);
    };
  }, []);

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
        handleChange={onChange}
        handleDragStart={React.useCallback(() => console.log("drag start"), [])}
        onEnd={React.useCallback(() => console.log("end"), [])}
      />
    </div>
  );
};

export default App;
