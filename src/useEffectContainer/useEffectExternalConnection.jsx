import React, { useState ,useEffect} from 'react';

const useEffectExternalConnection = () => {
  const [show,setShow]=useState(false);
  const [roomId,setRoomId]=useState("general");  

  return (
    <div>
      <label htmlFor="">Choose Chat Room</label>
      <select 
        name="chatRoom" 
        value={roomId} 
        onChange={(e)=> setRoomId (e.target.value)}
      >
        <option value="music">Music</option>
        <option value="general">General</option>
        <option value="sports">Sports</option>
      </select>
      <button
        onClick={(e)=> setShow(!show)}
      >{show===false ? "Open Chat" : "Close Chat"}</button>  
      {show && <hr/>}
      {show && <ChatRoom roomId={roomId}/>}
    </div>
  )
}

const createServer=(serverUrl,roomId)=>{
    return {
        connect(){
           console.log(`server is connected ${serverUrl} with room ${roomId} `);     
        },disconnect(){
         console.log(`server is disconnected ${serverUrl} with room ${roomId} `);     
        }
    }
}
const ChatRoom=({roomId})=>{
    const [serverUrl,setServerUrl]=useState("http://localhost:4000");

    useEffect(()=>{
        const connection = createServer(serverUrl,roomId);
        connection.connect();
        return()=>{
            connection.disconnect();
        }
    },[roomId,serverUrl])

    return(
        <>
        <label htmlFor="">server url</label>
        <input 
            type="text" 
            value={serverUrl} 
            onChange={(e)=> setServerUrl(e.target.value)} 
        />
        <h1>Welcome to the room {roomId} with server {serverUrl}</h1>
        </>
    )
}



export default useEffectExternalConnection;

