import campsiteFinderLogo from "../images/campsite-finder-logo.png";
import campsiteFinderImage1 from "../images/campsite-finder-screenshot-1.png";
import campsiteFinderImage2 from "../images/campsite-finder-screenshot-2.png";
import campsiteFinderImage3 from "../images/campsite-finder-screenshot-3.png";
import projectBooleanLogo from "../images/project-boolean-logo.png";
import projectBooleanImage1 from "../images/project-boolean-screenshot-1.png";
import projectBooleanImage2 from "../images/project-boolean-screenshot-2.png";
import projectBooleanImage3 from "../images/project-boolean-screenshot-3.png";
import inQuireLogo from "../images/inquire-logo.png";
import inQuireImage1 from "../images/inquire-screenshot-1.png";
import inQuireImage2 from "../images/inquire-screenshot-2.png";
import inQuireImage3 from "../images/inquire-screenshot-3.png";
import cornerstoneLogo from "../images/cornerstone-logo.png";
import cornerstoneImage1 from "../images/cornerstone-screenshot-1.png";
import cornerstoneImage2 from "../images/cornerstone-screenshot-2.png";
import cornerstoneImage3 from "../images/cornerstone-screenshot-3.png";

const projects = [
	{
		id: 0,
		name: "Cornerstone Collaborative",
		deploy: "http://www.cornerstone-collaborative.com",
		github: "https://github.com/HuhnDaniel/cornerstone/tree/main",
		logo: cornerstoneLogo,
		screenshots: [
			cornerstoneImage1,
			cornerstoneImage2,
			cornerstoneImage3
		],
		description:
			`Cornerstone Art and Craft LLC is a company that strives to connect people who create with those who need things created.
			Partners of the company have personal profiles to which their projects and disciplines can be added, and potential employers
			can search to find the perfect candidate for the project they need completed.`,
		technologies: "Technologies used: HTML, TailwindCSS, JavaScript, SERN Stack, Heroku, JawsDB, Git/Github"

	},
    {
        id: 1,
        name: "InQuire",
        deploy: "https://inquiresurveys.herokuapp.com/home",
        github: "https://github.com/HuhnDaniel/InQuire/tree/master",
        logo: inQuireLogo,
        screenshots: [
            inQuireImage1,
            inQuireImage2,
            inQuireImage3
        ],
        description:
            `Create a wide variety of surveys from free response to multiple choice.  Copy the survey link to send it to others,
            and view the results with graphical representations of the responses.  This web application was designed with safety and security in
            mind, so it is not required to log in to take surveys, and no personal data is ever saved by the site.`,
        technologies: "Technologies used: HTML, TailwindCSS, JavaScript, SERN Stack, Heroku, JawsDB, Git/GitHub"
    },
    {
        id: 2,
        name: "Project Boolean",
        deploy: "https://project-boolean.herokuapp.com/",
        github: "https://github.com/HuhnDaniel/project-boolean/tree/master",
        logo: projectBooleanLogo,
        screenshots: [
            projectBooleanImage1,
            projectBooleanImage2,
            projectBooleanImage3
        ],
        description:
            `Create a form consisting of true and false questions to send to others, then view the results to see the numerical totals of each response.`,
        technologies: "Technologies used: HTML, CSS, JavaScript, NodeJS, Bootstrap, Heroku, JawsDB, Git/GitHub"
    },
    {
        id: 3,
        name: "Campsite Finder",
        deploy: "https://huhndaniel.github.io/campsite-finder/",
        github: "https://github.com/HuhnDaniel/campsite-finder/tree/master",
        logo: campsiteFinderLogo,
        screenshots: [
            campsiteFinderImage1,
            campsiteFinderImage2,
            campsiteFinderImage3
        ],
        description: 
            `Use this web based application to find campsites near you, search by city name, search by state, or search for a campsite by name.
            You will be provided with a list of campsites based on your parameters, which you can select from to see site details.`,
        technologies: "Technologies used: HTML, SASS, JavaScript, Git/GitHub"
    }
]

export default projects;