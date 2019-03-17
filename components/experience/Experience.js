import styles from './experience.scss';

const Experience = ({
    roleClass,
    name,
    logo,
    roles,
    blurb,
    duration,
    children
}) => (
    <section className={`${styles.experience} ${styles[roleClass]}`}>
        <div className={styles.company}>
            <img
                className={styles.logo}
                src={`/static/logos/${logo}`}
                alt={`${name} logo`}
            />
            <p className={styles.blurb}>{blurb}</p>
        </div>
        <div className={styles.roles}>
            {roles.map(({ title, duration, description }) => (
                <div className={styles.role}>
                    <h2>{title}</h2>
                    <p className={styles.duration}>{duration}</p>
                    {description.map(paragraph => (
                        <p className={styles.description}>{paragraph}</p>
                    ))}
                </div>
            ))}
        </div>
    </section>
);

export default Experience;
