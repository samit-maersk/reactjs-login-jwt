import React from 'react'
import Feed from '../component/Feed'

const Messages = () => {
    const feeds = [1,2,3,4];
    return (
        <>
            {feeds.map((m,i) =><Feed key={i}/>)}
        </>
    )
}

export default Messages