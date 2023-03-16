type Props = {}
const AsideAuthorBlog = (props: Props) => {
    return (
        <div className="author_block">
            <div className="author_img">
                <img src="/images/sidebar-img-1.png" alt="sidebar img 1" />
            </div>
            <div className="author_inf">
                <div className="author_text">
                    <p className="text_1">Monica Larson</p>
                    <p className="text_2">
                        Proin a nibh vel velit ucto
                        <br /> quet. Aenean solli tudin,
                        <br />
                        lorem qs bibed auctor, nisi <br /> elit consequai
                    </p>
                </div>
                <ul className="author_socials">
                    <li>
                        <a href="./Header.tsx">
                            <img
                                src="/images/twitter_icon_black.svg"
                                alt="twitter icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="./Header.tsx">
                            <img
                                src="/images/facebook_icon_black.svg"
                                alt="facebook icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="./Header.tsx">
                            <img
                                src="/images/instagram_icon_black.svg"
                                alt="instagram icon"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default AsideAuthorBlog
