import {useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import SwiperCore, {Autoplay} from 'swiper/core'

SwiperCore.use([Autoplay]);

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

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
        <h1 data-aos="fade-right">Мъжки прически, стайлинг на коса и <br/>
            грижа за брадата</h1>
        <h2 data-aos="fade-right" data-aos-delay="500">Стилният мъж си личи в тълпата не само по дрехите и обувките,<br/>
            но и заради неговата поддържана коса и брада!<br/>
            Доверете се на нашия екип от професионалисти,<br/>
            които имат международен опит в създаването и оформянето на мъжка визия. </h2>
        <button className={styles.mainBtn} data-aos="zoom-in" data-aos-delay="700">Онлайн Резервация</button>
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
            <div>
                <h3><a href="tel:0887138 878">0887 / 138 878</a></h3>
                <p>Телефон за резервации</p>
            </div>
            <img src="/location_icon.webp" alt="location_icon_Barbers_Crew"  width={32} height={32}/>
            <div>
            <Link href="/contacts"><a>
            <h3>
                Търговски център "Приморски"</h3>
                <p>Св. св. Константин и Елена, Варна</p>
                </a></Link>
                
            </div>
            <img src="/clock_icon.webp" alt="clock_icon_Barbers_Crew"  width={32} height={32}/>
            <div>
                <h3>Понеделник - Събота</h3>
                <p>10:00 - 20:00ч.</p>
            </div>
        </div>
    </div>
    <section className={styles.quates}>
                <h2 data-aos="fade-up">НАЙ-ДОБРИЯТ БАРБЕРШОП ВЪВ ВАРНА</h2>
                <img src="/mustages.webp" alt="mustages Barbers_Crew" width={200} height={32} data-aos="zoom-in" data-aos-delay="300"/>
                <p data-aos="fade-up" data-aos-delay="400">Запишете се сега и ще получите професионални съвети за избирането,<br />
                    на Вашата най-добра визия и продукти спецялно за Вашият тип коса!</p>
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
        <h2 data-aos="fade-up" >НАШИТЕ УСЛУГИ</h2>
        <Image src="/mustages.webp" alt="mustages Barbers_Crew" width={200} height={32} data-aos="zoom-in" data-aos-delay="300"/>
        <h3>Предлагаме цялостна грижа за мъжката визия,<br />
            избираме заедно подходящият за Вас стил на прическа и<br />
            оформяне на брада според последните модни тенденции.</h3>
        <div className={styles.serviceCardsContainer}>
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="400">
                <img src="/scissors.webp" alt="scissors_Barbers_Crew" width={70} height={70} />
                <h4>МЪЖКО ПОДСТРИГВАНЕ </h4>
                <p>Създаване на форма за причевска според овала и формата Вашата глава.</p>
            </div>
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="600">
                <img src="/razor.webp" alt="razor_Barbers_Crew" width={70} height={70} />
                <h4>ОФОРМЯВАНЕ НА БРАДА </h4>
                    <p>Оформяне на брада според структората на Вашето лице, челюст и гъстота на брада.</p>
            </div>
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="800">
                <img src="/hair-dryer.webp" alt="hair-dryer_Barbers_Crew" width={70} height={70} />
                <h4>СТАЙЛИНГ</h4>
                    <p>Използваме професионални продукти подходящи за Вашият тип коса, скалп и структора на косъма.</p>
            </div>
            <div className={styles.serviceCard}data-aos="fade-up" data-aos-delay="1000">
                <img src="/mostache-and-glasses.webp" alt="mostache-and-glasses_Barbers_Crew" width={70} height={70} />
                <h4>ПОДСТРИГВАНЕ С МАШИНКА </h4>
                    <p>Създаваме различни светлосенки според стил на прическа, гъстота и структора на косъма на Вашата коса.</p>
            </div>
        </div>
    </section> 
    <section className={styles.parallax}>
        <div>
            <div className={styles.imgParallax}>
            <img src="/american-crew-logo.webp" alt="american-crew-logo" width={350} height={361}/>
            </div>
            <h3>Американ крю са едни от пионерите в козметиката и продуктите за коса,<br />
                спецялно създадени за мъже!</h3>
        </div>
    </section>
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
  )
}
