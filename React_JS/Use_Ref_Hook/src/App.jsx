import { useState , useEffect, useRef } from 'react'
// import reactLogo from '.React_JS\Use_Ref_Hook\src\assets\react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>
          Tom
        </button>
        <button onClick={() => scrollToIndex(1)}>
          Maru
        </button>
        <button onClick={() => scrollToIndex(2)}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul ref={listRef} style={{height:"200px",overflow:"auto"}}>
          <li>
           <img style={{width:"200px"}} src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" alt="img" />
          </li>
          <li>
            <img style={{width:"200px"}}
              src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
              alt="Maru"
            />
          </li>
          <li>
            <img style={{width:"200px"}}
              src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>
    </>
  );
}


export default CatFriends
