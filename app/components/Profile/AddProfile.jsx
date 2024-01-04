import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';

const Profile = () => {

    return (
        <div className="bg-[color:var(--bgSoft)] p-5 rounded-lg">
            <h1 className="mb-5 uppercase">User Profile</h1>
            <form className="flex flex-col">
                <div className="flex flex-col mb-5">
                    <label htmlFor="" className="mb-2">Shop Name</label>
                    <input type="text" className="text-black py-2 px-4 rounded-md" value="" />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="" className="mb-2">Email</label>
                    <input type="text" className="text-black py-2 px-4 rounded-md" value="" />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="" className="mb-2">Phone Number</label>
                    <input type="text" className="text-black py-2 px-4 rounded-md" value="" />
                </div>
                <div className="flex justify-end w-full">
                    <button className="px-3 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 hover:text-black text-sm">Update Information</button>
                </div>
            </form>
        </div>
    )
}

export default Profile