// import tumblr from 'images/tumblr_icon.svg'
// import twitter from 'assets/twitter_icon.svg'
// import facebook from 'assets/facebook_icon.svg'
// import instagram from 'assets/instagram_icon.svg'
// import search from 'assets/search_icon.svg'
import './Menu.scss'
import './Reset.scss'

type Props = {}
const Menu = (props: Props) => {
    return (
        <nav className="nav">
            <div className="menu">
                <ul className="menu__list">
                    <li>
                        <a href="./Header.tsx">home</a>
                    </li>
                    <li>
                        <a href="./Header.tsx">about</a>
                    </li>
                    <li>
                        <a href="./Header.tsx">articles</a>
                    </li>
                    <li>
                        <a href="./Header.tsx">contact</a>
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
                        <a href="./Header.tsx">
                            <img
                                src="./images/twitter_icon.svg"
                                alt="twitter icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="./Header.tsx">
                            <img
                                src="./images/facebook_icon.svg"
                                alt="facebook icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="./Header.tsx">
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
