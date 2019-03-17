import Header from '../components/header/Header';
import Experience from '../components/experience/Experience.js';

import experiences from '../data/experiences';

import styles from '../styles/main.scss';

const Background = () => (
    <>
        <Header title='Background' />
        <div className='container'>
            <section id='intro'>
                <h1>Background</h1>
                <p class='subheading'>
                    Learn about my previous experience and progression
                    <br />
                    from engineering graduate to CTO.
                </p>
            </section>
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
