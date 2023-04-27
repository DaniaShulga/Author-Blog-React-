import ColumnSecondSideBar from 'components/ColumnSecondSideBar/ColumnSecondSideBar'
import Logo from 'components/Logo/Logo'
import articlesArray from 'utils/articlesArray'
import CategoriesBooksItem from './CategoriesBooksItem'

type Props = {}
const CategoriesBooks = (props: Props) => {
    return (
        <>
            <Logo />
            <div className="page__posts posts">
                <div className="posts__container container">
                    <h2 className="posts__titleBooks">
                        <p>
                            Category: <span>Books</span>
                        </p>
                    </h2>
                    <div className="posts__bodyCategories">
                        <div className="posts__column-first column-first">
                            <div className="column-first__articles">
                                {articlesArray
                                    .filter((item) => item.category === 'books')
                                    .map(
                                        ({
                                            id,
                                            image,
                                            title,
                                            description,
                                            date,
                                            category,
                                        }) => (
                                            <CategoriesBooksItem
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
                            </div>
                        </div>

                        <ColumnSecondSideBar />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoriesBooks
