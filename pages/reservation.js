 const Reservation = () => {
    return ( 
        <main>
            <div className="app">
            <iframe  src="https://calendly.com/jozeph/appointments" title="Set Appointment"></iframe>
            </div>
            <style jsx>{`
                .app{
                    max-width:1200px;
                    margin: 0 auto;
                }
                iframe{
                    height:700px;
                    width:1200px;
                }
            `}</style>
        </main>
     );
}
 
export default Reservation;