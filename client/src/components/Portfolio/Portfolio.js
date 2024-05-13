import React from 'react';
import '../../App.css';
import autolog from './img/autolog.png';
import gooddog from './img/gooddog.png';
import twitter from './img/twitter.png';
import code4pdx from './img/code4pdx.png';
import website from './img/website.svg';
import github from './img/github.svg';

const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="portfolio-piece-code4pdx portfolio-piece">
                <div className="content code4pdx-content">
                    <h2>Code for PDX</h2>
                    <p className="content-description">
                        A non-profit group working in partnership with
                        government, non-profit, and technical partners to deploy technology
                        to improve quality of life for residents and increase citizen engagement
                        with civic issues. Currently I'm collaborating with a team of designers
                        and developers to build a new version of the Code for PDX website that's
                        responsive, accessible and functional.
                    </p>
                    <ul className="language-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>LIQUID</li>
                        <li>RUBY</li>
                    </ul>
                    <div className="links-container">
                        {/* <img src={website} className="website-icon" alt="website-icon" />
                        <a target="_blank" rel="noopener noreferrer" href="">See it live</a> */}
                        <img src={github} className="github-icon" alt="github-icon" />
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/codeforpdx/website">See it on Github</a>
                    </div>
                </div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/codeforpdx/website"
                    className="code4pdx-image-link">
                    <img src={code4pdx} className="code4pdx-image" alt="code4pdx-thumbnail" />
                </a>
            </div>
            <div className="portfolio-piece-autolog portfolio-piece">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="autolog-image-link">
                    <img src={autolog} className="autolog-image" alt="autolog-thumbnail" />
                </a>
                <div className="content autolog-content">
                    <h2>AutoLog</h2>
                    <p className="content-description">
                        An application that gives you the ability to track
                        your car maintenance. With all your maintenance logged in one
                        place, you’ll no longer be wondering when the last time you
                        completed a maintenance task was or when your next task is due.
                    </p>
                    <ul className="language-list">
                        <li>MONGODB</li>
                        <li>EXPRESS</li>
                        <li>REACT</li>
                        <li>NODE.JS</li>
                    </ul>
                    <div className="links-container">
                        <img src={github} className="github-icon" alt="github-icon" />
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/tori-s-miller/car-maintenance-app">See it on Github</a>
                    </div>
                </div>

            </div>
            <div className="portfolio-piece-good-dog portfolio-piece">
                <div className="content good-dog-content">
                    <h2>Good Dog</h2>
                    <p className="content-description">
                        An application that gives you the ability to
                        keep track of your dog's training progress. Build a custom
                        set of goals to teach your dog, and log each session of
                        training. When your pup has mastered the skill, you can add it
                        to your collection of completed goals.
                    </p>
                    <ul className="language-list">
                        <li>MONGODB</li>
                        <li>EXPRESS</li>
                        <li>REACT</li>
                        <li>NODE.JS</li>
                    </ul>
                    <div className="links-container">
                        <img src={github} className="github-icon" alt="github-icon" />
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/tori-s-miller/dog-training-app">See it on Github</a>
                    </div>
                </div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="good-dog-image-link">
                    <img src={gooddog} className="good-dog-image" alt="good-dog-thumbnail" />
                </a>
            </div>
            <div className="portfolio-piece-twitter portfolio-piece">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter-image-link">
                    <img src={twitter} className="twitter-image" alt="twitter-thumbnail" />
                </a>
                <div className="content twitter-content">
                    <h2>Twitter Synonym Finder</h2>
                    <p className="content-description">
                        An application for finding synonyms to words in a Tweet.
                        This project uses two APIs: the Datamuse API, a word-finding query
                        engine, and the Twitter API. After rewording what you want to say,
                        you can post your Tweet to Twitter directly from the app.
                    </p>
                    <ul className="language-list">
                        <li>REACT</li>
                        <li>CSS</li>
                    </ul>
                    <div className="links-container">
                        <img src={github} className="github-icon" alt="github-icon" />
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/tori-s-miller/twitter-synonym-finder">See it on Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;