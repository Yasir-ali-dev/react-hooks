import React, { useRef, useState } from 'react'

const ImageScrollRef = () => {

    const listRef = useRef(null);

    const [index,setIndex]=useState(0);

    function scrollToIndex(index ){
        const listNode = listRef.current;
        // This line assumes a particular DOM structure:
        const imgNode = listNode.querySelectorAll('li > img')[index];

        imgNode.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: "center"
        });
    }

    const handleNext=()=>{
      let currentIndex=index;
      if(currentIndex < 2 ){
        setIndex(index+1);
        scrollToIndex(currentIndex+1);
      }
      else if (currentIndex ===2){
        setIndex(0)
        scrollToIndex(0);
      }
    }
      
    const handlePrev=()=>{
      const currentIndex=index;
      if(currentIndex > 0 ){
        setIndex(index -1);
        scrollToIndex(currentIndex-1)
      }
      else if(currentIndex ===0 ){
        setIndex(2);
        scrollToIndex(2)
      }
    }


  return (
    <React.Fragment>
  
       <nav>
        {/* <button onClick={() => scrollToIndex(0)}>
          Tom
        </button>
        <button onClick={() => scrollToIndex(1)}>
          Maru
        </button>
        <button onClick={() => scrollToIndex(2)}>
          Jellylorum
        </button>
    */}
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>

      </nav>
   
      <div 
        style={{ width: "300px", 
            backgroundColor: "azure",
            overflow:"scroll",
            padding:"2em"
        }}

      >
        <ul style={{listStyle: "none",display:"flex"}} ref={listRef}>
          <li>
            <img
              src="/logo192.png"
              style={{backgroundColor:"black"}}
              alt="Tom"
            />
          </li>
          <li>
            <img
              style={{backgroundColor:"pink"}}  
              src="/logo192.png"
              alt="Maru"
            />
          </li>
          <li>
            <img
              style={{backgroundColor:"purple"}}
              src="/logo192.png"
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>

    </React.Fragment>
  )

}

export default ImageScrollRef;