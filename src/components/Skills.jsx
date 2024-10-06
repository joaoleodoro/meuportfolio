import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import git from '../assets/git.png'
import bootstrap from '../assets/bootstrap.png'
import figma from '../assets/figma.png'
import react from '../assets/physics.png'
import python from '../assets/python.png'
import sass from '../assets/sass.png'
import tailwind from '../assets/tailwind.png'

function Skills() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center gap-7 lg:gap-24 pt-12 lg:pt-24 pb-10'>
                <div className='flex flex-col gap-3 lg:gap-7'>
                    <div className='text-center'>
                        <h2 className='text-[#D9BC15] text-2xl lg:text-5xl font-medium w-[180px] lg:w-[370px]'>
                            <span className='text-[#555555] font-medium'>&lt;h2&gt;</span>
                            Here are my skills:
                            <span className='text-[#555555] font-medium'>&lt;/h2&gt;</span>
                        </h2>
                    </div>
                </div>

                <div className='flex flex-col gap-10'>
                <div className='flex gap-7 items-end'>
                    <div className='flex flex-col w-max items-center'>
                        <img src={html} alt="html" className='w-[40px] lg:w-[60px]' />
                        <h2 className='text-[#555555] text-[14px]'>HTML</h2>
                    </div>
                    <div className='flex flex-col w-max items-center'>
                        <img src={css} alt="css" className='w-[40px] lg:w-[60px]' />
                        <h2 className='text-[#555555] text-[14px]'>CSS</h2>
                    </div>
                    <div className='flex flex-col w-max items-center'>
                        <img src={js} alt="Javascript" className='w-[40px] lg:w-[60px]' />
                        <h2 className='text-[#555555] text-[14px]'>Javascript</h2>
                    </div>
                    <div className='flex flex-col w-max items-center'>
                        <img src={react} alt="React.js" className='w-[40px] lg:w-[60px]' />
                        <h2 className='text-[#555555] text-[14px]'>React.js</h2>
                    </div>
                    <div className='flex flex-col w-max items-center'>
                        <img src={python} alt="python" className='w-[40px] lg:w-[60px]' />
                        <h2 className='text-[#555555] text-[14px]'>Python</h2>
                    </div>
                </div>

                <div className='flex gap-7 items-end'>
                    <div className='flex flex-col w-max items-center'>
                        <img src={bootstrap} alt="bootstrap" className='w-[40px] lg:w-[60px]' />
                        <h2 className='text-[#555555] text-[14px]'>Bootstrap</h2>
                    </div>
                    <div className='flex flex-col w-max items-center'>
                        <img src={tailwind} alt="tailwind" className='w-[40px] lg:w-[60px]' />
                        <h2 className='text-[#555555] text-[14px]'>Tailwind</h2>
                    </div>
                    <div className='flex flex-col w-max items-center'>
                        <img src={sass} alt="sass" className='w-[40px] lg:w-[60px]' />
                        <h2 className='text-[#555555] text-[14px]'>SASS</h2>
                    </div>
                    <div className='flex flex-col w-max items-center'>
                        <img src={git} alt="git" className='w-[40px] lg:w-[60px]' />
                        <h2 className='text-[#555555] text-[14px]'>Git</h2>
                    </div>
                    <div className='flex flex-col w-max items-center'>
                        <img src={figma} alt="figma" className='w-[40px] lg:w-[60px]' />
                        <h2 className='text-[#555555] text-[14px]'>Figma</h2>
                    </div>
                </div>
                </div>
                
                
            </div>
    )
}

export default Skills