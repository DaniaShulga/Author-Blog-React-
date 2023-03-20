import './NewsLetter.scss'
import arrowRight from 'assets/interesting_information_arrow-right.svg'

type Props = {}
const NewsLetter = (props: Props) => {
    return (
        <div className="newsletter">
            <div className="container">
                <div
                    className="newsletter_block"
                    style={{
                        background:
                            'url(./images/newsletter_img.jpg) center center no-repeat',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="newsletter_border">
                        <div className="newsletter_title">
                            <p>weekly newsletter</p>
                        </div>

                        <div className="newsletter_search">
                            <input type="text" placeholder="Enter E-Mail" />
                            <button>
                                <img src={arrowRight} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter
