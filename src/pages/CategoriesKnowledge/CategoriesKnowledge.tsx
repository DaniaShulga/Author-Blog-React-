import ColumnSecondSideBar from 'components/ColumnSecondSideBar/ColumnSecondSideBar'
import Logo from 'components/Logo/Logo'
import articlesArray from 'utils/articlesArray'
import CategoriesKnowledgeItem from './CategoriesKnowledgeItem'

type Props = {}
const CategoriesKnowledge = (props: Props) => {
    return (
        <>
            <Logo />
            <div className="page__posts posts">
                <div className="posts__container container">
                    <h2 className="posts__titleKnowledge">
                        <p>
                            Category: <span>Knowledge</span>
                        </p>
                    </h2>
                    <div className="posts__bodyCategories">
                        <div className="posts__column-first column-first">
                            <div className="column-first__articles">
                                {articlesArray
                                    .filter(
                                        (item) => item.category === 'knowledge'
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
                                            <CategoriesKnowledgeItem
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
export default CategoriesKnowledge
