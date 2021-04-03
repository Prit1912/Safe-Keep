import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

export default function CeateNote(props) {

  

  const [note, setNote] = useState(
   { 
    title: "",
    content: ""
  }
  );

  const inputEvent = (e) => {

    const value = e.target.value;
    const name = e.target.name;
    setNote((prev) =>{
      return(
        {
          ...prev,
          [name]: value
        }
      )
    }) 
  }

  const addEvent = () =>{
    if(note.title!=="" && note.content!== ""){
      props.passNote(note);
      setNote({
        title: "",
        content: ""
      })
    }
    
  }

    return (
        <>
          <div className = "main_note">
              <form>
                  <input type="text" value = {note.title} onChange = {inputEvent} name = "title" placeholder = "title"/>
                  <textarea rows="" cols="" value = {note.content} onChange = {inputEvent} name = "content" placeholder = "Write a Note"></textarea>
                  <Button className = "addbtn" onClick = {addEvent}>
                    <AddIcon className = "plus_sign"/>
                  </Button>
              </form>
          </div>  
        </>
    )
}
