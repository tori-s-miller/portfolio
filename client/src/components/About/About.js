import React, { Fragment } from 'react';
import resume from './img/tori-miller-resume.pdf';
import '../../App.css';

const About = () => {

    return (
        <Fragment>
            <div className="about-wrapper">
                <div className="about-col-left">
                    <h1 className="about-h1">Full stack web developer with experience
                        building web applications from scratch, developing and integrating APIs, and working with databases.</h1>
                    <p className="about-body-copy">I’m a well-organized, dedicated, and versatile developer with the capability
                        to learn and collaborate in rapidly changing environments. I now specialize in web development but my
                        experience in multiple fields including design, marketing, and project management allows me to work on a
                        project with the full scope in mind. I have a proven ability to adapt in both self-starting and collaborative
                        environments while staying focused on achieving high-quality results under strict deadlines.<br />
                        <br />
                        Outside of the office you’ll find me working on various sewing projects, wrangling my dog during a hike, or
                        enjoying a game night with friends.
                    </p>
                </div>
                <div className="about-col-right">
                    <ul className="skills">
                        <li className="li-header">Web Application Development</li>
                        <li className="skills-li">Responsive HTML/CSS</li>
                        <li className="skills-li">Javascript (vanilla, React/Redux, jQuery)</li>
                        <li className="li-header">Testing Tools</li>
                        <li className="skills-li">Unit testing with Jest, Enzyme, Mocha, and Chai</li>
                        <li className="li-header">API Integration & Development</li>
                        <li className="skills-li">REST API integration</li>
                        <li className="skills-li">REST API development with Node.js</li>
                        <li className="li-header">Database Design</li>
                        <li className="skills-li">Database architectures in MongoDB, always aiming for performance, scale and stability</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default About;