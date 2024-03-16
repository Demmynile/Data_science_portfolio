const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ademola | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of Frontend designs",
  og: {
    title: "Ademola Portfolio",
    type: "website",
    url: "http://ecomass.store/",
  },
};

//Home Page
const greeting = {
  title: "Greetings ",
  sub: "Ademola Balogun",
  logo_name: "Ademola Balogun",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/demmynile",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/rohankokkula01",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/rohan0301",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@rohankokkula",
    // },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink:
        "https://www.linkedin.com/in/balogun-ademola-surajudeen-71848814b/",
    },
    // {
    //   siteName: "HashNode",
    //   iconifyClassname: "simple-icons:hashnode",
    //   style: {
    //     color: "#2962ff",
    //   },
    //   profileLink: "",
    // },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Artificial Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Assisted in developing and implementing machine learning models for predictive analytics.",
        "⚡ Collaborated with cross-functional teams to analyse and interpret data for actionable insights.",
        "⚡ Conducted data cleaning, exploratory data analysis, and presented findings to team members.",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web application using HTML5, CSS3, Tailwind, ReactJS,Typescript Nextjs & NodeJS ",
        "⚡ Creating application backend in Node, Django",
        "⚡ Having experience in Cloud Computing with globally recognised service like AWS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Image Classification Project with CNN",
      img_path: "image_classifier.png",
      description:
        "Develop a CNN model that will identify the species of a flower from a photograph.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "Tensorflow",
          color: "#00a100",
        },
      ],
      // link: "https://teath.herokuapp.com ",
      code: "https://github.com/Demmynile/Image-Classification",
      linkcolor: "white",
    },
    {
      title: "Car Price Prediction",
      img_path: "neural.gif",
      description:
        "Explore how supervised learning models can be used to predict the price of a second hand car.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Tensorflow",
          color: "#ff4b4b",
        },
        {
          lang: "Scikit-Learn",
          color: "#3c0095",
        },
      ],
      // link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/Demmynile/Car-price-prediction",
      linkcolor: "white",
    },
    {
      title: "Erin Sweet Treats Ecommerce Application",
      img_path: "erin's.png",
      description:
        "Created a very user friendly ecommerce application with the use of amazing stacks",
      tags: [
        {
          lang: "ReactJS",
          color: "#004782",
        },
        {
          lang: "JavaScript",
          color: "#820032",
        },
        {
          lang: "Sass",
          color: "#00a100",
        },
      ],
      link: "https://www.ecomass.store",
      code: "https://github.com/Demmynile/erin-sweets-frontend",
      linkcolor: "white",
    },
    {
      title: "Pepsi Website Unique Clone done with raw css",
      img_path: "pepsi.png",
      description:
        "A Pepsi clone with the use of raw css for transitions , animations with an amazing layout",
      tags: [
        {
          lang: "ReactJS",
          color: "#004782",
        },
        {
          lang: "JavaScript",
          color: "#820032",
        },
        {
          lang: "Sass",
          color: "#00a100",
        },
      ],
      link: "https://react-pepsi-clone.vercel.app/",
      code: "https://github.com/Demmynile/react-pepsi-clone",
      linkcolor: "white",
    },
    {
      title: "Lottery Web3 Application",
      img_path: "lottery.png",
      description:
        "Lottery Web3 application revolutionizes gaming by leveraging blockchain technology for transparent, secure, and decentralized lotteries",
      tags: [
        {
          lang: "ReactJS",
          color: "#004782",
        },
        {
          lang: "Nextjs",
          color: "#820032",
        },
        {
          lang: "Typescript",
          color: "#820032",
        },
        {
          lang: "Tailwindcss",
          color: "#00a100",
        },
      ],
      link: "https://lottery-web3-ten.vercel.app/",
      code: "https://github.com/Demmynile/lottery-web3",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Devops Intern(Usa)",
        subtitle: "Cuesoft Inc",
        date: "August 2023 - present",
        content: [
          "I utilized my knowledge of Go programming language to write scripts and tools for automating various tasks related to deployment, configuration management, and monitoring.",
          "Leveraged Terraform to implement infrastructure as code (IaC) principles, enabling the provisioning and management of infrastructure resources across different environments.",
          "Applied Git and GitHub extensively for version control, collaboration, and code review processes, ensuring that changes were tracked, reviewed, and deployed efficiently.",
          "Implemented CI/CD pipelines using GitHub Actions, CircleCI, or other similar tools to automate the build, test, and deployment processes, enabling faster and more reliable software delivery.",
          "Utilized Docker for containerization, enabling the packaging and deployment of applications consistently and portably across different environments.",
          "Utilized AWS services such as EC2, S3, and RDS for hosting applications, storing data, and managing infrastructure resources, ensuring scalability and reliability.",
        ],
      },
      {
        title: "Frontend Engineer(Nigeria)",
        subtitle: "Sterlingtech and Data Sciences",
        date: "August 2020 - September 2023",
        content: [
          "Developing and maintaining the frontend of a JavaScript-based web application using React.",
          "Develop web or mobile applications using React as a base.",
          "Vast with other third-parties packages like Redux, React Routers and Axios, etc.",
          "Writing the web services and APIs using Django Rest Framework/Node express used by front-end developers and mobile application developers.",
        ],
      },
      {
        title: "Data Science Intern",
        subtitle: "Sterlingtech and Data sciences",
        date: "April 2020 - August 2020",
        content: [
          "Study and transform data science prototypes.",
          "Research and implement ML algorithms and tools.",
          "Select appropriate datasets and data representation methods.",
          "Perform statistical analysis and fine-tuning using test results",
          "Deploying machine Learning models to Aws Ec2.",
          "Built data-driven real-time dashboard with Tableau",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title:
            "Masters of Science in Artificial Intelligence and Data Science",
          subtitle: "University of Hull",
          date: "2023 - 2024",
          content: ["Distinction (Excepted)"],
        },
        {
          title: "Bachelor of Technology in Geoinformatics",
          subtitle: "Federal University of Technology Akure",
          date: "2012 - 2018",
          content: ["Second Class Division"],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Cruise Rims(USA)",
          subtitle: "https://www.cruiserims.com/",
          content: [
            "Created a website for cruise rims for showing their products and upcoming projects ",
          ],
        },
        // {
        //   title: "Portfolio Website",
        //   subtitle: "pranavphulware.netlify.app",
        //   content: [
        //     "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
        //   ],
        // },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "IBM Data Science Professional Certification",
      subtitle: "Ibm",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.youracclaim.com/badges/bd5cf4b8-5417-4421-8bf1-be0f1740e537?source=linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },

    {
      title: "Google Analytics Individual Qualification",
      subtitle: "Google",
      logo_path: "python-01.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#000000",
    },
    {
      title: "Google Data Studio",
      subtitle: "Google",
      logo_path: "python-01.png",
      certificate_link:
        "https://drive.google.com/open?id=1rLQEZvviVCO5BXvfTqiXyQJoJpdRfFnp",
      alt_name: "google",
      color_code: "#000000",
    },
    {
      title: "International Development Graduate Internship",
      subtitle: "Dataville",
      logo_path: "python-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1rA-_S1d2AQOKB4LrkqJpSrKxuICn5FkX/view?usp=sharing",
      alt_name: "Dataville",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Tiverton, Devon EX16-6UX United Kingdom",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+447534727523",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/demmynile",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/balogun-ademola-surajudeen-71848814b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "balogun80@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/demmynile/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
