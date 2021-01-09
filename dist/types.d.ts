<<<<<<< HEAD
/// <reference types="react" />
export interface useProgressBarProps {
    startMs: number;
}
export interface PropsStyleSliderProgress {
    backgroundColor?: string;
    backgroundColorOnHover?: string;
}
export interface PropsStylesSlider {
    height?: string;
    width?: string;
    backgroundColor?: string;
    margin?: string;
}
export interface PropsStylesPointer {
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
    top?: string;
    left?: string;
}
export interface StateSliderProps {
    isPlaying: boolean;
    currentMediaId: number;
    currentMsSong: number;
    totalMsSong: number;
}
export interface ProgressBarProps {
    handleChange: (newMs: number) => void;
    onEnd: () => void;
    state: StateSliderProps;
    stylesSlider?: PropsStylesSlider;
    stylesSliderProgress?: PropsStyleSliderProgress;
    stylesPointer?: PropsStylesPointer;
}
export interface ReturnValueUseProgressBarProps {
    handleClickProgressBar: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleDragEnd: (event: React.MouseEvent<HTMLDivElement, MouseEvent> | any) => void;
    handleHoverProgressBar: () => void;
    handleDragStart: (event: React.MouseEvent<HTMLDivElement, MouseEvent> | any) => void;
    handleDragging: (event: React.MouseEvent<HTMLDivElement, MouseEvent> | any) => void;
    handleMouseLeave: () => void;
    getCurrentPositionPointer: () => void;
    getWidthProgressBar: () => number;
    pointerRef: React.RefObject<HTMLDivElement>;
    progressBarRef: React.RefObject<HTMLDivElement>;
    isHoveringProgressBar: boolean;
    playbackProgress: number;
    positionPointer: number;
}
=======
import { ProgressBarProps } from '@bit/jannikwienecke.personal.react-slider-types';
export { ProgressBarProps };
import { StateSliderProps } from '@bit/jannikwienecke.personal.react-slider-types';
export { StateSliderProps };
>>>>>>> aad48941d2fa83d5351d13a58453e46a73e59ea3
