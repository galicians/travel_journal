import Marker from '../assets/marker.svg';
import EntryImage from '../assets/mount_fugi.png';

export default function Entry() {
    return (
        <>
        <div className='entry-container'>
            <img className="entry-image" src={EntryImage} />
            <div className="entry-body">
                <header className='entry-location'>
                    <img className="marker-img" src={Marker} alt="google-marker"/>
                    <span className='marker-text'>Japan</span>
                    <a className='marker-link' href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank">View on Google Maps</a>
                </header>
    
                <h2 className='entry-title'>Mount Fuji</h2>
                <main>
                    <h3 className='entry-date'>12 Jan, 2021 - 24 Jan, 2021</h3>
                    <p className='entry-info'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </main>
            </div>
            </div>
       
        </>
    )
}