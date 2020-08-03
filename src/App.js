import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
                <Route exact path="/react-portfolio/contact" component={Contact} />
                <Route exact path="/react-portfolio/*" component={About} />
            </Switch>
        </Router>
    );
}

export default App;
