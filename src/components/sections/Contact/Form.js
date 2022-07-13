import React, { useRef, useState } from 'react'
import './styles/Form.css'
import emailjs from '@emailjs/browser';



const Form = () => {
    const [isSent, setIsSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w9gjusg', 'template_n86si9d', form.current, 'tA7yKM1fp3PBGGKM9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <>
            <div className={isSent ? 'fbody sent' : 'fbody'}>

                <div className="wrapper centered" >
                    <article className="letter">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="side">
                                <h1 className='fh1'>Contact me</h1>

                                <p>
                                    <textarea placeholder="Your message" name='message'></textarea>
                                </p>
                            </div>
                            <div class="side">
                                <p>
                                    <input type="text" placeholder="Your name" name='name' />
                                </p>
                                <p>
                                    <input type="email" placeholder="Your email" name='email' />
                                </p>
                                <p>
                                    <button onClick={() => { setIsSent(true) }} type="submit">Send</button>
                                </p>
                            </div>
                        </form>
                    </article>
                    <div className="envelope front"></div>
                    <div className="envelope back"></div>
                </div>
                <p className="msg result-message centered">Thank you for your message</p>

            </div>
        </>
    )
}

export default Form