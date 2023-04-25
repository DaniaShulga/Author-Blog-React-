import Logo from 'components/Logo/Logo'
import './About.scss'
import aboutImg from 'assets/about-img.jpg'
import BooksAbout from 'components/BooksAbout/BooksAbout'

type Props = {}
const About = (props: Props) => {
    return (
        <>
            <Logo />
            <div className="page__about-img about-img">
                <div className="about-img__container container">
                    <div className="about-img__body">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="page__about-author about-author">
                <div className="about-author__container container">
                    <div className="about-author__body">
                        <div className="about-author__block1 block1">
                            <div className="block1__title title">
                                <p>About The Author</p>
                            </div>
                            <div className="block1__description">
                                <p>
                                    Proin gravida nibh vel velit auctor aliquet.
                                    Aenean sollic itudine rem quis este bibene
                                    dum est am de uctor
                                </p>
                            </div>
                            <div className="block1__text">
                                <p>
                                    Dei Class aptent taciti sociosqu ad litora
                                    torquent per conubia nostra, per us incepto
                                    him enaim os. Mauris in erat justo. Nullam
                                    ac urna eu felis dapibusm condime ntume it
                                    et ame augue. Sed non neque elit. Sed ut
                                    imperdiet nisi. Et Proin condimen Dei es
                                    Class aptent tacit sociosuad litora torquent
                                    per conubian nostra, per inceptos ullamei ac
                                    urna eu felis dapibusm condime ntume.
                                </p>
                                <p>
                                    Dei Class aptent taciti sociosqu ad litora
                                    torquent per conubia nostra, per us incenm
                                    tos him enaim os. Mauris in erat justo.
                                    Nullam ac urna eu felis dapdi busm condimen
                                    litora torquent per.
                                </p>
                            </div>
                        </div>

                        <div className="about-author__block2 block2">
                            <div className="block2__formalEducation">
                                <div className="block2__title">
                                    <p>Formal Education</p>
                                </div>
                                <div className="block2__columns">
                                    <div className="block2__column">
                                        <div className="block2__name">
                                            Northwestern University
                                        </div>
                                        <div className="block2__text">
                                            1985 – 1991 – gravida nibh vel velit
                                            et auctor alimo quet menean solli
                                        </div>
                                    </div>
                                    <div className="block2__column">
                                        <div className="block2__name">
                                            Columbia University
                                        </div>
                                        <div className="block2__text">
                                            1985 – 1991 – gravida nibh vel velit
                                            et auctor alimo quet menean solli
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block2__awardsAndRecognitions">
                                <div className="block2__title">
                                    <p>Awards and Recognitions</p>
                                </div>
                                <div className="block2__lists">
                                    <div className="block2__list">
                                        <p>1999 – Best New Writer Award</p>
                                        <p>2001 – Best New Novel</p>
                                        <p>2005 – Best New Writer Award</p>
                                        <p>2007 – Best New Novel</p>
                                    </div>
                                    <div className="block2__list">
                                        <p>2011 – Best New Writer Award</p>
                                        <p>2012 – Best New Novel</p>
                                        <p>2015 – Best New Writer Award</p>
                                        <p>2017 – Best New Novel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BooksAbout />
        </>
    )
}
export default About
