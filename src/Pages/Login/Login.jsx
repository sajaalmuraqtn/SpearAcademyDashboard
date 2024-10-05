import React from 'react'
import './login.css'
import * as Yup from 'yup'
import { useFormik } from 'formik'
export default function Login() {

    let validationScheama=Yup.object({
          email: Yup.string().email('Enter A valid Email').required('Email is required'),
          password:Yup.string().required('Password is required')
         
       });
      function hiLogi() {
        window.alert('hi login')
      }
    const formik = useFormik({
      initialValues:{
         email:'',
         password:''
      },validationSchema:validationScheama,
      onSubmit:hiLogi
    })
    return (
        < >
            <div className='div'>
              
                <form onSubmit={formik.handleSubmit}>
                    <h3>Login</h3>
                    <label htmlFor="Email" className='text-light'>Email</label>
                    <input type="email" placeholder="Email " onBlur={formik.handleChange} onChange={formik.values.email}  name='email' id="Email" />
                    <h6 className='text-danger mt-3'>{formik.errors?.email}</h6> 
                    <label htmlFor="password" className='text-light'>Password</label>
                    <input type="password" onBlur={formik.handleChange} placeholder="Password"  onChange={formik.values.password} name='password' id="password" />
                    <h6 className='text-danger mt-3'>{formik.errors?.password}</h6>
                    <button className='mt-5'>Log In</button>
                   
                </form>
            </div>

        </ >
    )
}
