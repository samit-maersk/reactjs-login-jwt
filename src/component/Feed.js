import React, { useState } from 'react'
import Message from './Message'

const Feed = () => {
    const [show,setShow] = useState(false)
    const showReply = ()=>{
        setShow(!show)
    }
    return (
        <div className='feed'>
            <Message messageType="FEED" text="React.js is awesome! I'm loving it!" showReply={showReply}/>
            {show ? (
                <ul>
                    <li>
                        <Message text="I'm too Loving it!"/>
                    </li>
                    <li>
                        <Message text="It's Simple"/>
                    </li>
                </ul>
            ) : ''}
        </div>
    )
}

export default Feed