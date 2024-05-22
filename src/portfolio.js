/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kaique Lima",
  title: "Saudações, eu sou o Kaique",
  subTitle: emoji(
    "Um SRE e AppSec entusiasmado 🚀 com experiência na construção e proteção de sistemas e aplicações web e mobile. Tenho habilidade em assegurar a segurança de aplicações e sistemas durante todo o ciclo de vida de desenvolvimento e operações"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kaiqui",
  linkedin: "https://www.linkedin.com/in/kaique-l-17738210a/",
  gmail: "kaiqui82@gmail.com",
  gitlab: "https://gitlab.com/kaiqui",
  medium: "https://medium.com/@kailima",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle: "LOUCO POR SISTEMAS E SEGURANÇA QUE QUER EXPLORAR CADA PILHA DE TECNOLOGIA",
  skills: [
    emoji(
      "⚡ Gerenciar e otimizar a infraestrutura e operações de sistemas web e aplicativos móveis"
    ),
    emoji("⚡ Implementar e manter soluções escaláveis e resilientes para aplicações distribuídas"),
    emoji(
      "⚡ Integrar e gerenciar serviços de terceiros para monitoramento, segurança e armazenamento na nuvem"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "suse",
      fontAwesomeClassname: "fab fa-suse"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "red team",
      fontAwesomeClassname: "fas fa-user-secret"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "blue team",
      fontAwesomeClassname: "fas fa-user-shield"
    },
    {
      skillName: "sql-nosql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FIAP",
      logo: require("./assets/images/fiap.png"),
      subHeader: "Pós Graduação em Offensive Cyber Security - Red Team Operations",
      duration: "Abril 2023 - Fevereiro 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
       //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Fatec",
      logo: require("./assets/images/fatec.png"),
      subHeader: "Graduação em Segurança da Informação",
      duration: "Agosto 2018 - Agosto 2021",
      //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programação (Python, Java, Golang, Shell Script, JS)",
      progressPercentage: "90%"
    },
    {
      Stack: "Infraestrutura como Código (Terraform, Ansible, CloudFormation)",
      progressPercentage: "70%"
    },
    {
      Stack: "CI/CD (Jenkins, Gitlab CI, Github Actions, Argo CD)",
      progressPercentage: "75%"
    },
    {
      Stack: "Contêineres e Orquestração (Docker, Kubernetes)",
      progressPercentage: "80%"
    },
    {
      Stack: "Segurança de Aplicações (SAST, DAST, IAST, SCA)",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Analista de Segurança da Informação",
      company: "Magalu Bank",
      companylogo: require("./assets/images/fintechmagalu.jpg"),
      date: "Julho 2023 – Presente",
      desc: "Promovo uma cultura DevSecOps, integrando segurança em todas as etapas do desenvolvimento e colaborando com equipes de desenvolvimento, segurança e operações. Participo do ciclo de vida completo: planejamento de estratégias de segurança, desenvolvimento de código seguro, testes de vulnerabilidades e resposta rápida a incidentes. Utilizo linguagens de programação, ferramentas de análise estática e dinâmica, integração contínua, controle de versão, WAFs, GCP e frameworks de desenvolvimento seguro. Realizo modelagem de ameaças e gestão contínua de vulnerabilidades, garantindo correções ágeis e eficazes.",
     // descBullets: [
       // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
     // ]
    },
    {
      role: "Engenheiro de Segurança - AppSec",
      company: "PagBank",
      companylogo: require("./assets/images/pags.jpg"),
      date: "Fevereiro 2023 – Julho 2023",
      desc: "Participei na definição e evolução do SDLC, garantindo segurança desde o início do desenvolvimento. Realizei análises de vulnerabilidades em aplicações e APIs, desenvolvendo planos de mitigação. Colaborei com equipes de tecnologia e negócios para alinhar segurança e inovação. Implantei ferramentas de cibersegurança, gerindo incidentes e vulnerabilidades. Utilizei tecnologias como Java, Python, Node, Golang, Flutter, ferramentas SAST, DAST, Jenkins, Terraform, AWS CloudFormation, GitHub e WAF CloudFront. Apliquei frameworks como OWASP Top 10 e NIST, seguindo normas como SOX, PCI-DSS e LGPD. Realizei modelagem de ameaças e priorizei correções de vulnerabilidades."
    },
    {
      role: "Engenheiro de Sistemas - SRE",
      company: "PagBank",
      companylogo: require("./assets/images/pags.jpg"),
      date: "Maio 2022 – Fevereiro 2023",
      desc: "Implementei práticas de SRE/DevOps para colaboração entre desenvolvimento e operações de TI, focando na entrega rápida e confiável de software e na manutenção da estabilidade e escalabilidade dos sistemas. Utilizei ferramentas como Terraform, Ansible, Jenkins, Kubernetes, Docker, JFrog e AWS. Criei infraestruturas automatizadas com Terraform, automatizei configurações com Ansible, desenvolvi pipelines CI/CD com Jenkins, e implementei contêineres com Kubernetes e Docker para garantir portabilidade e escalabilidade. Gerenciei artefatos com JFrog e desenvolvi ferramentas e scripts em Python, Shell e Golang para melhorar a eficiência das operações."
    },
    {
      role: "Analista de Sistemas",
      company: "Tim Brasil",
      companylogo: require("./assets/images/tim.png"),
      date: "Janeiro 2020 – Maio 2022",
      desc: "Atuei na orquestração e execução de ordens no sistema OMS para atender solicitações dos clientes TIM, seguindo práticas do eTOM. Tive experiência com Pré-Pago, Pós-Pago, CRM (Siebel), middleware, microserviços, e plataformas em Cloud. Utilizei metodologias ágeis, forneci suporte à produção, e desenvolvi scripts e automações em Shell, Python e Oracle PL/SQL. Participei de equipes de resolução crítica, gerenciei mudanças e fiz troubleshooting de aplicações e infraestrutura, documentando operações e garantindo eficiência no ciclo de vida da telefonia móvel."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Com amor por tecnologia, adoro escrever e ensinar aos outros o que aprendi.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@kailima/integrando-deep-learning-ao-monitoramento-de-uma-infraestrura-de-ti-5b0a19253e51",
      title: "Monitorando Infraestrura com Deep Learning",
      description:
        "O propósito desse artigo é mostrar que é posivel introduzir dentro das organizações o uso de inteligencia artificial para monitoração dos ativos de TI."
    },
    {
      url: "https://medium.com/@kailima/como-reduzir-custos-de-infraestrutura-com-deep-learning-e17baa0d71d1",
      title: "Reduzir Custos com Deep Learning",
      description:
        "Descubra uma solução viável para reduzir os custos de infraestrutura utilizando dados - uma abordagem prática para uma questão complexa."
    },
    {
      url: "https://medium.com/@kailima/seguran%C3%A7a-n%C3%ADvel-chuck-norris-a-github-action-que-n%C3%A3o-brinca-em-servi%C3%A7o-62a9d6e944da",
      title: "Segurança na Esteira de Desenvolvimento",
      description:
        "Adotar uma abordagem de segurança integrada desde o início do ciclo de vida do desenvolvimento de software é essencial."
    },
    {
      url: "https://medium.com/@kailima/devsecops-automa%C3%A7%C3%A3o-de-an%C3%A1lise-de-seguran%C3%A7a-em-ambientes-de-infraestrutura-como-c%C3%B3digo-3a902db60fc8",
      title: "Automação de Segurança em IaC com DevSecOps.",
      description:
        "Assim como qualquer código uma infraestrutura escrita para o Terraform pode estar vulnerável a diversos tipos de vulnerabilidades."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Fale Comigo ☎️"),
  subtitle:
    "Discutir um projeto ou apenas dizer um oi? Minha caixa de entrada está aberta para todos.",
  number: "11 94731-4691",
  email_address: "kaiqui82@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
