type Props = {}
const AsideCategoriesBlock = (props: Props) => {
    return (
        <div className="categories_block">
            <div className="categories_title">
                <p>Categories</p>
            </div>

            <ul className="categories_list">
                <li>
                    <a href="./Header.tsx">art</a>
                </li>
                <li>
                    <a href="./Header.tsx">books</a>
                </li>
                <li>
                    <a href="./Header.tsx">creation</a>
                </li>
                <li>
                    <a href="./Header.tsx">knowledge</a>
                </li>
                <li>
                    <a href="./Header.tsx">recommendations</a>
                </li>
                <li>
                    <a href="./Header.tsx">wisdom</a>
                </li>
                <li>
                    <a href="./Header.tsx">writing</a>
                </li>
            </ul>
        </div>
    )
}
export default AsideCategoriesBlock
