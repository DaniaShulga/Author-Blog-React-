import book1 from 'assets/book1.jpg'
import book2 from 'assets/book2.jpg'
import book3 from 'assets/book3.jpg'
import book4 from 'assets/book4.jpg'
import './BooksHome.scss'

type Props = {}
const BooksHome = (props: Props) => {
    return (
        <div className="column-first__books books">
            <div className="books__title">Purchase a book</div>
            <div className="books__body">
                <div className="books__columnHome">
                    <div className="books__img">
                        <a href="/">
                            <img src={book1} alt="" />
                        </a>
                    </div>
                    <div className="books__name">
                        <a href="/">To Run Away</a>
                    </div>
                    <div className="books__price">$55.00</div>
                </div>
                <div className="books__columnHome">
                    <div className="books__img">
                        <a href="/">
                            <img src={book2} alt="" />
                        </a>
                    </div>
                    <div className="books__name">
                        <a href="/">Moody Nights</a>
                    </div>
                    <div className="books__price">$65.00</div>
                </div>
                <div className="books__columnHome">
                    <div className="books__img">
                        <a href="/">
                            <img src={book3} alt="" />
                        </a>
                    </div>
                    <div className="books__name">
                        <a href="/">Scratch the surface</a>
                    </div>
                    <div className="books__price">$70.00</div>
                </div>
                <div className="books__columnHome">
                    <div className="books__img">
                        <a href="/">
                            <img src={book4} alt="" />
                        </a>
                    </div>
                    <div className="books__name">
                        <a href="/">Love and others</a>
                    </div>
                    <div className="books__price">$60.00</div>
                </div>
            </div>
        </div>
    )
}
export default BooksHome
