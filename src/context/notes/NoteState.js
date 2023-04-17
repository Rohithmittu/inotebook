import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) => {
    
  const s1 = {
    "name":"mittu",
    "class":"btech"
   
  }
  const [state, setState] = useState(s1);
  const update = () =>{
    setTimeout(()=>{
        setState({
            
    "name":"rohith",
    "class":"561"
  
        })
    },2000)
  }
  
  return (
    <NoteContext.Provider value={{state,update}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;