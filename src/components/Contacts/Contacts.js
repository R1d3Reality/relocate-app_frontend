import { useRef, useState, useEffect } from 'react'

const Contacts = () => {
  const nameInput = useRef()
  const phoneInput = useRef()
  const messageInput = useRef()
  const [submitState, setSubmitState] = useState(false)

  const submitHandler = e => {
    e.preventDefault()
    if (
      nameInput.current.value.trim() &&
      phoneInput.current.value.trim() &&
      messageInput.current.value.trim()
    ) {
      setSubmitState(true)
      nameInput.current.value = ''
      phoneInput.current.value = ''
      messageInput.current.value = ''
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (submitState) setSubmitState(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [submitState])
  const setDynamicBtn = () => {
    if (submitState) {
      return (
        <button disabled style={{ background: '#B3DAFE' }}>
          Sent
        </button>
      )
    } else {
      return <button>Submit</button>
    }
  }
  const dynamicBtn = setDynamicBtn()


  return (
    <div className='contacts'>
      <div className='contacts__article'>
        <p>
          If you're interested in our relocation services,
          please feel free to contact us using one of the
          following methods:
        </p>
        <p>Email: info@relocate.project</p>
        <p>Phone: 1-232-3434 (Main)</p>
        <p>Address: Bahagia Ave Street PRBW 29281</p>
        <p>Or you can fill out our contact form. </p>
        <p >We'd be happy to assist you with your move! </p>
      </div>
      <div className='contacts__form'>
          <p className='contacts__form__title'>Contact Us</p>
          <p className='text'>
            We’d love to hear from you. Please fill out this form.
          </p>
        <form onSubmit={submitHandler}>
          <input
            ref={nameInput}
            type='text'
            id='name'
            placeholder="Name"
            required
          />
          <input
            ref={phoneInput}
            id='phone'
            required
            type='tel'
            name='phone'
            pattern='[0]{1}[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
            placeholder='067-506-45-06'
          />
          <textarea
            ref={messageInput}
            name='message'
            required
            id='message'
            placeholder='Message'
          ></textarea>
          {dynamicBtn}
        </form>
      </div>
    </div>
  )
}
export default Contacts;
