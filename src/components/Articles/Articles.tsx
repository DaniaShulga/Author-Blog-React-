import ArticlesItem from './ArticlesItem'
import articlesArray from 'utils/articlesArray'
import Aside from 'components/Aside/Aside'

type Props = {}
const Articles = (props: Props) => {
    return (
        <>
            <div className="articles_block">
                <div className="container">
                    <div className="row">
                        <div className="article_column_1">
                            <ul className="article_items">
                                {articlesArray.map(
                                    ({
                                        id,
                                        image,
                                        title,
                                        description,
                                        date,
                                        category,
                                    }) => (
                                        <ArticlesItem
                                            key={id}
                                            image={image}
                                            title={title}
                                            description={description}
                                            date={date}
                                            category={category}
                                            id={id}
                                        />
                                    )
                                )}
                            </ul>
                        </div>
                        <Aside />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Articles
