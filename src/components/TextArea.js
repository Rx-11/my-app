
import React, {useState} from 'react'

export default function TextArea(props) {
    const HandleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const HandleonChange = (event)=>{
        setText(event.target.value)
    }
    const HandleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const HandleclearClick = ()=>{
        let newText = ('');
        setText(newText)
    }
    // const HandleModeClick = ()=>{
    //     if(style.backgroundColor === 'white'){
    //         setstyle({
    //             color: 'white' ,
    //         backgroundColor: '#2D3033'
    //         })
    //         setMode('Light Mode')
    //     }
    //     else{
    //         setstyle({
    //             color: '#2D3033',
    //             backgroundColor: 'white'
    //         })
    //         setMode('Dark Mode')
    //     }
    // }
    // const [Mode, setMode]= useState('Dark Mode')
    // const [style, setstyle]= useState({
    //     color: '#2D3033',
    //     backgroundColor: 'white'
    //     })
    const [text, setText]= useState('');
    return (
    <>
    <div className={`container text-${props.mode==='light'?'black':'white'}` }>
        <h1>{props.heading}</h1>
  <div className={`mb-3`} >
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#616466', color: props.mode==='dark'?'white':'black'}} onChange={HandleonChange} id="Box1" rows="8"></textarea>
  </div>
  <button onClick={HandleUpClick} className="btn btn-primary">Convert To Uppercase</button>
  <button onClick={HandleLoClick} className="btn btn-primary mx-2">Convert To Lowercase</button>
  <button onClick={HandleclearClick} className="btn btn-primary mx-2">Clear Text</button>
  {/* <button onClick={HandleModeClick} className="btn btn-primary mx-2">{Mode}</button> */}
  </div>
  <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
</>
  )
}
