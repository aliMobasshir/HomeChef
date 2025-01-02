import React from 'react'
import style from './Contact.module.css'
import Navigation from './Navigation'
import Footer from './Footer'


const Contact = () => {
  const handleSubmit = e => {
    alert('Submitted!')
  }

  return (
    <>
   
    <div className={style.contact_container}>
      <div className={style.contact_content}>
        <h1>Contact Us</h1>
        <p>
        We’d love to hear from you! Share your thoughts, questions, or feedback by filling out the form below, and we’ll get back to you promptly.
        </p>
      </div>
      <div className={style.form_container}>
        <form
          onSubmit={handleSubmit}
          action='https://formspree.io/f/mjkvjdzj'
          method='POST'
        >
          <div className={style.form_input_container}>
            <input
              className={style.form_input}
              type='text'
              name='name' /* Added */
              placeholder='Name'
              required /* Added */
            />
          </div>
          <div className={style.form_input_container}>
            <input
              className={style.form_input}
              type='email'
              name='email' /* Added */
              placeholder='Email'
              required /* Added */
            />
          </div>

          <div className={style.form_input_container}>
            <input
              className={style.form_input}
              type='number'
              name='number' /* Added */
              placeholder='Phone Number'
              required /* Added */
            />
          </div>

          <div className={style.form_input_container}>
            <input
              className={style.form_input}
              type='text'
              name='subject' /* Added */
              placeholder='Subject'
              required /* Added */
            />
          </div>
          <div className={style.form_input_container}>
            <textarea
              className={style.form_input}
              name='message' /* Added */
              placeholder='Message'
              cols='30'
              rows='10'
              required /* Added */
            ></textarea>
          </div>

          <div className={style.container_button}>
            <button className={style.section__link} type='submit'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className={style.blackline}></div>
    <Footer />
    </>
  )
}

export default Contact
