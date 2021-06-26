import {useState} from 'react';
import MainScreen from './MainScreen';
import axios from '../../../backend/node_modules/axios';
var auth = true;
const isLoggedIn = localStorage.getItem("isLoggedIn");
function Login(){
    const [clickLogin,setClickLogin] = useState(false);
    const [clickRegister,setClickRegister] = useState(false);
    const [submittedRegister,setSubmittedRegister]=useState(false);
    function handleSubmitRegister(event){
        let posData = String(event.target[3].value);
        posData=posData.toLowerCase();
        console.log(posData);
        event.preventDefault();
        if(posData==="student"||posData==="teacher"){
        var body = {
            name:event.target[0].value,
            password:event.target[1].value,
            email:event.target[2].value,
            position:posData
        }
        axios({
            method: 'post',
            url: 'http://127.0.0.1:4000/signin',
            data: body
        }).then(function (response) {
            console.log(response);
            setSubmittedRegister(true);
        })
        .catch(function (error) {
            console.log(error);
        });
        localStorage.setItem("isLoggedIn","true");
    }
    else{
        alert("Position can either be student or teacher");
    }
    }
    function handleSubmitSignin(event){
        fetch("http:")
    }
    function Register(){
       
        return <form onSubmit={handleSubmitRegister}>
            <input className="loginp" type="text" name="name" placeholder="Enter your name" autoComplete="off" required></input>
            <input className="loginp" type="password" name="password" placeholder="Enter a password" required></input>
            <input className="loginp" type="email" name="email" placeholder="Enter your email" autoComplete="off" required></input>
            <input className="loginp" type="text" name="position" placeholder="Teacher or Student?" autoComplete="off" required></input>
            <input id="submit" type="submit" value="Register"></input>
        </form>
    }
    function Signin(){
        return <form >
            <input className="loginp" type="text" name="name" placeholder="Enter your name" autoComplete="off" required></input>
            <input className="loginp" type="password" name="password" placeholder="Enter a password" required></input>
            <input className="loginp" type="email" name="email" placeholder="Enter your email" autocomplete="off" required></input>
            <input id="submit" type="submit" value="Signin"></input>
    
        </form>
    }
    
    function handleClickLogin(){
        setClickRegister(false);
        if(clickLogin===true ){
            setClickLogin(false);
           
        }
        else{
            setClickLogin(true);
        }
    }
    function handleClickRegister(){
        setClickLogin(false);
        if(clickRegister===false){
            setClickRegister(true);
        }
        else{
            setClickRegister(false);
        }
    }
    function Buttons(){
        return <div className="buttons">
            <button  onClick={handleClickLogin}>Signin</button>
            <button onClick={handleClickRegister}>Register</button>
         
        </div>
    }
    return <div>
        {console.log(isLoggedIn)}
        {isLoggedIn==="true"||submittedRegister===true?<MainScreen></MainScreen>:<Buttons></Buttons>}
        {clickLogin===true&&submittedRegister===false?<Signin></Signin>:null}
        {clickRegister===true&&submittedRegister===false?<Register></Register>:null}
    </div>
}
export default Login;
export {
    auth
}
