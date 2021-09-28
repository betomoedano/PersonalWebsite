import React from 'react'
import lovers from "../assets/lovers.png"
import loversicon from "../assets/Iconlovers.png"

export default function Lovers() {
    return (
    <div className="w-full h-auto md:relative py-20">
        <div className="px-4 md:p-0 max-w-5xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-700 dark:text-gray-50 mr-4">Lovers</h1>
                    <img src={loversicon} alt={{}} className="md:w-24 md:h-24" />
                </div>
                <p className="mb-8 text-3xl font-medium text-gray-700 dark:text-gray-50">Relationships like never before</p>
                <p className="text-base text-left md:text-md leading-loose md:font-normal text-gray-700 dark:text-gray-50">This app facilitates relationships for couples by having features that improve relationships. For example, a special status for emotions quickly allows an individual to update how they are feeling. Furthermore, the app has the functionality to schedule reminders for both couples for special events or date nights. Other features like instant messages	, reminders, posts, and notifications are available. </p>
            </div>
            <div className="md:w-1/2 p-4">
                <img src={lovers} alt={{}} className="object-cover"/>
            </div>
        </div>
    </div>
    )
}
