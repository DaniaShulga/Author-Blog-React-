import Logo from 'components/Logo/Logo'
import ColumnSecondSideBar from 'components/ColumnSecondSideBar/ColumnSecondSideBar'
import CurrentPage from 'components/CurrentPage/CurrentPage'

type Prop = {}
const BlogPage = (prop: Prop) => {
    return (
        <>
            <Logo />
            <div className="page__posts posts">
                <div className="posts__container container">
                    <div className="posts__bodyBlogPage">
                        <CurrentPage />

                        <ColumnSecondSideBar />
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogPage
