import { time } from "console";
import { Project } from "../types/cards"

const ProjectCard = ({ title, subtitle, image, date, lable, description }: Project) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full p-12 drop-shadow-xl transition-all duration-300 hover:scale-90">
            <div className="w-full h-full">
                <img className="w-full h-1/2 object-cover" src={image}/>
                <div className="flex flex-col justify-center items-center w-full h-1/2 bg-white p-12 break-words">
                    <h1 className="text-black font-bold text-2xl">{title}</h1>
                    <h1 className="text-black font-normal text-xl">{subtitle}</h1>
                    <h1 className="text-black font-light text-xl italic">{date}</h1>
                    <div className="w-full h-24 break-words" style={{ whiteSpace: 'pre-wrap', overflow: 'hidden' }}>
                        {description}
                    </div>
                    <h1 className="text-black font-normal text-xs">{lable}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;