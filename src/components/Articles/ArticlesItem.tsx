import { Link } from 'react-router-dom'

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
                <div className="column-first__date">{date}</div>
            </div>
        </div>
    )
}
export default ArticlesItem
