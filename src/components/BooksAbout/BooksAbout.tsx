import book1 from 'assets/book1.jpg'
import book2 from 'assets/book2.jpg'
import book3 from 'assets/book3.jpg'
import book4 from 'assets/book4.jpg'
import book5 from 'assets/book5.jpg'
import book6 from 'assets/book6.jpg'
import './BooksAbout.scss'

type Props = {}
const BooksAbout = (props: Props) => {
    return (
        <div className="page__books books">
            <div className="books__container container">
                <div className="books__titleAbout title">Purchase a book</div>
                <div className="books__bodyAbout">
                    <div className="books__column">
                        <div className="books__imgAbout">
                            <a href="">
                                <img src={book1} alt="" />
                            </a>
                        </div>
                        <div className="books__nameAbout">
                            <a href="">To Run Away</a>
                        </div>
                        <div className="books__priceAbout">$55.00</div>
                    </div>
                    <div className="books__column">
                        <div className="books__img">
                            <a href="">
                                <img src={book2} alt="" />
                            </a>
                        </div>
                        <div className="books__name">
                            <a href="#">Moody Nights</a>
                        </div>
                        <div className="books__price">$65.00</div>
                    </div>
                    <div className="books__column">
                        <div className="books__img">
                            <a href="">
                                <img src={book3} alt="" />
                            </a>
                        </div>
                        <div className="books__name">
                            <a href="#">Scratch the surface</a>
                        </div>
                        <div className="books__price">$70.00</div>
                    </div>
                    <div className="books__column">
                        <div className="books__img">
                            <a href="">
                                <img src={book4} alt="" />
                            </a>
                        </div>
                        <div className="books__name">
                            <a href="#">Love and others</a>
                        </div>
                        <div className="books__price">$60.00</div>
                    </div>
                    <div className="books__column">
                        <div className="books__img">
                            <a href="">
                                <img src={book5} alt="" />
                            </a>
                        </div>
                        <div className="books__name">
                            <a href="#">Net of Lies</a>
                        </div>
                        <div className="books__price">$75.00</div>
                    </div>
                    <div className="books__column">
                        <div className="books__img">
                            <a href="">
                                <img src={book6} alt="" />
                            </a>
                        </div>
                        <div className="books__name">
                            <a href="#">Story of a Girl</a>
                        </div>
                        <div className="books__price">$45.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BooksAbout
