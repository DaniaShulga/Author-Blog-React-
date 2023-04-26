import Logo from 'components/Logo/Logo'
import FavouritesItem from './FavouritesItem'
import articlesArray from 'utils/articlesArray'
import ColumnSecondSideBar from 'components/ColumnSecondSideBar/ColumnSecondSideBar'

type Props = {}
const Favourites = (props: Props) => {
    return (
        <>
            <Logo />
            <div className="page__posts posts">
                <div className="posts__container container">
                    <div className="posts__bodyFavourites">
                        <div className="posts__column-first column-first">
                            <div className="column-first__articles">
                                {articlesArray.map(
                                    ({
                                        id,
                                        image,
                                        title,
                                        description,
                                        date,
                                        category,
                                    }) => (
                                        <FavouritesItem
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
export default Favourites
