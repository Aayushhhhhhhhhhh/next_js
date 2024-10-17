"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

export default function SignUpPage () {

    const [user, setUser] = useState({
        email:"",
        password:"",
        username:""
    });

    const onSignup = async ()=>{

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Sign Up</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input type="text" id="username" value={user.username} onChange={(e)=>{
                setUser({...user, username: e.target.value})
            }}/>
        </div>
    )
}