import './FooterItems.scss'
import './FooterItems.scss'
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
                    <a href="./FooterItems.tsx">home</a>
                </li>
                <li>
                    <a href="./FooterItems.tsx">about</a>
                </li>
                <li>
                    <a href="./FooterItems.tsx">articles</a>
                </li>
                <li>
                    <a href="./FooterItems.tsx">books</a>
                </li>
                <li>
                    <a href="./FooterItems.tsx">contact</a>
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
