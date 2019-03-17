import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';

import styles from '../styles/main.scss';

const Services = () => (
    <>
        <Header title='Services' />
        <div id='container'>
            <Intro>
                <h1>What I do</h1>
                <p class='subheading'>
                    Planning, architecting, designing, coding, testing,
                    <br />
                    read on to learn more.
                </p>
            </Intro>
        </div>
    </>
);

export default Services;
