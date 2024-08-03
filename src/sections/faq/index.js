import React from 'react';
import { column1, column2 } from './constants';
import Accordion from '../../components/Accordion';

const FAQ = () => {
    const buildColumn = (items = []) => items.map((item) => {
        return <Accordion question={item.question} answer={item.answer} />;
    });

    return (
        <section class="faqs-sec-v2 lp-faq">
            <h1 class="text-dtheme">Your top<span class="image_as_circled">questions, </span>answered</h1>
            <ul class="faqs-v2" id="faqs-sec-list">
                <div class="column-1">
                    {buildColumn(column1)}
                </div>
                <div class="column-2">
                    {
                        buildColumn(column2)
                    }
                </div>
            </ul>
        </section>
    );
};

export default FAQ;
