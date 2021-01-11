import React from 'react';
export const useMediaState = ({ playRef, mediaRef, currentMsRef, }) => {
    const _getState = React.useCallback(() => {
        return {
            currentMediaId: mediaRef.current.mediaId,
            currentMsSong: currentMsRef.current,
            isPlaying: playRef.current,
            totalMsSong: mediaRef.current.totalMs,
        };
    }, []);
    const [state, setState] = React.useState(_getState());
    const updateState = React.useCallback(() => {
        setState(_getState());
    }, [_getState]);
    const updateSelectedState = React.useCallback((newState) => {
        setState(state => {
            return Object.assign(Object.assign({}, state), newState);
        });
    }, []);
    return { state, updateState, updateSelectedState };
};
