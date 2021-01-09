import React from "react";

export const useSlider = (onChangeCallBack: (ms: number) => void) => {
  const [play, setPlay] = React.useState(false);
  const [currentMs, setCurrentMs] = React.useState(0);

  const onChange = async (ms: number) => {
    try {
      await onChangeCallBack(ms);
      return ms;
    } catch (error) {
      return Promise.reject("ERROR");
    }
  };
  return {
    play,
    setPlay,
    currentMs,
    setCurrentMs,
    onChange,
  };
};
