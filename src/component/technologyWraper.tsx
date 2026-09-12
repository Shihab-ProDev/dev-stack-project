import { use, useState } from "react";
import type { Itechnology } from "../types/type";
import Technology from "./technology";


interface TechnologyWraperProps {
    technology: Promise<Itechnology[]>;
}

const TechnologyWraper = ({ technology }: TechnologyWraperProps) => {

    const technologies = use(technology)

    const [selectedStack, setselectedStack] = useState<Itechnology[]>([]);

    const handleStack = (allStack: Itechnology) => {
        const exists = selectedStack.some(item => item.name === allStack.name);
        if (exists) {
            setselectedStack(selectedStack.filter(item => item.name !== allStack.name));
        } else {
            setselectedStack([...selectedStack, allStack]);
        }
    }


    const handleRemoveStack = (stackItem: Itechnology) => {

        const restStack = selectedStack.filter((selectitem) => selectitem.name != stackItem.name);
        setselectedStack(restStack)

    }

    const handleRemoveAll = () => {
        setselectedStack([]);
    }


    return (
        <div>
            <div className="mt-10 flex gap-8">
                <div className="w-[75%]">
                    <div className="grid grid-cols-3 gap-5">

                        {
                            technologies.map(tech => (
                                <Technology
                                    key={tech.id}
                                    technology={tech}
                                    handleStack={handleStack}
                                    isAdded={selectedStack.some(item => item.name === tech.name)} />))
                        }

                    </div>
                </div>


                <div className="w-[25%]">

                    <div className="border border-[#F1F5F9] rounded-2xl p-5 sticky top-30">

                        <h5 className="text-[16px] font-bold">Your Stack</h5>
                        <p className="text-[14px] font-light text-[#94A3B8] mt-1">{selectedStack.length === 0 ? 'No technology selected yet.' : `${selectedStack.length} Technology Selected`}</p>

                        <div className="mt-4 flex flex-col gap-2">
                            {
                                selectedStack.length === 0 ?

                                    <div className="border border-[#E2E8F0] rounded-xl text-[#94A3B8] p-4 w-full text-center">Your stack is empty.</div>
                                    :
                                    selectedStack.map(stackitem =>
                                        <div key={stackitem.id} className="flex justify-between border border-[#E2E8F0] p-2.5 rounded-lg">
                                            <div className="flex items-center gap-2">
                                                <img src={stackitem.icon} alt="" />
                                                <div>
                                                    <p className="text-[14px] font-bold">{stackitem.name}</p>
                                                    <p className="text-[10px] font-light">{stackitem.category}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => handleRemoveStack(stackitem)} className="cursor-pointer">
                                                <img src="/src/assets/Vector.svg" alt="" />
                                            </button>
                                        </div>
                                    )
                            }
                        </div>

                        {

                            selectedStack.length >= 1 ?
                                <button onClick={handleRemoveAll} className="w-full border border-[#D82C20] text-[#D82C20] font-semibold mt-5 p-2 rounded-lg hover:bg-[#D82C20] hover:text-white cursor-pointer">Remove All</button> : ''
                        }



                    </div>
                </div>



            </div>

        </div>
    );
};

export default TechnologyWraper;