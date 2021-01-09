import React from "react";
import { usePrevious } from "./usePrevious";
export let widthPointerElement = 15;
export const useProgressBar = ({ handleChange, onEnd, state, }) => {
    var _a;
    const [positionPointer, setPositionPointer] = React.useState(0);
    const [isHoveringProgressBar, setIsHoveringProgressBar] = React.useState(false);
    const { isPlaying: play, totalMsSong: totalMs, currentMsSong: currentMs, } = state;
    const [playbackProgress, setPlaybackProgress] = React.useState(currentMs / totalMs);
    const pointerRef = React.useRef(null);
    const intervallRef = React.useRef();
    const progressBarRef = React.useRef(null);
    const isDragging = React.useRef(false);
    const startProgressBar = (_a = progressBarRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().left;
    const _handlePositionChange = (eventXValue) => {
        if (startProgressBar === undefined)
            return;
        const newXValue = eventXValue - startProgressBar;
        const newDisplayPosition = getNewDisplayPositionPointer(newXValue);
        const newMsPosition = getPositionMs(newDisplayPosition);
        setPlaybackProgress(newMsPosition / totalMs);
        clearAllIntervalls();
        if (!handleChange) {
            console.warn("Please Provide a handleChange Function");
            return;
        }
        handleChange(newMsPosition);
    };
    const handleClickProgressBar = (event) => {
        if (isDragging.current)
            return;
        clearAllIntervalls();
        _handlePositionChange(event.pageX);
    };
    const handleHoverProgressBar = () => {
        setIsHoveringProgressBar(true);
    };
    const handleMouseLeave = () => {
        if (isDragging.current)
            return;
        setIsHoveringProgressBar(false);
    };
    const handleDragStart = () => {
        isDragging.current = true;
        clearAllIntervalls();
    };
    const handleDragging = (event) => {
        const eventXValue = event.pageX;
        isDragging.current = true;
        clearAllIntervalls();
        if (startProgressBar === undefined)
            return;
        const newXValue = eventXValue - startProgressBar;
        const newDisplayPosition = getNewDisplayPositionPointer(newXValue);
        const newMsPosition = getPositionMs(newDisplayPosition);
        setPositionPointer((newMsPosition / totalMs) * getWidthProgressBar());
    };
    const handleDragEnd = (event) => {
        _handlePositionChange(event.pageX);
        setIsHoveringProgressBar(false);
        setTimeout(() => {
            isDragging.current = false;
        }, 0);
    };
    React.useEffect(() => {
        if (playbackProgress) {
            if (playbackProgress.toFixed(2) === "1.00") {
                clearAllIntervalls();
                onEnd();
            }
            else
                setPositionPointer(playbackProgress * getWidthProgressBar());
        }
    }, [playbackProgress, onEnd]);
    const getWidthProgressBar = () => {
        if (!progressBarRef.current)
            return 0;
        return progressBarRef.current.getBoundingClientRect().width;
    };
    const getCurrentPositionPointer = () => {
        var _a;
        if (!pointerRef.current)
            return 0;
        return (_a = pointerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().x;
    };
    const getPositionMs = (positionDisplay) => {
        const widthProgressBar = getWidthProgressBar();
        const relativDisplayPosition = positionDisplay / widthProgressBar;
        const positionMs = totalMs * relativDisplayPosition;
        return positionMs;
    };
    const getNewDisplayPositionPointer = (eventXValue) => {
        return eventXValue - widthPointerElement / 2;
    };
    const startIntervall = React.useCallback(() => {
        if (!play)
            return;
        clearInterval(intervallRef.current);
        intervallRef.current = window.setInterval(() => {
            setPlaybackProgress((position) => {
                const currentMsValue = position * totalMs;
                const newProcent = (currentMsValue + 50) / totalMs;
                return newProcent;
            });
        }, 50);
    }, [totalMs, play]);
    const clearAllIntervalls = () => {
        if (!intervallRef.current)
            return;
        clearInterval(intervallRef.current);
    };
    const prevState = usePrevious(state);
    React.useEffect(() => {
        window.clearInterval(intervallRef.current);
<<<<<<< HEAD
        if (state.currentMsSong !== (prevState === null || prevState === void 0 ? void 0 : prevState.currentMsSong)) {
            setPlaybackProgress(state.currentMsSong / state.totalMsSong);
        }
=======
        setPlaybackProgress(state.currentMsSong / state.totalMsSong);
>>>>>>> aad48941d2fa83d5351d13a58453e46a73e59ea3
        if (state.isPlaying)
            startIntervall();
    }, [state]);
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
