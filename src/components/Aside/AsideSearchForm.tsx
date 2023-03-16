type Props = {}
const AsideSearchForm = (props: Props) => {
    return (
        <form className="search_form">
            <input
                type="text"
                placeholder="Search Here"
                className="search_line"
            />
            <button type="submit" className="search_button">
                <img src="/images/search_button.svg" alt="search button" />
            </button>
        </form>
    )
}
export default AsideSearchForm
