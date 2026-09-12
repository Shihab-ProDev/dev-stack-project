const Header = () => {
    return (
        <div className="border-b border-b-[#F1F5F9] py-4 sm:py-6 px-5 sticky top-0 bg-white z-10">
            <div className="container mx-auto flex justify-between items-center">

                {/* hamburger Icon */}
                <div className="w-15 block md:hidden">

                <img src="/src/assets/Vector (1).svg" alt="" />
                </div>

                {/* logo */}

                <img src="/src/assets/logo-text.png"  className="w-30 md:w-34"/>

                {/* menu items */}

                <ul className="md:flex hidden gap-5 lg:gap-7.25 text-[14px]">
                    <li className="text-[#475569] hover:text-[#DB2777]"><a href="#banner">Home</a></li>
                    <li className="text-[#475569] hover:text-[#DB2777]"><a href="#technologies">Technologies</a></li>
                    <li className="text-[#475569] hover:text-[#DB2777]"><a href="#">Projects</a></li>
                    <li className="text-[#475569] hover:text-[#DB2777]"><a href="#">About</a></li>
                    <li className="text-[#475569] hover:text-[#DB2777]"><a href="#">Contact</a></li>
                </ul>

                {/* Buttons */}

                <div className="flex items-center gap-2 sm:gap-5">
                    <a href="#" className="text-[14px] text-[#475569] hover:text-[#DB2777]">Sign In</a>

                    <button className="py-1 px-3 md:py-2.5 md:px-5 bg-[#D91B7E] rounded-4xl text-white text-[12px] sm:text-[15px]"><a href="#">Sign Up</a></button>
                </div>
            </div>
            
        </div>
    );
};

export default Header;