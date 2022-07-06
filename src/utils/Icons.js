import {
    SiJavascript,
    SiCss3,
    SiHeroku,
    SiHtml5,
    SiMongodb,
    SiPython,
    SiReact,
     SiGit,
    SiGithub,
    SiGithubactions,
    SiGooglecloud,
    SiRedux,
    SiNetlify,
    SiTypescript,
    SiFirebase,
    SiVercel,
    SiCplusplus,
    SiMysql,
    SiExpress,
    SiGitlab,
    SiTailwindcss,
    SiPostman,
    SiMaterialui,
  } from "react-icons/si";

import {
    FaNodeJs,

} from "react-icons/fa"

const data = [{
    name: 'JavaScript',
    icon: SiJavascript,
    options: {
        color: 'yellow'
    }
},
{
    name: 'CSS3',
    icon: SiCss3,
    options: {
        color: '#1572B6',
    }
},
{
    name: 'Heroku',
    icon: SiHeroku,
    options: {
        color: '#cfa9ff'
    }
},
{
    name: 'HTML5',
    icon: SiHtml5,
    options: {
        color: '#E34F26'
    }
},
{
    name: 'MongoDB',
    icon: SiMongodb,
    options: {
        color: '#47A248'
    }
},
{
    name: 'NodeJS',
    icon: FaNodeJs,
    options: {
        color: '#339933'
    }
},
{
    name: 'Python',
    icon: SiPython,
    options: {
        color: '#3776AB'
    }
},
{
    name: 'React',
    icon: SiReact,
    options: {
        color: '#61DAFB'
    }
},
{
    name: 'Git',
    icon: SiGit,
    options: {
        color: '#F05032'
    }
},
{
    name: 'GitHub',
    icon: SiGithub,
    options: {
        color: 'white'
    }
},
{
    name: 'GitHub Actions',
    icon: SiGithubactions,
    options: {
        color: '#2088FF'
    }
},
{
    name: 'Google Cloud Platform',
    icon: SiGooglecloud,
    options: {
        color: '#4285F4'
    }
},
{
    name: 'Redux',
    icon: SiRedux,
    options: {
        color: '#764ABC'
    }
},
{
    name: 'Netlify',
    icon: SiNetlify,
    options: {
        color: '#00C7B7'
    }
},
{
    name: 'TypeScript',
    icon: SiTypescript,
    options: {
        color: '#3178C6'
    }
},
{
    name: 'Firebase',
    icon: SiFirebase,
    options: {
        color: '#FFCA28'
    }
},
{
    name: 'Vercel',
    icon: SiVercel,
    options: {
        color: 'white'
    }
},
{
    name: 'C++',
    icon: SiCplusplus,
    options: {
        color: '#00599C'
    }
},
{
    name: 'MySQL',
    icon: SiMysql,
    options: {
        color: '#4479A1'
    }
},

{
    name: 'Express',
    icon: SiExpress,
    options: {
        color: 'white'
    }
},
{
    name: 'GitLab',
    icon: SiGitlab,
    options: {
        color: '#FCA121'
    }
},
{
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    options: {
        color: '#06B6D4'
    }
},
{
    name: 'Postman',
    icon: SiPostman,
    options: {
        color: '#FF6C37'
    }
},
{
    name: 'Material UI',
    icon: SiMaterialui,
    options: {
        color: '#007FFF'
    }
},
]

export const Icons = data.sort((a, b) => a.name.localeCompare(b.name));