import styles from './about.module.css'

const AboutUs = () => {
    return ( 
        <main>
            <div className={styles.container}>
                <h1>За Нас:</h1>
                <section className={styles.aboutUs}>
                    <div className={styles.aboutText}>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    <div className={styles.aboutImages}></div>
                </section>
            </div>
            <section className={styles.ourTeam}>
               <div className={styles.teamContainet}>
                <div className={styles.ourTeamTitles}>
                    <h2>НАШИЯ ЕКИП</h2>
                    <img src="/mustages.webp" alt="mustages" width={200} height={32} />
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
     );
}
 
export default AboutUs;