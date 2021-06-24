import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="bg">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/Barbers_Crew_fav_icon.ico" />
                <link rel="preload"/>
                <meta name="theme-color" content="#33333"/>
                <meta property="og:image" content="https://www.barberscrew.bg/Logo_Barbers_Crew.webp"/> 
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="200"/>
                <meta property="og:image:height" content="200"/>
                <meta name="description" content="Мъжко Подстригване, Бръснене, Мъжки Прически, Стайлинг на Коса и Грижа за Брадата - Барбершоп Варна - Barbers Crew"/>
                <meta property="og:title" content="Barbers Crew - Barber Shop - Варна. Мъжки Прически, Стайлинг на Коса и Грижа за Брадата" />
                <meta property="og:url" content="www.barberscrew.bg" />
            </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument