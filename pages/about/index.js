import {useEffect} from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Link from 'next/link'

import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

    return ( 
        <main>
            <div className={styles.container}>
                <h1 data-aos="fade-right">За Нас:</h1>
                <section className={styles.aboutUs}>
                    <div className={styles.aboutText} data-aos="fade-right" data-aos-delay="300">
                        <p>Barbers Crew е бранд, основан в Скандинавия(Норвегия) през 2019г, от братя Антонови. Основната им е цел да създават тендеции за модерни прически и стилни бради. 
С дългогодишния си опит и доказали се в бранша там, днес те отварят врати на нова бръснарница във Варна, Св. Св. Константин и Елена. 
Там те ще ви посрещнат с блага усмивка и обслужване на професионално ниво.</p>
                    </div>
                    <div className={styles.aboutImages} data-aos="zoom-in" data-aos-delay="300">
                        <Image src="/about_picture.webp" alt="" width={400} height={300} />
                    </div>
                </section>
            </div>
            <section className={styles.ourTeam}>
               <div className={styles.teamContainet}>
                <div className={styles.ourTeamTitles}>
                    <h2 data-aos="fade-up">НАШИЯ ЕКИП</h2>
                    <img src="/mustages.webp" alt="mustages" width={200} height={32} data-aos="zoom-in" data-aos-delay="300"/>
                    <h3 data-aos="fade-up" data-aos-delay="400">Екип от професионалисти,<br/>
                        нашите барбери и стилисти</h3>
                   </div>
                   <div className={styles.cardContainer}>
                   {/* <!-- Card --> */}
                  <div className={styles.card} data-aos="zoom-in" data-aos-delay="600">
                    <div className={styles.cardPicture}>
                        <h2>Васил<br />
                         Антонов</h2>
                         <div className={styles.cardIcons}>
                             <Link href="https://www.facebook.com/vasil.antonov1"><a target="_blank"><img src="/facebook_icon.webp" alt="facebook_icon_crew" /></a></Link>
                             <Link href="https://www.instagram.com/antonovasil/"><a target="_blank"><img src="/instagram_icon.webp" alt="instagram_icon_crew" /></a></Link>
                         </div>
                    </div>
                    <div className={styles.cardText}>
                        <p>Стандартният отрязък от Lorem Ipsum, използван от 1500 г. насам, е поместен по-долу за тези, които се интересуват. Секции 1.10.32 и 1.10.33 от "de Finibus Bonorum et Malorum" на Цицерон също са поместени в оригиналния им формат, заедно с превода им на английски език, направен от H. Rackham през 1914г.</p>
                    </div>
                  </div>
                  {/* <!-- Card End --> */}
                   {/* <!-- Card --> */}
                  <div className={styles.card} data-aos="zoom-in" data-aos-delay="600">
                    <div className={styles.cardPicture}>
                        <h2>Иван<br />
                         Антонов</h2>
                         <div className={styles.cardIcons}>
                         <Link href="https://www.facebook.com/vancaa"><a target="_blank"><img src="/facebook_icon.webp" alt="facebook_icon_crew" /></a></Link>
                             <img src="/instagram_icon.webp" alt="instagram_icon_crew" />
                         </div>
                    </div>
                    <div className={styles.cardText}>
                        <p>Стандартният отрязък от Lorem Ipsum, използван от 1500 г. насам, е поместен по-долу за тези, които се интересуват. Секции 1.10.32 и 1.10.33 от "de Finibus Bonorum et Malorum" на Цицерон също са поместени в оригиналния им формат, заедно с превода им на английски език, направен от H. Rackham през 1914г.</p>
                    </div>
                  </div>
                  {/* <!-- Card End --> */}
                </div>
               </div>
            </section>
        </main>
     );
}
 
export default AboutUs;