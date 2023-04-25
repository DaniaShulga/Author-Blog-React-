import './Menu.scss'
import tumblrIcon from 'assets/tumblr_icon.svg'
import twitterIcon from 'assets/twitter_icon.svg'
import facebookIcon from 'assets/facebook_icon.svg'
import instagramIcon from 'assets/instagram_icon.svg'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'

const Menu = () => {
    function btnBurger(){
    const iconMenu = document.querySelector('.menu__icon')
        if (iconMenu) {
            const menuBody = document.querySelector('.menu__body')
                document.body.classList.toggle('_lock')
                iconMenu.classList.toggle('_active')
                menuBody.classList.toggle('_active')
        }
    }
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            )
        },
    }
    if (isMobile.any()) {
        document.body.classList.add('_touch')
    } else {
        document.body.classList.add('_pc')
    }
    
    function addArr(){
        let menuArrows = document.querySelectorAll('.menu__arrow')
        
        if (menuArrows.length > 0) {
            for (let i = 0; i < menuArrows.length; i++) {
                const menuArrow = menuArrows[i]
                menuArrow.parentElement.classList.toggle("_active");
            }
        }
    }

    
    return (
        <>
            <div className="header__menu menu">
                <div className="menu__icon" onClick={btnBurger}>
                    <span></span>
                </div>
                <nav className="menu__body">
                    <ul className="menu__list">
                        <li>
                            <MenuItem to='/'>
                                home
                            </MenuItem>
                        </li>
                        <li>                            
                                <MenuItem to='/about'>
                                    about
                                </MenuItem>                                           
                        </li>
                        <li>
                            <MenuItem to='/articles'>
                                articles
                            </MenuItem>  
                        </li>
                        <li>                            
                            <MenuItem to='/contact'>
                                contact
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem to='/categories'>
                                categories
                            </MenuItem>   
                            <span className="menu__arrow" onClick={addArr}></span>
                            <ul className="menu__sub-list">
                                <li>
                                    <Link to="/art" className='menu-link'>art</Link>
                                </li>
                                <li>
                                    <Link to="/books" className='menu-link'>books</Link>                                    
                                </li>
                                <li>
                                    <Link to="/writing" className='menu-link'>writing</Link>
                                </li>
                                <li>
                                    <Link to="/knowledge" className='menu-link'>knowledge</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <MenuItem to='/favourites'>
                                favourites
                            </MenuItem>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__widgets widgets">
                <ul className="widgets__list">
                    <li className="widgets__item">
                        <a href="/" className="widgets__link">
                            <img src={tumblrIcon} alt="" />
                        </a>
                    </li>
                    <li className="widgets__item">
                        <a href="https://twitter.com/QodeInteractive" className="widgets__link">
                            <img src={twitterIcon} alt="" />
                        </a>
                    </li>
                    <li className="widgets__item">
                        <a href="https://www.facebook.com/QodeInteractive/" className="widgets__link">
                            <img src={facebookIcon} alt="" />
                        </a>
                    </li>
                    <li className="widgets__item">
                        <a href="https://www.instagram.com/qodeinteractive/" className="widgets__link">
                            <img src={instagramIcon} alt="" />
                        </a>
                    </li>
                </ul>
                <div className="header__search">
                    <div className="search">
                        <input type="text" placeholder=" " />
                        <div>
                            <svg>
                                <use xlinkHref="#path" />
                            </svg>
                        </div>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'none' }}
                    >
                        <symbol
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 160 28"
                            id="path"
                        >
                            <path
                                d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
                                transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
                            ></path>
                        </symbol>
                    </svg>
                </div>
            </div>
        </>
    )
}
export default Menu
