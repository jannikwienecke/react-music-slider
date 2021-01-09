import React from "react";
export declare const useSlider: (onChangeCallBack: (ms: number) => void) => {
    play: boolean;
    setPlay: React.Dispatch<React.SetStateAction<boolean>>;
    currentMs: number;
    setCurrentMs: React.Dispatch<React.SetStateAction<number>>;
    onChange: (ms: number) => Promise<number>;
};
