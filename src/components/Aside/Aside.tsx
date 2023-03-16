import './Aside.scss'
import AsideAuthorBlog from './AsideAuthorBlog'
import AsideCategoriesBlock from './AsideCategoriesBlock'
import AsidePosts from './AsidePosts'
import AsideSearchForm from './AsideSearchForm'
import AsideTagsBlock from './AsideTagsBlock'

type Props = {}
const Aside = (props: Props) => {
    return (
        <div className="article_column_2">
            <AsideSearchForm />
            <AsideAuthorBlog />
            <AsidePosts />
            <AsideCategoriesBlock />
            <AsideTagsBlock />
        </div>
    )
}
export default Aside
