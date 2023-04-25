import './ColumnFirstArticles.scss'
import infoArrowRight from 'assets/info-arrow-right.svg'
import Articles from 'components/Articles/Articles'
import BooksHome from 'components/BooksHome/BooksHome'

type Props = {}
const ColumnFirstArticles = (props: Props) => {
    return (
        <div className="posts__column-first column-first">
            <div className="column-first__articles">
                <Articles />
            </div>

            <div className="column-first__newsletter newsletter">
                <div className="newsletter__body">
                    <div className="newsletter__text">weekly newsletter</div>

                    <form action="#" className="newsletter__form">
                        <input type="text" placeholder="Enter E-Mail" />
                        <button>
                            <img src={infoArrowRight} alt="" />
                        </button>
                    </form>
                </div>
            </div>

            <BooksHome />
        </div>
    )
}
export default ColumnFirstArticles
