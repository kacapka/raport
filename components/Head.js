import NextHead from "next/head";

const Head = props => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow"></meta>
        <meta
            name="keywords"
            content="Fintech, fintech poland, innovation hub programme, financial market, financial institutions, fintech report"
        ></meta>
        <meta
            name="description"
            content="A week of high-class events dedicated to the financial innovation sector."
        />

        <link rel="canonical" href="https://www.warsawfintechweek.pl/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <meta
			property="og:image"
			content="https://maniera.s3.eu-central-1.amazonaws.com/maniera_main_desktop_standard.jpg"
		/> */}

        <meta property="og:description" content="How to do FinTech in Poland" />

        <meta property="og:url" content="https://www.warsawfintechweek.pl/" />

        <meta property="og:title" content="Fintech Poland" />

        {/* <meta name="google-site-verification" content="sXaAUXlMVJRJLB7enpyrDeH_Tedgvf3gLXAJHL7VFv8" /> */}

        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png"></link>
        <link rel="manifest" href="/fav/site.webmanifest"></link>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
    </NextHead>
);


export default Head;