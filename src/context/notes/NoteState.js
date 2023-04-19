// import { json } from "react-router-dom";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = props => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setnotes] = useState(notesInitial);
  
  // Get all  note
  
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZWZmMTExOTYxZmY2YjZhNGFiNDgwIn0sImlhdCI6MTY4MDkzNTc4N30.4MPYLMgCOWLrFx7EBRlD1F6YjCXkIpZtEgy5xUHPuKA",
      }
     
    });
    const json = await response.json()
    console.log(json)
    setnotes(json)
    
  };

  // Add note
  const addNote = async (title, description, tag) => {
    //TODO: API call
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZWZmMTExOTYxZmY2YjZhNGFiNDgwIn0sImlhdCI6MTY4MDkzNTc4N30.4MPYLMgCOWLrFx7EBRlD1F6YjCXkIpZtEgy5xUHPuKA",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json)

    console.log("adding a new note");
    const note = {
      _id: "64341fbc72481392a2d80261",
      user: "642eff111961ff6b6a4ab480",
      title: title,
      description: description,
      tag: tag,
      date: "2023-04-10T14:39:56.169Z",
      __v: 0,
    };

    setnotes(notes.concat(note));
  };

  // Delete note

  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZWZmMTExOTYxZmY2YjZhNGFiNDgwIn0sImlhdCI6MTY4MDkzNTc4N30.4MPYLMgCOWLrFx7EBRlD1F6YjCXkIpZtEgy5xUHPuKA",
      }
    });
    const json =  await response.json();
    console.log(json)
    
    console.log("Deleting Note with Id" + id);
    const newNote = notes.filter(note => {
      return note._id !== id;
    });

    setnotes(newNote);
  };

  // Edit note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZWZmMTExOTYxZmY2YjZhNGFiNDgwIn0sImlhdCI6MTY4MDkzNTc4N30.4MPYLMgCOWLrFx7EBRlD1F6YjCXkIpZtEgy5xUHPuKA",
      },
      body: JSON.stringify({title,description,tag }),
    });
    const json = await response.json();
    console.log(json)

    
    
    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
