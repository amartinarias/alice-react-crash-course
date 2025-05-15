import classes from './PostsList.module.css';
import Post from './Post.jsx'
import NewPost from './NewPost.jsx';
import Modal from './Modal.jsx';
import { useState } from 'react';

function PostList() {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeBodyAuthor(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost onAuthorChange={changeBodyAuthor} onBodyChange={changeBodyHandler} />
            </Modal>
            <ul className={classes.posts}>
                <Post message={enteredBody} author={enteredAuthor} />
                <Post message="This is the first post" author="Alex" />
                <Post message="This is the second post" author="Sam" />
            </ul>
        </>
    )
}

export default PostList;