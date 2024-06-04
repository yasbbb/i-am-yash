// icons
import SocialIcon from "./socialicon"
import {
  Linkedin,
  Github,
  Mailbox,
} from "react-bootstrap-icons"

// components
import Divider from "./divider"
import EducationCard from "./educationcard";
import ExperienceCard from "./experiencecard";
import ProjectCard from "./projectcard";

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
              description: "IB Diploma Recipient, Varsity XC"
          }
      ]
  },
]

const experiences: Experience[] = [
  {
      company: "University of Texas at Dallas",
      title: "Undergraduate Researcher - Fall 2024",
      image: "utd.jpg",
      date: "Sept 2024 - December 2024",
      location: "Richardson, TX"
  },
  {
      company: "Startup",
      title: "Founding Engineer",
      image: "finger.png",
      date: "Jan 2024 - May 2024",
      location: "Dallas, TX"
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

const projects: Project[] = [
  {
      title: "LiveLine",
      subtitle: "Crisis Relief App",
      image: "liveline.png",
      date: "Apr 2024 - Present",
      description: "iOS application that enables real time video streaming and caching during natural disasters & crisis events to assist in coordinating rescue operations",
      lable: ""
      
  },
  {
      title: "Market Momentum",
      subtitle: "Stock Trader",
      image: "reddit.jpg",
      date: "Dec 2023 - Jan 2024",
      description: "Stock trading algorithm that deploys a paper trading bot using alpaca and reddit api (praw) to analyze sentiments based off r/wallstreetbets comments",
      lable: ""
  },
  {
      title: "LeNetwork",
      subtitle: "Neural Network",
      image: "leburn.jpg",
      date: "March 2024",
      description: "Built a recurrent neural network for digit classification using perceptron and linear regression models",
      lable: "I didnt know what picture to put so instead enjoy 2k14 lebron"
  }
]

const Ouckah = () => {
  return (
      <>

          <Header />

          <Divider primaryMode/> 

          <div className="flex flex-col justify-center items-center w-full h-screen bg-black p-8 gap-5">
            <h1 className="text-white text-4xl font-extralight uppercase">education</h1>

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

                          { i != education.length - 1 ? (<div className="w-0.5 h-12 bg-white"/>) : (<></>) }
                      </>
                  ))
              }

          </div>

          <Divider primaryMode/> 

          <div className="flex flex-col justify-center items-center w-full h-screen bg-black p-8 gap-5">
            <h1 className="text-white text-4xl font-extralight uppercase">experience</h1>

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

                      { i != experiences.length - 1 ? (<div className="w-0.5 h-12 bg-white"/>) : (<></>) }
                  </>
              ))
            }

          </div>

          <Divider primaryMode/>

          <Socials />

          <Divider primaryMode/> 

          <div 
              className="flex flex-col justify-center items-center w-full min-h-screen bg-black p-8 gap-5
                         lg:h-screen"
          >
            <h1 className="text-white text-4xl font-extralight uppercase">projects</h1>

            <div 
              className="flex flex-col justify-center items-center w-full h-5/6
                         lg:grid lg:grid-rows-1 lg:grid-cols-3 "
            >
              
              {
                  projects.map((project, i) => (
                      <ProjectCard
                          key={i}
                          title={project.title}
                          subtitle={project.subtitle}
                          image={project.image}
                          date={project.date}
                          description={project.description}
                          lable={project.lable}
                      />
                  ))
              }

            </div>

          </div>

          <Divider primaryMode/>

          <Footer />

      </>
  )
}


const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-black">
      <div
        className="flex flex-col justify-evenly items-center w-full h-1/2 bg-white bg-opacity-40 px-24 py-16
                           md:flex-row"
      >
        <img
          src="/zoo.jpg"
          className="w-full h-1/2 object-cover rounded-3xl shadow-xl
                               md:h-[100%] md:w-1/3"
        />
        <div
          className="flex flex-col justify-center items-center w-1/2 h-full gap-2
                               md:items-start md:gap-10"
        >
          <div>
            <h1
              className="hidden text-6xl text-black font-bold
                                       md:block"
            >
              my name is
            </h1>
            <div
              className="flex flex-row justify-center items-center w-full
                                       md:justify-start"
            >
              <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-0">
                y
              </h1>
              <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-100">
                a
              </h1>
              <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-200">
                s
              </h1>
              <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-300">
                h
              </h1>
              {/* <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-400">
                a
              </h1>
              <h1 className="text-6xl text-white font-bold animate-bounce animation-delay-500">
                h
              </h1> */}
            </div>
          </div>

          <p
            className="text-md text-white font-bold opacity-80
                                   md:text-3xl"
          >
            and im a{" "}
            <span className="text-yellow-400">
              computer science student
            </span>{" "}
            <br />
            who loves seeking out opportunities as a <br />
            <span className="text-yellow-400">student</span>,
            <span className="text-yellow-400"> intern</span>, and
            <span className="text-yellow-400"> software engineer</span>
          </p>
        </div>
      </div>
    </div>
  )
}



const Socials = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-36 bg-black p-8 gap-5">
      <h1 className="text-white text-4xl font-thin uppercase">socials</h1>
      <div className="flex flex-row justify-evenly items-center w-full h-full gap-3">
        {/* <SocialIcon
          url="https://www.youtube.com/watch?v=uHgt8giw1LY&ab_channel=Licale"
          icon={<Youtube color="white" size={36} />}
        /> */}
        <SocialIcon
          url="mailto:yash.bardhan09@gmail.com"
          icon={<Mailbox color="white" size={36} />}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/yashbardhan09/"
          icon={<Linkedin color="white" size={36} />}
        />
        <SocialIcon
          url="https://github.com/yashbbb009"
          icon={<Github color="white" size={36} />}
        />
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-end w-full h-12 bg-black p-12">
      <h1 className="text-white font-semibold">yash [dot] bardhan09 [at] gmail [dot] com</h1>
    </div>
  )
}

export default Ouckah
