import React, { useEffect, useMemo } from 'react';
import { OFFSET, ITEM_WIDTH } from './constants';
import Image from '../Image';

const FadedCarousel = ({ items = [], fadeInterval = 1, width = "100%" }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevActiveIndex => (prevActiveIndex + 1) % items.length);
        }, fadeInterval * 1000);

        return () => clearInterval(interval);
    }, [items, fadeInterval]);

    const resultsJsx = useMemo(() => items.map((item, index) => {
        const isVisible = activeIndex === index;
        const style = {
            position: 'relative',
            zIndex: isVisible ? 999 : 998,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 500ms ease 0s',
        };
        const {src, type = "images"} = item;
        return <div style={style}>
            <Image alt="product images" type={type} src={src} class="slick-slide" style={{transform: `translateY(${(activeIndex) * OFFSET}%)`}} />
        </div>
    }), [items, activeIndex]);

    return (
        <div class="slick-list draggable">
            <div class="slick-track" style={{ opacity: 1, height: `${items.length * ITEM_WIDTH}px`, width, }}>
            {resultsJsx}
            </div>
        </div>
    );
};

export default FadedCarousel;
