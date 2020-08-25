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

const projects = [
    {
        id: 0,
        name: "InQuire",
        deploy: "https://inquire-6846.herokuapp.com/",
        github: "https://github.com/damianjuan/Project-3/tree/master",
        logo: inQuireLogo,
        screenshots: [
            inQuireImage1,
            inQuireImage2,
            inQuireImage3
        ]
    },
    {
        id: 1,
        name: "Project Boolean",
        deploy: "https://project-boolean.herokuapp.com/",
        github: "https://github.com/HuhnDaniel/project-boolean/tree/master",
        logo: projectBooleanLogo,
        screenshots: [
            projectBooleanImage1,
            projectBooleanImage2,
            projectBooleanImage3
        ]
    },
    {
        id: 2,
        name: "Campsite Finder",
        deploy: "https://github.com/HuhnDaniel/campsite-finder/tree/master",
        github: "https://huhndaniel.github.io/campsite-finder/",
        logo: campsiteFinderLogo,
        screenshots: [
            campsiteFinderImage1,
            campsiteFinderImage2,
            campsiteFinderImage3
        ]
    }
]

export default projects;