import React, { useEffect, useState } from "react";
import Upload from "./Upload";
import { usePlaylist } from "../../PlayListContext";

const Playlist = () => {
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
    const storedPlaylist = JSON.parse(localStorage.getItem("playlist")) || [];
    setPlayList(storedPlaylist);
  }, []);

  const handleSongPlay = (index) => {
    if (index === currentSongIndex) {
      if (audioPlayerRef.current) {
        if (audioPlayerRef.current.paused) {
          audioPlayerRef.current.play();
        } else {
          audioPlayerRef.current.pause();
        }
      }
    } else {
      playSong(index);
    }
  };
  return (
    <div className="playList">
      <div className="playListTop">
        <p>Playlist</p>
      </div>
      <div className="playListContent">
        {playList.map((song, index) => (
          <li
            className={`${index === currentSongIndex && "active"}`}
            key={index}
            onClick={() => handleSongPlay(index)}
          >
            {song}
          </li>
        ))}
      </div>
      <div className="playListBottom">
        <Upload onUpload={handleUpload} />
      </div>
    </div>
  );
};

export default Playlist;
