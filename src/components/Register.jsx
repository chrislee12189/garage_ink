//register modal to pop up when user clicks register from login page
import axios from 'axios'
import React from 'react'
import styles from '../styles'
import { useState } from 'react'

const Register = () => {

    const [user, setUser] = useState({
        email: "", 
        password: "",
        name: "",
        dob: ""    })


    const handleRegister = (event) => {
        event.preventDefault()
        axios.post('/login/register', user)
        .then((res) => res.data)
        .then((json) => {
        setUserFetched(true)
        localStorage.setItem("token", json.token)
        console.log(json)})
    }

    

return (


<form className='flex flex-col  items-center justify-center mt-64 m-auto md:w-1/2 w-auto p-10 bg-slate-700'>
    <h1 className={`${styles.paragraph} text-black`}>Enter your details and click submit</h1>
    <input className={styles.input} type="text" placeholder='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
    <input className={styles.input} type="text" placeholder='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
    <input className={styles.input} type="text" placeholder='name' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}></input>
    <input className={styles.input} type="date" placeholder='dob' value={user.dob} onChange={(e) => setUser({ ...user, dob: e.target.value })}></input>
    <button className='bg-blue-500 gap-2 rounded-xl p-3 m-3' onClick={handleRegister}>Submit</button>
</form>

)
}

export default Register
