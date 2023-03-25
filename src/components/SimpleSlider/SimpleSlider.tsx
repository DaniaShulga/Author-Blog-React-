import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './SimpleSlider.scss'

type Props = {}
const SimpleSlider = (props: Props) => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        // autoplay: true,
        // autoplaySpeed: 3000,
    }
    return (
        <Slider {...settings}>
            <div className="slider_bg_1">
                <div className="slider_items">
                    <p>new in stores</p>
                    <p>
                        New book: <br /> Running away
                    </p>
                    <div className="slider_buttons">
                        <div className="slider_button_1">
                            <p>purchase</p>
                        </div>
                        <div className="slider_button_2">
                            <p>explore</p>
                        </div>
                    </div>
                </div>

                <div className="slider_img">
                    <img src="/images/slider-book1.png" alt="" />
                </div>
            </div>

            <div
                className="slider_bg_2"
                style={{
                    backgroundImage: 'url(/images/slider-img-2.jpg)',
                }}
            >
                <div className="slider_items">
                    <p>new in stores</p>
                    <p>
                        New book: <br /> Story of a girl
                    </p>
                    <div className="slider_buttons">
                        <div className="slider_button_1">
                            <p>purchase</p>
                        </div>
                        <div className="slider_button_2">
                            <p>explore</p>
                        </div>
                    </div>
                </div>

                <div className="slider_img">
                    <img src="/images/slider-book2.png" alt="" />
                </div>
            </div>
            <div
                className="slider_bg_3"
                style={{
                    backgroundImage: 'url(/images/slider-img-3.jpg)',
                }}
            >
                <div className="slider_items">
                    <p>new in stores</p>
                    <p>
                        New book: <br /> Moody Nights
                    </p>
                    <div className="slider_buttons">
                        <div className="slider_button_1">
                            <p>purchase</p>
                        </div>
                        <div className="slider_button_2">
                            <p>explore</p>
                        </div>
                    </div>
                </div>

                <div className="slider_img">
                    <img src="/images/slider-book3.png" alt="" />
                </div>
            </div>
        </Slider>
    )
}
export default SimpleSlider
