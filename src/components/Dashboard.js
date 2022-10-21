import React, {useState, useEffect}from 'react'
import {useCookies} from "react-cookie";
import {Link, useNavigate} from "react-router-dom";

export default function Dashboard() {
 
    const [cookies, setCookie, removeCookie] = useCookies();
    const [userid, setUserId] = useState();
    let navigate = useNavigate();

    useEffect(()=>{
        if(cookies["userid"]==undefined) {
            navigate("/login");
        } else {
            setUserId(cookies["userid"]);
            
        }
    })

    function handleSignout(){
        removeCookie("userid");
        navigate("/login");
    }
    return (
        <div>
        <h2>User Dashboard {userid} - <button onClick={handleSignout} className="btn btn-link">Signout</button> </h2>
        <h3>Welcome to Login Page</h3>
       
    </div>
  )
}
