// Website related settings
const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "LAN ANH",
  description:
    "This is LAN ANH's personal portfolio. You can find my projects, skills, and contact information here.",
  og: {
    title: "LAN ANH Portfolio",
    type: "website",
    url: "http://lananh2905.github.io/",
  },
};

//Home Page
const greeting = {
  title: "TRINH THI LAN ANH",
  logo_name: "LAN ANH",
  nickname: "Intern AI Engineer",
  subTitle:
    "This is Lan Anh's personal portfolio. You can find my projects, skills, and contact information here.",
  resumeLink:
    "https://drive.google.com/file/d/1YTKmUpPrL6oPiOOetD1ieJQ3qWrmQQkH/view?usp=drive_link",
  portfolio_repository: "https://github.com/lananh2905",
  githubProfile: "https://github.com/lananh2905",
};

// Social Media Links
const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/lananh2905",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:lanh29052004@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/lan.anh.407097/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/tt.lan_anh/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

// Skills Page
const skills = {
  data: [
    {
      title: "Machine Learning",
      fileName: "ml_image",
      skills: [
        "⚡ Strong grasp of Machine Learning, Deep Learning, and Generative AI principles.",
        "⚡ Practical experience in Computer Vision and NLP projects using modern techniques.",
        "⚡ Skilled in data preprocessing, model training, fine-tuning, and evaluation with TensorFlow, PyTorch, and Keras.",
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
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
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
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Model Deployment & Cloud Platforms",
      fileName: "deployment_image",
      skills: [
        "⚡ Deploying machine learning models as web apps using Streamlit, Flask, and FastAPI.",
        "⚡ Building full-stack applications with ReactJS, NodeJS, ExpressJS, ASP.NET, and MongoDB.",
        "⚡ Containerizing and deploying applications using Docker and cloud platforms like Google Cloud Platform (GCP).",
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
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
                {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Computer Graphics",
      fileName: "computer_graphics_image",
      skills: [
        "⚡ Understanding of core graphics concepts: rasterization, fractals, 2D and 3D rendering.",
        "⚡ Experience with OpenGL, WebGL, and Three.js for interactive graphics development.",
        "⚡ Enable to work with shaders, texture mapping, and lighting techniques in real-time rendering.",
      ],
      softwareSkills: [
      {
        skillName: "WebGL",
        fontAwesomeClassname: "simple-icons:webgl",
        style: {
          color: "#990000",
        },
      },
      {
        skillName: "Three.js",
        fontAwesomeClassname: "simple-icons:threedotjs",
        style: {
          color: "#000000",
        },
      },
      {
        skillName: "Blender",
        fontAwesomeClassname: "simple-icons:blender",
        style: {
          color: "#F5792A",
        },
      },

      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "University of Information Technology - Vietnam National University HCM City",
      subtitle: "Majoring in Computer Science",
      logo_path: "uit.png",
      alt_name: "University of Information Technology",
      duration: "2022-2025 (In Progress)",
      descriptions: [
        "⚡ I have studied about Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, and Data Science concepts.",
        "⚡ Besides, I took part in various projects related to these topics.",
        "⚡ I have also studied about Frontend and Backend Development, Cloud Computing, MLOps and Computer Graphics.",
      ],
      website_link: "https://www.uit.edu.vn/",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of my projects that I have worked on.",
  avatar_image_path: "projects_image.svg",
};


export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  projectsHeader,
};
