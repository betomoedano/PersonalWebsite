import React from 'react'
import underchat from "../assets/underchat.png"
import underchatincon from "../assets/underchaticon.png"

export default function Lovers() {
    return (
    <div className="w-full h-auto md:relative pt-20 pb-32">
        <div className=" max-w-5xl mx-auto h-full overflow-y-scroll px-2 ">
          <div className="mb-4 ">
                <div className="md:flex md:justify-between ">
                    <div>
                        <div className="flex justify-start items-center ">
                            <h1 className="mb-10 text-5xl md:text-7xl font-bold text-gray-700 dark:text-gray-50">UnderChat</h1>
                            <div className="md:pl-10 pl-3">
                                <img src={underchatincon} alt={{}} style={{marginLeft:10}} />
                                <h1 className="mb-10 text-xs ml-3 md:ml-0 md:text-xl font-semibold text-gray-500 dark:text-gray-300">UnderChat</h1>  
                            </div>             
                        </div>

                        <h1 className="md:mb-20 text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-50">Simple, clean, real-time chat app</h1>  
                        <div className="max-w-lg mt-10 mb-10">
                            <h1 className="text-base text-left md:text-md leading-loose md:font-normal text-gray-700 dark:text-gray-50">UnderChat is a multi-user chat aplication built in react native and using AWS for the backend. It has features like; Push Notifications, Start a chat just by typing the username, Authentication, Profile pictures, </h1>
                        </div>                      
                </div>
                    <div className="">
                        <img src={underchat} alt={{}}  />
                    </div>
                </div>

          </div>
        </div>
    </div>
    )
}
