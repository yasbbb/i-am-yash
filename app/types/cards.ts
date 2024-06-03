export interface Education {
    school: string,
    major: string,
    image: string,
    subtitles: Subtitle[],
}

export interface Experience {
    company: string,
    title: string,
    image: string,
    date: string,
    location: string,
}

export interface Project {
    title: string,
    subtitle: string, 
    image: string,
    date: string, 
    description: string
    lable: string
}

export interface Subtitle {
    title: string,
    description: string,
}