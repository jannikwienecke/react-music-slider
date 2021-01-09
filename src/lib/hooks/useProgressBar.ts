import React from "react";
import { ProgressBarProps } from "../types";
import { usePrevious } from "./usePrevious";

export let widthPointerElement = 15;

export const useProgressBar = ({
  handleChange,
  onEnd,
  play,
  currentMs,
  mediaId,
  totalMs,
}: ProgressBarProps) => {
  const [positionPointer, setPositionPointer] = React.useState(0);
  const [isHoveringProgressBar, setIsHoveringProgressBar] = React.useState(
    false
  );

  const [playbackProgress, setPlaybackProgress] = React.useState(
    currentMs / totalMs
  );

  const pointerRef = React.useRef<HTMLDivElement>(null);
  const intervallRef = React.useRef<Number | undefined>();
  const progressBarRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);
  const [positionChanged, setPositionChanged] = React.useState(false);

  const startProgressBar = progressBarRef.current?.getBoundingClientRect().left;

  const _handlePositionChange = (eventXValue: number) => {
    if (startProgressBar === undefined) return;

    setPositionChanged(true);

    const newXValue = eventXValue - startProgressBar;

    const newDisplayPosition = getNewDisplayPositionPointer(newXValue);
    const newMsPosition = getPositionMs(newDisplayPosition);
    setPlaybackProgress(newMsPosition / totalMs);

    clearAllIntervalls();

    if (!handleChange) {
      console.warn("Please Provide a handleChange Function");
    }

    // RUN USER FUNCTION
    handleChange(newMsPosition);
  };

  const handleClickProgressBar = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isDragging.current) return;
    clearAllIntervalls();
    _handlePositionChange(event.pageX);
  };

  const handleHoverProgressBar = () => {
    setIsHoveringProgressBar(true);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) return;
    setIsHoveringProgressBar(false);
  };

  const handleDragStart = () => {
    isDragging.current = true;

    clearAllIntervalls();
  };

  const handleDragging = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const eventXValue = event.pageX;

    isDragging.current = true;
    clearAllIntervalls();

    if (startProgressBar === undefined) return;

    const newXValue = eventXValue - startProgressBar;

    const newDisplayPosition = getNewDisplayPositionPointer(newXValue);
    const newMsPosition = getPositionMs(newDisplayPosition);

    // WHEN DRAGGING ONLY UPDATE THE POINTER
    // OTHERWISE POINTER JUMPS BACk AND FORTH
    setPositionPointer((newMsPosition / totalMs) * getWidthProgressBar());
  };

  const handleDragEnd = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    _handlePositionChange(event.pageX);

    setIsHoveringProgressBar(false);
    setTimeout(() => {
      isDragging.current = false;
    }, 0);
  };

  const startIntervall = React.useCallback(() => {
    if (!play) return;

    console.log("In Function startIntervall!");

    intervallRef.current = undefined;

    intervallRef.current = window.setInterval(() => {
      setPlaybackProgress((position: number) => {
        const currentMs = position * totalMs;
        const newProcent = (currentMs + 10) / totalMs;

        return newProcent;
      });
    }, 10);
  }, [totalMs, play]);

  React.useEffect(() => {
    if (playbackProgress) {
      if (playbackProgress.toFixed(2) === "1.00") {
        clearAllIntervalls();
        // USER FUNCTION
        onEnd();
      } else setPositionPointer(playbackProgress * getWidthProgressBar());
    }
  }, [playbackProgress, onEnd]);

  // HANDLE MILLISECONDS POSITION CHANGES FROM OUTSIDE
  const prevCurrentMs = usePrevious(currentMs);
  React.useEffect(() => {
    if (prevCurrentMs !== currentMs) {
      setPlaybackProgress(currentMs / totalMs);
    }
  }, [currentMs, totalMs, prevCurrentMs]);

  // HANDLE MEDIA CHANGES
  const prevMediaId = usePrevious(mediaId);
  React.useEffect(() => {
    if (!prevMediaId) return;

    if (prevMediaId && mediaId !== prevMediaId) {
      console.log("Start Intervall --- Media Changed");
      setPlaybackProgress(0);
      clearAllIntervalls();
      startIntervall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaId]);

  // HANDLE PAUSE
  React.useEffect(() => {
    if (!play) {
      clearAllIntervalls();
    }
  }, [play]);

  // WHEN EVERTHING IS LOADED START INTERVALL
  React.useEffect(() => {
    if (play && mediaId !== undefined && currentMs !== undefined) {
      console.log("Start Intervall -- [play, mediaId, currentMs]");
      startIntervall();
    }
  }, [play, mediaId, currentMs, positionChanged, startIntervall]);

  const getWidthProgressBar = () => {
    if (!progressBarRef.current) return 0;
    return progressBarRef.current.getBoundingClientRect().width;
  };

  const getCurrentPositionPointer = () => {
    if (!pointerRef.current) return 0;
    return pointerRef.current?.getBoundingClientRect().x;
  };

  const getPositionMs = (positionDisplay: number) => {
    const widthProgressBar = getWidthProgressBar();

    const relativDisplayPosition = positionDisplay / widthProgressBar;
    const positionMs = totalMs * relativDisplayPosition;

    return positionMs;
  };

  const getNewDisplayPositionPointer = (eventXValue: number) => {
    return eventXValue - widthPointerElement / 2;
  };

  const clearAllIntervalls = () => {
    for (var i = 1; i < 999; i++) clearInterval(i);
    intervallRef.current = undefined;
  };

  return {
    handleClickProgressBar,
    handleDragStart,
    handleDragEnd,
    handleDragging,
    handleHoverProgressBar,
    handleMouseLeave,
    getCurrentPositionPointer,
    getWidthProgressBar,
    playbackProgress,
    pointerRef,
    progressBarRef,
    isHoveringProgressBar,
    positionPointer,
  };
};
