
import React from 'react'

const Posts = ({title, body}) => {
    return (
        <div>
            <h4 style={{backgroundColor: 'silver', borderRadius: '12px', padding:'12px'}}>{title}</h4>
            <p>{body}</p>
        </div>
    )
}

export default Posts
