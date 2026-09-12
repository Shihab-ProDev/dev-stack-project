const Footer = () => {
    return (
        <div className="pt-16 pb-12 border-t border-[#F1F5F9] px-5">

            <div className="container mx-auto ">
            
            <div className="flex gap-5">
                <div className="flex flex-col items-center sm:items-start sm:w-[40%]">
                    <img className="w-40" src="/src/assets/logo-text.png" alt="" />


                    <p className="text-[14px] text-[#64748B] mt-3 font-light md:max-w-[384px] text-center sm:text-left">Curated tools, technologies, and resources for developers building modern software.</p>


                    <ul className="flex gap-4 mt-6 text-[14px]">
                        <li className="text-[#475569] hover:text-[#DB2777]"><a href="#">GitHub</a></li>
                        <li className="text-[#475569] hover:text-[#DB2777]"><a href="">Twitter</a></li>
                        <li className="text-[#475569] hover:text-[#DB2777]"><a href="#">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="hidden sm:block w-[20%]">
                    <p className="text-[14px] uppercase font-bold text-[#0F172A]">Product</p>
                    <ul className="flex flex-col gap-2.5 mt-4">
                        <li className="text-[#64748B] hover:text-[#DB2777] text-[14px]"><a href="#banner">Home</a></li>
                        <li className="text-[#64748B] hover:text-[#DB2777] text-[14px]"><a href="#technologies">Technology</a></li>
                        <li className="text-[#64748B] hover:text-[#DB2777] text-[14px]"><a href="#">Projects</a></li>
                    </ul>
                </div>

                <div className="hidden sm:block w-[20%]">
                    <p className="text-[14px] uppercase font-bold text-[#0F172A]">COMPANY</p>
                    <ul className="flex flex-col gap-2.5 mt-4">
                        <li className="text-[#64748B] hover:text-[#DB2777] text-[14px]"><a href="#">About</a></li>
                        <li className="text-[#64748B] hover:text-[#DB2777] text-[14px]"><a href="#">Contact</a></li>
                        <li className="text-[#64748B] hover:text-[#DB2777] text-[14px]"><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div className="hidden sm:block w-[20%]">
                    <p className="text-[14px] uppercase font-bold text-[#0F172A]">Legal</p>
                    <ul className="flex flex-col gap-2.5 mt-4">
                        <li className="text-[#64748B] hover:text-[#DB2777] text-[14px]"><a href="#">Privacy Policy</a></li>
                        <li className="text-[#64748B] hover:text-[#DB2777] text-[14px]"><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            
            <div className="mt-14 border-t border-[#F1F5F9] pt-8 flex flex-col sm:flex-row justify-between items-center gap-2">
                <p className="text-[14px] text-[#94A3B8]">© 2026 Dev Stack. All rights reserved.</p>
                <ul className="flex gap-6">
                    <li className="text-[14px] text-[#94A3B8] hover:text-[#DB2777]"><a href="#">Privacy</a></li>
                    <li className="text-[14px] text-[#94A3B8] hover:text-[#DB2777]"><a href="#">Terms</a></li>
                </ul>
            </div>
            
            </div>



        </div>
    );
};

export default Footer;