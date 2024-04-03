import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ChatBubble } from '../features'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_2ebzjmo', 'template_rkdmxow', form.current, {
        publicKey: 'BFFWHs9AKaCzuAv-u',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <main
        className='bg-gradient-to-r from-loyalBlue via-blissfulBlue to-loyalBlue
 '
      >
        <section className='align-element py-20 '>
          <div className='  '>
            <div className='section-title'>
              <h1>
                Contact <span className='section-title-span'>us</span>
              </h1>
            </div>
            <div className='skeleton p-10 min-w-[20rem] md:w-[40rem] grid m-auto'>
              <form
                ref={form}
                onSubmit={sendEmail}
                className='m-auto  grid h-full w-full form-control'
              >
                <label className='input input-bordered flex items-center gap-2 glass'>
                  Name
                  <input
                    type='text'
                    name='user_name'
                    className='grow'
                    placeholder='Your Name'
                  />
                </label>
                <label className='input input-bordered flex items-center gap-2 glass mt-6'>
                  Email
                  <input
                    type='email'
                    name='user_email'
                    className='grow'
                    placeholder='example@example.com'
                  />
                </label>
                <label className='input input-bordered flex items-center gap-2 glass mt-6'>
                  Contact No
                  <input
                    type='text'
                    name='user_phoneNo'
                    className='grow'
                    placeholder='+94'
                  />
                </label>
                <label className='p-2 mt-2'>Message</label>
                <textarea
                  name='message'
                  className='textarea textarea-bordered w-[15rem] md:w-[576px] h-60 glass mt-2'
                  placeholder='Why do you want to join Panadura Toastmasters Club'
                ></textarea>
                <button
                  type='submit'
                  value='Send'
                  className='bg-accent m-auto glass flex items-center input-bordered p-[.5rem] rounded-md uppercase text-primary tracking-widest mt-4  hover:font-bold transition-all'
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <ChatBubble />
    </>
  )
}
export default Contact
