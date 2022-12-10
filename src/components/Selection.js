import React,{useState} from 'react'
import "../styles/Child.css";

let Selection = ({applyColor}) =>  {
    const [selectBackground , setBackground] = useState({
        background :"" 
    })
    
    // console.log(key);
    // function updateSelectionStyle(nextBackground){
    //     setBackground(nextBackground);
    // }
  return <>
    
    <div className='fix-box'  style={selectBackground} onClick={()=>applyColor(setBackground)}>
        <h2 className='subheading'>"Selection"</h2>
         </div>
         </>

  
}

export default Selection;
