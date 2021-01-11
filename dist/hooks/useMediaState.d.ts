import { StateSliderProps } from '../types';
import { PropsStateRef } from './useStateRef';
export interface PropsUseMediaState extends PropsStateRef {
}
export declare const useMediaState: ({ playRef, mediaRef, currentMsRef, }: PropsUseMediaState) => {
    state: StateSliderProps;
    updateState: () => void;
    updateSelectedState: (newState: Partial<StateSliderProps>) => void;
};
