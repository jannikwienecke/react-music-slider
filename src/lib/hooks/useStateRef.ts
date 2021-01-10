import React from "react";
import { Media } from "./useSlider";

export interface PropsStateRef {
  playRef: React.MutableRefObject<boolean>;
  mediaRef: React.MutableRefObject<{ mediaId: number; totalMs: number }>;
  currentMsRef: React.MutableRefObject<number>;
}

export interface PropsUseStateRef {
  isPlaying: boolean;
  currentMsSong: number;
  media: Media;
}

export const useStateRef = ({
  isPlaying,
  currentMsSong,
  media,
}: PropsUseStateRef): PropsStateRef => {
  const playRef = React.useRef(isPlaying);
  const currentMsRef = React.useRef(currentMsSong);
  const mediaRef = React.useRef({
    mediaId: media.mediaId,
    totalMs: media.totalMs,
  });

  // HANDLE CHANGES TO CURRENT SONG
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
