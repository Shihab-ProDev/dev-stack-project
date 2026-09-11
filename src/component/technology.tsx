import type { Itechnology } from "../types/type";

const Technology = ({ technology }: { technology: Itechnology }) => {
    return (
        <div>

            <div className="border border-[#F1F5F9] rounded-2xl p-5 hover:border-gray-300 flex flex-col h-full justify-between">


                <div>
                    <div className="flex justify-between items-center">
                        <img src={technology.icon} />
                        <p className="bg-[#E0F2FE] rounded-4xl text-center text-[#0EA5E9] text-[12px] py-0.5 px-3">{technology.badge}</p>
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

                    <button className="w-full p-2 bg-[#0A0F1D] mt-4 rounded-lg text-white">Add to Stack</button>
                </div>


            </div>

        </div>
    );
};

export default Technology;