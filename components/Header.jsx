import Navbar from "./Nav/Navbar"
import Image from 'next/image'

import styles from '../styles/Lang.module.css'

const Header = () => {
    return ( 
        <>
        <div className={styles.langBar}>
            <form className={styles.form}>
                <div className={styles.switchField}>
                    <input type="radio" id="radio-one" name="switch-one" value="bg" />
                    <label htmlFor="radio-one">БГ</label>
                    <input type="radio" id="radio-two" name="switch-one" value="en"  />
                    <label htmlFor="radio-two">EN</label>
                </div>
            </form>
        </div>
        <header>
            <div className="headerElement">
            <Image src={'/Logo_Barbers_Crew.webp'} alt="Logo_Barbers_Crew" width={200} height={200} />
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