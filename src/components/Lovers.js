import React from 'react'
import lovers from "../assets/lovers.png"
import loversicon from "../assets/Iconlovers.png"

export default function Lovers() {
    return (
    <div className="w-full h-auto md:relative pt-20 mb-32">
        <div className=" max-w-5xl mx-auto h-full overflow-y-scroll px-2 ">
          <div className="mb-4 ">
                <div className="md:flex md:justify-between ">
                    <div>
                        <div className="flex justify-between items-center ">
                            <h1 className="mb-10 text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-50">Lovers</h1>
                            <div className="md:mr-10 mr-28">
                                <img src={loversicon} alt={{}}  />
                                <h1 className="mb-10 text-xs md:text-xl text-center font-semibold text-gray-500 dark:text-gray-300">Lovers</h1>  
                            </div>             
                        </div>

                        <h1 className="md:mb-20 text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-50">Relationships like never before</h1>  
                        <div className="max-w-xl mt-10 mb-10">
                            <h1 className="text-base text-left md:text-md leading-loose md:font-normal text-gray-700 dark:text-gray-50">This app facilitates relationships for couples by having features that improve relationships. For example, a special status for emotions quickly allows an individual to update how they are feeling. Furthermore, the app has the functionality to schedule reminders for both couples for special events or date nights. Other features like instant messages	, reminders, posts, and notifications are available. </h1>
                        </div>                      
                </div>
                    <div className="">
                        <img src={lovers} alt={{}}  />
                    </div>
                </div>

          </div>
        </div>
    </div>
    )
}
