const Header = () => {
    return (
        <div className="border-b border-b-[#F1F5F9] py-6 px-5">
            <div className="container mx-auto flex justify-between items-center">

                {/* logo */}

                <img src="/src/assets/logo-text.png"  className="w-[136px]"/>

                {/* menu items */}

                <ul className="flex gap-[29px] text-[14px]">
                    <li className="text-[#475569] hover:text-[#DB2777]"><a href="#">Home</a></li>
                    <li className="text-[#475569] hover:text-[#DB2777]"><a href="#">Technologies</a></li>
                    <li className="text-[#475569] hover:text-[#DB2777]"><a href="#">Projects</a></li>
                    <li className="text-[#475569] hover:text-[#DB2777]"><a href="#">About</a></li>
                    <li className="text-[#475569] hover:text-[#DB2777]"><a href="#">Contact</a></li>
                </ul>

                {/* Buttons */}

                <div className="flex items-center gap-5">
                    <a href="#" className="text-[14px] text-[#475569] hover:text-[#DB2777]">Sign In</a>

                    <button className="py-[10px] px-5 bg-[#D91B7E] rounded-4xl text-white"><a href="#">Sign Up</a></button>
                </div>
            </div>
            
        </div>
    );
};

export default Header;