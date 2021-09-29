import React from 'react'
import souls from "../assets/souls.png"
import soulsicon from "../assets/soulsicon.png"

export default function Souls() {
    return (
    <div className="w-full h-auto md:relative py-20">
        <div className="px-4 md:p-0 max-w-5xl mx-auto flex flex-col-reverse md:flex-row"> 
            <div className="md:w-1/2">
                <img src={souls} alt={{}} className="object-cover"/>
            </div>
            <div className="md:w-1/2 mb-10">
                <div className="flex items-center mb-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-700 dark:text-gray-50 mr-4">Souls X</h1>
                    <img src={soulsicon} alt="souls-icon" className="md:w-24 md:h-24" />
                </div>
                <p className="mb-8 text-3xl font-medium text-gray-700 dark:text-gray-50">Casual drag and drop to reach the top</p>
                <p className="text-base md:text-md leading-loose md:font-normal text-gray-700 dark:text-gray-50">Souls X was born with the 
                idea of creating a simple and fun drag and drop game. It has features such as, 16 creative levels, skins shop, haptics, particle effects.</p>
            </div>
        </div>
        <div className="max-w-5xl mx-auto px-4">
            <h1 className="mb-10 mr-10 text-6xl md:text-8xl font-bold text-gray-700 dark:text-gray-50 pt-20">And that's just the begining... 🚀 🌕</h1>
            <p className="mb-10 text-2xl md:text-3xl font-semibold text-gray-500 dark:text-gray-300 ">
            I am constantly finding new ways of improving my projects and incorporating new ideas while developing new apps that bring joy to others. I am eager to continue learning and enhancing 
            my current skill set and join a team of like minded individuals who are passionate about this line of work. </p>
        </div>
    </div>
    )
}
