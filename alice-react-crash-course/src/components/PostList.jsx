// PostList.jsx
import { useState, useEffect } from 'react'
import classes from './PostsList.module.css';
import Post from './Post.jsx'
import { useLoaderData } from 'react-router-dom';

function PostList() {
    // const [posts, setPosts] = useState([])
    // const [isFetching, setIsFetching] = useState(false)
    const posts = useLoaderData()
    // useEffect(() => {
    //     async function fetchPosts() {
    //         setIsFetching(true)

    //         setPosts(resData.posts)
    //         setIsFetching(false)
    //     }
    //     fetchPosts();
    // }, [])
    function addPostHandler(postData) {
        // fetch('http://localhost:8080/posts', {
        //     method: 'POST',
        //     body: JSON.stringify(postData),
        //     headers: { "Content-Type": "application/json" }
        // })
        fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { "Content-Type": "application/json" }
        })
        setPosts((existingPosts) => [postData, ...existingPosts])
    }


    return (
        <>
            {posts.length > 0 && (<ul className={classes.posts}>
                {[posts.map((post) => <Post message={post.body} author={post.author} key={post.body} />)]}
                {/* <Post message="This is the first post" author="Alex" />
                <Post message="This is the second post" author="Sam" /> */}
            </ul>)}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}><h2>Write your first post</h2></div>
            )}
            {/* {isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}><h2>Loading...</h2></div>
            )} */}
        </>
    )
}

export default PostList;