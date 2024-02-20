import React, { useEffect, useRef } from "react";
import { usePlaylist } from "../../PlayListContext";
export const SeekBar = () => {
  const {
    audioPlayerRef,
    nextPlay,
    playList,
    setPlayList,
    playSong,
    handleUpload,
    stopPlayback,
    currentSongIndex,
  } = usePlaylist();
  useEffect(() => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.addEventListener("ended", nextPlay);
      return () => {
        audioPlayerRef.current.removeEventListener("ended", nextPlay);
      };
    }
  }, [currentSongIndex, nextPlay]);

  useEffect(() => {
    if (currentSongIndex !== -1 && audioPlayerRef.current) {
      //   setTimeout(() => {
      audioPlayerRef.current.load();
      audioPlayerRef.current.play();
      //   }, 2500);
    }
  }, [currentSongIndex]);
  return (
    <div className="seekBar">
      {currentSongIndex !== -1 && (
        <div className="audioPlayer">
          <audio controls autoPlay ref={audioPlayerRef}>
            <source
              src={localStorage.getItem(playList[currentSongIndex])}
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};
