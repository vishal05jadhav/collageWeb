import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/video.mp4'
const Videoplayer = ({playstate,setPlaystate}) => {
   
const closeplayer =(e)=>{
    if(e.target === player.current){
        setPlaystate(false)
    }

}
    const player = useRef(null)
  return (
    <div className={`video-player ${playstate ? "" : "hide"} ` } ref={player} onClick={closeplayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer