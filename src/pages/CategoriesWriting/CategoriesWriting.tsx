import Aside from 'components/Aside/Aside'
import Logo from 'components/Logo/Logo'
import articlesArray from 'utils/articlesArray'
import CategoriesWritingItem from './CategoriesWritingItem'

type Props = {}
const CategoriesWriting = (props: Props) => {
    return (
        <>
            <Logo />
            <div className="articles_block">
                <div className="container">
                    <div className="row">
                        <div className="article_column_1">
                            <ul className="article_items">
                                {articlesArray
                                    .filter(
                                        (item) => item.category === 'writing'
                                    )
                                    .map(
                                        ({
                                            id,
                                            image,
                                            title,
                                            description,
                                            date,
                                            category,
                                        }) => (
                                            <CategoriesWritingItem
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
export default CategoriesWriting
