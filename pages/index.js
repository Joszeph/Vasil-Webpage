import {useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import SwiperCore, {Autoplay} from 'swiper/core'

import bg from '../locales/bg'
import en from '../locales/en'

SwiperCore.use([Autoplay]);

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

    const router = useRouter()

    const { locale } = router
    const t = locale === 'bg' ? bg : en

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

    /* data-aos="fade-up" 
        data-aos="zoom-in" data-aos-delay="300"
        data-aos="fade-up" data-aos-delay="400"
    */

  return (
  <main>
     <div className={styles.mainTitles}>
        <h1 data-aos="fade-right">{t.h1a}<br/>
            {t.h1b}</h1>
        <h2 data-aos="fade-right" data-aos-delay="50">
            {t.h2a}<br/>
            {t.h2b}<br/>
            {t.h2c}<br/>
            {t.h2d}</h2>
        <button className={styles.mainBtn} data-aos="zoom-in" data-aos-delay="50">
            <Link href="https://calendly.com/barbers_crew/app"><a target="_blank">{t.button}</a></Link>
            </button>
      </div>
      <div className={styles.mainContacts}>
        <div className={styles.socialIcons}>
            <div className={styles.imgS}><Link href="https://www.facebook.com/Barbers-CREW-101048828860759"><a target="_blank"><img src="/facebook_icon.webp" alt="facebook_icon_Barbers_Crew" width="32" height="32" /></a></Link></div>
            <div className={styles.imgS}><Link href="https://www.instagram.com/barberscrewr/"><a target="_blank"><img src="/instagram_icon.webp" alt="instagram_icon_Barbers_Crew" width="32" height="32" /></a></Link></div>
            <div className={styles.imgS}><img src="/linkedin_icon.webp" alt="linkedin_icon_Barbers_Crew" width="32" height="32" /></div>
            <div className={styles.imgS}><img src="/youtube_icon.webp" alt="youtube_icon_Barbers_Crew" width="32" height="32" /></div>   
        </div>
        <div className={styles.contactsInfo}>
            <img src="/phone_icon.webp" alt="phone_icon_Barbers_Crew"  width={32} height={32}/>
            <div className={styles.tel}>
                <h4><a href="tel:0887608878">0887 / 608 878</a></h4>
                <h4><a href="tel:0887138878">0887 / 138 878</a></h4>
                <p className={styles.telP}>{t.telP}</p>
            </div>
            <img src="/location_icon.webp" alt="location_icon_Barbers_Crew"  width={32} height={32}/>
            <div>
            <Link href="/contacts"><a>
                <h4>{t.addH3}</h4>
                <h4>{t.addP}</h4>
                </a></Link> 
                
            </div>
            <img src="/clock_icon.webp" alt="clock_icon_Barbers_Crew"  width={32} height={32}/>
            <div>
                <h4>{t.workH3}</h4>
                <p>{t.workH}</p>
            </div>
        </div>
    </div>
    <section className={styles.quates}>
                <h2 data-aos="fade-up">{t.s1H1}</h2>
                <img src="/mustages.webp" alt="mustages Barbers_Crew" width={200} height={32} data-aos="zoom-in" data-aos-delay="300"/>
                <p data-aos="fade-up" data-aos-delay="400">{t.s1P1}<br />
                    {t.s1P2}</p>
    </section>
    <div className={styles.sliderBackground}>
    <section className={styles.sliderContainer}>
    <Swiper slidesPerView={3} spaceBetween={30}  className="mySwiper" autoplay={{
        "delay": 1500,
        "disableOnInteraction": false}}>
        <SwiperSlide><div className={styles.image}><Image src="/image1.webp" alt="Image1 Barbers Crew" width={400} height={400} quality={50}/></div></SwiperSlide>
        {/* <SwiperSlide><div className={styles.image}><Image src="/image2.webp" alt="Image2 Barbers Crew" width={400} height={400} quality={50}/></div></SwiperSlide> */}
        <SwiperSlide><div className={styles.image}><Image src="/image3.webp" alt="Image3 Barbers Crew" width={400} height={400} quality={50}/></div></SwiperSlide>
        <SwiperSlide><div className={styles.image}><Image src="/image4.webp" alt="Image4 Barbers Crew" width={400} height={400} quality={50}/></div></SwiperSlide>
        <SwiperSlide><div className={styles.image}><Image src="/image5.webp" alt="Image5 Barbers Crew" width={400} height={400} quality={50}/></div></SwiperSlide>
        <SwiperSlide><div className={styles.image}><Image src="/image6.webp" alt="Image6 Barbers Crew" width={400} height={400} quality={50}/></div></SwiperSlide>
        {/* <SwiperSlide><div className={styles.image}><Image src="/image7.webp" alt="Image7 Barbers Crew" width={400} height={400}/></div></SwiperSlide> */}
        {/* <SwiperSlide><div className={styles.image}><Image src="/image8.webp" alt="Image8 Barbers Crew" width={400} height={400}/></div></SwiperSlide> */}
        <SwiperSlide><div className={styles.image}><Image src="/image9.webp" alt="Image9 Barbers Crew" width={400} height={400} quality={50}/></div></SwiperSlide>
        {/* <SwiperSlide><div className={styles.image}><Image src="/image10.webp" alt="Image10 Barbers Crew" width={400} height={400}/></div></SwiperSlide> */}
    </Swiper>            
    </section>
    </div>
    <section className={styles.services}>
        <h2 data-aos="fade-up" >{t.s2H1}</h2>
        <Image src="/mustages.webp" alt="mustages Barbers_Crew" width={200} height={32} data-aos="zoom-in" data-aos-delay="300"/>
        <h3>{t.s2H3a},<br />
            {t.s2H3b}<br />
            {t.s2H3c}</h3>
        <div className={styles.serviceCardsContainer}>
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="400">
                <img src="/scissors.webp" alt="scissors_Barbers_Crew" width={70} height={70} />
                <h4>{t.s2H4a}</h4>
                <p>{t.s2h4pa}</p>
            </div>
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="600">
                <img src="/razor.webp" alt="razor_Barbers_Crew" width={70} height={70} />
                <h4>{t.s2H4b}</h4>
                    <p>{t.s2h4pb}</p>
            </div>
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="800">
                <img src="/hair-dryer.webp" alt="hair-dryer_Barbers_Crew" width={70} height={70} />
                <h4>{t.s2H4c}</h4>
                    <p>{t.s2h4pc}</p>
            </div>
            <div className={styles.serviceCard}data-aos="fade-up" data-aos-delay="1000">
                <img src="/mostache-and-glasses.webp" alt="mostache-and-glasses_Barbers_Crew" width={70} height={70} />
                <h4>{t.s2H4d}</h4>
                    <p>{t.s2h4pd}</p>
            </div>
        </div>
    </section> 
    <section className={styles.parallax}>
        <div>
            <div className={styles.imgParallax}>
            <img src="/american-crew-logo.webp" alt="american-crew-logo" width={350} height={361}/>
            </div>
            <h3>{t.s3H1}<br />
                {t.s3H1a}</h3>
        </div>
    </section>
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
                    <div className={styles.cardPicture1}>
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
                    <div className={styles.cardPicture2}>
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
  )
}
