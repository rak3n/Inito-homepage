import React from 'react';
import Image from '../Image';

const Stars = ({ className = "img-star" }) => {
    return (
        <>
            <Image class={className} type="icons" src="star.png" />
            <Image class={className} type="icons" src="star.png" />
            <Image class={className} type="icons" src="star.png" />
            <Image class={className} type="icons" src="star.png" />
            <Image class={className} type="icons" src="star.png" />
        </>
    )
};

export default Stars;
