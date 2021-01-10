import React from "react";
import { StateSliderProps } from "../types";
import { Media, Status } from "./useSlider";
export interface PropsUseChangesHandler {
    isPlaying: boolean;
    media: Media;
    updateSelectedState: (selectedState: Partial<StateSliderProps>) => void;
    updateState: () => void;
    statusRequestMsChange: Status;
    onSettledChange: () => void;
    changedMs: React.MutableRefObject<number | undefined>;
}
export declare const useChangesHandler: ({ isPlaying, media, updateState, updateSelectedState, statusRequestMsChange, onSettledChange, changedMs, }: PropsUseChangesHandler) => void;
