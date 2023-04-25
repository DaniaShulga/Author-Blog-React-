import ColumnFirstArticles from 'components/ColumnFirstArticles/ColumnFirstArticles'
import './PostsArticles.scss'
import ColumnSecondSideBar from 'components/ColumnSecondSideBar/ColumnSecondSideBar'

type Props = {}
const PostsArticles = (props: Props) => {
    return (
        <div className="page__posts posts">
            <div className="posts__container container">
                <div className="posts__bodyArticles">
                    <ColumnFirstArticles />
                    <ColumnSecondSideBar />
                </div>
            </div>
        </div>
    )
}
export default PostsArticles
