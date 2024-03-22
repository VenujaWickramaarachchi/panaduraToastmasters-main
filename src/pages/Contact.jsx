const Contact = () => {
  return (
    <>
      <section className='align-element py-20 '>
        <div className='  '>
          <div className='section-title'>
            <h1>
              Contact <span className='section-title-span'>us</span>
            </h1>
          </div>
          <div className='skeletonCustom p-10 w-[30rem] md:w-[40rem] grid m-auto'>
            <form action=''>
              <label className='input input-bordered flex items-center gap-2 glass'>
                Name
                <input type='text' className='grow' placeholder='Your Name' />
              </label>
              <label className='input input-bordered flex items-center gap-2 glass mt-6'>
                Email
                <input
                  type='text'
                  className='grow'
                  placeholder='example@example.com'
                />
              </label>
              <label className='input input-bordered flex items-center gap-2 glass mt-6'>
                Contact No
                <input type='text' className='grow' placeholder='+94' />
              </label>
              <textarea
                className='textarea textarea-bordered w-[400px] md:w-[576px] h-60 glass mt-6'
                placeholder='Why do you want to join Panadura Toastmasters Club'
              ></textarea>
              <button
                type='submit'
                className='m-auto glass flex items-center input-bordered p-[.5rem] rounded-md uppercase text-accent tracking-widest mt-4 '
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact
