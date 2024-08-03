import React from 'react';

const Accordion = ({ question, answer}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <li>
        <div class="head" onClick={handleClick}>
            <h6 class="text-dtheme font-semi-bold">{question}</h6>
            <div class="img"></div>
        </div>
        <div class="body" style={{ maxHeight: isOpen ? '100vh' : 0 }}>
            <p class="text text-dtheme font-med">{answer}</p>
        </div>
    </li>
    );
}

export default Accordion;