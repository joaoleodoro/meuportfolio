import React, { useState, useEffect } from 'react';
import arvoreBlack from '../assets/arvoreBlack.png';
import Typewriter from 'typewriter-effect';
import metade1 from '../assets/metade1.png';
import metade2 from '../assets/metade2.png';
import limãoChão from '../assets/limãoChão.png'
import ProjectsPreview from '../components/ProjectsPreview';
import Skills from '../components/Skills';

function Home() {

    const [dataHora, setDataHora] = useState('');

    useEffect(() => {
        
        const atualizarDataHora = () => {
            const dataAtual = new Date();

            const dataFormatada = dataAtual.toLocaleDateString('en', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });

            const horaFormatada = dataAtual.toLocaleTimeString('en', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            setDataHora(`${dataFormatada}, ${horaFormatada}`);
        };

        atualizarDataHora();

        const intervalo = setInterval(atualizarDataHora, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <>
            <div className='flex flex-col items-center p-6 lg:p-14 pt-10 lg:pt-5 lg:pb-0'>
                <div>
                    <p id="data">{dataHora}</p>
                </div>
                <div className='w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-10 lg:gap-40 mt-10 lg:mt-0'>
                    <div className='flex flex-col gap-8 lg:gap-14 pt-16 lg:pt-36 text-center lg:text-left'>
                        <div className='lg:w-[500px]'>
                            <h1 className='font-semibold text-[#D9BC15] text-4xl lg:text-6xl'>
                                <span className='text-[#555555] font-semibold'>&lt;h1&gt;</span>
                                Hi there,
                            </h1>
                            <h1 className='font-semibold text-[#D9BC15] text-4xl lg:text-6xl'>
                                I'm João.
                                <span className='text-[#555555] font-semibold'>&lt;/h1&gt;</span>
                            </h1>
                        </div>

                        <h2 className='text-[#555555] text-2xl lg:text-4xl'>
                            <Typewriter
                                options={{
                                    strings: 'A Software Engineer student. Let me introduce you a few projects :) (scroll down)',
                                    autoStart: true,
                                    loop: false,
                                    delay: 50,
                                }}
                            />
                        </h2>
                    </div>
                    <img src={arvoreBlack} alt="tree" className='w-[380px] lg:w-[760px]' />
                </div>
            </div>
            
            <div className='flex flex-col items-center' >
                <div className='flex flex-col items-center pb-10'>
                    <div className='flex items-center justify-around p-6 gap-7'>
                        <img src={metade1} alt="limon" className='w-[180px] lg:w-[300px]' />
                        <h2 className='text-[#D9BC15] text-2xl lg:text-5xl font-medium lg:w-[669px]'>
                        <span className='text-[#555555] font-medium'>&lt;h2&gt;</span>
                        Here are some projects
                        for you to check:
                        <span className='text-[#555555] font-medium'>&lt;/h2&gt;</span>
                        </h2>
                    </div>
                    <ProjectsPreview />
                </div>
                <div className='lg:w-[700px] flex flex-row justify-end'>
                    <img src={metade2} alt="limon" className='w-[180px] lg:w-[280px]'/>
                </div>
            </div>

            <Skills />
            <img src={limãoChão} alt="limão no chão" />
        </>
    );
}

export default Home;
