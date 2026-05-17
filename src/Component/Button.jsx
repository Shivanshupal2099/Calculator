import React,{ useState } from "react";

function Button({value})
{

    const [value1,setValue1]=useState("");
    const [value2,setValue2]=useState("");
    const [logo,setLogo]=useState("");

    const [answer,setAnswer]=useState("");

     function operation()
     {

        if(logo==="+")
        {
            var ans=value1+value2;
            setAnswer(ans);
        }
        else if(logo==="-")
         {
            setAnswer(value1-value2);
         }
         else if(logo==="*")
         {
            setAnswer(value1*value2);
         }
        else
        {
             setAnswer(value1/value2);
        }
     }

    return(
        <>
           <div style={{height:"50px" ,border:"3px solid black",width:"90px",backgroundColor:"black",borderRadius:"10px",margin:"20px"}}>
                <h2 style={{color:"red",margin:"10px "}} onClick={(event)=>setValue1(event.target.value)}  >{value}</h2>
           </div>
        </>
    );
}

export default Button;