import PhotoGallery from '../components/PhotoGallery'
import {useEffect} from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

const PictureGallery = () => {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

    return ( 
        <main>
            <div className="mainGallery">
                <h1 data-aos="fade-right">Галерия</h1>
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