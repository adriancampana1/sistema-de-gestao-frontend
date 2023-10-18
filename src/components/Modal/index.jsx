import { useEffect } from 'react';
import { Container } from './styles';

const ESCAPE_KEYCODE = 27;

export function Modal({
    children,
    id = 'modal',
    isOpen,
    setIsOpen,
    backdropClose = false,
}) {
    if (!isOpen) return null;

    useEffect(() => {
        if (!window) return;

        const keyUpListener = (e) => {
            if (e.keyCode === ESCAPE_KEYCODE) setIsOpen(false);
        };

        window.addEventListener('keyup', keyUpListener);

        return () => {
            window.removeEventListener('keyup', keyUpListener);
        };
    }, []);

    const handleBackdropClick = (e) => {
        if (e) e.preventDefault();

        if (!backdropClose || e.target.id !== id) return;

        setIsOpen(false);
    };
    return (
        <Container onClick={handleBackdropClick} id={id}>
            <div className="modal">
                {' '}
                <button
                    type="button"
                    className="modal-close"
                    onClick={() => setIsOpen(false)}
                ></button>
                {children}
            </div>
        </Container>
    );
}
