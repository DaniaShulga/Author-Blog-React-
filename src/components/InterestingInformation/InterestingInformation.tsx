import interesting_information_img_1 from 'assets/interesting_information_img_1.jpg'
import interesting_information_img_2 from 'assets/interesting_information_img_2.jpg'
import './InterestingInformation.scss'
import './Reset.scss'

type Props = {}
const InterestingInformation = (props: Props) => {
    return (
        <div className="interesting_information">
            <div className="interesting_information_block_1">
                <div className="interesting_information_img">
                    <img
                        src={interesting_information_img_1}
                        alt="interesting information img 1"
                    />
                </div>

                <div className="interesting_information_text_and_btn">
                    <div className="interesting_information_text">
                        <h3>latest articles</h3>
                    </div>

                    <div className="interesting_information_btn">
                        <p className="inf_btn">view more</p>
                    </div>
                </div>
            </div>

            <div
                className="interesting_information_block_2"
                style={{
                    backgroundImage:
                        'url(/images/interesting_information_img_3.jpg)',
                }}
            >
                <div className="interesting_information_border">
                    <div className="interesting_information_text">
                        <h3>Published Books</h3>
                    </div>
                </div>
            </div>

            <div className="interesting_information_block_3">
                <div className="interesting_information_img">
                    <img
                        src={interesting_information_img_2}
                        alt="interesting information img 2"
                    />
                </div>

                <div className="interesting_information_text_and_btn">
                    <div className="interesting_information_text">
                        <h3>about author</h3>
                    </div>

                    <div className="interesting_information_btn">
                        <p className="inf_btn">read more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InterestingInformation
