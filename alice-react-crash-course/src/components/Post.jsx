import classes from './Post.module.css';
// const names = ['Alice', 'Bob', 'Charlie'];

// function Post(props) {
//     const chosenName = Math.floor(Math.random() * names.length);
//     return (
//         <li className={classes.post}>
//             <p>{names[chosenName]}</p>
//             <p>{props.message}</p>
//         </li>
//     )
// }

function Post(props) {
    return (
        <li className={classes.post}>
            <p>{props.author}</p>
            <p>{props.message}</p>
        </li>
    )
}
export default Post;