import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className='flex justify-center items-center p-6 gap-10'>
                <ul className='flex gap-5 text-[24px] cursor-pointer'>
                    <li>
                        <Link to="https://www.instagram.com/joaoleodoroo/">
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://github.com/joaoleodoro">
                            <FaGithub />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/joaoleodoro/">
                            <FaLinkedin />
                        </Link>
                        
                    </li>
                </ul>
                <span>João Leodoro | Software Engineer</span>
            </div>
            
        </footer>
    )
}

export default Footer