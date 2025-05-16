import classes from './Modal.module.css';

function Modal(props) {
    function handleBackdropClick(event) {
        // Only close if the click is directly on the backdrop, not on its children
        console.log("test", event.target, event.currentTarget);
        console.log(event);
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    }

    return (
        <>
            <div className={classes.backdrop} onClick={handleBackdropClick}>
                <dialog open className={classes.modal}>{props.children}</dialog>
            </div>
        </>
    )
}

export default Modal;