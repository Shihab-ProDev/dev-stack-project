import { Suspense } from "react";
import type { Itechnology } from "../types/type";
import TechnologyWraper from "./technologyWraper";

const Technologies = () => {

    const technologyPromise = async (): Promise<Itechnology[]> => {
        const res = await fetch('./technology.json');
        const data = await res.json();
        return data
    }


    return (
        <div className="mb-21.75 px-5">



            <div className="container mx-auto">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[36px] font-bold text-[#0F172A]">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
                    <p className="text-[16px] text-[#64748B] font-light">Pick one technology per category to build your ideal stack.</p>
                </div>


                <div className="mt-10 flex gap-8">
                    <div className="w-[75%]">
                        <Suspense fallback={<p>Loading technologies...</p>}>
                            <TechnologyWraper technology={technologyPromise()}></TechnologyWraper>
                        </Suspense>

                    </div>



                    <div className="w-[25%]">


                        <div className="border border-[#F1F5F9] rounded-2xl p-5">
                            <h5 className="text-[16px] font-bold">Your Stack</h5>
                            <p className="text-[14px] font-light text-[#94A3B8] mt-1">2 Technology Selected</p>

                            <div className="mt-4 flex flex-col gap-1.5">
                                <div className="flex justify-between border border-[#E2E8F0] p-2.5 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <img src="/src/assets/react.png" alt="" />
                                        <div>
                                            <p className="text-[14px] font-bold">React</p>
                                            <p className="text-[10px] font-light">Frontend</p>
                                        </div>
                                    </div>
                                    <img src="/src/assets/Vector.svg" alt="" />
                                </div>

                                <div className="flex justify-between border border-[#E2E8F0] p-2.5 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <img src="/src/assets/react.png" alt="" />
                                        <div>
                                            <p className="text-[14px] font-bold">React</p>
                                            <p className="text-[10px] font-light">Frontend</p>
                                        </div>
                                    </div>
                                    <img src="/src/assets/Vector.svg" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>



                </div>

            </div>

        </div>
    );
};

export default Technologies;