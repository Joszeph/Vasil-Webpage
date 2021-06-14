import Link from 'next/link'

const Administration = () => {
    return ( 
        <main>
            <h1>Administration Panel / Административен Панел</h1>
            <Link href="https://next-js-blog-barbers-crew.vercel.app/studio"><a>Enter / Вход</a></Link>
            <style jsx>{`
                main{
                    max-width:1200px;
                    margin:0 auto;
                    padding:130px 0;
                    color:#e9e9e7;
                }
                a{
                    text-decoration:none;
                    color:#e00310;
                }
                @media only screen and (max-width: 1239px) {
                    main{
                        margin: 0 20px;
                    }
                }
            `}</style>
        </main>
     );
}
 
export default Administration;