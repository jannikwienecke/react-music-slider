import React from 'react';
export interface PropsUseUpdateIntervall {
    updateState: () => void;
    stateUpdateIntervall?: number;
}
export declare const useUpdateIntervall: ({ updateState, stateUpdateIntervall, }: PropsUseUpdateIntervall) => {
    stateUpdateRef: React.MutableRefObject<number>;
    startIntervall: () => void;
};
