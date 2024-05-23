import React , {useState} from 'react'

export default function TextArea(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!",'success')
    }
    
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!",'success')
    }
    
    const handleClear = () =>{
        let newText='';
        setText(newText);
        props.showAlert("All Text cleared",'success')
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (<>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3"style={{color: props.mode==='dark'?'white':'black'}}>
            <textarea className="form-control" value={text} id="my-box" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text above to preview it here."}</p>
        </div>
    </>
    )
}
