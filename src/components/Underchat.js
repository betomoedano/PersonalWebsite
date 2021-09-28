import React from 'react'
import underchat from "../assets/underchat.png"
import underchatincon from "../assets/underchaticon.png"

export default function Lovers() {
    return (
    <div className="w-full h-auto md:relative py-20">
        <div className="md:p-0 max-w-5xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/2 flex flex-col items-center justify-center">
                <div className="flex items-center mb-4 w-full">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-700 dark:text-gray-50 mr-4">UnderChat</h1>
                    <img src={underchatincon} alt={{}} className="md:w-24 md:h-24" />
                </div>
                <p className="mb-8 w-full text-3xl font-medium text-gray-700 dark:text-gray-50">Simple, clean, real-time chat app.</p>
                <p className="text-base text-left md:text-md leading-loose md:font-normal text-gray-700 dark:text-gray-50">
                    UnderChat is a multi-user chat aplication built in react native and using AWS for the backend. It has features like: 
                    Push Notifications, Start a chat just by typing the username, Authentication, Profile pictures.
                </p>
            </div>
            <div className="md:w-1/2 p-4">
                <img src={underchat} alt={{}} className="object-cover"/>
            </div>
        </div>
    </div>
    )
}
