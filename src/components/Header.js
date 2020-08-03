import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navicon from "./Navicon";
import Navigation from "./Navigation";

class Header extends Component {
    state = {
        menuToggle: "hidden"
    }

    handleMenuToggle = e => {
        let toggle = e.target.attributes.getNamedItem("data-toggle").value;

        if (toggle === "hidden") {
            this.setState({
                menuToggle: "block"
            })
        } else {
            this.setState({
                menuToggle: "hidden"
            })
        }
    }

    render() {
        return (
            <header className="bg-navyBlue text-warmYellow">
                <div className="flex flex-row">
                    <Link className="flex-auto text-center text-3xl p-4" to="/react-portfolio/">Daniel Moody-Huhn</Link>
                    <Navicon handleMenuToggle={this.handleMenuToggle} menuToggle={this.state.menuToggle} />
                </div>
                <div className={`${this.state.menuToggle} md:hidden`} id="mobile-menu">
                    <Navigation />
                </div>
            </header>
        );
    }
}

export default Header;