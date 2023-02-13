import React,{useState} from "react"

import Icon from './components/icons';

import "./App.css"


import { Card,CardBody, Container, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const itemArray = new Array(9).fill("empty")
// itemArray[5] = "circle"


function App() {

  const [iscross, SetCross] = useState(false)
  const [WinMessage,setWinMessage ] = useState("")

  const reloadGame = () =>{
    SetCross(false)
    setWinMessage("");
    itemArray.fill("empty",0,9);
  };
  const checkIsWinner = () =>{
    if (itemArray[0] ===itemArray[1] && itemArray[0] ===itemArray[2]){
      if(itemArray[0] === "circle"||itemArray[0] === "cross"){
        setWinMessage(`${itemArray[0]} win`)
      }
    }else if (itemArray[3] ===itemArray[4] && itemArray[3] ===itemArray[5]){
      if(itemArray[3] === "circle"||itemArray[3] === "cross"){
      setWinMessage(`${itemArray[3]} win`)
    }
    }else if (itemArray[6] ===itemArray[7] && itemArray[6] ===itemArray[8]){
      if(itemArray[6] === "circle"||itemArray[6] === "cross"){
        setWinMessage(`${itemArray[6]} win`)
      }
      }else if (itemArray[0] ===itemArray[3] && itemArray[6] ===itemArray[0]){
      if(itemArray[0] === "circle"||itemArray[0] === "cross"){
        setWinMessage(`${itemArray[0]} win`)
      }
    }else if (itemArray[1] ===itemArray[4] && itemArray[1] ===itemArray[7]){
      if(itemArray[1] === "circle"||itemArray[1] === "cross"){
        setWinMessage(`${itemArray[1]} win`)
      }
      }else if (itemArray[2] ===itemArray[5] && itemArray[2] ===itemArray[8]){
      if(itemArray[2] === "circle"||itemArray[2] === "cross"){
        setWinMessage(`${itemArray[2]} win`)
      }
    }else if (itemArray[0] ===itemArray[4] && itemArray[8] ===itemArray[0]){
      if(itemArray[0] === "circle"||itemArray[0] === "cross"){
      setWinMessage(`${itemArray[0]} win`)
      }
    }else if (itemArray[2] ===itemArray[4] && itemArray[2] ===itemArray[6]){
      if(itemArray[2] === "circle"||itemArray[2] === "cross"){
      setWinMessage(`${itemArray[2]} win`)
    } 
    }else{
        if (itemArray[0] !== "empty" && itemArray[1] !== "empty"&& itemArray[2] !== "empty" && itemArray[3] !== "empty"&& itemArray[4] !== "empty" && itemArray[5] !== "empty" && itemArray[6] !== "empty" && itemArray[7] !== "empty"&&itemArray[8] !== "empty"){
          setWinMessage("No One is Win")
        }
      
    }

}
  const ChangeItem = itemNumber => {
    
    if (WinMessage){
      return toast(WinMessage, {type: "success"})
    }

    if(itemArray[itemNumber] === "empty"){
        itemArray[itemNumber] = iscross ? "cross":"circle"
        SetCross(!iscross)
    }else{
      return toast("already filled", {type: "error"})
    }

    checkIsWinner();

  }
    return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
        <Row>
            <Col md={6} className="offset-md-3">
              {WinMessage ? (
                <div className="mb-2 mt-2">
                  {WinMessage === "No One is Win" ?(
                                      <h1 className="text-warning  text-uppercase text-center">
                                      {WinMessage}
                                      </h1>
                  ) : (
                    <h1 className="text-success  text-uppercase text-center">
                    {WinMessage}
                    </h1>
                  )}
                  
                  <Button color='success' block onClick={reloadGame}>Reload the game</Button>
                </div>
              ):(
                <h1 className="text-center text-warning">
                  {iscross ?"cross":"circle" } turns
                </h1>
              )
              }
              <div className="grid">
                {itemArray.map((item,index)=>(
                  <Card onClick={() =>ChangeItem(index)}>
                    <CardBody className="box">
                      <Icon color="warning" name={item} />

                    </CardBody>
                  </Card>
                ))}
              </div>
            </Col>
        </Row>

      
    </Container>
  );
}

export default App;
