const Banner = () => {
    return (
        <div id="banner" className="py-20 px-5">
            <div className="container mx-auto flex items-center">
                <div className="w-[55%]">
                    <h1 className="text-[60px] font-bold leading-17.5 max-w-138.75">Build Your Ideal <span className="bg-linear-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>


                    <p className="mt-6 text-[18px] font-light leading-7 text-[#475569] max-w-142.5">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>


                    <div className="flex gap-3 mt-[53px]">
                        <button className="py-3 px-4 bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg text-white"><a href="#">Explore Technologies</a></button>
                        <button className="text-[#374151] border border-[#E5E7EB] py-3 px-11.5 rounded-lg"><a href="#">Learn More</a></button>
                    </div>
                </div>


                <div className="w-[45%] flex justify-center items-center">
                    <img src="/src/assets/banner-stack.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;