import { Instagram } from "lucide-react";

// EDIT THIS: Customize all your portfolio content here
export const portfolioData = {
  // EDIT THIS: Your personal information
  personal: {
    name: "Sudip Bag",
    title: "React JS Developer",
    email: "dipalbag123@gmail.com",
    phone: "+91 8668924123",
    location: "Nallasopara,Maharashtra,IN",
    profileImage: "../src/assets/profile photo.jpg", // Update this path
  },

  // EDIT THIS: Your social links
  social: {
    github: "https://github.com/Sudip294",
    linkedin: "https://www.linkedin.com/in/sudip-bag28/",
    Instagram: "https://www.instagram.com/sudip_9955",
  },

  // EDIT THIS: Hero section content
  hero: {
    headline: "Building Modern Web Experiences with React",
    subheadline: "Passionate Frontend Developer specialized in creating responsive, user-friendly applications with clean, maintainable code.",
    cta: {
      primary: "View Projects",
      secondary: "Download Resume",
      tertiary: "Contact Me"
    }
  },

  // EDIT THIS: About section
  about: {
    title: "About Me",
    content: "I’m a fresher Front-End Developer with a strong interest in React.js and modern web development. I enjoy building responsive and user-friendly interfaces using React, JavaScript, Tailwind CSS, and Bootstrap. Through personal projects, I have developed a solid understanding of component-based architecture and frontend best practices. I’m eager to learn, improve my skills, and start my career as a React developer.",
    highlights: [
      "Fresher frontend Developer",
      "React & JavaScript Development",
      "UI/UX Enthusiast",
      "Problem Solver"
    ]
  },

  // EDIT THIS: Your skills
  skills: [
    { name: "HTML5", level: 90, category: "Frontend" },
    { name: "CSS3", level: 80, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 70, category: "Frontend" },
    { name: "React JS", level: 70, category: "Frontend" },
    { name: "Vite", level: 70, category: "Tools" },
    { name: "Tailwind CSS", level: 80, category: "Styling" },
    { name: "Bootstrap", level: 80, category: "Styling" },
    { name: "shadcn/ui", level: 70, category: "UI Library" },
    { name: "Framer Motion", level: 65, category: "Animation" },
    { name: "Git & GitHub", level: 70, category: "Version Control" },
    { name: "MERN Stack (Basic)", level: 40, category: "Full Stack" },
    { name: "Node.js (Basic)", level: 40, category: "Backend" }
  ],

  // EDIT THIS: Your education
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Tilak Maharashtra University, Pune",
      year: "2021 - 2024",
      grade:"CGPA : 7.72",
      description: "Focused on computer applications, programming fundamentals, web development, and software development con."
    },
    {
      degree: "HSC (Class XII)",
      institution: "Maharashtra State Board of Secondary & Higher Secondary Education, Pune",
      year: "2019 - 2021",
      grade:"Grade : 84.50%",
      description: "Completed Higher Secondary education in Commerce with Information Technology, focusing on business fundamentals and basic computer applications"
    }
  ],

  // EDIT THIS: Your experience
  experience: [
    {
  title: "Fresher Frontend Developer (Self-Learning)",
  // company: "Personal Projects",
  period: "Jun 2024 - Present",
  description: "Developed multiple frontend projects using React.js, focusing on reusable components, responsive design, and clean UI implementation.",
  technologies: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "Git"]
}
,
    // {
    //   title: "Freelance Web Developer",
    //   company: "Self-Employed",
    //   period: "Jan 2024 - May 2024",
    //   description: "Built responsive websites for small businesses using modern web technologies.",
    //   technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"]
    // }
  ],

  // EDIT THIS: Your projects
  projects: [
    {
      id: 1,
      title: "TravelBooker",
      description: "A responsive travel booking frontend application built using React.js. The project focuses on creating reusable components, clean UI design, and smooth user experience. It showcases destination listings and a modern layout, deployed using Vercel. This project helped strengthen my understanding of React component structure and frontend best practices.",
      image: "/src/assets/travetbooker ss.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["vite + React js", "Bootstrap", "Chart.js", "react-hot-toast" ,"PWA"],
      githubUrl: "https://github.com/Sudip294/travelBooker-project",
      liveUrl: "https://travel-booker-project.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "CalcMaster",
      description: "Developed a responsive web application offering essential tools such as a standardcalculator, BMI index calculator, and age calculator. Built using HTML, CSS, and JavaScript, and deployed on Vercel, the platform ensures a user-friendly and efficient experience across devices.",
      image: "/src/assets/calcmaster ss.jpg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "BootStrap","PWA"],
      githubUrl: " https://github.com/Sudip294/CalcMaster-Project",
      liveUrl: " https://calc-master-project.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "EatsExpress",
      description: "Developed a comprehensive website for EatsExpress, a modern food delivery service in Mumbai, featuring a diverse range of culinary options and a responsive user interface.",
      image: "/src/assets/eatsexpress.png?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "Bootstrap"],
      githubUrl: "https://github.com/Sudip294/OnlineFoodDelivery",
      liveUrl: "https://eats-express28.vercel.app/",
      featured: false
    }
  ]
};