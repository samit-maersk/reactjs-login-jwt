import React, { useState } from 'react'

const Message = ({messageType="", text="", showReply=()=>{}}) => {
  const [show,setShow] = useState(false)
  
  return (
    <div className='message'>
        <div className='message__text'>
          {text}
          <hr/>
        </div>

        <div className='message__action'>
          <i className="fas fa-trash"></i>
          <i className="fa-solid fa-pencil"></i>
          <i className="far fa-thumbs-up"></i>
          { messageType === 'FEED' ? (
            <>
              <i className="fa-solid fa-reply" onClick={() => setShow(!show)}></i>
              <i className="fas fa-bars" onClick={showReply}></i>
            </>
          ) : ''}
        </div>

        {show ? (
            <div className='message__reply'>
              <textarea className='message__reply__textarea' placeholder='message'/>
              <i className="fa-solid fa-check fa-1x message__reply__sent"></i>              
            </div>
          ) : ''}
    </div>
  )
}

export default Message