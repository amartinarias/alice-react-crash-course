// PostList.jsx
import { useState } from 'react'
import classes from './PostsList.module.css';
import Post from './Post.jsx'
import NewPost from './NewPost.jsx';
import Modal from './Modal.jsx';

function PostList({ modalIsVisible, onHidePost }) {
    const [posts, setPosts] = useState([])

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts])
    }

    let modalContent;

    if (modalIsVisible) {
        modalContent = (
            <Modal onClose={onHidePost}>
                <NewPost onClose={onHidePost} onAddPost={addPostHandler} />
            </Modal>
        );
    }
    return (
        <>
            {modalContent}
            {posts.length > 0 && (<ul className={classes.posts}>
                {[posts.map((post) => <Post message={post.body} author={post.author} key={post.body} />)]}
                {/* <Post message="This is the first post" author="Alex" />
                <Post message="This is the second post" author="Sam" /> */}
            </ul>)}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}><h2>Write your first post</h2></div>
            )}
        </>
    )
}

export default PostList;