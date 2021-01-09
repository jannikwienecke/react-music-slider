import React from "react";
import { ProgressBarProps } from "../types";
export declare let widthPointerElement: number;
export declare const useProgressBar: ({ handleChange, handleDragStart: tellUserDragStart, onEnd, state, }: ProgressBarProps) => {
    handleClickProgressBar: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleDragStart: () => void;
    handleDragEnd: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleDragging: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleHoverProgressBar: () => void;
    handleMouseLeave: () => void;
    getCurrentPositionPointer: () => number;
    getWidthProgressBar: () => number;
    playbackProgress: number;
    pointerRef: React.MutableRefObject<HTMLDivElement>;
    progressBarRef: React.MutableRefObject<HTMLDivElement>;
    isHoveringProgressBar: boolean;
    positionPointer: number;
};
