import './ColumnSecondSideBar.scss'
import authorImg from 'assets/sidebar-img-1.png'
import searchButton from 'assets/search_button.svg'
import twitterIconBlack from 'assets/twitter_icon_black.svg'
import facebookIconBlack from 'assets/facebook_icon_black.svg'
import instagramIconBlack from 'assets/instagram_icon_black.svg'
import latestPostImg1 from 'assets/latest_post_img_1.jpg'
import latestPostImg2 from 'assets/latest_post_img_2.jpg'
import latestPostImg3 from 'assets/latest_post_img_3.jpg'
import latestPostImg4 from 'assets/latest_post_img_4.jpg'

type Props = {}
const ColumnSecondSideBar = (props: Props) => {
    return (
        <div className="posts__column-second column-second">
            <form action="#" className="column-second__search">
                <input type="text" placeholder="Search Here" />
                <button>
                    <img src={searchButton} alt="" />
                </button>
            </form>
            <div className="column-second__author author">
                <div className="author__body">
                    <div className="author__img">
                        <img src={authorImg} alt="" />
                    </div>
                    <div className="author__title">Monica Larson</div>
                    <div className="author__text">
                        Proin a nibh vel velit ucto quet. Aenean solli tudin,
                        lorem qs bibed auctor, nisi elit consequai
                    </div>
                    <ul className="author__list">
                        <li className="author__item">
                            <a
                                href="https://twitter.com/QodeInteractive"
                                className="author__link"
                            >
                                <img src={twitterIconBlack} alt="" />
                            </a>
                        </li>
                        <li className="author__item">
                            <a
                                href="https://www.facebook.com/QodeInteractive/"
                                className="author__link"
                            >
                                <img src={facebookIconBlack} alt="" />
                            </a>
                        </li>
                        <li className="author__item">
                            <a
                                href="https://www.instagram.com/qodeinteractive/"
                                className="author__link"
                            >
                                <img src={instagramIconBlack} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="column-second__latestPosts latestPosts">
                <div className="latestPosts__title">Read Latest Posts</div>
                <div className="latestPosts__body">
                    <div className="latestPosts__block">
                        <div className="latestPosts__img">
                            <a href="/">
                                <img src={latestPostImg1} alt="" />
                            </a>
                        </div>
                        <div className="latestPosts__inf">
                            <div className="latestPosts__titleBlock">
                                <a href="/">Active and Passive Voice</a>
                            </div>
                            <div className="latestPosts__date">
                                <p>20 FEBRUARY, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="latestPosts__block">
                        <div className="latestPosts__img">
                            <a href="/">
                                <img src={latestPostImg2} alt="" />
                            </a>
                        </div>
                        <div className="latestPosts__inf">
                            <div className="latestPosts__titleBlock">
                                <a href="/">23 Ways to Improve Your Draft</a>
                            </div>
                            <div className="latestPosts__date">
                                <p>20 FEBRUARY, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="latestPosts__block">
                        <div className="latestPosts__img">
                            <a href="/">
                                <img src={latestPostImg3} alt="" />
                            </a>
                        </div>
                        <div className="latestPosts__inf">
                            <div className="latestPosts__titleBlock">
                                <a href="/">
                                    Advice for Writing Personal Statements
                                </a>
                            </div>
                            <div className="latestPosts__date">
                                <p>20 FEBRUARY, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="latestPosts__block">
                        <div className="latestPosts__img">
                            <a href="/">
                                <img src={latestPostImg4} alt="" />
                            </a>
                        </div>
                        <div className="latestPosts__inf">
                            <div className="latestPosts__titleBlock">
                                <a href="/">
                                    Good writing is like a windowpane.
                                </a>
                            </div>
                            <div className="latestPosts__date">
                                <p>20 FEBRUARY, 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column-second__categories categories">
                <div className="categories__title">Categories</div>
                <ul className="categories__list">
                    <li className="categories__item">
                        <a href="/" className="categories__link">
                            ART
                        </a>
                    </li>
                    <li className="categories__item">
                        <a href="/" className="categories__link">
                            BOOKS
                        </a>
                    </li>
                    <li className="categories__item">
                        <a href="/" className="categories__link">
                            CREATION
                        </a>
                    </li>
                    <li className="categories__item">
                        <a href="/" className="categories__link">
                            KNOWLEDGE
                        </a>
                    </li>
                    <li className="categories__item">
                        <a href="/" className="categories__link">
                            RECOMMENDATIONS
                        </a>
                    </li>
                    <li className="categories__item">
                        <a href="/" className="categories__link">
                            WISDOM
                        </a>
                    </li>
                    <li className="categories__item">
                        <a href="/" className="categories__link">
                            WRITING
                        </a>
                    </li>
                </ul>
            </div>
            <div className="column-second__tags tags">
                <div className="tags__title">Tags</div>
                <ul className="tags__list">
                    <li className="tags__item">
                        <a href="/" className="tags__link">
                            ADVICE,
                        </a>
                    </li>
                    <li className="tags__item">
                        <a href="/" className="tags__link">
                            ART,
                        </a>
                    </li>
                    <li className="tags__item">
                        <a href="/" className="tags__link">
                            BOOKS,
                        </a>
                    </li>
                    <li className="tags__item">
                        <a href="/" className="tags__link">
                            INSPO,
                        </a>
                    </li>
                    <li className="tags__item">
                        <a href="/" className="tags__link">
                            LISTS,
                        </a>
                    </li>
                    <li className="tags__item">
                        <a href="/" className="tags__link">
                            NEW,
                        </a>
                    </li>
                    <li className="tags__item">
                        <a href="/" className="tags__link">
                            SUGESTIONS,
                        </a>
                    </li>
                    <li className="tags__item">
                        <a href="/" className="tags__link">
                            WRITING
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ColumnSecondSideBar
