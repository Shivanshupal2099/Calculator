import Button from "./Component/Button"
function App() {

  return (
    <>

      <h1>Calculator</h1>


      <div  style={{justifyContent: "center" ,display:"flex" }}>


            <div  style={{height: "630px", width: "530px",borderRadius: "10px", backgroundColor: "white" , justifyContent: "center" , alignItems: "center",border:"10px solid black"}}>
                      <div style={{height:"150px" ,border:"7px solid black",width:"490px",backgroundColor:"white",borderRadius:"10px",margin:"20px" ,display:"flex",flexDirection:"row",alignItems:"center"}}>

                        <div>
                             <button style={{marginTop:"10px",border:"2px solid red",height:"50px",width:"80px",borderRadius:"100px",backgroundColor:"black",color:"white"}}>Clear</button>
                        </div>

                        <div style={{border:"3px solid black",height:"120px",width:"400px",backgroundColor:"white",borderRadius:"30px",margin:"20px"}}>

                           

                        </div>

                      </div>
                      <div style={{height:"385px",borderRadius:"50px",margin:"20px" ,display:"flex"}}>

                          <div style={{border:"5px solid black" ,borderRadius:"10px",height:"390px",width:"150px",margin:"10px"}}>
                                <Button  value="1"/>
                                <Button value="4"/>
                                <Button value="7"/>
                                <Button value="*"/>
                                <Button value="+"/>
                          </div>
                          <div style={{border:"5px solid black" , borderRadius:"10px",height:"390px",width:"150px",margin:"10px"}}>
                                <Button value="2"/>
                                <Button value="5"/>
                                <Button value="8"/>
                                <Button value="0"/>
                                <Button value="/"/>
                          </div>
                          <div style={{border:"5px solid black" , borderRadius:"10px",height:"390px",width:"150px",margin:"10px"}}>
                                <Button value="3"/>
                                <Button value="6"/>
                                <Button value="9"/>
                                <Button value="-"/>
                                <Button value="Enter"/>
                          </div>

                      </div>

                      
          </div>
      </div>
    </>
  )
}

export default App
