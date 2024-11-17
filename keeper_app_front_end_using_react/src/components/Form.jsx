import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
// import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Form(props){
    const [fullNote, setFullNote]= useState({title:"",content:""});
    const [isState, setIsState]=useState(false);
    
    function handleNoteChange(event){
        const {value, name}=event.target;
        setFullNote((prevValue)=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }
    function addingNotes(event){
        props.addNotes(fullNote);
        setFullNote( {
                title:"",
                content:""
            })
        event.preventDefault();
    }
    function handleTextArea(event){
        console.log("Clicked");
        setIsState(true);
    }
    return(
        <form className="create-note">
        {isState && <input onChange={handleNoteChange} value={fullNote.title} name="title" placeholder="Title" />}
        <textarea onClick={()=>{handleTextArea()}} onChange={handleNoteChange} value={fullNote.content} name="content" placeholder="Take a note..." rows={isState? 3:1}  />
        <Zoom in={isState}>
        <button onClick={addingNotes}><AddIcon /></button>
        </Zoom>
     
      </form>);
}
export default Form;