import ColumnFirstArticles from 'components/ColumnFirstArticles/ColumnFirstArticles'
import './Posts.scss'
import ColumnSecondSideBar from 'components/ColumnSecondSideBar/ColumnSecondSideBar'

type Props = {}
const Posts = (props: Props) => {
    return (
        <div className="page__posts posts">
            <div className="posts__container container">
                <div className="posts__body">
                    <ColumnFirstArticles />
                    <ColumnSecondSideBar />
                </div>
            </div>
        </div>
    )
}
export default Posts
