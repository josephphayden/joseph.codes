import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';

import styles from '../styles/main.scss';

const Home = () => (
    <>
        <Header title='Home' />
        <div id='container'>
            <Intro>
                <h1>Joseph Hayden</h1>
                <p className={styles.subheading}>
                    Creative engineer passionate about tech for good,
                    <br />
                    currently CTO at School Space.
                </p>
            </Intro>
        </div>
    </>
);

export default Home;
