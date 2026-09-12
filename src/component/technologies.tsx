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
        <div id="technologies" className="mb-21.75 px-5">



            <div className="container mx-auto">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[36px] font-bold text-[#0F172A]">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
                    <p className="text-[16px] text-[#64748B] font-light">Pick one technology per category to build your ideal stack.</p>
                </div>


                <Suspense fallback={<p>Loading technologies...</p>}>
                    <TechnologyWraper technology={technologyPromise()}></TechnologyWraper>
                </Suspense>


            </div>

        </div>
    );
};

export default Technologies;