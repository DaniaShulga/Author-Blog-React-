import './Menu.scss'
import MenuItem from './MenuItem'
import './Reset.scss'
import ArrowDown from 'assets/arrow_down_icon.svg'

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
                            <img
                                src={ArrowDown}
                                alt=""
                                className="arrow_down_categories"
                            />
                            Categories
                        </a>
                        <ul className="sub-menu__list">
                            <li>
                                <MenuItem to="/art">art</MenuItem>
                            </li>
                            <li>
                                <MenuItem to="/books">book</MenuItem>
                            </li>
                            <li>
                                <MenuItem to="/writing">writing</MenuItem>
                            </li>
                            <li>
                                <MenuItem to="/knowledge">knowledge</MenuItem>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <MenuItem to="/favourites">favourites</MenuItem>
                    </li>
                </ul>
            </div>

            <div className="header__widgets_and_search_button">
                <ul className="header__widgets">
                    <li>
                        <a href="./Header.tsx">
                            <svg
                                viewBox="0 0 64 64"
                                xmlSpace="preserve"
                                fill="#ffffff"
                                xmlns="http://www.w3.org/2000/svg"
                                enableBackground="new 0 0 64 64"
                            >
                                <path
                                    d="M49.5 58.1c-3 2.4-6.8 3.9-11 3.9-3.8 0-7.4-1.2-10.2-3.3-4.4-3.2-7.2-8.3-7.2-14.1V26h-6v-6.5c0-.6.3-1.1.9-1.3.6-.3 1.2-.7 1.8-1 1.2-.7 2.2-1.6 3.2-2.5 3.1-3 5.2-6.9 5.9-11.3 0-.9.6-1.4 1.3-1.4H36v15h12v9H36V45.4c.1 2.6 2.2 4.8 4.8 5h.7c1.8 0 3.6-.5 5-1.4l3 8.9v.2z"
                                    id="Layer_11"
                                    className="fill-395976"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/QodeInteractive">
                            <svg
                                viewBox="0 0 64 64"
                                xmlSpace="preserve"
                                fill="#ffffff"
                                xmlns="http://www.w3.org/2000/svg"
                                enableBackground="new 0 0 64 64"
                            >
                                <path
                                    d="M59.5 15.8c-.8.6-1.6 1.1-2.5 1.6.1.8.1 1.7.1 2.6 0 11.6-5 22.1-12.9 29.4-6.2 4.6-13.9 7.3-22.3 7.3-7.3 0-14.1-2.1-19.9-5.7 1.2.2 2.4.3 3.7.3 5.8 0 11.1-2 15.3-5.3-5.4-.1-10-3.7-11.6-8.7.7.1 1.5.2 2.3.2 1.1 0 2.1-.1 3.1-.4-2.3-.5-4.3-1.7-5.9-3.3-2.3-2.2-3.7-5.4-3.7-8.8v-.2c1.5.8 3.1 1.3 4.9 1.5C8.3 24.9 6.8 23 6 20.8c-.5-1.4-.8-2.9-.8-4.4 0-.6 0-1.3.1-1.9.3-1.7.9-3.3 1.7-4.6.9 1 1.9 2 3 3 .5.5 1.1.9 1.6 1.4 3.1 2.5 6.6 4.5 10.3 6 .5.2.9.4 1.4.5 1.7.6 3.4 1.1 5.2 1.4.4.1.8.2 1.2.2.2 0 .3.1.5.1.8.1 1.5.2 2.3.3-.2-.9-.4-1.9-.4-3 0-4.2 2.1-7.9 5.3-10.1.2-.2.4-.3.7-.4 0 0 .1 0 .1.1v-.1c1.9-1.1 4-1.8 6.4-1.8 3.6 0 6.8 1.5 9.1 4 .8-.2 1.7-.4 2.5-.6.9-.3 1.7-.5 2.5-.9 1-.4 1.9-.9 2.8-1.4-.5 1.5-1.3 2.9-2.3 4.1-.7.8-1.5 1.5-2.3 2.2-.2.1-.4.3-.6.4h-.2v.1l.1-.1c.2 0 .4-.1.7-.1.9-.1 1.7-.3 2.6-.5.9-.2 1.8-.5 2.6-.8-.9.6-1.8 1.2-2.6 1.9z"
                                    id="twitter"
                                    className="fill-1da1f3"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/QodeInteractive/">
                            <svg
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                fill="#ffffff"
                                xmlns="http://www.w3.org/2000/svg"
                                enableBackground="new 0 0 512 512"
                            >
                                <path
                                    d="M366 172.6h-74.9v-49.1c0-18.5 12.2-22.8 20.8-22.8h52.9V19.6l-72.8-.3c-80.8 0-99.2 60.5-99.2 99.2v54.1H146v83.6h46.7v236.5H291V256.2h66.3l8.7-83.6z"
                                    className="fill-23599c"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/qodeinteractive/">
                            <svg
                                overflow="visible"
                                viewBox="0 -0.266 32 32"
                                xmlSpace="preserve"
                                fill="#ffffff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M28.923 0H3.077A3.077 3.077 0 0 0 0 3.076v25.848A3.077 3.077 0 0 0 3.077 32h25.846c1.7 0 3.077-1.377 3.077-3.076V3.076A3.076 3.076 0 0 0 28.923 0zM16 9.846a6.155 6.155 0 0 1 0 12.308 6.155 6.155 0 0 1 0-12.308zm12.308 17.23c0 .68-.551 1.232-1.23 1.232H4.923c-.68 0-1.23-.553-1.23-1.232V13.539h2.784A9.784 9.784 0 0 0 6.154 16c0 5.438 4.408 9.846 9.846 9.846s9.846-4.408 9.846-9.846a9.83 9.83 0 0 0-.322-2.461h2.784v13.537zm0-18.461c0 .68-.551 1.23-1.23 1.23h-3.692a1.23 1.23 0 0 1-1.23-1.23V4.924c0-.68.551-1.232 1.23-1.232h3.692c.68 0 1.23.553 1.23 1.232v3.691z"
                                    fillRule="evenodd"
                                    className="fill-000000"
                                ></path>
                            </svg>
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
