import React from 'react';
import { usePrevious } from './usePrevious';
export const useChangesHandler = ({ isPlaying, media, updateState, updateSelectedState, statusRequestMsChange, onSettledChange, changedMs, }) => {
    const prevMediaId = usePrevious(media.mediaId);
    const prevStatusRequestMsChange = usePrevious(statusRequestMsChange);
    React.useEffect(() => {
        if (!prevMediaId && media.mediaId) {
            updateState();
        }
    }, [media.mediaId, prevMediaId, updateState]);
    React.useEffect(() => {
        updateSelectedState({ isPlaying });
    }, [isPlaying, updateSelectedState]);
    React.useEffect(() => {
        if (prevStatusRequestMsChange === 'loading' &&
            statusRequestMsChange === 'success') {
            console.log('success....');
            updateSelectedState({ currentMsSong: changedMs.current || 0 });
            onSettledChange();
        }
    }, [statusRequestMsChange]);
};
