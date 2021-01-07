import React from "react";
import "./ProgressBarPointer.css";
import { widthPointerElement } from "../hooks/useProgressBar";
export const PointerElement = ({ hover, stylesPointer, }) => {
    const defaultStyles = {
        width: `${widthPointerElement}px`,
        height: "15px",
        backgroundColor: "lightgrey",
        position: "absolute",
        borderRadius: "10px",
        top: "-3.5px",
        left: "-1.75px",
    };
    const styles = hover
        ? Object.assign(Object.assign({}, defaultStyles), stylesPointer) : {};
    return React.createElement("div", { className: "slider-pointer", style: styles });
};
