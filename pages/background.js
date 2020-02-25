import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import Experience from '../components/experience/Experience.js';
import Scroller from '../components/scroller/Scroller.js';

import experiences from '../data/experiences';

import styles from '../styles/main.scss';

const Background = () => (
    <>
        <Header title="Background" />
        <div className={styles.background}>
            <Intro>
                <h1>My background</h1>
                <p className={styles.subheading}>
                    From engineering graduate to CTO, through a number of
                    startup roles.
                    <br />
                </p>
                <p className={styles.subheading}>
                    Leading small agile teams, designing elegant solutions to
                    complex problems, and crafting beautiful user-centered
                    products.
                    <br />
                </p>
                <Scroller />
            </Intro>
            {experiences.map(experience => (
                <Experience
                    key={experience.roleClass}
                    roleClass={experience.roleClass}
                    name={experience.name}
                    logo={experience.logo}
                    blurb={experience.blurb}
                    roles={experience.roles}
                />
            ))}
        </div>
    </>
);

export default Background;
