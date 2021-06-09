import PhotoGallery from '../components/PhotoGallery'

const PictureGallery = () => {
    return ( 
        <main>
            <div className="mainGallery">
                <h1>Галерия със снимки</h1>
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