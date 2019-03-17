import styles from './intro.scss';

const Intro = ({ children }) => (
    <section className={styles.intro}>{children}</section>
);

export default Intro;
