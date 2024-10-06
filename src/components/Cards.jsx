import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Cards({img, title1, title2, description, repository}) {
    return (
        <>
            <div className='flex flex-col gap-4 w-[370px] lg:w-[630px]'>
                <div className='w-[370px] lg:w-[630px] border-solid border-2 border-zinc-400 p-3 rounded-3xl '>
                    <img src={img} alt={title1} className='w-[350px] lg:w-[600px] rounded-2xl' />
                </div>
                <div>
                    <h1 className='text-2xl font-medium'><span className='text-[#D9BC15]'>{title1}</span> - {title2}</h1>
                    <p className='text-[#555555]'>{description}</p>
                    <Link to={repository}>
                            <FaGithub className='text-2xl mt-3'/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Cards