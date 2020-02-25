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
            <div className={styles.logoContainer}>
                <img
                    className={styles.logo}
                    src={`/logos/${logo}`}
                    alt={`${name} logo`}
                />
            </div>
            <div className={styles.divider} />
            <p className={styles.blurb}>{blurb}</p>
        </div>
        <div className={styles.roles}>
            {roles.map(({ title, duration, description, key }) => (
                <div className={styles.role} key={key}>
                    <h2>{title}</h2>
                    <p className={styles.duration}>{duration}</p>
                    {description.map((paragraph, i) => (
                        <p
                            key={`${key}-paragraph-${i}`}
                            className={styles.description}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    </section>
);

export default Experience;
