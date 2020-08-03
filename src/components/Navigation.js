import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <ul className="flex-auto flex flex-row">
            <li className="flex-auto text-center text-2xl p-4">
                <Link to="/react-portfolio/">About</Link>
            </li>
            <li className="flex-auto text-center text-2xl p-4">
                <Link to="/react-portfolio/portfolio">Portfolio</Link>
            </li>
            <li className="flex-auto text-center text-2xl p-4">
                <Link to="/react-portfolio/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Navigation;