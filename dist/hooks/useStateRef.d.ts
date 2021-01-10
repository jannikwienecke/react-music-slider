import React from "react";
import { Media } from "./useSlider";
export interface PropsStateRef {
    playRef: React.MutableRefObject<boolean>;
    mediaRef: React.MutableRefObject<{
        mediaId: number;
        totalMs: number;
    }>;
    currentMsRef: React.MutableRefObject<number>;
}
export interface PropsUseStateRef {
    isPlaying: boolean;
    currentMsSong: number;
    media: Media;
}
export declare const useStateRef: ({ isPlaying, currentMsSong, media, }: PropsUseStateRef) => PropsStateRef;
