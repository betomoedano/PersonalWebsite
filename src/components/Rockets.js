import React from 'react'
import rockets from "../assets/rockets.png"
import rocketsicon from "../assets/iconrockets.png"

export default function Rockets() {
    return (
    <div className="w-full h-auto md:relative py-20">
        <div className="px-4 md:p-0 max-w-5xl mx-auto flex flex-col-reverse md:flex-row"> 
            <div className="md:w-1/2">
                <img src={rockets} alt={{}} className="object-cover"/>
            </div>
            <div className="px-2 md:w-1/2 md:px-8">
                <div className="flex items-center mb-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-50 mr-4">Rockets X</h1>
                    <img src={rocketsicon} alt="rocket-icon" className="md:w-24 md:h-24" />
                </div>
                <p className="mb-8 text-3xl font-medium text-gray-700 dark:text-gray-50">Fun, simple and challenging</p>
                <p className="text-base text-left md:text-md leading-loose md:font-normal text-gray-700 dark:text-gray-50 mb-8">Rockets X is a cassual fun game with a friendly UI it has  many features like; Leaderboards, Achievements, In game currency, In-App Purchasses and adds.</p>
            </div>
        </div>
    </div>
    )
}