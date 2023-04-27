import ColumnSecondSideBar from 'components/ColumnSecondSideBar/ColumnSecondSideBar'
import Logo from 'components/Logo/Logo'
import articlesArray from 'utils/articlesArray'
import CategoriesWritingItem from './CategoriesWritingItem'

type Props = {}
const CategoriesWriting = (props: Props) => {
    return (
        <>
            <Logo />
            <div className="page__posts posts">
                <div className="posts__container container">
                    <h2 className="posts__titleWriting">
                        <p>
                            Category: <span>Writing</span>
                        </p>
                    </h2>
                    <div className="posts__bodyCategories">
                        <div className="posts__column-first column-first">
                            <div className="column-first__articles">
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
                            </div>
                        </div>

                        <ColumnSecondSideBar />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoriesWriting
