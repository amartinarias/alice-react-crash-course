// NewPost.jsx

import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onClose, onAddPost }) {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeBodyAuthor(event) {
        setEnteredAuthor(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        console.log(postData);
        onAddPost(postData);
        onClose();
    }
    return (

        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={changeBodyAuthor} />
            </p>
            <p className={classes.actions}>
                <button type="submit">Add Post</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </p>
        </form>
    );
}

export default NewPost;
