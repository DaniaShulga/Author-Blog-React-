import articlesArray, { getArticlesObject } from 'utils/articlesArray'
import './BlogPage.scss'
// import { useParams } from 'react-router-dom'

type Props = {
    articlesObject?: {
        [id: number]: Props
    }
}
const BlogPage = ({
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    // const { id } = useParams()

    // const article = articlesObject[parseInt(id!)]
    return <div>CurrentPage</div>
}
export default BlogPage
