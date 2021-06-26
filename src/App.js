import Login,{auth} from "./Components/Login";
import {useState} from "react";
import MainScreen from "./Components/MainScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(){
  return <div>
    <Login></Login>
    {console.log(auth)}
  </div>
}
export default App;