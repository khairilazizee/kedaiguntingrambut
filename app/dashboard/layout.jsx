"use client"
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const DashboardLayout = ({ children }) => {
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
