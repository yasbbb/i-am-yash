import { Experience } from "../types/cards";

const ExperienceCard = ({ company, title, image, date, location }: Experience) => {
    return (
        <div className="group flex flex-row justify-center items-center w-full h-full">
            <img className="h-full rounded-full transition-all duration-500 group-hover:rounded-l-2xl group-hover:rounded-r-none" src={image}/>
            <div className="flex flex-row justify-center items-center w-0 h-full bg-white opacity-0 rounded-r-2xl drop-shadow-lg transition-all duration-700 group-hover:w-3/4 group-hover:p-4 group-hover:opacity-100 overflow-hidden">
                <div 
                    className="flex flex-col justify-start items-center w-1/2 h-full p-2
                               md:p-0"
                >
                    <h1 
                        className="text-black font-bold text-lg
                                     md:text-2xl"
                    >
                        {company}
                    </h1>
                    <h1 
                        className="text-black font-light text-md
                                     md:text-xl"
                    >
                        {title}
                    </h1>
                    <h1 
                        className   ="text-black font-light italic text-sm
                                        md:text-xl"
                    >
                        {date}
                    </h1>
                    <h1 className="hidden text-black font-light italic text-xl
                                     md:block"
                    >
                        {location}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;