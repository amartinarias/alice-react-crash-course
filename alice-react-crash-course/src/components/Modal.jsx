import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal(props) {
    const navigate = useNavigate()

    function handleBackdropClick() {
        navigate('..')
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