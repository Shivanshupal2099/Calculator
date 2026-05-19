import Button from "./Component/Button"
import { useState } from "react"


function App() {

  const [v1,setv1]=useState("");

  const [operator ,setoperator]=useState("");

  const [v2,setv2]=useState("");

  const [answer ,setanswer]=useState("");

  
  const handlework = (value) => {
    console.log(value);

    if (value === "Clear") {
      setv1("");
      setoperator("");
      setv2("");
      setanswer("");
      return;
    }

    if (value === "Enter") {
      if (v1 !== "" && operator !== "" && v2 !== "") {
        
        const num1 = parseFloat(v1);
        const num2 = parseFloat(v2);
        switch (operator) {
          case "+":
            setanswer( num1 + num2);
            break;
          case "-":
            setanswer( num1 - num2);
            break;
          case "*":
            setanswer( num1 * num2);
            break;
          case "/":
            setanswer(num2 !== 0 ? num1 / num2 : "Error");
            break;
          default:
            setanswer("Error");
        }
        setv1("");
        setoperator("");
        setv2("");
      }
      return ;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (v1 !== "") {
        setoperator(value);
      }
      return;
    }

    if (operator === "") {
      setv1((prev) => prev + value);
    } else {
      setv2((prev) => prev + value);
    }
  }


  return (
    <>

      <h1>Calculator</h1>


      <div  style={{justifyContent: "center" ,display:"flex", flexDirection:"row" }}>

            <div  style={{height: "630px", width: "530px",borderRadius: "10px", backgroundColor: "white" , justifyContent: "center" , alignItems: "center",border:"10px solid black"}}>
                      <div style={{height:"150px" ,border:"7px solid black",width:"490px",backgroundColor:"white",borderRadius:"10px",margin:"20px" ,display:"flex",flexDirection:"row",alignItems:"center"}}>

                        <div>
                             <button onClick={() => handlework("Clear")} style={{marginTop:"10px",border:"2px solid red",height:"50px",width:"80px",borderRadius:"100px",backgroundColor:"black",color:"white"}}>Clear</button>
                        </div>

                        <div style={{border:"3px solid black",height:"120px",width:"400px",backgroundColor:"white",borderRadius:"30px",margin:"50px"}}>

                            

                        </div>

                      </div>
                      <div style={{height:"385px",borderRadius:"50px",margin:"20px" ,display:"flex"}}>

                          <div style={{border:"5px solid black" ,borderRadius:"10px",height:"390px",width:"150px",margin:"10px"}}>
                                <Button onClick={() => handlework("1")} value="1"/>
                                <Button onClick={() => handlework("4")} value="4"/>
                                <Button onClick={() => handlework("7")} value="7"/>
                                <Button onClick={() => handlework("*")} value="*"/>
                                <Button onClick={() => handlework("+")} value="+"/>
                          </div>
                          <div style={{border:"5px solid black" , borderRadius:"10px",height:"390px",width:"150px",margin:"10px"}}>
                                <Button onClick={() => handlework("2")} value="2"/>
                                <Button onClick={() => handlework("5")} value="5"/>
                                <Button onClick={() => handlework("8")} value="8"/>
                                <Button onClick={() => handlework("0")} value="0"/>
                                <Button onClick={() => handlework("/")} value="/"/>
                          </div>
                          <div style={{border:"5px solid black" , borderRadius:"10px",height:"390px",width:"150px",margin:"10px"}}>
                                <Button onClick={() => handlework("3")} value="3"/>
                                <Button onClick={() => handlework("6")} value="6"/>
                                <Button onClick={() => handlework("9")} value="9"/>
                                <Button onClick={() => handlework("-")} value="-"/>
                                <Button onClick={() => handlework("Enter")} value="Enter"/>

                      </div>

                      
          </div>


          <div  style={{height:"300px" ,width:"300px",border:"5px solid black",marginTop:"100px",marginLeft:"50px",borderRadius:"50px" }}>


             {
               
               v1 === "" ? <h3>DISPLAY THE FIRST VALUE</h3> : null
             }
             {
               v1 !== "" && operator === "" ? <h3>DISPLAY THE OPERATOR</h3>  : null
             }
             {
               v1 !== "" && operator !== "" && v2 === "" ? <h3>DISPLAY THE SECOND VALUE</h3> : null
             }


             {
               
               v1 !== "" || operator !== "" || v2 !== "" ? (
                 <div>
                   <h3>First: {v1}</h3>
                   <h3>Operator: {operator}</h3>
                   <h3>Second: {v2}</h3>
                 </div>
               ) : null 

               

             }

             {
                answer !== "" ? <h2 style={{color:"red"}}>Answer: {answer}</h2> : null
             }

                 
                  
          </div>
          
      </div>
      </div>
    </>
  )
}

export default App;
