import { useState } from 'react'
import './ContactsBlock.scss'

type Props = {}
const ContactsBlock = (props: Props) => {
    const [text, setText] = useState('Leave A Message...')

    return (
        <>
            <div className="contacts_block">
                <div className="contacts_image">
                    <img
                        src="/images/contact-img-1.jpg"
                        alt="contact img"
                        className="image_1"
                    />
                </div>

                <div className="contacts_wrapper">
                    <div className="contacts_form">
                        <p className="contacts_text_1">Get in touch</p>
                        <p className="contacts_text_2">
                            Proin gravida nibh vel velit auctor aliquet. Aenean
                            sollicitudin, lo <br /> rem quis este bibene dum est
                            am de uctor
                        </p>
                        <input
                            type="text"
                            className="input_1"
                            placeholder="Full Name"
                        />
                        <input
                            type="text"
                            className="input_2"
                            placeholder="E-Mail Adress"
                        />
                        <div className="text_area">
                            <textarea
                                className="text_area_block"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </div>
                        <button className="contacts_button">
                            send message
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactsBlock
