import './PublishedBooks.scss'

type Props = {}
const PublishedBooks = (props: Props) => {
    return (
        <div className="purchases_wrapper">
            <div className="container">
                <p className="purchases_par">Published Books</p>

                <ul className="purchases_block">
                    <li>
                        <img src="/images/product-img-1.jpg" alt="" />
                        <p className="book_title">
                            <a href="">To Run Away</a>
                        </p>
                        <p className="book_price">$55.00</p>
                    </li>
                    <li>
                        <img src="/images/product-img-2.jpg" alt="" />
                        <p className="book_title">
                            <a href="">Moody Nights</a>
                        </p>
                        <p className="book_price">$65.00</p>
                    </li>
                    <li>
                        <img src="/images/product-img-3.jpg" alt="" />
                        <p className="book_title">
                            <a href="">Scratch the surface</a>
                        </p>
                        <p className="book_price">$70.00</p>
                    </li>
                    <li>
                        <img src="/images/product-img-4.jpg" alt="" />
                        <p className="book_title">
                            <a href="">Love and others</a>
                        </p>
                        <p className="book_price">$60.00</p>
                    </li>
                    <li>
                        <img src="/images/product-img-5.jpg" alt="" />
                        <p className="book_title">
                            <a href="">Net of Lies</a>
                        </p>
                        <p className="book_price">$75.00</p>
                    </li>
                    <li>
                        <img src="/images/product-img-6.jpg" alt="" />
                        <p className="book_title">
                            <a href="">Story of a Girl</a>
                        </p>
                        <p className="book_price">$45.00</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default PublishedBooks
