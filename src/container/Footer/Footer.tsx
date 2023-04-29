import './Footer.scss'
import footerLogo from 'assets/footer-logo.png'
import tumblrIcon from 'assets/tumblr_icon.svg'
import twitterIcon from 'assets/twitter_icon.svg'
import facebookIcon from 'assets/facebook_icon.svg'
import instagramIcon from 'assets/instagram_icon.svg'
import { Link } from 'react-router-dom'

type Props = {}
const Footer = (props: Props) => {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__logo">
                    <Link to={'/'} onClick={scrollTop}>
                        <img src={footerLogo} alt="" />
                    </Link>
                </div>
                <ul className="footer__list">
                    <li className="footer__item">
                        <Link
                            to="/"
                            className="footer__link"
                            onClick={scrollTop}
                        >
                            home
                        </Link>
                    </li>
                    <li className="footer__item">
                        <Link
                            to="/about"
                            className="footer__link"
                            onClick={scrollTop}
                        >
                            about
                        </Link>
                    </li>
                    <li className="footer__item">
                        <Link
                            to="/articles"
                            className="footer__link"
                            onClick={scrollTop}
                        >
                            articles
                        </Link>
                    </li>
                    <li className="footer__item">
                        <Link
                            to="/"
                            className="footer__link"
                            onClick={scrollTop}
                        >
                            books
                        </Link>
                    </li>
                    <li className="footer__item">
                        <Link
                            to="/contact"
                            className="footer__link"
                            onClick={scrollTop}
                        >
                            contact
                        </Link>
                    </li>
                </ul>
                <ul className="footer__widgetsList">
                    <li className="footer__widgetsItem">
                        <a href="/" className="footer__widgetsLink">
                            <img src={tumblrIcon} alt="" />
                        </a>
                    </li>
                    <li className="footer__widgetsItem">
                        <a
                            href="https://twitter.com/QodeInteractive"
                            className="footer__widgetsLink"
                        >
                            <img src={twitterIcon} alt="" />
                        </a>
                    </li>
                    <li className="footer__widgetsItem">
                        <a
                            href="https://www.facebook.com/QodeInteractive/"
                            className="footer__widgetsLink"
                        >
                            <img src={facebookIcon} alt="" />
                        </a>
                    </li>
                    <li className="footer__widgetsItem">
                        <a
                            href="https://www.instagram.com/qodeinteractive/"
                            className="footer__widgetsLink"
                        >
                            <img src={instagramIcon} alt="" />
                        </a>
                    </li>
                </ul>
                <div className="footer__copyright">
                    <p>
                        <a href="https://qodeinteractive.com/?_ga=2.23943546.1592841558.1682345192-1516393312.1682186901">
                            Copyright @ Qode Interactive 2019
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
