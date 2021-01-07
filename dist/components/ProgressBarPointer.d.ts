import React from "react";
import { PropsStylesPointer } from "../types";
import "./ProgressBarPointer.css";
export interface PointerElementProps {
    hover: boolean;
    stylesPointer?: PropsStylesPointer;
}
export declare type Ref = HTMLDivElement;
export declare const PointerElement: React.FC<PointerElementProps>;
