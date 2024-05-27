import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {
  // const [count, setCount] = useState(0)
  const [bookmarks, setBookmarks]=useState([]);
  const [readingTime,setreadingTime]=useState(0);
  const handleMarkAsRead=time=>{
    const newReadingTime=readingTime+time;
    setreadingTime(newReadingTime);
  }
  const handleAddToBookmark=blog=>{
    const newBookMarks=[...bookmarks,blog];
    setBookmarks(newBookMarks);
  }
  return (
    <>
      {/* <h1 className='text-6xl bg-red-300' >Knowledge Cafe</h1> */}
      <Header></Header>
      <div className='md:flex max-w-7xl '>   
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div> 
    </>
  )
}

export default App
