import Aside from 'components/Aside/Aside'
import Logo from 'components/Logo/Logo'
import { useParams } from 'react-router-dom'
import articlesArray, { Props, getArticlesObject } from 'utils/articlesArray'
import CommentsImg from 'assets/comment_img.png'
import './BlogPage.scss'
import { useState } from 'react'
import arrReviews, { Review } from 'utils/arrReviews'

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

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        eMail: '',
        website: '',
        comment: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            eMail: e.target.value,
        }))
    }

    const handleWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            website: e.target.value,
        }))
    }

    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            comment: e.target.value,
        }))
    }

    const onSend = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (
            newReview.name === '' ||
            newReview.eMail === '' ||
            newReview.website === '' ||
            newReview.comment === ''
        ) {
            alert('All fields are required!')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                eMail: '',
                website: '',
                comment: '',
            })
        }
    }

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

                                {reviews.map(
                                    (
                                        { name, eMail, website, comment },
                                        idx
                                    ) => (
                                        <div className="comments" key={idx}>
                                            <div className="comments_img">
                                                <img src={CommentsImg} alt="" />
                                            </div>
                                            <div className="comments_inf">
                                                <p className="comments_user">
                                                    {name}
                                                </p>
                                                <p className="comments_data">
                                                    {eMail} | {website}
                                                </p>
                                                <p className="comments_text">
                                                    {comment}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <form className="comment_write" onSubmit={onSend}>
                                <label>Post A Comment</label>
                                <textarea
                                    placeholder="Write your comments here..."
                                    value={newReview.comment}
                                    onChange={handleComment}
                                ></textarea>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="user_name"
                                    value={newReview.name}
                                    onChange={handleName}
                                />
                                <input
                                    type="email"
                                    placeholder="E-mail address"
                                    className="user_email"
                                    value={newReview.eMail}
                                    onChange={handleEmail}
                                />
                                <input
                                    type="text"
                                    placeholder="Website"
                                    className="user_website"
                                    value={newReview.website}
                                    onChange={handleWebsite}
                                />
                                <label className="comment_checkbox">
                                    <input type="checkbox" />
                                    Save my name, email, and website in this
                                    browser for the next time I comment.
                                </label>
                                <button type="submit">submit</button>
                            </form>
                        </div>
                        <Aside />
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogPage
