import React from 'react';
import { useMediaState } from './useMediaState';
import { useStateRef } from './useStateRef';
import { useUpdateIntervall } from './useUpdateIntervall';
import { useChangesHandler } from './useChangesHandler';
export const useSlider = ({ isPlaying, currentMsSong, media, stateUpdateIntervall, onSettledChange, onMsChange, onEnd, statusRequestMsChange, }) => {
    const changedMs = React.useRef();
    const stateRef = useStateRef({
        isPlaying,
        currentMsSong,
        media,
    });
    const { state, updateState, updateSelectedState } = useMediaState(stateRef);
    const { stateUpdateRef, startIntervall } = useUpdateIntervall({
        updateState,
        stateUpdateIntervall: stateUpdateIntervall || 3000,
    });
    useChangesHandler({
        isPlaying,
        media,
        updateSelectedState,
        updateState,
        statusRequestMsChange,
        onSettledChange,
        changedMs,
    });
    const handleMsChange = (ms) => {
        clearInterval(stateUpdateRef.current);
        stateUpdateRef.current = undefined;
        onMsChange(ms);
        changedMs.current = ms;
        if (!stateUpdateRef.current) {
            startIntervall();
        }
    };
    const handleEnd = React.useCallback(() => {
        onEnd && onEnd();
    }, []);
    const handleDragStart = React.useCallback(() => {
        clearInterval(stateUpdateRef.current);
        stateUpdateRef.current = undefined;
    }, []);
    return { state, handleMsChange, handleDragStart, handleEnd };
};
