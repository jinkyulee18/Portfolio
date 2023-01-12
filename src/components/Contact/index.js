
import './contact.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loaders from 'react-loaders'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_960hxx1', 'template_0yfhetb', form.current, '_3cYYo1Pke1W-4HX9')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
    
    return (
        <>
          <div className="container contact-page">
            <div className="text-zone">
              <h1 className='H1'>
                CONTACT ME:
              </h1>
              
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <ul>
                    <li className="half">
                      <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className="half">
                      <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                      />
                    </li>
                    <li>
                      <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input type="submit" className="flat-button" value="SEND" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            
            <div className="info-map">
            <p>
                I am interested in any incoming opportunities within my scope of practice. However, open to any other requests or
                questions, don't hesitate to contact me.
              </p>
              John Lee
              <br />
              
              Tustin, California <br />
              (949)-943-2556 <br />
               
              <span>jinkyulee224@gmail.com</span> <br />
              
            </div>
            <div className="map-wrap"></div>
          </div>
        <Loaders type= 'line-scale' />
      </>
    )
}

export default Contact