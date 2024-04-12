import './navbar.css'
import homeIcon from '../../assets/img/home.png'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='navbar-content'>
                <span className='logo'>
                    <h1>Convertidor de divisas IN6BM</h1>
                </span>
                <img src={homeIcon} alt="Home" />
            </div>
        </nav>
    )
}

export default Navbar
