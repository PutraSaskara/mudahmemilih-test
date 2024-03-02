"use client"
import React, {useEffect} from 'react'
import useAuthStore from '../components/ZustandStore/authStore'

function Login() {
    const {initOnce,token} = useAuthStore();

    useEffect(() => {
      console.log('asdsssssss')
      initOnce(); // Perform login on component mount
    }, []);
  return (
    <>
    </>
  )
}

export default Login