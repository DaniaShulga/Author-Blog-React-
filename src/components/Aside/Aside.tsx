import './Aside.scss'
import AsideAuthorBlog from './AsideAuthorBlog'
import AsideCategoriesBlock from './AsideCategoriesBlock'
import AsidePosts from './AsidePosts'
import AsideSearchForm from './AsideSearchForm'

type Props = {}
const Aside = (props: Props) => {
    return (
        <div className="article_column_2">
            <AsideSearchForm />
            <AsideAuthorBlog />
            <AsidePosts />
            <AsideCategoriesBlock />
        </div>
    )
}
export default Aside
