import React from "react";
import { PropsStyleSliderProgress } from "../types";
import "./Slider.css";
interface ProgressBarSiderContainerProps {
    hover: boolean;
    progress: number;
    stylesSliderProgress?: PropsStyleSliderProgress;
}
export declare const ProgressBarSiderContainer: React.FC<ProgressBarSiderContainerProps>;
export {};
