import { withRouter } from 'next/router';
import { useScrollYPosition } from 'react-use-scroll-position';
import Link from 'next/link';

import menuItems from './menuItems';

import styles from './nav.scss';

const Nav = ({ router: { pathname } }) => {
    const scrollY = typeof window !== 'undefined' ? useScrollYPosition() : 0;

    return (
        <nav className={`${styles.nav} ${scrollY > 10 ? styles.floating : ''}`}>
            <ul>
                {menuItems.map(({ name, path }) => (
                    <li>
                        <Link prefetch href={path}>
                            <a
                                className={
                                    path === pathname ? styles.active : ''
                                }
                            >
                                {name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default withRouter(Nav);
