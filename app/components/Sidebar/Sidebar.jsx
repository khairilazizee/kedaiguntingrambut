"use client"
import React from 'react'
import { MdHomeFilled, MdContactPage, MdCountertops, MdHelpCenter, MdPeople, MdFace, MdAutoStories, MdAlternateEmail, MdLogout } from "react-icons/md";
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

const menuItems = [
    {
        title: "Pages",
        lists: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdHomeFilled />
            },
            {
                title: "Customers",
                path: "/dashboard/customers",
                icon: <MdContactPage />
            },
            {
                title: "Services",
                path: "/dashboard/services",
                icon: <MdCountertops />
            }
        ]
    },
    {
        title: "Users",
        lists: [
            {
                title: "Profiles",
                path: "/dashboard/user/profile",
                icon: <MdAlternateEmail />
            },
            {
                title: "Help",
                path: "/dashboard/users/help",
                icon: <MdHelpCenter />
            }
        ]
    }
]

const Sidebar = () => {

    return (
        <div className="sticky top-10 h-screen">
            <div className="flex items-center gap-5 mb-5">
                <MdFace size={50} />
                <div className="flex flex-col">
                    <span className="font-[500px]">John Doe</span>
                    <span className="text-[12px] text-[color:var(--textSoft)]">Administrator</span>
                </div>
            </div>
            <ul className="list-none">
                {menuItems.map((cat, index) => (
                    <li key={index}>
                        <span className="text-[color:var(--textSoft)] font-bold text-[13px] my-2.5">
                            {cat.title}
                        </span>
                        {cat.lists.map((item, index) => (
                            <MenuLink item={item} key={index} />
                        ))}
                    </li>
                ))}
            </ul>
            <form action="/auth/signout" method="post">
                <button className="p-2.5 m-5 flex items-center gap-2.5 rounded-xl hover:bg-[#2e374a] w-full" type="submit">
                    <MdLogout />
                    Logout
                </button>
            </form>
        </div>
    )
}

export default Sidebar