import './Articles.scss'
import './Reset.scss'

type Props = {
    title: string
    description: string
    date: string
    image: string
}

const ArticlesItem = ({ title, description, date, image }: Props) => {
    return (
        <li>
            <div className="article_img">
                <img src={image} alt="images" />
            </div>

            <div className="article_text_inner">
                <a href="">{title}</a>

                <p className="article_text_1">{description}</p>
                <p className="article_text_2">{date} </p>
            </div>
        </li>
    )
}
export default ArticlesItem
