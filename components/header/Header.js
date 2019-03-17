import Head from 'next/head';
import Nav from '../nav/Nav';

const Header = ({ title }) => (
    <>
        <Head>
            <title>{`${title} | Joseph Hayden`}</title>
            <link rel='icon' href='/static/favicons/favicon.ico' />
            <link
                rel='icon'
                href='/static/favicons/favicon-16x16'
                sizes='16x16'
            />
            <link
                rel='icon'
                href='/static/favicons/favicon-32x32'
                sizes='32x32'
            />
            <link
                rel='apple-touch-icon'
                href='/static/favicons/apple-touch-icon.png'
            />
            <link rel='manifest' href='/static/manifest.json' />
            <meta name='theme-color' content='#7afae3' />
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
            />
        </Head>
        <Nav />
    </>
);

export default Header;
