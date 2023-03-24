import './Menu.scss'
import MenuItem from './MenuItem'
import './Reset.scss'

type Props = {}
const Menu = (props: Props) => {
    return (
        <nav className="nav">
            <div className="menu">
                <ul className="menu__list">
                    <li>
                        <MenuItem to="/">home</MenuItem>
                    </li>
                    <li>
                        <MenuItem to="/about">about</MenuItem>
                    </li>
                    <li>
                        <MenuItem to="/articles">articles</MenuItem>
                    </li>
                    <li>
                        <MenuItem to="/contact">contact</MenuItem>
                    </li>
                    <li>
                        <a href="/" className="menu__link">
                            Categories
                        </a>
                        <ul className="sub-menu__list">
                            <li>
                                <MenuItem to="/art">art</MenuItem>
                            </li>
                            <li>
                                <MenuItem to="/books">books</MenuItem>
                            </li>
                            <li>
                                <MenuItem to="/writing">writing</MenuItem>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="header__widgets_and_search_button">
                <ul className="header__widgets">
                    <li>
                        <a href="./Header.tsx">
                            <img
                                src="./images/tumblr_icon.svg"
                                alt="tumblr icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/QodeInteractive">
                            <img
                                src="./images/twitter_icon.svg"
                                alt="twitter icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/QodeInteractive/">
                            <img
                                src="./images/facebook_icon.svg"
                                alt="facebook icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/qodeinteractive/">
                            <img
                                src="./images/instagram_icon.svg"
                                alt="instagram icon"
                            />
                        </a>
                    </li>
                </ul>

                <div className="header__search_button">
                    <div className="header__search_button_img">
                        <img src="./images/search_icon.svg" alt="search icon" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Menu
