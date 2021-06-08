import styles from './contacts.module.css'

import dynamic from 'next/dynamic'

const GoogleMap = dynamic(() => import('../../components/GoogleMap'), {
    loading: () => "Loading...",
    ssr: false
  })

const ContactUs = () => {
    return ( 
        <main>
            <div className={styles.container}>
            <h1>Свържете се с нас:</h1>
            <section className={styles.contacts}>
                <div className={styles.map}><GoogleMap /></div>
                <div className={styles.infoContacts}>
                    <div>
                        <h2>Телефон за резервации:</h2>
                        <a href="0887 / 138 878">0887 / 138 878</a>
                    </div>
                    <div>
                        <h3><a href="">Онлайн резервации</a></h3>
                    </div>
                    <div>
                        <h2>e-mail:</h2>
                        <a href="">antonov.vasil@yahoo.com</a> 
                    </div>
                    <div>
                        <h2>Адрес:</h2>
                        <address>Св. св. Константин и Елена, град Варна <br />
                        Търговски център "Приморски"</address>
                    </div>
                </div>
            </section>
            </div>
        </main>
     );
}
 
export default ContactUs;