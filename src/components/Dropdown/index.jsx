import { useState, useRef, useEffect } from 'react';

import { Container } from './styles';

import { FiFilter } from 'react-icons/fi';

export const Dropdown = () => {
    const [activated, setActivated] = useState(false);
    const clickOutsideRef = useRef(null);

    function handleDropdown() {
        activated ? setActivated(false) : setActivated(true);
    }

    useEffect(() => {
        const pageEventClick = (e) => {
            if (
                clickOutsideRef.current !== null &&
                !clickOutsideRef.current.contains(e.target)
            ) {
                setActivated(false);
            }
        };

        if (activated) {
            window.addEventListener('click', pageEventClick);
        }

        return () => {
            window.removeEventListener('click', pageEventClick);
        };
    }, [activated]);

    return (
        <Container>
            <div
                className={`dropdown ${activated ? 'active' : ''}`}
                onClick={handleDropdown}
                ref={clickOutsideRef}
            >
                Filtre por categoria <FiFilter></FiFilter>
            </div>
            <div className={`dropdown-content ${activated ? 'active' : ''}`}>
                <div className="dropdown-item">Portáteis</div>
                <div className="dropdown-item">Industriais</div>
                <div className="dropdown-item">Residenciais</div>
                <div className="dropdown-item">Serviços</div>
            </div>
        </Container>
    );
};
