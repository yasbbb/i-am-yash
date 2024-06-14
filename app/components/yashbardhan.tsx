// icons
import SocialIcon from "./socialicon"
import { Linkedin, Github, Mailbox, Discord, Mailbox2 } from "react-bootstrap-icons";

// components
import Divider from "./divider"
import EducationCard from "./educationcard";
import ExperienceCard from "./experiencecard";
// import ProjectCard from "./projectcard";

interface Metric {
    title: string
    value: string
  }
  const Metric = ({ title, value }: Metric) => {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1
          className="text-black font-normal text-xs tracking-widest uppercase
                             md:text-md"
        >
          {title}
        </h1>
        <p
          className="text-black font-bold text-xl cursor-pointer transition-all duration-300
                             md:text-4xl md:hover:text-6xl"
        >
          {value}
        </p>
      </div>
    )
  }
  
  const metrics: Metric[] = [
    {
      title: "favorite artist",
      value: "drake",
    },
    {
      title: "favorite athlete",
      value: "luka doncic",
    },
    {
      title: "favorite sport",
      value: "ultimate frisbee",
    },
    {
      title: "leetcode problems solved",
      value: "500k+",
    },
    {
        title: "max bench",
        value: "225 lbs",
    },
    {
        title: "mile time",
        value: "5:08",
    },
  ]

// types
import { Education, Experience, Project } from "../types/cards";

const education: Education[] = [
    {
        school: "University of Texas at Dallas",
        major: "Computer Science, Minor in Finance",
        image: "utd.jpg",
        subtitles: [
            
            {
                title: "Clubs",
                description: "ACM, AIS, Quant Club, Ultimate Frisbee"
            }
        ]
    },
    {
        school: "Uplift North Hills Preparatory",
        major: "High School",
        image: "unhp.jpg",
        subtitles: [
            
            {
                title: "Activities",
                description: "IB Diploma Recipient, AP Scholar, Varsity XC"
            }
        ]
    },
]

const experiences: Experience[] = [
    {
        company: "FechAI",
        title: "Co-Founder",
        image: "logo.jpg",
        date: "Jan 2024 - Present",
        location: "Cambridge, MA"
    },
    {
        company: "Stanford",
        title: "Student Instructor",
        image: "stanford.jpg",
        date: "April 2024 - May 2024",
        location: "Stanford, CA"
    },
    {
        company: "Comerica Bank",
        title: "Cybersecurity Intern",
        image: "comerica.jpg",
        date: "May 2023 - August 2023",
        location: "Auburn Hills, MI"
    },
    {
      company: "Choice Hotels",
      title: "Software Engineer Intern",
      image: "choice.jpg",
      date: "June 2022 - August 2022",
      location: "Phoenix, AZ"
  }
]



const AidanOuckama = () => {
    return (
        <>

            <Header />

            <Divider /> 

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-8 gap-5">
              <h1 className="text-black text-4xl font-extralight uppercase">education</h1>

                {
                    education.map((school, i) => (
                        <>
                            <div className="flex flex-col justify-center items-center w-full h-1/4">
                                <EducationCard 
                                    school={school.school}
                                    major={school.major}
                                    image={school.image}
                                    subtitles={school.subtitles}
                                />
                            </div>

                            { i != education.length - 1 ? (<div className="w-0.5 h-12 bg-black"/>) : (<></>) }
                        </>
                    ))
                }

            </div>

            <Divider /> 

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-8 gap-5">
              <h1 className="text-black text-4xl font-extralight uppercase">experience</h1>

              {
                experiences.map((experience, i) => (
                    <>
                        <div className="group flex flex-row justify-center items-center w-full h-1/6">
                            <ExperienceCard 
                                company={experience.company}
                                title={experience.title}
                                image={experience.image}
                                date={experience.date}
                                location={experience.location}
                            />
                        </div>

                        { i != experiences.length - 1 ? (<div className="w-0.5 h-12 bg-black"/>) : (<></>) }
                    </>
                ))
              }

            </div>

            <Divider />

            <Socials />

            <Divider /> 

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-8 gap-5">
                <h1 className="text-black text-4xl font-extralight uppercase">about me</h1>
                <h1 className="text-black text-xl font-bold uppercase">2024</h1>
                <div className="grid grid-cols-2 justify-center items-center w-full h-full gap-3">
                    {metrics.map((metric, i) => (
                        <Metric key={i} title={metric.title} value={metric.value} />
                    ))}
                </div>
            </div>

            <Divider />

            <Footer />

        </>
    )
}

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
            <div 
                className="flex flex-col justify-evenly items-center w-full h-1/2 bg-black bg-opacity-40 px-24 py-16
                           md:flex-row"
            >
                <img 
                    src="/selfie.jpg" 
                    className="w-1/2 h-full object-cover rounded-full shadow-xl
                               md:w-1/4"
                />
                <div 
                    className="flex flex-col justify-center items-center w-1/2 h-full gap-2
                               md:items-start md:gap-10"
                > 
                    <div>
                        <h1 
                            className="hidden text-6xl text-gray-100 font-bold
                                       md:block"
                        >
                            my name is
                        </h1>
                        <div 
                            className="flex flex-row justify-center items-center w-full
                                       md:justify-start"
                        >
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-0">y</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-100">a</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-200">s</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-300">h</h1>
                            
                        </div>
                    </div>

                    <p 
                        className="text-md text-black font-bold opacity-80
                                   md:text-3xl"
                    >
                        and im a <span className="text-yellow-400">computer science student</span> <br />
                        with a passion for <span className="text-yellow-400"> software engineering</span> <br />
                        and im<span className="text-yellow-400"> hungry</span> to learn more
                    </p>
                </div>
            </div>
        </div>
    )
}

const Socials = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-36 bg-gray-100 p-8 gap-5">
            <h1 className="text-black text-4xl font-extralight uppercase">socials</h1>
            <div className="flex flex-row justify-evenly items-center w-full h-full gap-3">
            <SocialIcon url="" icon={<Discord color="black" size={36} />} />
                <SocialIcon url="mailto:yash.bardhan09@gmail.com" icon={<Mailbox2 color="black" size={36} />} />
                <SocialIcon url="https://www.linkedin.com/in/yashbardhan09/" icon={<Linkedin color="black" size={36} />} />
                <SocialIcon url="https://github.com/yashbbb009" icon={<Github color="black" size={36} />} />
            </div>            
        </div>
    )
}

const Footer = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <div className="flex flex-col justify-center items-end w-full h-12 bg-grey p-12">
        <button
            className="justify-center text-black font-semibold"
            onClick={scrollToTop}
        >
          back to top ↑
          </button>
      </div>
    );
  }
  

export default AidanOuckama;
