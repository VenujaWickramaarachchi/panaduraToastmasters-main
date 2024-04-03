const ChatBubble = () => {
  return (
    <main className='bg-gradient-to-r from-coolGrey via-fairGrey to-coolGrey     pt-20'>
      <section className='align-element pb-20'>
        <div className='chat chat-start '>
          <div className='chat-image avatar '>
            <div className='w-32 rounded-full'>
              <img
                alt='pamesha'
                src='https://res.cloudinary.com/du8hvn539/image/upload/v1711608627/panaduraToastmaster/yrkzvdwucolasz99ufgq.png'
              />
            </div>
          </div>

          <div className='chat-bubble bg-accent'>
            <span className='text-lg text-bold'>President</span>
            <h1>TM Pamesha Pieris</h1>
            <p>Contact me : +94 77 423 4496 </p>
            <p>Email me : pameshapeiris@gmail.com </p>
          </div>
        </div>
        <div className='chat chat-end mt-[-3rem] lg:mt-[-13rem]'>
          <div className='chat-image avatar'>
            <div className='w-32 rounded-full'>
              <img
                alt='malindu'
                src='https://res.cloudinary.com/du8hvn539/image/upload/v1711608633/panaduraToastmaster/pxdbsgqwj23tg4alz79a.png'
              />
            </div>
          </div>

          <div className='chat-bubble bg-secondary text-white'>
            <span className='text-lg text-bold'>Vice President Education</span>
            <h1>TM Malindu Batheegama</h1>
            <p>Contact me : +94 77 811 4882 </p>
            <p>Email me : malindureventon@gmail.com</p>
          </div>
        </div>
        <div className='chat chat-start mt-[2.5rem]'>
          <div className='chat-image avatar '>
            <div className='w-32 rounded-full'>
              <img
                alt='ranudi'
                src='https://res.cloudinary.com/du8hvn539/image/upload/v1711608631/panaduraToastmaster/hfwfwypyehpg0hi99rrx.png'
              />
            </div>
          </div>

          <div className='chat-bubble bg-primary text-accent'>
            <span className='text-lg text-bold'>Vice President Membership</span>
            <h1>TM Ranudi Kulathunga</h1>
            <p>Contact me : +94 75 223 1030</p>
            <p>Email me : ranudi.kulathunga@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  )
}
export default ChatBubble
