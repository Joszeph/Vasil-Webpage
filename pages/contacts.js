import dynamic from 'next/dynamic'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

import AOS from "aos";
import "aos/dist/aos.css";

import{NextSeo} from 'next-seo'

const GoogleMap = dynamic(() => import('../components/GoogleMap'), {
    loading: () => "Loading...",
    ssr: false
  })

  const GoogleMap2 = dynamic(() => import('../components/GoogleMap2'), {
    loading: () => "Loading...",
    ssr: false
  })

  import bg from '../locales/bg'
  import en from '../locales/en'

const ContactUs = () => {

    const SEO = {
        title: "Barbers Crew - Барбершоп Варна | Контакти | Свържете се с нас",
        description: "Мъжко Подстригване и Бръснене във Варна - Барбершоп | Контакти | Свържете се с нас",
    
        openGraph:{
            title: "Barbers Crew - Барбершоп Варна | Контакти | Свържете се с нас",
            description: "Мъжко Подстригване и Бръснене във Варна - Барбершоп | Контакти | Свържете се с нас",
        }
    }

    const router = useRouter()

    const { locale } = router
    const t = locale === 'bg' ? bg : en

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

    return ( 
        <main>
            <NextSeo {...SEO} />
            <div className="container">
            <h1 data-aos="fade-right">{t.h1Contacts}</h1>
            <section className="contacts"> 
                <div className="map"><GoogleMap /></div>
                <div className="infoContacts">
                    <div data-aos="zoom-in" data-aos-delay="200">
                        <h2>{t.fPhone}</h2>
                        <a href="tel:0887608878">0887 / 608 878</a><br />
                        <a href="tel:0887138878">0887 / 138 878</a>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="400">
                        <h2><Link href="https://calendly.com/barbers_crew/booking"><a target="_blank">{t.onlineR}</a></Link></h2>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="800">
                        <h2>e-mail:</h2>
                        <a href="mailto:antonov.vasil@yahoo.com">antonov.vasil@yahoo.com</a> 
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="1000">
                        <h2>{t.h2Address}</h2>
                        <address>{t.addressA}</address>
                    </div>
                </div>
            </section>
            <section className="contacts contactMapTwo"> 
                <div className="map"><GoogleMap2 /></div>
                <div className="infoContacts">
                    <div data-aos="zoom-in" data-aos-delay="1000">
                        <h2>{t.h2Address}</h2>
                        <address>{t.addP}</address>
                    </div>
                </div>
            </section>
            </div>
            <style jsx>{`
            main{
                background-image: url('/backcon.webp');
                background-repeat: no-repeat;
                background-size: cover;
                padding:15px;
            }
            .container{
                max-width: 1200px;
                margin: 0 auto;
                margin-bottom: 60px;
            }
            
            .container h1{
                color:#e9e9e7;
            }

            h2,a,address{
                text-shadow: 2px 1px 4px #000000a6;
            }
            
            .contacts{
                display: flex;
                justify-content: space-between;
            }
            
            .map{
                flex-basis: 50%;
            }
            
            .infoContacts{
                flex-basis: 40%;
                color:#e9e9e7;
            }
            
            .infoContacts a{
                text-decoration: none;
                color:#e9e9e7;
            }
            
            .infoContacts h2{
                margin: 25px 0 8px 0;
            }
            
            .infoContacts h2 a{
                color:#e00310;
            }

            address{
                line-height:25px;
            }

            .contactMapTwo{
                margin-top:25px;
            }
            
            @media only screen and (max-width: 1239px) {
                h1{
                    margin-left: 20px;
                }
                .map{
                    padding:20px;
                }
                .infoContacts{
                    padding:20px
                }
            }
            
            @media only screen and (max-width: 600px) {
                .contacts{
                    flex-direction: column;
                }
                .map{
                    padding:20px;
                }
                .infoContacts{
                    padding:20px
                }
            }
            `}</style>
        </main>
     );
}
 
export default ContactUs;