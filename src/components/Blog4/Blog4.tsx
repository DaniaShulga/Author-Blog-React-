import Logo from 'components/Logo/Logo'
import ArticleImg from 'assets/blog-img-4.jpg'
import CommentsImg from 'assets/comment_img.png'
import Aside from 'components/Aside/Aside'

type Props = {}
const Blog4 = (props: Props) => {
    return (
        <>
            <Logo />
            <div className="articles_block">
                <div className="container">
                    <div className="row">
                        <div className="article_column_1">
                            <div className="article_image">
                                <img src={ArticleImg} alt="" />
                            </div>
                            <div className="article_title">
                                <p>
                                    Commas, Semicolons, and Colons <br /> in
                                    Writing
                                </p>
                            </div>
                            <div className="article_date">
                                <p>POSTED AT 11:30H</p>
                            </div>

                            <p className="article_text_1">
                                Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor,
                                nisi elit consequat ipsum, nec sagittis sem nibh
                                id elit. Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris. Morbi accumsan ipsum
                                velit. Nam nec tellus a odio tincidunt auctor a
                                ornare odio. Sed non mauris vitae erat consequat
                                auctor eu in elit. Class aptent taciti sociosqu
                                ad litora torquent per conubia nostra, per
                                inceptos himenaeos. Mauris in erat justo. Nullam
                                ac urna eu felis dapibus condimentum sit amet a
                                augue.
                            </p>

                            <p className="article_text_2">
                                Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor,
                                nisi elit consequat ipsum, nec sagittis sem nibh
                                id elit. Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris. Morbi accumsan ipsum
                                velit.
                            </p>

                            <p className="article_text_3">
                                Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor,
                                nisi elit consequat ipsum, nec sagittis sem nibh
                                id elit. Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris. Morbi accumsan ipsum
                                velit. Nam nec tellus a odio tincidunt auctor a
                                ornare odio. Sed non mauris vitae erat consequat
                                auctor eu in elit. Class aptent taciti sociosqu
                                ad litora torquent per conubia nostra, per
                                inceptos himenaeos. Mauris in erat justo. Nullam
                                ac urna eu felis dapibus condimentum sit amet a
                                augue.
                            </p>

                            <div className="comments_block">
                                <div className="comments_count">
                                    <p>1 Comment</p>
                                </div>
                                <div className="comments">
                                    <div className="comments_img">
                                        <img src={CommentsImg} alt="" />
                                    </div>
                                    <div className="comments_inf">
                                        <p className="comments_user">admin</p>
                                        <p className="comments_data">
                                            POSTED AT 09:45H, 28 FEBRUARY
                                        </p>
                                        <p className="comments_text">
                                            Sit ei hendrerit voluptatum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment_write">
                                <label>Post A Comment</label>
                                <textarea placeholder="Write your comments here..."></textarea>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="user_name"
                                />
                                <input
                                    type="email"
                                    placeholder="E-mail address"
                                    className="user_email"
                                />
                                <input
                                    type="text"
                                    placeholder="Website"
                                    className="user_website"
                                />
                                <input type="checkbox" />
                                <span>
                                    Save my name, email, and website in this
                                    browser for the next time I comment.
                                </span>
                                <button>submit</button>
                            </div>
                        </div>
                        <Aside />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog4
