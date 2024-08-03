import React from 'react';
import Image from '../../components/Image';
import FadedCarousel from '../../components/FaddedCarousel';

const About = () => {
    const DoctorReviewJsx = (
        <div class="doctor-review-source">
            <span class="source">* Source: National Institutes of Health</span>
            <span class="quote">“Inito is all that you need to give you the best chance of conception."</span>

            <div class="doctor">
                <Image class="doctor-image" src="https://cdn.inito.com/inito_website/doc_testimonial_wagner.jpg" />
                <div class="doctor-info">
                    <strong class="doctor-name">Dr. Rachel Wagner</strong>
                    <em class="doctor-qualification">MD</em>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );

    // abstract the common code for picture card, based on type identify the image or source
    const renderPictureCard = (pattern = []) => {
        const pictureCardJsx = pattern.map(({ src, type }) => {
            if (type === "images")
                return <Image src={src} type="images" />;
            return <source media="(min-width:769px)" srcset={src} />
        });

        return (
            <picture class="card-image">
                {
                    pictureCardJsx
                }
            </picture>
        );
    }


    return <>
        <section class="why-inito-is-smarter-way">
            <section class="why-measure-progesterone">
                <Image class="blue-calendar" src="blue_calendar.png" type="images" />
                <h6>Why measure the PdG? (urine metabolite of progesterone)?</h6>
                <p>
                    <strong>Anovulation</strong> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*.<br /><br />
                    If ovulation occurs, the levels of Progesterone and its urine metabolite PdG rise after a few days
                    and stay elevated. Sustained, elevated PdG levels after peak fertility indicate a successful ovulation.
                    <br /><br />
                </p>
                {DoctorReviewJsx}
            </section>

            <section class="blue-background">
                <h1>Why Inito is the smarter way to get <span class="image_as_underline">pregnant</span></h1>

                <section class="left-card">
                    <div class="text-content">
                        <h1>Get charts and actual <span class="image_as_underline">values</span> of your <span class="inline-image">hormones<Image class="homepage-4-star" src="homepage_4_star.png" type="images" /></span></h1>
                        <div>
                            Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.<br /><br />
                            Inito measures real values of your hormones to personalize results to the unique you.
                        </div>
                        <a class="small-view-button" href="https://www.inito.com/buy-now">GET THE INITO KIT</a>
                    </div>
                    {renderPictureCard([{
                        src: "https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png",
                    }, {
                        src: "https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values.png",
                    }, {
                        src: "get_charts_and_actual_values@2x.png",
                        type: "images"
                    }])}
                </section>

                <section class="right-card">
                    <div class="text-content">
                        <h1>Inito tracks everything so you don’t have to</h1>
                        <div>
                            The Inito Fertility Monitor comes with a free easy-to-use App, so you can track your fertile days with ease and know exactly
                            when you ovulate.<br /><br />
                            Our App notifies you for everything:
                            <ul class="blue-bullet-list">
                                <li>Your fertility levels</li>
                                <li>When to test on the right days</li>
                                <li>When you’ve successfully ovulated</li>
                                <li>And when to roll into bed!</li>
                            </ul>
                        </div>
                        <a class="button" href="https://www.inito.com/buy-now">Get the Inito Kit</a>
                    </div>

                    {renderPictureCard([{
                        src: "https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything@2x.jpg",
                    }, {
                        src: "https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything.jpg",
                    }, {
                        src: "inito_tracks_everything@2x.jpg",
                        type: "images"
                    }])}

                    <div class="fertility-card-carousel slick-initialized">
                        <div class="slick-list draggable">
                            <FadedCarousel items={[
                                { src: 'high_fertility-277405f0c3b1f844907885a9866aac272ff865c0ed3431d0a7f5673b2440b21e.svg', type: 'icons' },
                                { src: 'peak_fertility-21ac68f7f91f18f7e76b83c05e0eefec17e26037a254311312b59c3606bb952a.svg', type: 'icons' },
                                { src: 'ovulation_confirmed-1af13f574905b54b0614d422f2161aebbdebd85d6cd39cb6ae2078706ba42642.svg', type: 'icons' },
                                { src: 'low_fertility-51402a5906afd6879626e776235fbb7cbbe84d94529366f7266c51f4d3b406ab.svg', type: 'icons' }
                            ]} fadeInterval={4}
                                width={346} />
                        </div>
                    </div>
                </section>
            </section>
        </section>
    </>
};

export default About;
