import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Login()
{
  const [email, setEmail]=useState("");
  const [password, setPassword]= useState("");
  
    let navigate = useNavigate();
    useEffect(()=>{
      if (localStorage.getItem('user-info')) {
        navigate.push("/add")
      }
    },[])
    const [users, setUsers] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies();
    const formik = useFormik({
        initialValues: {
            Email:'',
            Password:''
        },
        onSubmit : values => {
            for(var user of users) {
                if(user.UserId===values.UserId && user.Password===values.Password){
                    setCookie("userid", user.UserId);
                    navigate("/dashboard");
                    break;
                } else {
                    navigate("/errorpage");
                }
            }
        }
    })
    async function login()
    {
      console.warn(email,password)
      let item=(email,password);
      let result = await fetch("http://localhost:8000/api/loginusers",{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result))
      navigate.push("/add")
    }
    return(
        <div className="form text-center mx-3">
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Email</dt>
                    <dd><input value={formik.values.UserId} name="UserId" onChange={formik.handleChange} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input  value={formik.values.Password} name="Password" onChange={formik.handleChange} type="password"/></dd>
                </dl>
                <button onChange={login} className="btn btn-primary">Login</button>
            </form>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    )
}

