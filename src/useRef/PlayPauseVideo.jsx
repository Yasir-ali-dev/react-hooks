import React, { useRef, useState } from 'react';


const PlayPauseVideo = () => {
  const [isPlaying, setIsPlaying]=useState(false);
  const ref = useRef(null);

  const handleClick=()=>{
    const nextPlaying = !isPlaying;
    setIsPlaying(nextPlaying)
    if(nextPlaying){
      ref.current.play();
    }
    else{
      ref.current.pause();
    }
  }

  return (
    <div>
      <button onClick={handleClick}  >{isPlaying ? "Pause" : "Play"}</button>
      <video 
        width={"350px"}
        ref={ref}
        onPlay={()=> setIsPlaying(true)}
        onPause={()=> setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
        </video>  
    </div>
  )
}

export default PlayPauseVideo;