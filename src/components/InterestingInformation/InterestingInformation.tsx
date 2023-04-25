import info1 from 'assets/info-1.jpg'
import info3 from 'assets/info-3.jpg'
import infoArrow from 'assets/info-arrow-right.svg'
import './InterestingInformation.scss'

type Props = {}
const InterestingInformation = (props: Props) => {
    return (
        <div className="page__info info">
            <div className="info__container container">
                <div className="info__body">
                    <div className="info__column">
                        <div className="info__item item-info">
                            <div className="item-info__icon">
                                <img src={info1} alt="latest articles" />
                            </div>
                            <div className="item-info__body">
                                <h2 className="item-info__title">
                                    latest articles
                                </h2>
                                <div className="item-info__link">
                                    <a href="/">view more</a>
                                    <img src={infoArrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info__column">
                        <div className="info__item item-info">
                            <div className="item-info__body">
                                <h2 className="item-info__title">
                                    Published Books
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="info__column">
                        <div className="info__item item-info">
                            <div className="item-info__icon">
                                <img src={info3} alt="latest articles" />
                            </div>
                            <div className="item-info__body">
                                <h2 className="item-info__title">
                                    about author
                                </h2>
                                <div className="item-info__link">
                                    <a href="/">read more</a>
                                    <img src={infoArrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InterestingInformation
