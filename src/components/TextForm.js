import React,{useState} from "react";

export default function TextForm(props) {
   
    // this is wrong way of updating text    text="this is new value";
    const handleUpClick=()=>{
        console.log("button clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
        //setText is function which will aloow us to set the text in text variable
    }
        
    const handleLoClick=()=>{
      console.log("button clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");

    }
    const handlecapitalise=()=>{
        let arr=text.split(" ");
        let newText="";
        for(let a=0;a<arr.length;a++)
        {
            newText+=arr[a].substring(0,1).toUpperCase()+arr[a].substring(1);
            if(a!==arr.length-1){
               newText+=" ";
            }
            
        }
        setText(newText);
        props.showAlert("Capitalised every first letter","success");

    }
    const handleclear=()=>{
       setText("");
       props.showAlert("Cleared text","success");

    }
    const handlechange=(event)=>{
        console.log("converting text");
        setText(event.target.value);
    }

   const handleCopy=()=>{
      let txt=document.getElementById("myBox");//it will get textarea element
      txt.select();
      navigator.clipboard.writeText(txt.value); 
      props.showAlert("Copied text","success");

   }
    // Declare a new state variable, which we'll call "text"
     const [text, setText] = useState("Enter text here");
  return (
    <>
        <div className="container mb-3">
          <h1 style={{color:props.mode==="light"?"black":"white"}}>{props.heading}</h1>
          <textarea className="form-control my-3" id="myBox" value={text} style={{backgroundColor:props.mode==="light"?"white":"#031632",color:props.mode==="light"?"black":"white"}} onChange={handlechange} row="81"></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecapitalise}>Capitalise</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclear}>Clear</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>

        </div>
        <div className={`container text-${props.mode==="light"?"grey":"light"}`}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
          <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
          <h3>preview</h3>
          <p>{text}</p>
        </div>
    </>
  );
}
/****
   here comes the concept of state
   props is :- we are passing any defined value through the component and it will render in our page
   but state is like variable which is going to change accoring to events 
   importing the useState hook to react app
   hooks helps to use class features without making class
   in textarea we have used our variable text which has its default value "Enter text here"

   <div className={`container text-${props.mode==="light"?"grey":"light"}`}>
      means using {} we are encodig class into javascript and changing its variable using ternary operator 
      with the help of back tick ` and dollor sign $
****/

/***
abbrevation used:-
   1.button.btn.btn-primary
   2.div.container 
***/

// .filter method will only allow those element whose satisfy the criteria