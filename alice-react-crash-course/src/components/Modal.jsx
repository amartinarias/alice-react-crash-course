import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal(props) {
    const navigate = useNavigate();

    function handleBackdropClick() {
        navigate('..');
    }

    function handleDialogClick(event) {
        // Stop the click from bubbling up to the backdrop
        event.stopPropagation();
    }

    return (
        <>
            <div className={classes.backdrop} onClick={handleBackdropClick}>
                <dialog
                    open
                    className={classes.modal}
                    onClick={handleDialogClick}
                >
                    {props.children}
                </dialog>
            </div>
        </>
    );
}

export default Modal;