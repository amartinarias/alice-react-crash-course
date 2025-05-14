import classes from './PostsList.module.css';
import Post from './Post.jsx'
import NewPost from './NewPost.jsx';

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post message="This is the first post" />
                <Post message="This is the second post" />
            </ul>
        </>
    )
}

export default PostList;