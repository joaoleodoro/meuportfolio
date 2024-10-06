import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="flex justify-between p-5 lg:pl-24 lg:pr-24 text-[#555555] border-b-2 border-b-stone-300 sticky ">
                <Link to="/" className="hover:text-[#D9BC15] transition">
                    João Leodoro | Software Engineer
                </Link>

                <div className='flex flex-col items-end gap-3'>
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#555555] hover:text-[#D9BC15] transition"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <nav className={`flex-col lg:flex lg:flex-row lg:gap-8 ${isOpen ? 'flex' : 'hidden'} gap-4`}>
                    <Link to="/About" className="hover:text-[#D9BC15] transition">About</Link>
                    <Link to="/Projects" className="hover:text-[#D9BC15] transition">Projects</Link>
                    <Link to="/Contact" className="hover:text-[#D9BC15] transition">Contact</Link>
                    <div className="bg-[#ADACA7] w-16 h-7 rounded-full flex items-center pl-0.5">
                        <button className="bg-[#ECEAE4] rounded-full w-8 flex justify-center">en</button>
                    </div>
                </nav>
                </div>
                
            </div>
        </header>
    );
}

export default Header;
