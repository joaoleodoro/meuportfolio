import Ecodive from '../assets/ecodive.png'
import Ecotrend from '../assets/ecotrend.png'
import Cards from './Cards'
import { Link } from 'react-router-dom';

function ProjectsPreview() {
    return (
        <div className='flex flex-col items-center gap-10 lg:gap-14'>
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
            <Link to="/Projects">
                <button className='w-[300px] lg:w-[550px] h-[50px] lg:h-[70px] bg-[#D9BC15] rounded-full text-xl lg:text-3xl border-solid border-2 border-zinc-400'>
                    View All
                </button>
            </Link>
            
        </div>
        
    )
}

export default ProjectsPreview