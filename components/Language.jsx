import{useRouter} from 'next/router'
import{useState} from 'react'

import styles from '../styles/Lang.module.css'

import bg from '../locales/bg'
import en from '../locales/en'


const Language = () => {
    
const router = useRouter()
const { locale } = router
const t = locale === 'bg' ? bg : en

const changeLanguage = (e) => {
    const locale = e.target.value
    e.preventDefault();
    router.push(router.pathname, router.asPath, { locale });
    }

    const [language, setLanguage] = useState('bg');

    return ( 
        <div className={styles.langBar}>
        <form className={styles.form}>
            <div className={styles.switchField}>
                <input type="radio" id="radio-one" name="switch-one" value="bg" onClick={changeLanguage} defaultValue={locale} defaultChecked={language ==='bg'}/>
                <label htmlFor="radio-one">БГ</label>
                <input type="radio" id="radio-two" name="switch-one" value="en" onClick={changeLanguage} defaultChecked={language ==='en'} />
                <label htmlFor="radio-two">EN</label>
            </div>
        </form>
        </div> 
     );
}
 
export default Language;









