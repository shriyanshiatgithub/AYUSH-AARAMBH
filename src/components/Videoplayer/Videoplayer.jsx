import React, { useRef, useEffect } from 'react';
import './Videoplayer.css';

const Videoplayer = ({ playState, setPlayState }) => {
  const playerRef = useRef(null);
  const ytPlayer = useRef(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        ytPlayer.current = new window.YT.Player('ytplayer', {
          height: '315',
          width: '560',
          videoId: 'HClFyYiVK-8', // Replace with your YouTube video ID
          playerVars: {
            'autoplay': 0,
            'controls': 1,
          },
        });
      };
    } else {
      // If the API is already loaded, create the player immediately
      ytPlayer.current = new window.YT.Player('ytplayer', {
        height: '315',
        width: '560',
        videoId: 'HClFyYiVK-8', // Replace with your YouTube video ID
        playerVars: {
          'autoplay': 0,
          'controls': 1,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (playState && ytPlayer.current) {
      ytPlayer.current.playVideo(); // Play the video when playState is true
    } else if (!playState && ytPlayer.current) {
      ytPlayer.current.pauseVideo(); // Pause the video when playState is false
    }
  }, [playState]);

  const closePlayer = (e) => {
    if (e.target === playerRef.current) {
      setPlayState(false);
    }
  };

  return (
    <div className={`video ${playState ? '' : 'hide'}`} ref={playerRef} onClick={closePlayer}>
      <div id="ytplayer"></div>
    </div>
  );
}

export default Videoplayer;
