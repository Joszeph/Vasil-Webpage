import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import SwiperCore, {Autoplay} from 'swiper/core'

SwiperCore.use([Autoplay]);

export default function Home() {
  return (
  <main>
     <div className={styles.mainTitles}>
        <h1>Мъжки прически, стайлинг на коса и <br/>
            грижа за брадата</h1>
        <h2>Някой от тези сайтове биват променяни с времето,<br />
            а други по случайност или нарочно(за забавление и пр.)<br />
            биват оставяни в този си незавършен вид.</h2>
        <button className={styles.mainBtn}>Онлайн Резервация</button>
      </div>
      <div className={styles.mainContacts}>
        <div className={styles.socialIcons}>
            <div className={styles.imgS}><img src="/facebook_icon.webp" alt="facebook_icon_Barbers_Crew" width="32" height="32" /></div>
            <div className={styles.imgS}><img src="/instagram_icon.webp" alt="instagram_icon_Barbers_Crew" width="32" height="32" /></div>
            <div className={styles.imgS}><img src="/linkedin_icon.webp" alt="linkedin_icon_Barbers_Crew" width="32" height="32" /></div>
            <div className={styles.imgS}><img src="/youtube_icon.webp" alt="youtube_icon_Barbers_Crew" width="32" height="32" /></div>   
        </div>
        <div className={styles.contactsInfo}>
            <img src="/phone_icon.webp" alt="phone_icon_Barbers_Crew"  width={32} height={32}/>
            <div>
                <h3>0887 / 138 878</h3>
                <p>Телефон за резервации</p>
            </div>
            <img src="/location_icon.webp" alt="location_icon_Barbers_Crew"  width={32} height={32}/>
            <div>
                <h3>
                Търговски център "Приморски"</h3>
                <p>Св. св. Константин и Елена, Варна</p>
            </div>
            <img src="/clock_icon.webp" alt="clock_icon_Barbers_Crew"  width={32} height={32}/>
            <div>
                <h3>Понеделник - Събота</h3>
                <p>10:00 - 20:00ч.</p>
            </div>
        </div>
    </div>
    <section className={styles.quates}>
                <h2>НАЙ-ДОБРИЯТ БАРБЕРШОП ВЪВ ВАРНА</h2>
                <img src="/mustages.webp" alt="mustages Barbers_Crew" width={200} height={32}/>
                <p>Съществуват много вариации на пасажа Lorem Ipsum,<br/>
                     но повечето от тях са променени по един или друг начин чрез добавяне на смешни думи или разбъркване на думите,<br/>
                      което не изглежда много достоверно. Ако искате да използвате пасаж от Lorem Ipsum, трябва да сте сигурни,<br/>
                      че в него няма смущаващи или нецензурни думи. </p>
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
        <h2>НАШИТЕ УСЛУГИ</h2>
        <Image src="/mustages.webp" alt="mustages Barbers_Crew" width={200} height={32} />
        <h3>Далеч далеч, зад думата планини,<br/>
            далеч от страните Вокалия и Консонантия, живеят слепите текстове. </h3>
        <div className={styles.serviceCardsContainer}>
            <div className={styles.serviceCard}>
                <Image src="/scissors.webp" alt="scissors_Barbers_Crew" width={70} height={70} />
                <h4>МЪЖКО ПОДСТРИГВАНЕ </h4>
                <p>Дори всемогъщата Pointing няма контрол върху слепите текстове, тя е почти неортографска.</p>
            </div>
            <div className={styles.serviceCard}>
                <Image src="/razor.webp" alt="razor_Barbers_Crew" width={70} height={70} />
                <h4>ОФОРМЯВАНЕ НА БРАДА </h4>
                    <p>Дори всемогъщата Pointing няма контрол върху слепите текстове, тя е почти неортографска.</p>
            </div>
            <div className={styles.serviceCard}>
                <Image src="/hair-dryer.webp" alt="hair-dryer_Barbers_Crew" width={70} height={70} />
                <h4>СТАЙЛИНГ</h4>
                    <p>Дори всемогъщата Pointing няма контрол върху слепите текстове, тя е почти неортографска.</p>
            </div>
            <div className={styles.serviceCard}>
                <Image src="/mostache-and-glasses.webp" alt="mostache-and-glasses_Barbers_Crew" width={70} height={70} />
                <h4>ПОДСТРИГВАНЕ С МАШИНКА </h4>
                    <p>Дори всемогъщата Pointing няма контрол върху слепите текстове, тя е почти неортографска.</p>
            </div>
        </div>
    </section> 
    <section className={styles.parallax}>
        <div>
            <div className={styles.imgParallax}>
            <Image src="/american-crew-logo.webp" alt="american-crew-logo" width={350} height={361} quality={50}/>
            </div>
            <h3>Далеч далеч, зад думата планини, далеч от страните Вокалия и Консонантия, живеят слепите текстове. </h3>
        </div>
    </section>
    <section className={styles.ourTeam}>
               <div className={styles.teamContainet}>
                <div className={styles.ourTeamTitles}>
                    <h2>НАШИЯ ЕКИП</h2>
                    <Image src="/mustages.webp" alt="mustages" width={200} height={32} />
                    <h3>Екип от професионалисти,<br/>
                        нашите барбери и стилисти</h3>
                   </div>
                   <div className={styles.cardContainer}>
                   {/* <!-- Card --> */}
                  <div className={styles.card}>
                    <div className={styles.cardPicture}>
                        <h2>Васил <br />
                         Антонов</h2>
                         <div className={styles.cardIcons}>
                             <img src="/facebook_icon.webp" alt="facebook_icon_crew" />
                             <img src="/instagram_icon.webp" alt="instagram_icon_crew" />
                         </div>
                    </div>
                    <div className={styles.cardText}>
                        <p>Стандартният отрязък от Lorem Ipsum, използван от 1500 г. насам, е поместен по-долу за тези, които се интересуват. Секции 1.10.32 и 1.10.33 от "de Finibus Bonorum et Malorum" на Цицерон също са поместени в оригиналния им формат, заедно с превода им на английски език, направен от H. Rackham през 1914г.</p>
                    </div>
                  </div>
                  {/* <!-- Card End --> */}
                   {/* <!-- Card --> */}
                  <div className={styles.card}>
                    <div className={styles.cardPicture}>
                        <h2>Васил <br />
                         Антонов</h2>
                         <div className={styles.cardIcons}>
                             <img src="/facebook_icon.webp" alt="facebook_icon_crew" />
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
