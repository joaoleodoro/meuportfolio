import limaoCor from "../assets/limaoCor.png"

function About() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-around m-8">
                <div className='w-[300px] lg:w-[500px]'>
                    <h1 className='font-semibold text-[#D9BC15] text-4xl lg:text-6xl'>
                    <span className='text-[#555555] font-semibold'>&lt;h1&gt;</span>
                    A little about me :)
                    <span className='text-[#555555] font-semibold'>&lt;/h1&gt;</span>
                    </h1>
                </div>
                <img src={limaoCor} alt="limão" className='w-[150px] lg:w-[250px]'/>
            </div>

            <div className="flex flex-col lg:flex-row m-10 lg:gap-32 justify-around h-[500px] lg:h-[350px]">
                <p className="flex flex-col text-[18px] lg:text-[24px] text-[#555555] lg:w-full">
                Born in the countryside of São Paulo, I am a lover of art and technology. Programming came into my life in the last year of high school, and every day I fall more in love with it. Alongside that, I have been an admirer of art and design since I was a child; it's what makes me feel alive. For this reason, my purpose is to combine my passions and skills to pursue and deepen my knowledge in software and website development.
                </p>
                <p className="flex flex-col text-[18px] lg:text-[24px] text-[#555555] lg:w-full">
                However, I am currently in the 2nd semester of my Software Engineering degree (out of 8 semesters), and there is still much to learn. I am aware that my interests may change over time, so I remain open to new learning opportunities and continuously seek to deepen my knowledge in technologies that can contribute to my professional growth.
                </p>
            </div>
        </div>
        
    )
}

export default About