import './Aside.scss'

type Props = {}
const Aside = (props: Props) => {
    return (
        <div className="article_column_2">
            <form className="search_form">
                <input
                    type="text"
                    placeholder="Search Here"
                    className="search_line"
                />
                <button type="submit" className="search_button">
                    <img src="/images/search_button.svg" alt="search button" />
                </button>
            </form>

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
                            <a href="">
                                <img
                                    src="/images/twitter_icon_black.svg"
                                    alt="twitter icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img
                                    src="/images/facebook_icon_black.svg"
                                    alt="facebook icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img
                                    src="/images/instagram_icon_black.svg"
                                    alt="instagram icon"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="posts">
                <div className="posts_title">
                    <p>Read Latest Posts</p>
                </div>

                <ul className="post_items">
                    <li>
                        <img src="/images/post_img_1.jpg" alt="post img 1" />
                        <div className="posts_inf">
                            <p className="post_name">
                                Active and Passive <br /> Voice
                            </p>
                            <p className="post_date">20 February, 2020 </p>
                        </div>
                    </li>
                    <li>
                        <img src="/images/post_img_2.jpg" alt="post img 2" />
                        <div className="posts_inf">
                            <p className="post_name">
                                23 Ways to Improve Your Draft
                            </p>
                            <p className="post_date">20 February, 2020 </p>
                        </div>
                    </li>
                    <li>
                        <img src="/images/post_img_3.jpg" alt="post img 3" />
                        <div className="posts_inf">
                            <p className="post_name">
                                Advice for Writing Personal Statements
                            </p>
                            <p className="post_date">20 February, 2020 </p>
                        </div>
                    </li>
                    <li>
                        <img src="/images/post_img_4.jpg" alt="post img 4" />
                        <div className="posts_inf">
                            <p className="post_name">
                                Good writing is like a windowpane.
                            </p>
                            <p className="post_date">20 February, 2020 </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="categories_block">
                <div className="categories_title">
                    <p>Categories</p>
                </div>

                <ul className="categories_list">
                    <li>
                        <a href="">art</a>
                    </li>
                    <li>
                        <a href="">books</a>
                    </li>
                    <li>
                        <a href="">creation</a>
                    </li>
                    <li>
                        <a href="">knowledge</a>
                    </li>
                    <li>
                        <a href="">recommendations</a>
                    </li>
                    <li>
                        <a href="">wisdom</a>
                    </li>
                    <li>
                        <a href="">writing</a>
                    </li>
                </ul>
            </div>

            <div className="tags_block">
                <div className="tags_title">
                    <p>Tags</p>
                </div>

                <div className="tags_items">
                    <a href="">advice,</a>
                    <a href="">art,</a>
                    <a href="">books,</a>
                    <a href="">inspo,</a>
                    <a href="">lists,</a> <br />
                    <a href="">new,</a>
                    <a href="">sugestions,</a>
                    <a href="">writing</a>
                </div>
            </div>
        </div>
    )
}
export default Aside
