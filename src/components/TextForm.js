import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    // setText("New Text");

    const onChangeHandler = (e) => {
        // console.log("on Change is Clicked");
        setText(e.target.value);
    }

    const handleUpClick = () => {
        // console.log("change to upper case is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = () => {
        // console.log("change to upper case is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");

    }
    const handleClearClick = () => {
        // console.log("clear text is clicked");

        setText("enter your text.");
        props.showAlert("Text Area is Cleared", "success");

    }

    const handleCopyClick = () => {
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text is Coppied to Clipboard", "success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space is removed", "success");

    }

    function StringLength(word) {
        let temp = word.split(" ");
        let count = temp.length;

        temp.forEach(element => {
            if(element ===""){
                count--;
            }
        });

        return count;
    }



    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="form-group mb-3" >
                    <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="8" style={{ background: props.mode === 'light' ? 'white' : 'grey' }} ></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'primary'} `} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'primary'} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'primary'} mx-2`} onClick={handleClearClick}>Clear</button>
                <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'primary'} mx-2`} onClick={handleCopyClick}>Copy Text</button>
                <button className={`btn btn-${props.mode === 'light' ? 'secondary' : 'primary'} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your Text summery</h1>
                <p>{StringLength(text)} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{(text.length > 0)?text:"Enter something to preview"}</p>
            </div>
        </>


    )
}
