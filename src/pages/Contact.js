import React from "react";
import githubLogo from "../assets/images/GitHub_Logo.png";
import linkedinLogo from "../assets/images/LI-Logo.png";

function Contact() {
    return(
        <main className="mx-auto my-4 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl py-2">Contact Me</h2>

            <article className="flex flex-row">
                <a className="flex-1 self-center" href="https://www.linkedin.com/in/danielmoody-huhn/" target="_blank" rel="noopener noreferrer">
                    <img className="w-32 mx-auto" id="linkedin-logo" src={linkedinLogo} alt="Linkedn link" />
                </a>

                <a className="flex-1 self-center" href="https://github.com/HuhnDaniel" target="_blank" rel="noopener noreferrer">
                    <img className="w-32 mx-auto" id="github-logo" src={githubLogo} alt="GitHub link" />
                </a>
            </article>

            <h3 className="text-xl py-4">Email me: <a className="text-blue-500" href="mailto:danielphuhn@gmail.com">danielphuhn@gmail.com</a></h3>
        </main>
    );
}

export default Contact;