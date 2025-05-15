// PostList.jsx

import classes from './PostsList.module.css';
import Post from './Post.jsx'
import NewPost from './NewPost.jsx';
import Modal from './Modal.jsx';

function PostList({ modalIsVisible, onHidePost }) {


    let modalContent;

    if (modalIsVisible) {
        modalContent = (
            <Modal onClose={onHidePost}>
                <NewPost onClose={onHidePost} />
            </Modal>
        );
    }
    return (
        <>
            {modalContent}
            <ul className={classes.posts}>
                <Post message="This is the first post" author="Alex" />
                <Post message="This is the second post" author="Sam" />
            </ul>
        </>
    )
}

export default PostList;