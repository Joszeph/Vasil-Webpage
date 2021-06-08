import dynamic from 'next/dynamic'

const GoogleMap = dynamic(() => import('../components/GoogleMap'), {
    loading: () => "Loading...",
    ssr: false
  })

const ContactUs = () => {
    return ( 
        <main>
            <div className="container">
            <h1>Свържете се с нас:</h1>
            <section className="contacts">
                <div className="map"><GoogleMap /></div>
                <div className="infoContacts">
                    <div>
                        <h2>Телефон за резервации:</h2>
                        <a href="0887 / 138 878">0887 / 138 878</a>
                    </div>
                    <div>
                        <h2><a href="">Онлайн резервации</a></h2>
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
            <style jsx>{`
            .container{
                max-width: 1200px;
                margin: 0 auto;
                margin-bottom: 60px;
            }
            
            .container h1{
                color:#e9e9e7;
            }
            
            .contacts{
                display: flex;
                justify-content: space-between;
            }
            
            .map{
                flex-basis: 50%;
            }
            
            .infoContacts{
                flex-basis: 40%;
                color:#e9e9e7;
            }
            
            .infoContacts a{
                text-decoration: none;
                color:#e9e9e7;
            }
            
            .infoContacts h2{
                margin: 25px 0 8px 0;
            }
            
            .infoContacts h2 a{
                color:#e00310;
            }

            address{
                line-height:25px;
            }
            
            @media only screen and (max-width: 1239px) {
                h1{
                    margin-left: 20px;
                }
                .map{
                    padding:20px;
                }
                .infoContacts{
                    padding:20px
                }
            }
            
            @media only screen and (max-width: 600px) {
                .contacts{
                    flex-direction: column;
                }
                .map{
                    padding:20px;
                }
                .infoContacts{
                    padding:20px
                }
            }
            `}</style>
        </main>
     );
}
 
export default ContactUs;