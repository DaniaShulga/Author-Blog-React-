import { Link } from 'react-router-dom'
import LikeIconEmpty from 'assets/like_icon.svg'
import LikeIconFull from 'assets/like_icon_black.svg'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'

type Props = {
    title: string
    description: string
    date: string
    image: string
    category: string
    id: number
}
const ArticlesItem = ({
    title,
    description,
    date,
    image,
    category,
    id,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLike[id])
    const dispatch = useAppDispatch()
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="column-first__blog">
            <div className="column-first__img">
                <Link to={`/blog/${id}`} onClick={scrollTop}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <div className="column-first__body">
                <div className="column-first__title">
                    <Link to={`/blog/${id}`} onClick={scrollTop}>
                        <h2>{title}</h2>
                    </Link>
                </div>
                <div className="column-first__textArticles">{description}</div>
                <div className="column-first__categoryAndLike">
                    <div className="column-first__category">
                        <Link to={`/${category}`} onClick={scrollTop}>
                            {category}
                        </Link>
                    </div>
                    <div
                        className="column-first__likeImg"
                        onClick={() => {
                            dispatch(toggleLike(id))
                        }}
                    >
                        {isLiked ? (
                            <img src={LikeIconFull} alt="" className="like_1" />
                        ) : (
                            <img
                                src={LikeIconEmpty}
                                alt=""
                                className="like_2"
                            />
                        )}
                    </div>
                </div>

                <div className="column-first__date">{date}</div>
            </div>
        </div>
    )
}
export default ArticlesItem
