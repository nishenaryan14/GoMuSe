import React, { createContext, useState, useContext, useRef } from "react";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const audioPlayerRef = useRef(null);
  const [playList, setPlayList] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);

  const handleUpload = (fileName, fileData) => {
    localStorage.setItem(fileName, fileData);
    const updatedPlaylist = [...playList, fileName];
    setPlayList(updatedPlaylist);
    localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
  };

  const playSong = (index) => {
    setCurrentSongIndex(index);
  };

  const nextPlay = () => {
    console.log("Next song");
    setCurrentSongIndex((prevSongIndex) => {
      if (prevSongIndex + 1 < playList.length) {
        return prevSongIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const stopPlayback = () => {
    setCurrentSongIndex(-1);
  };

  return (
    <PlaylistContext.Provider
      value={{
        audioPlayerRef,
        playList,
        nextPlay,
        setPlayList,
        currentSongIndex,
        handleUpload,
        playSong,
        stopPlayback,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
export const usePlaylist = () => useContext(PlaylistContext);
