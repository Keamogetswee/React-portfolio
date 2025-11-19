import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    mysql,
    git,
    figma,
    graphql,
    next176,
    oystar,
    movieapp,
    weather,
    recipe,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full stack Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Quality Assurance",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "GraphQL",
      icon: graphql,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Next176",
      icon: next176,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - March 2025",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Quality Assurance Intern",
      company_name: "Oystar",
      icon: oystar,
      iconBg: "#383E56",
      date: "April 2023 - Aug 2023",
      points: [
        "Developed and executed test plans and test cases to identify defects and issues in products, services, or systems..",
        "Document all quality assurance activities, including detailed reports on failures and corrective actions. Maintain records and track issues using systems and databases.",
        "Work closely with engineering, production, and other teams to resolve quality issues and implement solutions.",
        "Ensure that products and processes comply with industry standards, regulations, and company policies. ",
      ],
    },
  ];
  
   const highlights = [
    {
      title: "UI-Focused Developer",
      description:
        "I love building clean, modern interfaces and crafting user experiences that feel intuitive and smooth.",
      icon: "⭐",
    },
    {
      title: "Fast Learner",
      description:
        "I pick up new technologies quickly and enjoy experimenting with frameworks, animations, and tools.",
      icon: "⚡",
    },
    {
      title: "Strong Problem Solver",
      description:
        "I enjoy breaking down complex problems and turning them into simple, functional solutions.",
      icon: "🧠",
    },
    {
      title: "Detail-Oriented",
      description:
        "Pixel-perfect styling, clear code structure, and thoughtful UI flow matter to me.",
      icon: "🎯",
    },
  ];
  
  
  const projects = [
    {
      name: "Movie Explorer Watchlist",
      description:
        "A web application that allows users to search for movies, view details, and manage a personalized watchlist. Built with React and integrated with the IMDB API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: movieapp,
      source_code_link: "https://github.com/Keamogetswee/movie-explorer-watchlist",
    },
    {
      name: "Weather Data",
      description:
        "Designed to help you manage, process, and analyze historical weather data. It includes functionality to read weather data from a CSV file, process and categorize the data, store it in a MySQL database, retrieve data based on specific criteria, and export filtered data to a CSV file.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pip",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/Keamogetswee/Weather-Data",
    },
    {
      name: "Recipe App",
      description:
        "A web application that allows users to browse, search, and save recipes. Built with React and Claude API for backend services, featuring user authentication and a responsive design.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: recipe,
      source_code_link: "https://github.com/Keamogetswee/react-state",
    },
  ];
  
  export { services, technologies, experiences, highlights, projects };