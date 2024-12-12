import img from './../assets/download.png'
const HeroSection = () => {
    return (
        <div className=' bg-blue-950  overflow-hidden w-full relative'>
        <div className="flex flex-col items-center justify-center h-screen w-full text-center relative z-40 text-white ">
            <h1 className="text-6xl font-extrabold max-w-4xl">
                Build and ship software on a single, collaborative platform
            </h1>
            <p className="mt-4 text-lg">
                Join the world’s most widely adopted AI-powered developer platform.
            </p>
                <div className="flex mt-8 space-x-4">
                    <div className='p-1 bg-white rounded'>                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded border bg-transparent text-black"
                />
                <button className="bg-green-600 px-6 py-2 rounded hover:bg-green-700">
                    Sign up for GitHub
                        </button>
                    </div>

                    
                <button className="bg-gray-800 px-6 py-2 rounded hover:bg-gray-700">
                    Try GitHub Copilot
                </button>
            </div>
           
            </div>
            <div className=' absolute -bottom-60 -z-0 flex w-full justify-center  '>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;
