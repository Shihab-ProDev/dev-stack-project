import { use, useState } from "react";
import type { Itechnology } from "../types/type";
import Technology from "./technology";


const TechnologyWraper = ({ technology }: { technology: Promise<Itechnology[]> }) => {

    const technologies = use(technology)

    const [selectedStack, setselectedStack] = useState<Itechnology[]>([]);

    const handleStack = (allStack: Itechnology) => {

        if (selectedStack.includes.allStack) {

            const remainingStack = selectedStack.filter(stackItem => stackItem.name !== allStack.name);
            setselectedStack(remainingStack)
        }
        else {
            const newStacks = [...selectedStack, allStack];
            setselectedStack(newStacks)

        }
    }


    return (
        <div>
            <div className="mt-10 flex gap-8">
                <div className="w-[75%]">
                    <div className="grid grid-cols-3 gap-5">

                        {
                            technologies.map(technology => <Technology key={technology.id} technology={technology} handleStack={handleStack}></Technology>)
                        }

                    </div>
                </div>


                <div className="w-[25%]">

                    <div className="border border-[#F1F5F9] rounded-2xl p-5 sticky top-30">

                        <h5 className="text-[16px] font-bold">Your Stack</h5>
                        <p className="text-[14px] font-light text-[#94A3B8] mt-1">{selectedStack.length === 0 ? 'No technology selected yet.' : <p>{selectedStack.length} Technology Selected</p>}</p>

                        <div className="mt-4 flex flex-col gap-2">
                            {
                                selectedStack.length === 0 ?

                                    <div className="border border-[#E2E8F0] rounded-xl text-[#94A3B8] p-4 w-full text-center">Your stack is empty.</div>
                                    :
                                    selectedStack.map(stackitem =>
                                        <div className="flex justify-between border border-[#E2E8F0] p-2.5 rounded-lg">
                                            <div className="flex items-center gap-2">
                                                <img src={stackitem.icon} alt="" />
                                                <div>
                                                    <p className="text-[14px] font-bold">{stackitem.name}</p>
                                                    <p className="text-[10px] font-light">{stackitem.category}</p>
                                                </div>
                                            </div>
                                            <button className="cursor-pointer">
                                                <img src="/src/assets/Vector.svg" alt="" />
                                            </button>
                                        </div>
                                    )
                            }
                        </div>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default TechnologyWraper;