import Cards from '../components/Cards'
import Ecodive from "../assets/ecodive.png"
import Ecotrend from "../assets/ecotrend.png"
import Galleria from "../assets/galleria.png"
import Fokus from "../assets/fokus.png"
import Aluramidi from "../assets/aluramidi.png"

function Projects() {
    return (
        <div className='flex flex-col items-center p-10 gap-10'>
            <h1 className='font-semibold text-[#D9BC15] text-3xl lg:text-6xl lg:pt-10 lg:pb-5'>
                    <span className='text-[#555555] font-semibold'>&lt;h1&gt;</span>
                    My projects:
                    <span className='text-[#555555] font-semibold'>&lt;/h1&gt;</span>
                    </h1>
            <div className='flex flex-col lg:flex-row gap-16'>
                <Cards
                    img={Ecodive}
                    title1="Ecodive"
                    title2="Global Solutions"
                    description="Project carried out for “Global Solutions”, FIAP evaluation activity."
                    repository="https://github.com/joaoleodoro/Website-Ecodive---GS"
                />
                <Cards 
                    img={Ecotrend}
                    title1="Ecotrend"
                    title2="Check Point"
                    description="E-commerce of sustainable products carried out as an assessment activity in the second semester of Software Engineering."
                    repository="https://github.com/Rafael0407Orla/E-commerce-EcoTrend.git"
                />
            </div>
            <div className='flex flex-col lg:flex-row gap-16'>
                <Cards
                    img={Galleria}
                    title1="Powered by Art"
                    title2="Gallerie"
                    description="Online gallery that offers 4k downloads of works of art (fictional project)."
                    repository="https://github.com/joaoleodoro/site-poweredbyart.git"
                />
                <Cards 
                    img={Fokus}
                    title1="Fokus"
                    title2="Timer"
                    description="Timer with “pomodoro” method, along with 2 rest time options (5 and 15 minutes)."
                    repository="https://github.com/joaoleodoro/projetoJS2-curso-alura.git"
                />
            </div>
            <div className='flex flex-col items-center lg:flex-row gap-16'>
                <Cards
                    img={Aluramidi}
                    title1="Alura Midi"
                    title2="Musical Keyboard"
                    description="Designed to emit the sound of the respective key clicked."
                    repository="https://github.com/joaoleodoro/projetoJS1-curso-alura.git"
                />
                <h2 className='text-[#D9BC15] text-2xl lg:text-5xl font-medium lg:w-[669px]'>
                        <span className='text-[#555555] font-medium'>&lt;h2&gt;</span>
                        And this portfolio, project end executed by me ;)
                        <span className='text-[#555555] font-medium'>&lt;/h2&gt;</span>
                        </h2>
            </div>
        </div>
        
    )
}

export default Projects