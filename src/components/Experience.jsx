import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodeImage from "../assets/node.png";

const Experience = () => {

    const experiences = [
        {
            id: 1,
            title: "html",
            src: html,
            style: "shadow-orange-500"
        },
        {
            id: 2,
            title: "css",
            src: css,
            style: "shadow-blue-500"
        },
        {
            id: 3,
            title: "javascript",
            src: javascript,
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            title: "React",
            src: reactImage,
            style: "shadow-blue-600"
        },
        {
            id: 5,
            title: "nextjs",
            src: nextjs,
            style: "shadow-white"
        },
        {
            id: 6,
            title: "graphql",
            src: graphql,
            style: "shadow-pink-400"
        },
        {
            id: 7,
            title: "github",
            src: github,
            style: "shadow-gray-400"
        },
        {
            id: 8,
            title: "Tailwind",
            src: tailwind,
            style: "shadow-sky-400"
        },
        {
            id: 9,
            title: "node/Express",
            src: nodeImage,
            style: "shadow-green-400"
        },
    ]

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies i've worked with.</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {experiences.map(({id, title, src, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="my experience" className='w-20 mx-auto'/>
                        <p className='mt-4 capitalize'>{title}</p>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience