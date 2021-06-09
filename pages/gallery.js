import PhotoGallery from '../components/PhotoGallery'

const PictureGallery = () => {
    return ( 
        <main>
            <h1>Галерия със снимки</h1>
            <div className="gallery">
                <PhotoGallery />
            </div>
            <style jsx>{`
                main{
                    max-width:1200px;
                    margin:0 auto;
                }
                h1{
                    color:#e9e9e7;
                }
                .gallery{
                    margin: 0px 0px 40px 0px;
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