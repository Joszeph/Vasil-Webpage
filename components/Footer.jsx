import { useRouter } from "next/router";
import Link from 'next/link'

import bg from '../locales/bg'
import en from '../locales/en'

const Footer = () => {

    const router = useRouter()

    const { locale } = router
    const t = locale === 'bg' ? bg : en

    return ( 
        <footer>
            <div className="footerContainer">
                <div className="one">
                    <img src="/Logo_Barbers_Crew.webp" alt="Logo_Barbers_Crew" />
                    <div className="footerSocialIcons">
                    <Link href="https://www.facebook.com/Barbers-CREW-101048828860759"><a target="_blank"><img src="/facebook_footer_icon.webp" alt="facebook_footer_icon"/></a></Link>
                    <Link href="https://www.instagram.com/barberscrewr/"><a target="_blank"> <img src="/instagram_footer_icon.webp" alt="instagram_footer_icon"/></a></Link>
                        <img src="/linkedin_footer_icon.webp" alt="linkedin_footer_icon"/>
                        <img src="/youtube_footer_icon.webp" alt="youtube_footer_icon"/>
                    </div>
                    <div className="cRight">
                        <p>Copyright © Barbers Crew 2022</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
                <div className="two">
                    <h3>{t.fH3}</h3>
                    <div>
                        <img src="/phone_icon.webp" alt="phone_icon" />
                        <label>{t.fPhone}</label><br/>
                        <div className="footerTels">
                        <a href="tel:0887608878">0887 / 608 878</a><br/>
                        <a href="tel:0887138878">0887 / 138 878</a><br />
                        </div>
                    </div>
                    <div>
                        <img src="/reserve_icon.png" alt="reserve_icon" />
                        <Link href="https://calendly.com/barbers_crew/app">
                        <a target="_blank">{t.onlineR}</a></Link> <br />
                    </div>
                    <div>
                        <img src="/email_icon.png" alt="email_icon" />
                        <a href="mailto:antonov.vasil@yahoo.com">antonov.vasil@yahoo.com</a><br /> 
                    </div>
                    <div>
                        <img src="/location_icon.webp" alt="location_icon" />
                        <Link href="/contacts"><a>
                        <label>{t.addressA}</label><br />
                        {t.addressB}</a></Link>  
                    </div>
                </div>
                <div className="three">
                    <h3>{t.wTime}</h3>
                        <p>{t.Monday}</p>
                        <p>{t.Tuesday}</p>
                        <p>{t.Wednesday}</p>
                        <p>{t.Thursday}</p>
                        <p>{t.Friday}</p>
                        <p>{t.Saturday}</p>
                        <p>{t.Sunday}</p>
                </div>
                <div className="four">
                    <h3>{t.fMenu}</h3>
                    <Link href="/"><a>{t.fBtn1}</a></Link>
                    <Link href="/about"><a>{t.fBtn2}</a></Link>
                    <Link href="/prices"><a>{t.fBtn3}</a></Link>
                    <Link href="/gallery"><a>{t.fBtn4}</a></Link>
                    <Link href="/contacts"><a>{t.fBtn5}</a></Link>
                    <Link href="https://calendly.com/barbers_crew/app"><a target="_blank">{t.fBtn6}</a></Link>
                </div>
            </div>
            <div className="footer2">
            <div className="designInfo">
            <a href="mailto:iodesign@live.com"><p>Web Development by ioDesign</p></a>    
            </div>
            </div>
            <style jsx>{`
                footer{
                    background-color: #163852;
                }

                .footerTels{
                    margin-left:35px;
                }
                
                .footerContainer{
                    max-width:1200px;
                    margin: 0 auto; 
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    color:#e9e9e7;   
                }
                
                .one{
                    padding: 20px 0;
                    line-height: 26px;
                }
                
                .two,
                .three,
                .four{
                    padding: 58px 0;
                }
                
                .two{
                    line-height: 26px;
                }
                
                .three{
                    line-height: 30px;
                }

                .three p{
                    margin:0;
                }
                
                .footerSocialIcons{
                    margin: 10px 0 10px 17px;  
                }
                
                .footerSocialIcons img{
                    margin: 0 5px;
                }
                
                a{
                    color:#e9e9e7;
                    text-decoration: none;
                }
                
                .three ul li{
                    list-style: none;
                }
                
                .four{
                    display: flex;
                    flex-direction: column;
                    line-height: 30px;
                }
                
                .footer2{
                    background-color: #e00310;
                }
                
                .designInfo{
                    max-width: 1200px;
                    margin: 0px auto;
                    text-align: right;
                }
                
                .designInfo p{
                    padding: 8px 0;
                }

                @media only screen and (max-width: 1239px) {
                    .footerContainer {
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                        flex-direction: row;
                    }
                
                    .designInfo {
                        text-align: center;
                        /* margin-right: 30px; */
                    }
                }

                @media only screen and (max-width: 600px) {
                    .two, .three, .four {
                        padding: 15px 0;
                    }
                }
            `}</style>
        </footer>
     );
}
 
export default Footer
