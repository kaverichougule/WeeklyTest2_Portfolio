import React from 'react'
import "./LangSec.css"
const LangSec = (props) => {
    
    const Parentdiv = {
        height: '8px',
        width: '100%',
        backgroundColor: '#383838',
        borderRadius: 40,
        marginTop:20
      }
     
      const Childdiv = {
        height: '100%',
        width: props.progress+"%",
        backgroundColor: props.bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
     
       
    return (
    <div style={Parentdiv} key={props.id} className='LangSecComp'>
      <div style={Childdiv}>
        
      </div>
    </div>
    )
}
 
export default LangSec;