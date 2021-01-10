import { PropsUseStateRef } from "./useStateRef";
export declare type Status = "idle" | "loading" | "success" | "error" | undefined;
interface PropsUseMusicSlider extends PropsUseStateRef {
    onSettledChange: () => void;
    onMsChange: (ms: number) => void;
    onEnd?: () => void;
    statusRequestMsChange: Status;
    stateUpdateIntervall?: number;
}
export declare type Media = {
    mediaId: number;
    totalMs: number;
};
export declare const useSlider: ({ isPlaying, currentMsSong, media, stateUpdateIntervall, onSettledChange, onMsChange, onEnd, statusRequestMsChange, }: PropsUseMusicSlider) => {
    state: import("@bit/jannikwienecke.personal.react-slider-types").StateSliderProps;
    handleMsChange: (ms: number) => void;
    handleDragStart: () => void;
    handleEnd: () => void;
};
export {};
