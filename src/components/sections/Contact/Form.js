import React, { useState } from 'react'
import './styles/Form.css'


const Form = () => {
    const [isSent,setIsSent] = useState(false);

    return (
        <>
        <div className={isSent ? 'fbody sent' : 'fbody' }>

            <div className="wrapper centered">
                <article className="letter">
                    <div className="side">
                        <h1 className='fh1'>Contact me</h1>
                        <p>
                            <textarea placeholder="Your message"></textarea>
                        </p>
                    </div>
                    <div class="side">
                        <p>
                            <input type="text" placeholder="Your name" />
                        </p>
                        <p>
                            <input type="email" placeholder="Your email" />
                        </p>
                        <p>
                            <button onClick={() => setIsSent(true)}>Send</button>
                        </p>
                    </div>
                </article>
                <div class="envelope front"></div>
                <div class="envelope back"></div>
            </div>
            <p class="msg result-message centered">Thank you for your message</p>

        </div>
        </>
    )
}

export default Form