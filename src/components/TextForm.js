import React, { useState } from 'react';
import copy from "copy-to-clipboard";


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was cliked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase', 'success');
  }
  const handleloClick = ()=>{
    // console.log("uppercase was cliked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'success');
  }
  const handleclearClick = ()=>{
    // console.log("uppercase was cliked" + text);
    let newText ='';
    setText(newText);
  }
  
  
  const handlecopyClick = () => {
    copy(text);
    alert(`You have copied "${text}"`);
};
  const handleOnChange = (event)=>{
    // console.log("on Change");
    setText(event.target.value);
    
  }
  
    const [text, setText] = useState('');
    // setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode=== 'dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} value={text} id="mybox" onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to lowercase</button>
      <button className="btn btn-danger mx-1" onClick={handleclearClick}>Remove Text</button>
      <button className="btn btn-danger mx-1" onClick={handlecopyClick}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summery</h2>
      <p>{text.split(" ").length} Words and {text.length} Charecters</p>
      <p>{0.008 * text.split(" ").length} Minute to be read the peragraph</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter the text in to the textbox to preview here'}</p>
    </div>
    </>
  );
}
