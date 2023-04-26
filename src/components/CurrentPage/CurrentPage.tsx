import { useState } from 'react'
import arrReviews, { Review } from 'utils/arrReviews'
import commentsImg from 'assets/comments-img.png'
import { useParams } from 'react-router-dom'
import articlesArray, { Props, getArticlesObject } from 'utils/articlesArray'
import './CurrentPage.scss'

type Prop = {
    articlesObject?: {
        [id: number]: Props
    }
}
const CurrentPage = ({
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
        <div className="posts__column-first column-first">
            <div className="column-first__articles">
                <div className="column-first__image">
                    <img src={article.image} alt="" />
                </div>
                <div className="column-first__content">
                    <div className="column-first__titleBlog">
                        <p>{article.title}</p>
                    </div>
                    <div className="column-first__postedAt">
                        <p>{article.articleDate}</p>
                    </div>
                    <div className="column-first__text">
                        <p>{article.articleText1}</p>
                        <p>{article.articleText2}</p>
                        <p>{article.articleText1}</p>
                    </div>
                    <div className="column-first__commentsBlock">
                        <div className="column-first__commentsCount">
                            <h5>Comments</h5>
                        </div>

                        {reviews.map(
                            ({ name, eMail, website, comment }, idx) => (
                                <div
                                    className="column-first__comments"
                                    key={idx}
                                >
                                    <div className="column-first__commentsImg">
                                        <img src={commentsImg} alt="" />
                                    </div>
                                    <div className="column-first__commentsInf">
                                        <div className="column-first__user">
                                            <h5>{name}</h5>
                                        </div>
                                        <div className="column-first__data">
                                            <p>
                                                POSTED AT 09:45H | {eMail} |{' '}
                                                {website}
                                            </p>
                                        </div>
                                        <div className="column-first__text">
                                            <p>{comment}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}

                        <form
                            className="column-first__commentWrite"
                            onSubmit={onSend}
                        >
                            <label className="column-first__label">
                                Post A Comment
                            </label>
                            <textarea
                                placeholder="Write your comments here..."
                                className="column-first__textarea"
                                cols={45}
                                rows={8}
                                value={newReview.comment}
                                onChange={handleComment}
                            ></textarea>

                            <div className="column-first__inputs">
                                <input
                                    type="text"
                                    className="column-first__name"
                                    placeholder="Your full name"
                                    value={newReview.name}
                                    onChange={handleName}
                                />
                                <input
                                    type="text"
                                    className="column-first__email"
                                    placeholder="E-mail address"
                                    value={newReview.eMail}
                                    onChange={handleEmail}
                                />
                                <input
                                    type="text"
                                    className="column-first__website"
                                    placeholder="Website"
                                    value={newReview.website}
                                    onChange={handleWebsite}
                                />
                            </div>

                            <label className="column-first__commentCheckbox">
                                <input type="checkbox" />
                                Save my name, email, and website in this browser
                                for the next time I comment.
                            </label>
                            <div className="column-first__btn">
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CurrentPage
