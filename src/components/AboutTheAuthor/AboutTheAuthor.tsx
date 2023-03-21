import './AboutTheAuthor.scss'

type Props = {}
const AboutTheAuthor = (props: Props) => {
    return (
        <>
            <img
                src="/images/about-img-1.jpg"
                alt="about image"
                className="about_img"
            />

            <div className="description_about_the_author">
                <div className="first_column">
                    <p className="about_the_author">About The Author</p>

                    <p className="about_the_author_text_1">
                        Proin gravida nibh vel velit auctor aliquet. Aenean
                        sollic <br />
                        itudine rem quis este bibene dum est am de uctor
                    </p>

                    <p className="about_the_author_text_2">
                        Dei Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per us incepto him enaim os. Mauris in
                        erat justo. Nullam ac urna eu felis dapibusm condime
                        ntume it et ame augue. Sed non neque elit. Sed ut
                        imperdiet nisi. Et Proin condimen Dei es Class aptent
                        tacit sociosuad litora torquent per conubian nostra, per
                        inceptos ullamei ac urna eu felis dapibusm condime
                        ntume.
                    </p>
                    <p className="about_the_author_text_3">
                        Dei Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per us incenm tos him enaim os. Mauris
                        in erat justo. Nullam ac urna eu felis dapdi busm
                        condimen litora torquent per.
                    </p>
                </div>
                <div className="second_column">
                    <p className="formal_education">Formal Education</p>

                    <div className="universities">
                        <p className="universities_text_1">
                            Northwestern University
                        </p>
                        <p className="universities_text_2">
                            Columbia University
                        </p>
                    </div>
                    <div className="formal_education_block">
                        <p className="formal_education_text_1">
                            1985 – 1991 – gravida nibh vel velit et auctor alimo
                            quet menean solli
                        </p>
                        <p className="formal_education_text_2">
                            1985 – 1991 – gravida nibh vel velit et auctor alimo
                            quet menean solli
                        </p>
                    </div>

                    <p className="awards_and_recognitions_text">
                        Awards and Recognitions
                    </p>
                    <div className="awards_and_recognitions">
                        <ul className="awards_and_recognitions_first_column">
                            <li>1999 – Best New Writer Award</li>
                            <li>2001 – Best New Novel</li>
                            <li>2005 – Best New Writer Award</li>
                            <li>2007 – Best New Novel</li>
                        </ul>
                        <ul className="awards_and_recognitions_second_column">
                            <li>2011 – Best New Writer Award</li>
                            <li>2012 – Best New Novel</li>
                            <li>2015 – Best New Writer Award</li>
                            <li>2017 – Best New Novel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutTheAuthor
