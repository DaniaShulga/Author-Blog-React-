import LikeIconEmpty from 'assets/like_icon.svg'
import LikeIconFull from 'assets/like_icon_black.svg'
import { Link } from 'react-router-dom'
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
const CategoriesKnowledgeItem = ({
    title,
    description,
    date,
    image,
    category,
    id,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLike[id])
    const dispatch = useAppDispatch()
    return (
        <li>
            <div className="article_img">
                <Link to={`/blog/${id}`}>
                    <img src={image} alt="images" />
                </Link>
            </div>
            <div className="article_text_inner">
                <Link to={`/blog/${id}`}>{title}</Link>

                <p className="article_text_1">{description}</p>
                <div className="category_block">
                    <div
                        className="category_block_link"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#656565',
                            fontFamily: 'Merriweather',
                            fontSize: '18px',
                            cursor: 'pointer',
                        }}
                    >
                        {category}
                    </div>

                    <div
                        className="like_block"
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
                <p className="article_text_2">{date} </p>
            </div>
        </li>
    )
}
export default CategoriesKnowledgeItem
