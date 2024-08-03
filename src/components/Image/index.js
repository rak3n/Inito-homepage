import React from 'react';

const Image = (props) => {
    const { src: imageSrc, type, alt } = props;

    // based on the type of image, set the path from respective directory in public folder
    let path = imageSrc;
    if (type === 'icons')path = `/icons/${imageSrc}`;
    if (type === 'images') path = `/images/${imageSrc}`;

    return <img {...props} src={path} alt={alt} />
}

export default Image;
