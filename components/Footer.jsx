import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return ( 
        <footer>
            <div className="footerContainer">
                <div className="one">
                    <Image src="/Logo_Barbers_Crew.webp" alt="Logo_Barbers_Crew" width={200} height={200} />
                    <div className="footerSocialIcons">
                        <img src="/facebook_footer_icon.webp" alt="facebook_footer_icon"/>
                        <img src="/instagram_footer_icon.webp" alt="instagram_footer_icon"/>
                        <img src="/linkedin_footer_icon.webp" alt="linkedin_footer_icon"/>
                        <img src="/youtube_footer_icon.webp" alt="youtube_footer_icon"/>
                    </div>
                    <div className="cRight">
                        <p>Copyright ©Barbers Crew 2021</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
                <div className="two">
                    <h3>Свържете се с нас:</h3>
                    <div>
                        <img src="/phone_icon.webp" alt="phone_icon" />
                        <label>Телефон за резервации:</label><br/>
                        <a href="0887 / 138 878">0887 / 138 878</a><br />
                    </div>
                    <div>
                        <img src="/reserve_icon.png" alt="reserve_icon" />
                        <a href="">Онлайн резервации</a> <br />
                    </div>
                    <div>
                        <img src="/email_icon.png" alt="email_icon" />
                        <a href="">antonov.vasil@yahoo.com</a> <br />
                    </div>
                    <div>
                        <img src="/location_icon.webp" alt="location_icon" />
                        <label>Св. св. Константин и Елена, Варна</label><br />
                        <a href="">Търговски център "Приморски"</a>  
                    </div>
                </div>
                <div className="three">
                    <h3>Работно време:</h3>
                        <p>Понеделник 10:00 - 20:00ч.</p>
                        <p>Вторник 10:00 - 20:00ч.</p>
                        <p>Сряда 10:00 - 20:00ч.</p>
                        <p>Четвертък 10:00 - 20:00ч.</p>
                        <p>Петък 10:00 - 20:00ч.</p>
                        <p>Събота 10:00 - 20:00ч.</p>
                        <p>Неделя 12:00 - 18:00ч.</p>
                </div>
                <div className="four">
                    <h3>Меню:</h3>
                    <Link href="/"><a>НАЧАЛО</a></Link>
                    <Link href="/about"><a>ЗА НАС</a></Link>
                    <Link href="/"><a>ЦЕНИ И УСЛУГИ</a></Link>
                    <Link href="/gallery"><a>ГАЛЕРИЯ</a></Link>
                    <Link href="/contacts"><a>КОНТАКТИ</a></Link>
                    <Link href="/"><a>ЗА РЕЗЕРВАЦИИ</a></Link>
                </div>
            </div>
            <div className="footer2">
            <div className="designInfo">
                <p>Web Development by Mighty Mint</p>
            </div>
            </div>
            <style jsx>{`
                footer{
                    background-color: #163852;
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