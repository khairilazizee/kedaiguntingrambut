"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'


const RegisterLogic = () => {

    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const supabase = createClientComponentClient();
    const [apiError, setApiError] = useState("")


    const onSubmit = async (data) => {
        try {
            const { data: { user }, error: apiError } = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
                options: {
                    data: {
                        shop_name: data.name,
                    },
                },
            })

            if (apiError) setApiError(apiError)

            if (user) {

                const shopData = {
                    user_id: user.id,
                    nama: data.name,
                    email: data.email,
                    phone_number: ''
                };

                const { error: shopError } = await supabase.from("kedai").insert([shopData]);

                if (shopError) setApiError(shopError)

                router.push("login")

            }

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen gap-5">
                {apiError && (<>
                    <div className="py-2 px-3 bg-red-600 text-white text-center uppercase font-medium">{apiError.message}</div>
                </>)}
                <div>REGISTER YOUR ACCOUNT</div>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-5">
                        <input type="text" placeholder="Name" className="text-black py-2 px-4 rounded-md" {...register("name", { required: true })} />
                    </div>
                    <div className="flex flex-col mb-5">
                        <input type="email" placeholder="Email" className="text-black py-2 px-4 rounded-md" {...register("email", { required: true })} />
                    </div>
                    <div className="flex flex-col mb-5">
                        <input type="password" placeholder="Password" className="text-black py-2 px-4 rounded-md" {...register("password", { required: true })} />
                    </div>
                    <div className="flex flex-col mb-5">
                        <input type="password" placeholder="Confirm Password" className="text-black py-2 px-4 rounded-md" {...register("confirm_password", { required: true })} />
                    </div>
                    <div className="flex flex-row justify-center gap-5 mb-5">
                        <Link href="login" className="hover:underline flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <div>Login</div>
                        </Link>
                        <button className="hover:underline px-3 py-2 bg-blue-500 rounded-md">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterLogic