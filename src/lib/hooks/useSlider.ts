import React from "react";

export const useSlider = () => {
  const [play, setPlay] = React.useState(false);
  const [currentMs, setCurrentMs] = React.useState(0);

  const setMs = (ms: number) => {
    return new Promise<number>((res) => {
      setTimeout(() => {
        setCurrentMs(ms);
        res(ms);
      }, 100);
    });
  };

  return {
    play,
    setPlay,
    currentMs,
    setCurrentMs,
    setMs,
  };
};
