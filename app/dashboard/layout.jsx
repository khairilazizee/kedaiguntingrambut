"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';


const DashboardLayout = ({ children }) => {
    const router = useRouter();
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            const supabase = createClientComponentClient();
            try {
                const { data: { user }, error } = await supabase.auth.getUser();
                if (user) {
                    setAuthUser(user);
                } else {
                    router.push("login")
                }
            } catch (error) {
                console.log(error)
                router.push("login")
            }
        };

        checkUser();
    }, [router]);

    // console.log(authUser)

    if (!authUser) {
        return null
    }

    return (
        <div className="flex">
            <div className="w-1/5 bg-[color:var(--bgSoft)] p-[20px]">
                <Sidebar />
            </div>
            <div className="w-4/5 p-[20px]">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default DashboardLayout;
