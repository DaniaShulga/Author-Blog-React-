import articlesArray from 'utils/articlesArray'
import ArticlesItem from './ArticlesItem'

type Props = {}
const Articles = (props: Props) => {
    return (
        <>
            {articlesArray.map(
                ({ id, image, title, description, date, category }) => (
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
        </>
    )
}
export default Articles
