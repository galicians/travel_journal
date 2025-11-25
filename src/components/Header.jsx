import ReactLogo from '../assets/react.svg';
export default function Header() {
   return (
    <header className="header-traveljournal">
        <nav className="navBar-traveljournal">
            <img className="logo" src={ReactLogo} alt="logo website"/>
            <h1 className='textLogo'>my travel journal.</h1>
        </nav>
        </header>
    )
}