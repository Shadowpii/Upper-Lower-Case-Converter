import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleDownClick = () =>{
        //console.log("Uppercase was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () =>{
        //console.log("Uppercase was Clicked");
        let newText = ('');
        setText(newText);
    };

    const handleOnChange = (event) =>{
       // console.log("On Change");
        setText(event.target.value);
    };
    const [text, setText] = useState("");
  //  setText("new text");
    return (
        <>
        <div className="Container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
           <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} value={text}  onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="Container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Time needed to read {0.008 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter For Preview"}</p>
        </div>
        </>
    )
}