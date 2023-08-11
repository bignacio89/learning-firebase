import { auth, googleProvider } from "../firebase/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { Button } from '@mui/material'
import React, { useState } from 'react'
import Cookies from "universal-cookie"

const cookies = new Cookies()

const SignIn = (props) => {

    const {setIsAuth} = props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signInUser = async () => {
        try {
          const result =  await createUserWithEmailAndPassword(auth, email, password)
          cookies.set("auth-token", result.user.refreshToken)
          setIsAuth(true)
        } catch (err) {
            console.error(err)
        }
    }

     const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, googleProvider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (err) {
            console.error(err)
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
            setIsAuth(false);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <input placeholder='email' onChange={ (e) => setEmail(e.target.value)} />
            <input placeholder='password' type="password" onChange={ (e) => setPassword(e.target.value)}/>
            <Button variant="outlined" onClick={signInUser}>Sign in</Button>
            <Button variant="contained" onClick={signInWithGoogle}>Sign in with Google</Button>
            <Button variant="contained" color="error" onClick={logout}>Log out</Button>
        </div>
    )
}

export default SignIn