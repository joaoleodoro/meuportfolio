import limãoChão from '../assets/limãoChão.png'

function Contact() {

    const handleSubmit = (e)=> {
        e.preventDefault()
        const first = e.target.fname.value;
        const last = e.target.lname.value;
        const mail = e.target.email.value;
        const mens = e.target.msg.value;
        console.log(`first name: ${first} \n last name: ${last} \n email: ${mail} \n message: ${mens}`)
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-center lg:justify-start mt-12 mb-8">
                <h1 className='font-semibold text-[#D9BC15] text-3xl lg:text-6xl lg:pt-10'>
                    <span className='text-[#555555] font-semibold'>&lt;h1&gt;</span>
                    Contact Me
                    <span className='text-[#555555] font-semibold'>&lt;/h1&gt;</span>
                </h1>
            </div>
            
            <div className="flex items-center justify-center w-full p-7">
            <form action="" className="flex flex-col gap-4 items-center border-solid border-2 border-zinc-400 rounded-3xl pt-5 pb-5 w-full lg:w-[600px]" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 items-center w-full p-5">
                    <div className="flex flex-col w-full">
                        <label className="text-[#555555]" htmlFor="">Your First Name</label>
                        <input placeholder="First Name" name="fname" type="text" className="border-solid border-2 border-zinc-400 rounded-full h-[40px] pl-3"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-[#555555]" htmlFor="">Your Last Name</label>
                        <input placeholder="Last Name" name="lname" type="text" className="border-solid border-2 border-zinc-400 rounded-full h-[40px] pl-3"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-[#555555]" htmlFor="">Your Email</label>
                        <input placeholder="john@example.com" name="email" type="email" className="border-solid border-2 border-zinc-400 rounded-full h-[40px] pl-3"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-[#555555]" htmlFor="">Your Message</label>
                        <textarea rows="4" name="msg" type="text" placeholder="Text your message here" className="border-solid border-2 border-zinc-400 rounded-2xl pl-3"></textarea>
                </div>
                </div>
                
                <div className="flex items-center justify-center w-full p-5">
                    <button className='w-full lg:w-[400px] h-[40px] lg:h-[50px] bg-[#D9BC15] rounded-full text-xl lg:text-2xl border-solid border-2 border-zinc-400'>
                    Send
                    </button>
                </div>
                
            </form>
            </div>
            
            <img src={limãoChão} alt="" />
        </div>
    )
}

export default Contact