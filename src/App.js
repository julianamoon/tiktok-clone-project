import React, { useEffect, useState } from 'react';
import './App.css';
import db from './config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite';

// Páginas
import Video from './pages/Video';

function App() {
  let maxheight;
  if(window.innerHeight <= 800) {
    maxheight = window.innerHeight
  }

  const [video, setVideos] = useState([])

  const getVideos = async () => {
    const videosCollection = collection(db, 'videos')
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())

    setVideos(videosList)
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="App" style={{ maxHeight: maxheight + "px" }}>
      <div className='app__videos'>
        { video.map((item) => {
          return (
            <Video
            likes={item.likes}
            messages={item.messages}
            shares={item.shares}
            name={item.name}
            description={item.description}
            music={item.music}
            url={item.url}
            />
          )
        }) }

      </div>
    </div>
  );
}

export default App;
