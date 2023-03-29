import './Articles.scss'
import './Reset.scss'
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

    return (
        <li>
            <div className="article_img">
                <img src={image} alt="images" />
            </div>
            <div className="article_text_inner">
                <a href="component/Main/Main.tsx">{title}</a>
                <p className="article_text_1">{description}</p>
                <div className="category_block">
                    <div className="category_block_link">
                        <a href="/" className="category_link">
                            {category}
                        </a>
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
export default ArticlesItem
