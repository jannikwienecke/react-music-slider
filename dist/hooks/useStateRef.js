import React from 'react';
export const useStateRef = ({ isPlaying, currentMsSong, media, }) => {
    const playRef = React.useRef(isPlaying);
    const currentMsRef = React.useRef(currentMsSong);
    const mediaRef = React.useRef({
        mediaId: media.mediaId,
        totalMs: media.totalMs,
    });
    const intervalRef = React.useRef();
    const startIntervall = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = 0;
        currentMsRef.current += 130;
        intervalRef.current = window.setInterval(() => {
            currentMsRef.current += 100;
        }, 100);
    };
    React.useEffect(() => {
        if (playRef.current) {
            startIntervall();
        }
        else {
            intervalRef.current && clearInterval(intervalRef.current);
            intervalRef.current = 0;
        }
        currentMsRef.current = currentMsSong;
    }, [currentMsSong]);
    React.useEffect(() => {
        mediaRef.current = {
            mediaId: media.mediaId,
            totalMs: media.totalMs,
        };
    }, [media.mediaId, media.totalMs]);
    React.useEffect(() => {
        playRef.current = isPlaying || false;
    }, [isPlaying]);
    return { playRef, mediaRef, currentMsRef };
};
