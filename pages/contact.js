import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';

import styles from '../styles/main.scss';

const Contact = () => (
    <>
        <Header title="Contact" />
        <div>
            <Intro>
                <h1>Get in touch</h1>
                <p className={styles.subheading}>
                    If you'd like to work together, please email:{' '}
                    <a href="mailto:info@joseph.codes">info@joseph.codes</a>
                </p>
                <p className={styles.subheading}>
                    You can also connect with me on{' '}
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/josephphayden"
                    >
                        LinkedIn
                    </a>
                    .
                </p>
            </Intro>
        </div>
    </>
);

export default Contact;
