import React, {useState} from "react";

function Form(props){
    return(
        <form onSubmit={props.addNotes}>
        <input onChange={props.noteChange} value={props.fullText.title} name="title" placeholder="Title" />
        <textarea onChange={props.noteChange} value={props.fullText.content} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>);
}
export default Form;