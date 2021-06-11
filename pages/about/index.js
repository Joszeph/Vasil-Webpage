import {useEffect} from 'react'
import { useRouter } from "next/router";
import styles from './about.module.css'
import Image from 'next/image'
import Link from 'next/link'

import AOS from "aos";
import "aos/dist/aos.css";

import bg from '../../locales/bg'
import en from '../../locales/en'

const AboutUs = () => {

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
            <div className={styles.container}>
                <h1 data-aos="fade-right">{t.h1About}</h1>
                <section className={styles.aboutUs}>
                    <div className={styles.aboutText} data-aos="fade-right" data-aos-delay="300">
                        <p>{t.aboutText}</p>
                        <div className={styles.scissors}>
                        <div>
                        <Image className={styles.img} src="/scissors.webp"  alt="" width={70} height={70}/>
                        </div>
                        <div>
                        <Image className={styles.img} src="/razor.webp"  alt="" width={70} height={70}/>
                        </div>
                        <div>
                        <Image className={styles.img} src="/hair-dryer.webp"  alt="" width={70} height={70}/>
                        </div>
                        </div>
                    </div>
                    <div className={styles.aboutImages} data-aos="zoom-in" data-aos-delay="300">
                        <Image src="/about_picture.webp" alt="" width={400} height={300} />
                    </div>
                </section>
            </div>
            <section className={styles.ourTeam}>
               <div className={styles.teamContainet}>
                <div className={styles.ourTeamTitles}>
                    <h2 data-aos="fade-up">{t.s4H2}</h2>
                    <img src="/mustages.webp" alt="mustages" width={200} height={32} data-aos="zoom-in" data-aos-delay="300"/>
                    <h3 data-aos="fade-up" data-aos-delay="400">{t.s4H3}<br/>
                        {t.s4H3a}</h3>
                   </div>
                   <div className={styles.cardContainer}>
                   {/* <!-- Card --> */}
                  <div className={styles.card} data-aos="zoom-in" data-aos-delay="600">
                    <div className={styles.cardPicture}>
                        <h2>{t.name1}<br />
                        {t.name2}</h2>
                         <div className={styles.cardIcons}>
                             <Link href="https://www.facebook.com/vasil.antonov1"><a target="_blank"><img src="/facebook_icon.webp" alt="facebook_icon_crew" /></a></Link>
                             <Link href="https://www.instagram.com/antonovasil/"><a target="_blank"><img src="/instagram_icon.webp" alt="instagram_icon_crew" /></a></Link>
                         </div>
                    </div>
                    <div className={styles.cardText}>
                        <p>{t.nameText}</p>
                    </div>
                  </div>
                  {/* <!-- Card End --> */}
                   {/* <!-- Card --> */}
                  <div className={styles.card} data-aos="zoom-in" data-aos-delay="600">
                    <div className={styles.cardPicture}>
                        <h2>{t.name1a}<br />
                        {t.name2a}</h2>
                         <div className={styles.cardIcons}>
                         <Link href="https://www.facebook.com/vancaa"><a target="_blank"><img src="/facebook_icon.webp" alt="facebook_icon_crew" /></a></Link>
                             <img src="/instagram_icon.webp" alt="instagram_icon_crew" />
                         </div>
                    </div>
                    <div className={styles.cardText}>
                        <p>{t.nameText2}</p>
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