import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import axios from "axios"


export default function Register() {
  
  const Navigate=useNavigate();
  const formik=useFormik({
    initialValues:{
     userid:'',
     username: '',
     userpass:'',
    },
    onSubmit:values=>{
        axios.post("http://localhost:8000/registerusers", values)
        alert("Register succefully")
        Navigate("/Login")
    }
  })
   return (
     <div className="form text-center mx-3" >
      <h2>New User Register</h2>
            <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>Email id</dt>
          <dd><input onChange={formik.handleChange}value={formik.values.userid}   name="userid"  type="text"/></dd>
          <dt>usename</dt>
          <dd><input onChange={formik.handleChange}value={formik.values.username}  name="username"  type="text"/></dd>
          <dt>password</dt>
          <dd><input onChange={formik.handleChange}value={formik.values.userpass} name="userpass"  type="text"/></dd>
         
        </dl>
        <button className="btn btn-success">Register User</button>
      </form>
       
         <Link to="/login">Already have account?</Link>
      
     </div>
   );
 }