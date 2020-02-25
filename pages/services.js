import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';

import styles from '../styles/main.scss';

const Services = () => (
    <>
        <Header title="Services" />
        <div>
            <Intro>
                <h1>What I do</h1>
                <p className={styles.subheading}>
                    Primarily, I'm a JavaScript developer, an expert in Node and
                    React.
                </p>
                <p className={styles.subheading}>
                    More broadly, I specialise in lean product development, from
                    ideation into design, architecture, prototyping and user
                    testing, through to an MVP build and beyond.
                </p>
            </Intro>
        </div>
    </>
);

export default Services;
