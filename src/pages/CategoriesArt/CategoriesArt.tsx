import Aside from 'components/Aside/Aside'
import Logo from 'components/Logo/Logo'
import articlesArray from 'utils/articlesArray'
import CategoriesArtItem from './CategoriesArtItem'

type Props = {}
const CategoriesArt = (props: Props) => {
    return (
        <>
            <Logo />
            <div className="articles_block">
                <div className="container">
                    <div className="row">
                        <div className="article_column_1">
                            <h2
                                style={{
                                    fontFamily: 'Open Sans',
                                    marginBottom: '27px',
                                    fontSize: '26px',
                                    fontWeight: '700',
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: '100',
                                        marginRight: '5px',
                                    }}
                                >
                                    Category:
                                </span>
                                Art
                            </h2>
                            <ul className="article_items">
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
                                            <CategoriesArtItem
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
export default CategoriesArt
