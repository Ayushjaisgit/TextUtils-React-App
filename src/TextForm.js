import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked")
    setText("You have clicked on handleUpClick")
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleloClick = () => {
    console.log("lowercase was clicked")
    setText("You have clicked on handleUpClick")
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleclearClick = () => {
    console.log("clear was clicked")
    setText("You have clicked on handleUpClick")
    let newText = '';
    setText(newText)
  }
  const handleCopy = () =>{
    console.log("i am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleOnChange = (event) => {
    console.log("Uppercase was clicked")
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  // text="new text" // wrong way to change the state
  // setText("new text") // correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode === `light` ? '#2e3033' : 'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="mybox" class="form-label">Example textarea</label> */}
        {/* twoo curly braces are used because in style fist braces are used so that we can write javascript and another one is used to put object inside it and this is the method to write an object  */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === `black` ? '#2e3033' : 'white', color: props.mode === `light` ? '#2e3033' : 'white'}} id="mybox" rows="10"></textarea>
      </div>
      
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick} >Convert to lowecase</button>
      <button className="btn btn-primary mx-2" onClick={handleclearClick} >Clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
    </div>

    {/* logic for word and character count  */}

    <div className="container my-4"  style={{color:props.mode === `light` ? '#2e3033' : 'white'}}>
      <h1>Here's Your text summary</h1>
      <p>{text.split(" ").length} Words and {text.length} characters</p>

      {/* reference of 0.008 is it is this much of time in minute for a person to read words per minute but it will count a person takes 0.008 minute to read a single word  */}

      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>

      {/* ? this is the turnary operator */}

      <p>{text.length>0 ? text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}

