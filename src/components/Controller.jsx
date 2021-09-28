import React from 'react';
import { Home } from './sections/Home/Home';
import { About } from './sections/About/About';
import { Portfolio } from './sections/Portfolio/Portfolio';
import { Contact } from './sections/Contact/Contact';
import { CustomNavbar } from './shared/CustomNavbar/CustomNavbar';
import { CustomFooter } from './shared/CustomFooter';
import { AltDivider } from './shared/Divider'
import { Helmet } from 'react-helmet';

export function Controller() {
    return (
        <div>
            <Helmet>
                <title>Kaleb Giger</title>
            </Helmet>

            <CustomNavbar />

            <section id="home" className="section-one">
                <Home />
                <AltDivider color='#09222e' />
            </section>

            <section id="about" className="section-two">
                <About />
                <AltDivider color='#122738' />
            </section>

            <section id="portfolio" className="section-three">
                <Portfolio />
                <AltDivider color='#09222e' />
            </section>

            <section id="contact" className="section-four">
                <Contact />
            </section>

            <section id="footer" className="footer">
                <CustomFooter />
            </section>
        </div>
    )
}