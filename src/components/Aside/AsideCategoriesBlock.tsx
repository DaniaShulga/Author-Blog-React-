import AsideItem from './AsideItem'

type Props = {}
const AsideCategoriesBlock = (props: Props) => {
    return (
        <div className="categories_block">
            <div className="categories_title">
                <p>Categories</p>
            </div>

            <ul className="categories_list">
                <li>
                    <AsideItem to="/art">art</AsideItem>
                </li>
                <li>
                    <AsideItem to="/books">books</AsideItem>
                </li>
                <li>
                    <AsideItem to="/writing">writing</AsideItem>
                </li>
            </ul>
        </div>
    )
}
export default AsideCategoriesBlock
