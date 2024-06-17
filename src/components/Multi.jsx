import { useState } from "react"
import Question from './Question.jsx'
import './Multi.css'

export default function Multi(){
    

    const [single, setSingle] = useState([])
    const [multi ,setMulti] = useState([])
    const [button, setButton] =useState(false);


    function singleHandleClick(currentId){

        setSingle(currentId===single? null: currentId)
    }

    function multiHandleClick(currentId){

        let copyMulti = [...multi];
        let index = copyMulti.indexOf(currentId);
        
        if(index === -1)copyMulti.push(currentId);
        else{
            copyMulti.splice(index,1);
        }
        
        setMulti(copyMulti);
        console.log(index, copyMulti)
    }
    
    return(
        
    
    <body>
        <button className={button? "btn active" : "btn" } onClick={()=>setButton(!button)}>{button ?" Multi Functionality Enabled " : "Multi Functionality disabled" }</button>
        
        <div className="container">
        <div className="accord">
            {Question && Question.length>0?
            (Question.map((curr)=>{

               return(<div  onClick={ button ? ()=>multiHandleClick(curr.id) :  ()=>singleHandleClick(curr.id)}> <h1 className="question">{curr.question}</h1>
                <span className="plus">+</span>
                <div>
                    {
                        single === curr.id || multi.indexOf(curr.id)!== -1? <div className="answer">{curr.answer}</div>: null  
                    }


                </div>
                
                </div>
                
                
            
            )

            })):
            
            (<div>No data Found</div>)}
        </div>

    </div></body>




    )
}