import Navbar from "./Nav/NavBar"
import Language from '../components/Language'
import Image from 'next/image'
import Link from 'next/link'



const Header = () => {
    return ( 
        <>
        <Language /> 
        <header>
            <div className="headerElement">
                <Link href="/">
                <a><img src={'/Logo_Barbers_Crew.webp'} alt="Logo_Barbers_Crew"/></a>
                </Link>
            <Navbar />
            </div>
            <style jsx>{`
                .headerElement{
                    max-width: 1200px;
                    margin: 0 auto;  
                    padding: 15px 0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;  
                }
                header{
                    background-color: #e9e9e79d; 
                }
                @media only screen and (max-width: 1239px) {
                    .headerElement{
                        justify-content: center;
                    }
                }
            `}</style>  
        </header>
        </>
     );
}
 
export default Header;