import './ColumnFirstArticles.scss'
import blogImg1 from 'assets/blog-img-1.jpg'
import blogImg2 from 'assets/blog-img-2.jpg'
import blogImg3 from 'assets/blog-img-3.jpg'
import blogImg4 from 'assets/blog-img-4.jpg'
import blogImg5 from 'assets/blog-img-5.jpg'
import blogImg6 from 'assets/blog-img-6.jpg'
import blogImg7 from 'assets/blog-img-7.jpg'
import blogImg8 from 'assets/blog-img-8.jpg'
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
