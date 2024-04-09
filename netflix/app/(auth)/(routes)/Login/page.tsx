"use client"
import { useCallback, useState } from 'react'


import styles from './page.module.css'

// For Auth Layout Components
import Input from '../../_components/Input/Input'


const page = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [variant, setVariant] = useState("login")


    const Toggle_Variant = useCallback(() => {
        setVariant((Current_Variant) => Current_Variant === 'login' ? "Register" : "login")
    }, [])

    // for Login
    const Login = useCallback(() => {
        console.log("Login Button Clicked")
    }, [])

    // for Register
    const Register = useCallback(() => {
        console.log("Register Button Clicked")
    }, [])



    return (
        <>
            <div className={styles.LoginParent}>

                <div className={styles.LoginParent_Row}>

                    {/* <h6>Sign In</h6> */}
                    <h6>
                        {variant === 'login' ? "Sign In" : "Sign Up"}
                    </h6>

                    {
                        variant === "Register" && (
                            <Input
                                id="text"
                                label='Your Name'
                                type="text"
                                value={name}
                                onChange={(e: any) => setName(e.target.value)}
                            />

                        )
                    }

                    <Input
                        id="email"
                        label='Email Address'
                        type="email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />

                    <Input
                        id="password"
                        label='Your Password'
                        type="password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />

                    <button onClick={variant === 'login' ? Login : Register} className={styles.LoginBtn}>
                        {
                            variant === "login" ? "Sign In" : "Sign Up"
                        }
                    </button>

                    <p className={styles.CustomMessage}>

                        {
                            variant === "login" ? " First Time Using Netflix?" : "Already Have An Account ?"
                        }

                        <span onClick={Toggle_Variant}>
                            {variant === 'login' ? "Sign Up" : "Login"}
                        </span>


                    </p>


                </div>

            </div>
        </>
    )
}

export default page