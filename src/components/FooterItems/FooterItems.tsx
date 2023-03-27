import './FooterItems.scss'
import FooterNav from './FooterNav'
import './Reset.scss'

type Props = {}
const FooterItems = (props: Props) => {
    return (
        <div className="footer_items">
            <div className="footer_logo">
                <a href="./FooterItems.tsx">
                    <img src="./images/footer-logo.png" alt="" />
                </a>
            </div>

            <ul className="footer_nav">
                <li>
                    <FooterNav to="/">home</FooterNav>
                </li>
                <li>
                    <FooterNav to="/about">about</FooterNav>
                </li>
                <li>
                    <FooterNav to="/articles">articles</FooterNav>
                </li>
                <li>
                    <FooterNav to="/books">books</FooterNav>
                </li>
                <li>
                    <FooterNav to="/contact">contact</FooterNav>
                </li>
            </ul>

            <ul className="footer_widgets">
                <li>
                    <a href="./FooterItems.tsx">
                        <img src="./images/tumblr_icon.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="./FooterItems.tsx">
                        <img src="./images/twitter_icon.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="./FooterItems.tsx">
                        <img src="./images/facebook_icon.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="./FooterItems.tsx">
                        <img src="./images/instagram_icon.svg" alt="" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default FooterItems
