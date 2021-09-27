import React from 'react'
import rockets from "../assets/rockets.png"
import rocketsicon from "../assets/iconrockets.png"

export default function Rockets() {
    return (
    <div className="w-full h-auto md:relative pt-20 pb-32">
        <div className=" max-w-5xl mx-auto h-full overflow-y-scroll px-2 ">
          <div className="mb-4 ">
                <div className="md:flex md:justify-between ">
                    <div>
                        <div className="flex justify-left items-center ">
                            <h1 className="mb-10 mr-10 text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-50">Rockets X</h1>
                            <div className="">
                                <img src={rocketsicon} alt={{}}  />
                                <h1 className="mb-10 text-xs md:text-xl font-semibold text-gray-500 dark:text-gray-300">Rockets X</h1>  
                            </div>            
                        </div>
                        <div className="">
                            <img src={rockets} alt={{}}  />
                        </div>
                    
                    </div>
                        <div className="max-w-sm md:mt-32 ">
                            <h1 className="md:mb-16 mt-10 text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-50">Fun, simple and challenging</h1>  
                            <h1 className="text-base text-left md:text-md leading-loose md:font-normal text-gray-700 dark:text-gray-50">Rockets X is a cassual fun game with a friendly UI it has  many features like; Leaderboards, Achievements, In game currency, In-App Purchasses, Adds</h1>
                        </div>  
                </div>

          </div>
        </div>
    </div>
    )
}
