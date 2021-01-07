import React from "react";
import Draggable from "react-draggable";
import { PointerElement } from "./ProgressBarPointer";
export const Pointer = ({ pB, stylesPointer }) => {
    return (React.createElement(Draggable, { axis: "x", handle: ".handle", bounds: { left: 0, right: pB.getWidthProgressBar() }, position: { x: pB.positionPointer, y: 0 }, onStart: pB.handleDragStart, onStop: pB.handleDragEnd, onDrag: pB.handleDragging },
        React.createElement("div", { className: "handle", ref: pB.pointerRef },
            React.createElement(PointerElement, { stylesPointer: stylesPointer, hover: pB.isHoveringProgressBar }))));
};
