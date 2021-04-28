
import React, { useEffect, useState } from 'react'

const Contact = () => {
    const [user, setUser] = useState([])
    const USER_URL = 'https://jsonplaceholder.typicode.com/users'
    const fetchUsers = async () => {
        const response = await fetch(USER_URL)
        const data = await response.json()
        setUser(data)
    }
    useEffect(()=> {
        fetchUsers()
    }, [])
    return (
        <div className="container">
            <h1>Contact Page</h1>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <div>
                {user.map((us)=> {
                    return (
                        <>
                        <h3>{us.name}</h3>
                        <p style={{color:'gray'}}>{us.email}</p>
                        <p>{us.phone}</p>
                        <p style={{color:'blue'}}>{us.website}</p>
                        <hr />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Contact
