import Aside from 'components/Aside/Aside'
import Logo from 'components/Logo/Logo'
import { useParams } from 'react-router-dom'
import articlesArray, { Props, getArticlesObject } from 'utils/articlesArray'
import CommentsImg from 'assets/comment_img.png'
import './BlogPage.scss'

type Prop = {
    articlesObject?: {
        [id: number]: Props
    }
}
const BlogPage = ({
    articlesObject = getArticlesObject(articlesArray),
}: Prop) => {
    const { id } = useParams()

    const article = articlesObject[parseInt(id!)]
    console.log(article)

    return (
        <>
            <Logo />
            <div className="articles_block">
                <div className="container">
                    <div className="row">
                        <div className="article_column_1">
                            <div className="article_image">
                                <img src={article.image} alt="" />
                            </div>
                            <div className="article_title">
                                <p>{article.title}</p>
                            </div>
                            <div className="article_date">
                                <p>{article.date}</p>
                            </div>

                            <p className="article_text_1">
                                {article.articleText1}
                            </p>

                            <p className="article_text_2">
                                {article.articleText2}
                            </p>

                            <p className="article_text_3">
                                {article.articleText1}
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
                                <label>
                                    <input type="checkbox" />
                                    Save my name, email, and website in this
                                    browser for the next time I comment.
                                </label>
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
export default BlogPage
