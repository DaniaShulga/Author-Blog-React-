import InterestingInformation from 'components/InterestingInformation/InterestingInformation'
import Logo from 'components/Logo/Logo'
import './Home.scss'
import Posts from 'components/Posts/Posts'
import sliderImg1 from 'assets/slider-img-1.jpg'
import sliderImg2 from 'assets/slider-img-2.jpg'
import sliderImg3 from 'assets/slider-img-3.jpg'
import sliderBook1 from 'assets/slider-book1.png'
import sliderBook2 from 'assets/slider-book2.png'
import sliderBook3 from 'assets/slider-book3.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Logo />
            <div className="page__slider slider">
                <div className="slider__container container">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop
                        navigation
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        speed={800}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="slider__swiper"
                    >
                        <SwiperSlide
                            className="slider__swiperSlider"
                            style={{
                                position: 'relative',
                                background: `url(${sliderImg1})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                            }}
                        >
                            <div className="slider__block">
                                <div className="slider__body">
                                    <div className="slider__infText">
                                        new in stores
                                    </div>
                                    <div className="slider__title">
                                        New book: Running away
                                    </div>
                                    <a
                                        href="https://themeforest.net/checkout/94137159/create_account?_ga=2.261336463.346783518.1682679439-1516393312.1682186901&clickid=RbSy4DXEhxyNTBh2gzVZRzWsUkAVV-TH517Gxk0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1306827&mp_value1=&utm_campaign=af_impact_radius_1306827&utm_medium=affiliate&utm_source=impact_radius"
                                        className="slider__btn1"
                                    >
                                        purchase
                                    </a>
                                    <Link to={'/'} className="slider__btn2">
                                        explore
                                    </Link>
                                </div>
                            </div>
                            <div className="slider__book">
                                <img src={sliderBook1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            className="slider__swiperSlider"
                            style={{
                                position: 'relative',
                                background: `url(${sliderImg2})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'top',
                                objectFit: 'cover',
                            }}
                        >
                            <div className="slider__block">
                                <div className="slider__body">
                                    <div className="slider__infText">
                                        new in stores
                                    </div>
                                    <div className="slider__title">
                                        New book: Story of a girl
                                    </div>
                                    <a
                                        href="https://themeforest.net/checkout/94137159/create_account?_ga=2.261336463.346783518.1682679439-1516393312.1682186901&clickid=RbSy4DXEhxyNTBh2gzVZRzWsUkAVV-TH517Gxk0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1306827&mp_value1=&utm_campaign=af_impact_radius_1306827&utm_medium=affiliate&utm_source=impact_radius"
                                        className="slider__btn1"
                                    >
                                        purchase
                                    </a>
                                    <Link to={'/'} className="slider__btn2">
                                        explore
                                    </Link>
                                </div>
                            </div>
                            <div className="slider__book">
                                <img src={sliderBook2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            className="slider__swiperSlider"
                            style={{
                                position: 'relative',
                                background: `url(${sliderImg3})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'top',
                                objectFit: 'cover',
                            }}
                        >
                            <div className="slider__block">
                                <div className="slider__body">
                                    <div className="slider__infText">
                                        new in stores
                                    </div>
                                    <div className="slider__title">
                                        New book: Moody Nights
                                    </div>
                                    <a
                                        href="https://themeforest.net/checkout/94137159/create_account?_ga=2.261336463.346783518.1682679439-1516393312.1682186901&clickid=RbSy4DXEhxyNTBh2gzVZRzWsUkAVV-TH517Gxk0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1306827&mp_value1=&utm_campaign=af_impact_radius_1306827&utm_medium=affiliate&utm_source=impact_radius"
                                        className="slider__btn1"
                                    >
                                        purchase
                                    </a>
                                    <Link to={'/'} className="slider__btn2">
                                        explore
                                    </Link>
                                </div>
                            </div>

                            <div className="slider__book">
                                <img src={sliderBook3} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <InterestingInformation />
            <Posts />
        </>
    )
}
export default Home
