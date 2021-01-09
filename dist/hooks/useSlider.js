var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from "react";
export const useSlider = (onChangeCallBack) => {
    const [play, setPlay] = React.useState(false);
    const [currentMs, setCurrentMs] = React.useState(0);
    const [media, setMedia] = React.useState({ mediaId: 1, totalMs: 200000 });
    const onChange = React.useCallback((ms) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield onChangeCallBack(ms);
            return ms;
        }
        catch (error) {
            return Promise.reject("ERROR");
        }
    }), []);
    return {
        play,
        setPlay,
        currentMs,
        setCurrentMs,
        setMedia,
        media,
        onChange,
    };
};
