import { Link } from 'react-router-dom'
import LikeIconEmpty from 'assets/like_icon.svg'
import LikeIconFull from 'assets/like_icon_black.svg'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'

type Prop = {
    title: string
    description: string
    date: string
    image: string
    category: string
    id: number
}
const CategoriesWritingItem = ({
    title,
    id,
    description,
    date,
    image,
    category,
}: Prop) => {
    const isLiked = useAppSelector((state) => state.productsLike[id])
    const dispatch = useAppDispatch()

    return (
        <div className="column-first__blog">
            <div className="column-first__img">
                <Link to={`/blog/${id}`}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <div className="column-first__body">
                <div className="column-first__title">
                    <Link to={`/blog/${id}`}>
                        <h2>{title}</h2>
                    </Link>
                </div>
                <div className="column-first__textArticles">{description}</div>
                <div className="column-first__categoryAndLike">
                    <div className="column-first__category">
                        <p>{category}</p>
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
export default CategoriesWritingItem
