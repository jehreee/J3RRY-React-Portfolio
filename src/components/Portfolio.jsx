import React from "react";
import keeperApp from "../assets/portfolio/KeeperApp.jpg";
import naimHomes from "../assets/portfolio/NaimHomes.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: keeperApp,
            demo: "https://jerrys-keeper-app.netlify.app/",
            gitCode: "https://github.com/jehreee/Keeper-App.git",
        },
        {
            id: 2,
            src: naimHomes,
            demo: "https://naim-homes.netlify.app/",
            gitCode: "https://github.com/jehreee/Naim-Homes",
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        }
    ]

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full  text-white h-full">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my works right here.</p>
                </div>

                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                    {portfolios.map(({id, src, demo, gitCode}) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <a href={demo}>
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                            </a>
                            
                            <div className="flex items-center justify-center">
                                <a href={demo}>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                </a>
                                <a href={gitCode}>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                                </a>
                                
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio;