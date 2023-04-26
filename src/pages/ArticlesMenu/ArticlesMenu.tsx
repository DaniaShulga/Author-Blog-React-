import Articles from 'components/Articles/Articles'
import Logo from 'components/Logo/Logo'
import PostsArticles from 'components/PostsArticles/PostsArticles'
import './ArticlesMenu.scss'
import ColumnSecondSideBar from 'components/ColumnSecondSideBar/ColumnSecondSideBar'

type Props = {}
const ArticlesMenu = (props: Props) => {
    return (
        <>
            <Logo />

            <div className="page__posts posts">
                <div className="posts__container container">
                    <div className="posts__bodyArticlesMenu">
                        <div className="posts__column-first column-first">
                            <div className="column-first__articles">
                                <Articles />
                            </div>
                        </div>
                        <ColumnSecondSideBar />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ArticlesMenu
