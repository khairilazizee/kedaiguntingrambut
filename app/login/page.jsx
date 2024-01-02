"use client"
import Link from 'next/link'
import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit } = useForm();

    const supabase = createClientComponentClient();



    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <div>LOG IN YOUR ACCOUNT</div>
            <form className="bg-black">
                <div className="flex flex-col mb-5">
                    <input type="email" placeholder="Email" className="text-black py-2 px-4 rounded-md" {...register("email", { required: true })} />
                </div>
                <div className="flex flex-col mb-5">
                    <input type="password" placeholder="Password" className="text-black py-2 px-4 rounded-md" {...register("password", { required: true })} />
                </div>
                <div className="flex flex-row justify-center gap-5 mb-5">
                    <Link href="register" className="hover:underline flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <div>Register</div>
                    </Link>
                    <button className="hover:underline">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login