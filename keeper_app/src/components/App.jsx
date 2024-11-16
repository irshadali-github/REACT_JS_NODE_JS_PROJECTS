import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Form from "./Form";

function App(){
    const [fullNote, setFullNote]= useState({title:"",content:""});
    const [addFullNote, setAddFullNote]= useState([]);
    
    function handleNoteChange(event){
        const {value, name}=event.target;
        setFullNote((prevValue)=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }
 
    function addNote(event){
        console.log("add button clicked");
        setAddFullNote((prevValue)=>{
            return [...prevValue,fullNote];
        })
        console.log(addFullNote);
        setFullNote(()=>{
            return {
                title:"",
                content:""
            }
        });
        event.preventDefault();
    }
    return(
        <div>
            <Header />
            <Form noteChange={handleNoteChange}
                fullText={fullNote}
                addNotes={addNote}/>
            {addFullNote.map((note,index)=>{
                return(
                <Note 
                key={index}
                id={index}
                title={note.title}
                content={note.content} />
            );
            })}
            
            <Footer />
        </div> 
    );
}
export default App;