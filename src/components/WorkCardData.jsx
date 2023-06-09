import pro1 from "../assets/project1.jpg"
// import pro2 from "../assets/project2.jpg"
import pro3 from "../assets/project3.jpg"
import pro2 from "../assets/project4.jpeg"

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Basic Banking Website",
        text: "It is a basic banking website which transfers money between two users. It uses node.js in backend and react.js in frontend. It uses mongoDB as database.",
        view: "https://banking-website-uk.netlify.app/",
        source: "https://github.com/Tech-Balveer/banky"
        
    },

    {
        imgsrc: pro2,
        title: "YT clone website",
        text: "Watch and share videos with the world. Our YouTube clone website allows you to watch and share videos with your friends and family. This website has many categories",
        view: "https://yt-cloneweb.netlify.app/",
        source: "https://github.com/Tech-Balveer/YT_Clone"
    },

    {
        imgsrc: pro3,
        title: "Note taking Website",
        text: "This website allows you to take notes in text format only. It is fully responsive, meaning it can be used on any device. You can create new notes, edit existing notes, and organize your notes into notebooks. It also has a light and dark mode theme.",
        view: "https://note-takingweb.netlify.app/",
        source: "https://github.com/Tech-Balveer/note-taking"
    },
    
];

export default ProjectCardData;