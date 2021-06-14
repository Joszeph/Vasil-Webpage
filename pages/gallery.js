import PhotoGallery from '../components/PhotoGallery'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

import AOS from "aos";
import "aos/dist/aos.css";

import bg from '../locales/bg'
import en from '../locales/en'

import{NextSeo} from 'next-seo'

const PictureGallery = () => {

    const SEO = {
        title: "Barbers Crew - Барбершоп Варна | Галерия със Снимки",
        description: "Мъжко Подстригване и Бръснене във Варна - Барбершоп | Галерия със Снимки",
    
        openGraph:{
            title: "Barbers Crew - Барбершоп Варна | Галерия със Снимки",
            description: "Мъжко Подстригване и Бръснене във Варна - Барбершоп | Галерия със Снимки",
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
            <div className="mainGallery">
                <h1 data-aos="fade-right">{t.h1Gallery}</h1>
                    <div className="gallery">
                        <PhotoGallery />
                    </div>
                </div>
            <style jsx>{`
                main{
                background-color:#e9e9e7;               
                }
                .mainGallery{
                    max-width:1200px;
                    margin:0 auto;
                }
                h1{
                    padding-top:20px;
                    color:#e00310;
                }
                .gallery{
                    padding: 0 0 40px 0 ;
                }
                @media only screen and (max-width: 1239px) {
                    h1{
                        margin: 20px 20px;
                    }
                    .gallery{
                        margin: 20px 20px;
                    }
                }
            `}</style>
        </main>
     );
}
 
export default PictureGallery;