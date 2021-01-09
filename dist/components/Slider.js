import React from "react";
import { useProgressBar } from "../hooks/useProgressBar";
import { Pointer } from "./Pointer";
import { ProgressBarSideContainer } from "./ProgressBarSideContainer";
import "./Slider.css";
const Slider = ({ handleChange, handleDragStart, onEnd, state, stylesSlider, stylesSliderProgress, stylesPointer, }) => {
    const pB = useProgressBar({
        handleChange,
        handleDragStart,
        onEnd,
        state,
    });
    const styles = Object.assign({
        backgroundColor: "rgba(75, 85, 99, 1)",
        height: "0.5rem",
        width: "75%",
        margin: "0 auto",
    }, stylesSlider);
    return (React.createElement("div", { className: "slider-wrapper", role: "button", tabIndex: -1, onKeyDown: () => { }, onFocus: () => { }, style: styles, ref: pB.progressBarRef, onClick: pB.handleClickProgressBar, onMouseOver: pB.handleHoverProgressBar, onMouseLeave: pB.handleMouseLeave },
        React.createElement(ProgressBarSideContainer, { progress: pB.playbackProgress, hover: pB.isHoveringProgressBar, stylesSliderProgress: stylesSliderProgress },
            React.createElement(Pointer, { pB: pB, stylesPointer: stylesPointer }))));
};
export default React.memo(Slider);
