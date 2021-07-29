import React from 'react';
import { Home } from './sections/Home/Home';
import { About } from './sections/About/About';
import { Portfolio } from './sections/Portfolio/Portfolio';
import DividerIcon from '../svg/divider.svg'
// import { Experience } from './sections/Experience/Experience'

import Container from 'react-bootstrap/Container';
// import { Switch, Route } from 'react-router-dom';
import { CustomNavbar } from './shared/CustomNavbar/CustomNavbar';
import { Divider } from './shared/Divider'
import { AltDivider } from './shared/Divider'

export function Controller() {
    return (
        <div className="page-container">
            
            <CustomNavbar />

            <section id="home" className="section-one">
                <Home />
                <AltDivider color='rgb(206, 206, 206)' />
            </section>
            <section id="about" className="section-two">
                <About />
                <AltDivider color='#000' />
            </section>

            <section id="portfolio" className="section-three">
                <Portfolio />
            </section>

            {/* <Experience /> */}
        </div>
    )
}