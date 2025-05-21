// NewPost.jsx

import classes from './NewPost.module.css';
// import { useState } from 'react';
import Modal from '../components/Modal'
import { Link, Form, redirect } from 'react-router-dom'

function NewPost({ onClose, onAddPost }) {
    // const [enteredBody, setEnteredBody] = useState('')
    // const [enteredAuthor, setEnteredAuthor] = useState('')

    // function changeBodyHandler(event) {
    //     setEnteredBody(event.target.value);
    // }

    // function changeBodyAuthor(event) {
    //     setEnteredAuthor(event.target.value);
    // }
    // function submitHandler(event) {
    //     event.preventDefault();
    //     const postData = {
    //         body: enteredBody,
    //         author: enteredAuthor
    //     }
    //     console.log(postData);
    //     onAddPost(postData);
    //     onClose();
    // }
    return (
        <Modal>
            {/* <form className={classes.form} onSubmit={submitHandler}> */}
            <Form className={classes.form} method='post'>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                    {/* <textarea id="body" required rows={3} onChange={changeBodyHandler} /> */}
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required name="author" />
                </p>
                <p className={classes.actions}>
                    <button type="submit">Add Post</button>
                    <Link type="button" to="..">Cancel</Link>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    // console.log(postData);
    await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    });

    return redirect('/'); // Redirect to the root route after adding the post
}