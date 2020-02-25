import { IoIosArrowDown as DownChevron } from 'react-icons/io';

import styles from './scroller.scss';

const scrollDown = () => window.scrollTo(0, window.innerHeight);

const Scroller = () => (
    <div className={styles.container}>
        <div onClick={scrollDown} className={styles.chevron}>
            <DownChevron />
        </div>
    </div>
);

export default Scroller;
