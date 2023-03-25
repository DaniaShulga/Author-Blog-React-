type Props = {
    title: string
    description: string
    date: string
    image: string
    category: string
}
const CategoriesKnowledgeItem = ({
    title,
    description,
    date,
    image,
    category,
}: Props) => {
    return (
        <li>
            <div className="article_img">
                <img src={image} alt="images" />
            </div>
            <div className="article_text_inner">
                <a href="component/Main/Main.tsx">{title}</a>
                <p className="article_text_1">{description}</p>
                <div className="category_block">
                    <a href="/" className="category_link">
                        {category}
                    </a>
                </div>
                <p className="article_text_2">{date} </p>
            </div>
        </li>
    )
}
export default CategoriesKnowledgeItem
