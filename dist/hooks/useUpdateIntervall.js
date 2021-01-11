import React from 'react';
export const useUpdateIntervall = ({ updateState, stateUpdateIntervall, }) => {
    const stateUpdateRef = React.useRef();
    const startIntervall = React.useCallback(() => {
        stateUpdateRef.current = window.setInterval(() => {
            updateState();
        }, stateUpdateIntervall);
    }, [stateUpdateIntervall, updateState]);
    React.useEffect(() => {
        if (stateUpdateRef.current)
            return;
        startIntervall();
        return () => {
            window.clearInterval(stateUpdateRef.current);
            stateUpdateRef.current = undefined;
        };
    }, [startIntervall]);
    return { stateUpdateRef, startIntervall };
};
