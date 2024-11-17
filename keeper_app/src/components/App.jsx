import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";

function App(){
    
    const [addFullNote, setAddFullNote]= useState([]);
    
   
 
    function addNote(fullNote){
        console.log("add button clicked");
        setAddFullNote((prevValue)=>{
           if(prevValue.length > 0){
                if(fullNote.content!=="" && fullNote.content!==""){
                    //console.log("both condition is true");
                    return [...prevValue,fullNote];
                }else{
                    //console.log("only first condition is true");
                    return [...prevValue];
                }
           }else{
                if(fullNote.content!=="" && fullNote.content!==""){
                    //console.log("else first condition is true");
                    return [fullNote];
                }else{
                    //console.log("else second condition is true");
                    return [];
                }
           }
            
        })
    }
    function deleteNote(id){
        setAddFullNote((prevValue)=>{
            return prevValue.filter((note,index)=>index!==id);
        })
    }
    return(
        <div>
            <Header />
            <Form addNotes={addNote}/>
            {addFullNote.map((note,index)=>{
                return(
                <Note 
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                delete={deleteNote} />
            );
            })}
            
            <Footer />
        </div> 
    );
}
export default App;