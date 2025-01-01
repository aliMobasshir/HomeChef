import React from 'react'
import style from './Contact.module.css'

const Contact = () => {
  const handleSubmit = e => {
    alert('Submitted!')
  }

  return (
    <div className={style.contact_container}>
      <div className={style.contact_content}>
        <h1>Contact Us</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
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
  )
}

export default Contact
