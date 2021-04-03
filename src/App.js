import React, { useState } from 'react'
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CeateNote";
import Note from "./Note";
import "./App.css"
export default function App() {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) =>{
    
    setAddItem((prev)=>{
      return [...prev,note]
    })
    
  }

  const onDelete = (id) =>{
    setAddItem((prevdata)=>{
      return prevdata.filter((currData,indx) =>{
        return id !== indx;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateNote passNote = {addNote} />

      {addItem.map((value,index) => {
          return (
            <Note 
          key = {index}
          id = {index}
          title = {value.title}
          content = {value.content}
          deleteItem = {onDelete}
          />
          )
        })}

      <Footer />
    </div>
  )
}
