import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import Link from 'next/link';

import styles from '../styles/main.scss';

const Home = () => (
    <>
        <Header title="Home" />
        <div>
            <Intro>
                <h1>Joseph Hayden</h1>
                <p className={styles.subheading}>
                    Creative software engineer, currently CTO at{' '}
                    <a href="https://school-space.org" target="_blank">
                        School Space
                    </a>
                    .
                </p>
                <p className={styles.subheading}>
                    Available for freelance software development, design, and
                    consultancy. <br />
                </p>
            </Intro>
        </div>
    </>
);

export default Home;
