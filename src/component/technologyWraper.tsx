import { use } from "react";
import type { Itechnology } from "../types/type";
import Technology from "./technology";


const TechnologyWraper = ({ technology }: { technology: Promise<Itechnology[]> }) => {

    const technologies = use(technology)
    console.log(technologies)



    return (
        <div>
            <div className="grid grid-cols-3 gap-5">

                {
                    technologies.map(technology => <Technology technology={technology}></Technology>)
                }

            </div>
        </div>
    );
};

export default TechnologyWraper;