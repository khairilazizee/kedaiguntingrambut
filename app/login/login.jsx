"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { NextSeo } from 'next-seo'

const LoginController = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("")
    const router = useRouter();

    const supabase = createClientComponentClient();

    const onSubmit = async (data) => {
        try {
            const { data: { user }, error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password
            })
            if (user) router.push("dashboard")
            if (error) setError(error);
        } catch (error) {
            return console.debug(error)
        }
    }


    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen gap-5">
                {error && (<>
                    <div className="py-2 px-3 bg-red-600 text-white text-center uppercase font-medium">{error.message}</div>
                </>)}
                <div>LOG IN YOUR ACCOUNT</div>
                <form className="bg-black" onSubmit={handleSubmit(onSubmit)}>
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
                        <button className="hover:underline px-3 py-2 bg-blue-500 rounded-md">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginController