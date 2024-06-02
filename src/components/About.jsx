import React from 'react'

const About = () => {
  return (
    <div name="about" className='flex flex-col w-full  bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-15'>
                I am a full-stack developer with experience in creating easy-to-navigate websites and web applications.
                <br />
                Fueled by my passion for problem solving and my enthusiasm for tackling complex challenges, i have been able to build innovative and succesfull projects that have recieved positive feedback from users.
            </p>

            <br />

            <p className='text-xl'>
                I have collaborated with talented individuals from diverse backgrounds and experiences to create novel solutions that exceed expectations and deliver great results.
                <br />
                I always strive to stay ahead of the curve and learn about new technologies that are of great use in order to provide the best service possible.
                <br />
                And when I'm not building, I'm most likely indoors, vibing to music or watching movies.
            </p>
        </div>
    </div>
  )
}

export default About