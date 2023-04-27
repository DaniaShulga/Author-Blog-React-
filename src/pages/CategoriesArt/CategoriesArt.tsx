import ColumnSecondSideBar from 'components/ColumnSecondSideBar/ColumnSecondSideBar'
import Logo from 'components/Logo/Logo'
import CategoriesNameItem from './CategoriesArtItem'
import articlesArray from 'utils/articlesArray'

type Props = {}
const CategoriesArt = (props: Props) => {
    return (
        <>
            <Logo />
            <div className="page__posts posts">
                <div className="posts__container container">
                    <h2 className="posts__titleArt">
                        <p>
                            Category: <span>Art</span>
                        </p>
                    </h2>
                    <div className="posts__bodyCategories">
                        <div className="posts__column-first column-first">
                            <div className="column-first__articles">
                                {articlesArray
                                    .filter((item) => item.category === 'art')
                                    .map(
                                        ({
                                            id,
                                            image,
                                            title,
                                            description,
                                            date,
                                            category,
                                        }) => (
                                            <CategoriesNameItem
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
export default CategoriesArt
