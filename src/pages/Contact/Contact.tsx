import Logo from 'components/Logo/Logo'
import './Contact.scss'
import contactImg from 'assets/contact-img.jpg'
import { useState } from 'react'

type Props = {}
const Contact = (props: Props) => {
    const [text, setText] = useState('Leave A Message...')
    return (
        <>
            <Logo />
            <div className="page__contact contact">
                <div className="contact__container container">
                    <div className="contact__body">
                        <div className="contact__img">
                            <img src={contactImg} alt="" />
                        </div>

                        <div className="contact__column">
                            <div className="contact__title title">
                                <p>Get in touch</p>
                            </div>
                            <div className="contact__text">
                                <p>
                                    Proin gravida nibh vel velit auctor aliquet.
                                    Aenean sollicitudin, lo rem quis este bibene
                                    dum est am de uctor
                                </p>
                            </div>
                            <form action="#" className="contact__form">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="contact__name"
                                />
                                <input
                                    type="email"
                                    placeholder="E-Mail Adress"
                                    className="contact__email"
                                />
                                <textarea
                                    className="contact__message"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                ></textarea>
                            </form>
                            <button className="contact__btn">
                                send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact
