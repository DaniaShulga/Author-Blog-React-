import './Aside.scss'
import AsideAuthorBlog from './AsideAuthorBlog'
import AsidePosts from './AsidePosts'
import AsideSearchForm from './AsideSearchForm'

type Props = {}
const Aside = (props: Props) => {
    return (
        <div className="article_column_2">
            <AsideSearchForm />
            <AsideAuthorBlog />
            <AsidePosts />
        </div>
    )
}
export default Aside
