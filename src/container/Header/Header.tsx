import './Header.scss'
import './Reset.scss'
import tumblr from 'assets/tumblr_icon.svg'
import twitter from 'assets/twitter_icon.svg'
import facebook from 'assets/facebook_icon.svg'
import instagram from 'assets/instagram_icon.svg'
import search from 'assets/search_icon.svg'

type Props = {}
const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="menu">
                        <ul className="menu__list">
                            <li>
                                <a href="#">home</a>
                            </li>
                            <li>
                                <a href="#">about</a>
                            </li>
                            <li>
                                <a href="#">articles</a>
                            </li>
                            <li>
                                <a href="#">contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="header__widgets_and_search_button">
                        <ul className="header__widgets">
                            <li>
                                <a href="#">
                                    <img src={tumblr} alt="tumblr icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={twitter} alt="twitter icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={facebook} alt="facebook icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={instagram} alt="instagram icon" />
                                </a>
                            </li>
                        </ul>

                        <div className="header__search_button">
                            <div className="header__search_button_img">
                                <img src={search} alt="search icon" />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header
