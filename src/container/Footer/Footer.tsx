import './Footer.scss'
import footerLogo from 'assets/footer-logo.png'
import tumblrIcon from 'assets/tumblr_icon.svg'
import twitterIcon from 'assets/twitter_icon.svg'
import facebookIcon from 'assets/facebook_icon.svg'
import instagramIcon from 'assets/instagram_icon.svg'

type Props = {}
const Footer = (props: Props) => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__logo">
                    <a href="#">
                        <img src={footerLogo} alt="" />
                    </a>
                </div>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="#" className="footer__link">
                            home
                        </a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">
                            about
                        </a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">
                            articles
                        </a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">
                            books
                        </a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">
                            contact
                        </a>
                    </li>
                </ul>
                <ul className="footer__widgetsList">
                    <li className="footer__widgetsItem">
                        <a href="#" className="footer__widgetsLink">
                            <img src={tumblrIcon} alt="" />
                        </a>
                    </li>
                    <li className="footer__widgetsItem">
                        <a href="#" className="footer__widgetsLink">
                            <img src={twitterIcon} alt="" />
                        </a>
                    </li>
                    <li className="footer__widgetsItem">
                        <a href="#" className="footer__widgetsLink">
                            <img src={facebookIcon} alt="" />
                        </a>
                    </li>
                    <li className="footer__widgetsItem">
                        <a href="#" className="footer__widgetsLink">
                            <img src={instagramIcon} alt="" />
                        </a>
                    </li>
                </ul>
                <div className="footer__copyright">
                    <p>
                        <a href="#">Copyright @ Qode Interactive 2019</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
