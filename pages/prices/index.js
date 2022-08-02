import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import styles from './prices.module.css'

import BlockContent from '@sanity/block-content-to-react';

import AOS from "aos";
import "aos/dist/aos.css";

import bg from '../../locales/bg'
import en from '../../locales/en'

import{NextSeo} from 'next-seo'

const Prices = ({posts, body}) => {

  const SEO = {
    title: "Barbers Crew - Барбершоп Варна | Услуги и Цени",
    description: "Мъжко Подстригване и Бръснене във Варна - Барбершоп | Услуги и Цени",

    openGraph:{
        title: "Barbers Crew - Барбершоп Варна | Услуги и Цени",
        description: "Мъжко Подстригване и Бръснене във Варна - Барбершоп | Услуги и Цени",
    }
}

    const router = useRouter()

    const { locale } = router
    const t = locale === 'bg' ? bg : en

    const [mappedPosts, setMappedPosts] = useState([])

    useEffect(()=>{
        if (posts.length){
            setMappedPosts(
                posts.map(p=>{
                    return{
                        ...p,
                    }
                })
            )
        }else{
            setMappedPosts([])
        }
    },[posts])

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

    return ( 
        <main className={styles.mainContainer}>
          <NextSeo {...SEO} />
            <h1 data-aos="fade-right">{t.h1Prices}</h1>
            <div className={styles.container}>
                <div data-aos="fade-right" data-aos-delay="300">
                {mappedPosts.length ? mappedPosts.map((p, index)=>(
                    <div className={styles.divPrices}>
                        <h2>{p.title}</h2>
                        <BlockContent blocks={body} />
                    </div>
                )):<>No Prices Yet</>}
                </div>
                <div className={styles.img} data-aos="zoom-in" data-aos-delay="300">  
                {/* <Image src="/image8.webp" alt="price_page_image" width={400} height={400} /> */}
                <div className={styles.three}>
                    <h3>{t.wTime}</h3>
                        <p>{t.Monday}</p>
                        <p>{t.Tuesday}</p>
                        <p>{t.Wednesday}</p>
                        <p>{t.Thursday}</p>
                        <p>{t.Friday}</p>
                        <p>{t.Saturday}</p>
                        <p>{t.Sunday}</p>
                        <button className={styles.mainBtn} data-aos="zoom-in" data-aos-delay="50">
            <Link href="https://calendly.com/barbers_crew/app"><a target="_blank">{t.button}</a></Link>
            </button>
                </div>
              
                </div>
            </div>
        </main>
     );
}

export const getServerSideProps = async pageContext =>{
    const query = encodeURIComponent('*[ _type == "post" ]|order(publishedAt desc)[0...2]')
    const url = `https://oectmibe.api.sanity.io/v1/data/query/production?query=${query}`
    const result = await fetch(url).then(res => res.json())

    const post = result.result[0];

    if (!result.result || !result.result.length) {
        return {
          props: {
            posts: [],
          }
        }
      } else {
        return {
          props: {
            posts: result.result,
            body: post.body,
          }
        }
      }
}
 
export default Prices;
