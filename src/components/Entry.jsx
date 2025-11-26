import Marker from '../assets/marker.svg';
import EntryImage from '../assets/mount_fugi.png';

export default function Entry(props) {
    console.log('props',props)
    return (
        <>
        <div className='entry-container'>
            <img className="entry-image" src={props.img.src} alt={props.img.alt}/>
            <div className="entry-body">
                <header className='entry-location'>
                    <img className="marker-img" src={Marker} alt="google-marker"/>
                    <span className='marker-text'>{props.country}</span>
                    <a className='marker-link' href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                </header>
    
                <h2 className='entry-title'>{props.title}</h2>
                <main>
                    <h3 className='entry-date'>{props.dates}</h3>
                    <p className='entry-info'>{props.text}</p>
                </main>
            </div>
            </div>
       
        </>
    )
}