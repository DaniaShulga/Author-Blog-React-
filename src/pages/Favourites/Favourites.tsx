import Logo from 'components/Logo/Logo'
import './Favourites.scss'
import articlesArray from 'utils/articlesArray'
import FavouritesItems from './FavouritesItems'
import Aside from 'components/Aside/Aside'

type Props = {}
const Favourites = (props: Props) => {
    return (
        <>
            <Logo />
            <h2>Favourites</h2>

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
                                        <FavouritesItems
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
export default Favourites
