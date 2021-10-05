import React, { useEffect, useState } from 'react'

const GetPost = () => {
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState('')
    const [ post, setPost ] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((data) => {
            setLoading(false)
            setError('')
            setPost(data)
        })
        .catch(() => {
            setLoading(false)
            setPost({})
            setError('There was a Problem !')
        })

    }, [])

    return (
        <div>
            { loading ? 'Loading ...' : post.title }
            { error || null }
        </div>
    )
}

export default GetPost
