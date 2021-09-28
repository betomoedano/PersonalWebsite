import React from 'react'
import myPhoto from "../assets/myPhoto.webp";
import Contact from './Contact';


export default function Hello() {
    return (
    <div className="w-full h-auto md:relative mb-32 px-4">
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto py-20 h-full px-2">
            <div className="md:w-1/2 md:pt-10">
                <h1 className="mb-4 text-7xl md:text-8xl font-bold text-gray-700 dark:text-gray-50">Hello, I am <br/> Alberto</h1>
                <h2 className="mb-8 text-md md:text-3xl font-medium text-gray-700 dark:text-gray-50">Software Engineer</h2>   
                <p className="mb-4 text-base md:text-left md:text-md leading-loose md:font-normal text-gray-700 dark:text-gray-50">
                    I'm a passionate Software Developer who likes to spend hours coding, entrepreneur, fast learner, hard worker, 
                    problem-solving, <br className="hidden md:inline-block"/> self-starter with a positive attitude.
                </p>
                <Contact/>
                <div className="rounded-xl bg-gray-800 py-2 dark:bg-gray-100 mb-4 md:w-48 ">
                    <a href="/resumen/resumenmoedano.pdf" className="flex items-center justify-center w-full" download="Alberto-Moedano-Resume" target="_blank">
                        <span className=" font-medium text-base text-gray-50 dark:text-gray-800">Download Resume</span>
                    </a>
                </div>
            </div>
            <div className="md:w-1/2 md:px-10">
                <img src={myPhoto} alt={{}}/>
            </div>
        </div>
        {/* <div className=" max-w-5xl mx-auto  h-full overflow-y-scroll px-2 ">
          <div className="mb-4 ">
                <div className="md:flex md:justify-between ">
                    <div>
                        <h1 className="pt-20  text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-50">Hello, I am</h1>
                        <h1 className="mb-4 text-5xl md:text-8xl font-bold text-gray-700 dark:text-gray-50">Alberto</h1>
                        <h1 className="md:mb-20 text-md md:text-3xl font-medium text-gray-700 dark:text-gray-50">Software Engineer</h1>                        
                    </div>
                    <div className="md:pt-24 md:mr-10 pt-10 mb-10 grid justify-items-center">
                        <img src={myPhoto} alt={{}}/>
                    </div>
                </div>
            <div className="max-w-xl mb-8 ">
                <h1 className="mb-4 text-base text-center md:text-left md:text-md leading-loose md:font-normal text-gray-700 dark:text-gray-50">I'm a passionate Software Developer who likes to spend hours coding, entrepreneur, fast learner, hard worker, problem-solving, self-starter with a positive attitude.</h1>
            </div>
            <div className="rounded-xl bg-gray-800 py-2 dark:bg-gray-100 mb-4 md:w-28 ">
                <a href="/resumen/resumenmoedano.pdf" className="flex items-center justify-center w-full" download="Alberto-Moedano-Resume" >
                    <span className=" font-medium text-base text-gray-50 dark:text-gray-800">Resume</span>
                </a>
            </div>
          </div>
        </div> */}
    </div>
    )
}
