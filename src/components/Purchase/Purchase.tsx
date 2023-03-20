import './Purchase.scss'

type Props = {}
const Purchase = (props: Props) => {
    return (
        <div className="purchases">
            <div className="container">
                <p className="purchases_title">Purchase a book</p>

                <ul className="purchases_items">
                    <li>
                        <img src="/images/product-img-1.jpg" alt="" />
                        <p className="book_title">
                            <a href="./Purchase.tsx">To Run Away</a>
                        </p>
                        <p className="book_price">$55.00</p>
                    </li>
                    <li>
                        <img src="/images/product-img-2.jpg" alt="" />
                        <p className="book_title">
                            <a href="./Purchase.tsx">Moody Nights</a>
                        </p>
                        <p className="book_price">$65.00</p>
                    </li>
                    <li>
                        <img src="/images/product-img-3.jpg" alt="" />
                        <p className="book_title">
                            <a href="./Purchase.tsx">Scratch the surface</a>
                        </p>
                        <p className="book_price">$70.00</p>
                    </li>
                    <li>
                        <img src="/images/product-img-4.jpg" alt="" />
                        <p className="book_title">
                            <a href="./Purchase.tsx">Love and others</a>
                        </p>
                        <p className="book_price">$60.00</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Purchase
