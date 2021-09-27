import React from 'react'
import souls from "../assets/souls.png"
import soulsicon from "../assets/soulsicon.png"

export default function Souls() {
    return (
    <div className="w-full h-auto md:relative pt-20 pb-32">
        <div className=" max-w-5xl mx-auto h-full overflow-y-scroll px-2 ">
          <div className="mb-4 ">
                <div className="md:flex md:justify-between pb-32">
                    <div>
                        <div className="flex justify-left items-center ">
                            <h1 className="mb-10 mr-10 text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-50">Souls X</h1>
                            <div className="">
                                <img src={soulsicon} alt={{}}  />
                                <h1 className="mb-10 text-xs md:text-xl font-semibold text-gray-500 dark:text-gray-300">Souls X</h1>  
                            </div>            
                        </div>
                        <div className="">
                            <img src={souls} alt={{}}  />
                        </div>
                    
                    </div>
                        <div className="max-w-lg md:pl-10 md:mt-32 ">
                            <h1 className="md:mb-16 mt-10 text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-50">Casual drag & drop to reach the top</h1>  
                            <h1 className="text-base text-left md:text-md leading-loose md:font-normal text-gray-700 dark:text-gray-50">Souls X was born with the idea of creating a simple and fun drag and drop game. It has features like; 16 creative levels, skins shop, haptics, particle effects.</h1>
                        </div>  
                </div>
                <h1 className="mb-10 mr-10 text-6xl md:text-8xl font-bold text-gray-700 dark:text-gray-50 pt-20">And that's just the begining... 🚀 🌕</h1>
                <h1 className="mb-10 text-xl md:text-3xl font-semibold text-gray-500 dark:text-gray-300 ">I'm constantly improving my projects and working in new ideas, loving what I do.</h1>  
          </div>
        </div>
    </div>
    )
}
