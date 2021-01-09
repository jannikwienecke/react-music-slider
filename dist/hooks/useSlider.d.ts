import React from "react";
export declare const useSlider: (onChangeCallBack: (ms: number) => void) => {
    play: boolean;
    setPlay: React.Dispatch<React.SetStateAction<boolean>>;
    currentMs: number;
    setCurrentMs: React.Dispatch<React.SetStateAction<number>>;
    setMedia: React.Dispatch<React.SetStateAction<{
        mediaId: number;
        totalMs: number;
    }>>;
    media: {
        mediaId: number;
        totalMs: number;
    };
    onChange: (ms: number) => Promise<number>;
};
