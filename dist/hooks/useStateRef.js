import React from "react";
export const useStateRef = ({ isPlaying, currentMsSong, media, }) => {
    const playRef = React.useRef(isPlaying);
    const currentMsRef = React.useRef(currentMsSong);
    const mediaRef = React.useRef({
        mediaId: media.mediaId,
        totalMs: media.totalMs,
    });
    React.useEffect(() => {
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
