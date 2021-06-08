import Link from 'next/link'
import Image from 'next/image'

const ErrorPage = () => {
    return ( 
        <main>
            <div className="error">
                <h1>Страницата не е намерена. Грешка 404! <br />
                    Page not found. Error 404!</h1>
                    <Image src="/error.png" alt="Error Page Image" width={100} height={100}/>
                    <Link href="/"><a>Обратно/Back...</a></Link>
            </div>
            <style jsx>{`
           .error{
            height: 32vh;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color:#e9e9e7;
           }
           a{
               text-decoration:none;
               color:#e9e9e7;
               margin-top:15px;
           }

           @media only screen and (max-width: 1239px) {
               h1{
                   margin: 0 20px;
               }
           }
            `}</style>
        </main>
     );
}
 
export default ErrorPage;