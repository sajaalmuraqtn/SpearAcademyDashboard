import React, { useContext, useState } from 'react'
import './login.css'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
export default function Login() {
  const [statusError, setStatusError] = useState('')
  const navigate=useNavigate();
  let validationScheama = Yup.object({
    email: Yup.string().email('Enter A valid Email').required('Email is required'),
    password: Yup.string().required('Password is required')

  });
  const {user,getProfile}=useContext(AuthContext);

  async function sendLoginData() {
    try {
      const { data } = await axios.post('/auth/signIn', formik.values);
 
       if (data.message = 'success') {
           await getProfile();
         if ( user.role==="Admin") {
          navigate('/admin')
         } else {
          navigate('/supervisor') 
         }
      } 
    } catch (error) {
      setStatusError('Data Invalid'); 
    }

  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }, validationSchema: validationScheama,
    onSubmit: sendLoginData
  })
  return (
    < >
      <div className='div'>

        <form onSubmit={formik.handleSubmit}>
          <h3>Login</h3>
          <label htmlFor="Email" className='text-light'>Email</label>
          <input type="email" placeholder="Email " onBlur={formik.handleChange} onChange={formik.values.email} name='email' id="Email" />
          <h6 className='text-danger mt-3'>{formik.errors?.email}</h6>
          <label htmlFor="password" className='text-light'>Password</label>
          <input type="password" onBlur={formik.handleChange} placeholder="Password" onChange={formik.values.password} name='password' id="password" />
          <h6 className='text-danger mt-3'>{formik.errors?.password}</h6>
          <h6 className='text-danger mt-3'>{statusError != '' ? statusError : ''}</h6>
          <button className='mt-5'>Log In</button>

        </form>
      </div>

    </ >
  )
}
