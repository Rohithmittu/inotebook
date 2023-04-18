import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = props => {
  const notesInitial = [
    {
      _id: "6434181a57f785c8cd86ed61",
      user: "642eff111961ff6b6a4ab480",
      title: "my title",
      description: "try to wake up early",
      tag: "General",
      date: "2023-04-10T14:07:22.396Z",
      __v: 0,
    },
    {
      _id: "6434182257f785c8cd86ed67",
      user: "642eff111961ff6b6a4ab480",
      title: "my tiitle",
      description: "try to wake up early",
      tag: "General",
      date: "2023-04-10T14:07:30.298Z",
      __v: 0,
    },
    {
      _id: "64341dbb57f785c8cd86ed6a",
      user: "642eff111961ff6b6a4ab480",
      title: "my tiitle",
      description: "try to wake up early",
      tag: "personal",
      date: "2023-04-10T14:31:23.391Z",
      __v: 0,
    },
    {
      _id: "64341dbd57f785c8cd86ed6c",
      user: "642eff111961ff6b6a4ab480",
      title: "my tiitle",
      description: "try to wake up early",
      tag: "personal",
      date: "2023-04-10T14:31:25.824Z",
      __v: 0,
    },
    {
      _id: "64341de40ce442cbd40c7d97",
      user: "642eff111961ff6b6a4ab480",
      title: "my tiitle",
      description: "try to wake up early",
      tag: "General",
      date: "2023-04-10T14:32:04.619Z",
      __v: 0,
    },
    {
      _id: "64341e1a72481392a2d80257",
      user: "642eff111961ff6b6a4ab480",
      title: "my tiitle",
      description: "try to wake up early",
      tag: "General",
      date: "2023-04-10T14:32:58.188Z",
      __v: 0,
    },
    {
      _id: "64341e2e72481392a2d80259",
      user: "642eff111961ff6b6a4ab480",
      title: "my tiitle",
      description: "try to wake up early",
      tag: "personal",
      date: "2023-04-10T14:33:18.595Z",
      __v: 0,
    },
    {
      _id: "64341e5772481392a2d8025b",
      user: "642eff111961ff6b6a4ab480",
      title: "my tiitle",
      description: "try to wake up early",
      tag: "personal",
      date: "2023-04-10T14:33:59.870Z",
      __v: 0,
    },
    {
      _id: "64341e5872481392a2d8025d",
      user: "642eff111961ff6b6a4ab480",
      title: "my tiitle",
      description: "try to wake up early",
      tag: "personal",
      date: "2023-04-10T14:34:00.494Z",
      __v: 0,
    },
    {
      _id: "64341e5872481392a2d8025f",
      user: "642eff111961ff6b6a4ab480",
      title: "my tiitle",
      description: "try to wake up early",
      tag: "personal",
      date: "2023-04-10T14:34:00.936Z",
      __v: 0,
    },
    {
      _id: "64341fbc72481392a2d80261",
      user: "642eff111961ff6b6a4ab480",
      title: "new note",
      description: "please access the playlist",
      tag: "audio",
      date: "2023-04-10T14:39:56.169Z",
      __v: 0,
    },
  ];

  const [notes, setnotes] = useState(notesInitial);

  // Add note
  const addNote = (title, description, tag) => {
    //TODO: API call
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

  const deleteNote = (id) => {
    //TODO: API call
    console.log("Deleting Note with Id" + id)
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    
    setnotes(newNote);
  }

  // Edit note
  const editNote = (id, title, description, tag) => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
