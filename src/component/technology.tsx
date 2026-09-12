import type { Itechnology } from "../types/type";
import { toast } from "react-toastify";


interface TechnologyProps {
    technology: Itechnology;
    handleStack: (technology: Itechnology) => void;
    isAdded: boolean;
}

const Technology = ({ technology, handleStack, isAdded }: TechnologyProps) => {



    const handleAddStack = () => {
        toast.success('Stack Added', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        handleStack(technology)
        
    }




    return (
        <div>

            <div className={`border-3 border-[#F1F5F9] rounded-2xl p-5 flex flex-col h-full justify-between ${isAdded ? 'border-gray-300 border-3' : ''} text-left`}>


                <div>
                    <div className="flex justify-between items-center">
                        <img src={technology.icon} alt={technology.name} />
                        <p style={{ color: technology.badge_color, backgroundColor: technology.badge_bg }} className={`bg-[${technology.badge_color}] rounded-4xl text-center text-[12px] py-0.5 px-3`}>{technology.badge}</p>
                    </div>


                    <h4 className="mt-3 text-[18px] font-bold">{technology.name}</h4>


                    <p className="mt-1.5 text-[12px] text-[#64748B] font-light">{technology.description}</p>

                </div>


                <div>

                    <div className="border-t border-[#F8FAFC] mt-4 pt-2 flex justify-between items-center">
                        <p className="text-[12px] text-[#475569] bg-[#F1F5F9] py-0.5 px-2 rounded">{technology.category}</p>

                        <p className="text-[12px] text-[#64748B]">{technology.difficulty}</p>

                        <div className="flex gap-1 items-center">
                            <img src="/src/assets/star.svg" alt="" />
                            <p className="text-[12px]">{technology.rating}</p>
                        </div>
                    </div>

                    <button onClick={handleAddStack} className={`w-full p-2 mt-4 font-semibold rounded-lg cursor-pointer ${isAdded ? `bg-green-300 text-green-700` : 'bg-[#0A0F1D] text-white'}`} disabled={isAdded}>{isAdded ? '✓ Added to Stack' : 'Add to Stack'}</button>
                </div>


            </div>

        </div>
    );
};

export default Technology;