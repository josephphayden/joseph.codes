import Head from 'next/head';
import Nav from '../nav/Nav';

const Header = ({ title }) => (
    <>
        <Head>
            <title>{`${title} | Joseph Hayden`}</title>
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
            />
        </Head>
        <Nav />
    </>
);

export default Header;
