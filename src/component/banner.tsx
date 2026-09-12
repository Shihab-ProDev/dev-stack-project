const Banner = () => {
    return (
        <div id="banner" className="py-10 sm:py-20 px-5">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[55%] text-center md:text-left">
                    <h1 className="text-[35px] leading-11.25 md:text-[60px] font-bold md:max-w-138.75 md:leading-16.25">Build Your Ideal <span className="bg-linear-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>


                    <p className="mt-6 text-[14px] sm:text-[18px] font-light sm:leading-7 text-[#475569] md:max-w-142.5">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>


                    <div className="text-[12px] md:text-[16px] flex gap-3 mt-13.25 justify-center md:justify-start">
                        <button className="py-3 px-4 bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg text-white"><a href="#">Explore Technologies</a></button>
                        <button className="text-[#374151] border border-[#E5E7EB] py-3 px-11.5 rounded-lg"><a href="#">Learn More</a></button>
                    </div>
                </div>


                <div className="w-full md:w-[45%] flex justify-center items-center">
                    <img src="/src/assets/banner-stack.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;