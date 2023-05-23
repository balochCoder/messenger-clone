import React from "react";

import './globals.css'
import {Inter} from 'next/font/google'
import ToasterContext from "@/app/context/ToasterContext";
import AuthContext from "@/app/context/AuthContext";


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Messenger Clone',
    description: 'Messenger Clone App',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthContext>
            <ToasterContext/>
            {children}
        </AuthContext>
        </body>
        </html>
    )
}
