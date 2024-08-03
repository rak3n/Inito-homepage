import React from 'react';
import Image from '../../components/Image';
import FadedCarousel from '../../components/FaddedCarousel';

import { buyNowButton, carouselItems, aboutListItems, pressIconUrls } from './constants';

const ProductDescription = () => {
    // abstract the common code for picture card, based on type identify the image or source
    const renderPictureCard = (pattern = []) => {
        const pictureCardJsx = pattern.map(({ src, type }) => {
            if (type === "images")
                return <Image class="v2-homepage-chart" src="get_charts_and_actual_values@2x.png" type="images" />;
            return <source media="(min-width:769px)" srcset={src} />
        });

        return (
            <picture>
                {pictureCardJsx}
            </picture>
        );
    }

    return <>
        <section class="predict-with-actual-data">
            <div class="content">
                <h1>Predict and confirm your ovulation with <span class="image_as_underline">actual</span> data</h1>
                <p class="description">
                    Unlike most ovulation tests that only give you "yes/no" results, Inito provides <strong>real numerical values</strong> of your
                    fertility hormones.<br /><br />
                    If you have irregular cycles, actual data is necessary to know <em>exactly</em> when you ovulate, and when is the best time to try to conceive.
                </p>
                <a class="button" href="https://www.inito.com/buy-now">
                    {buyNowButton.map(({ className, text }) => <span class={className}>{text}</span>)}
                </a>
            </div>
            <div class="iphone slick-initialized">
                <FadedCarousel
                    items={carouselItems}
                    fadeInterval={2}
                />
            </div>
        </section>

        <section class="chart-con">
            <div class="chart-con__text-content">
                <h1 class="text-center text-dtheme">
                    Never miss <span class="an-egg"><Image alt="egg-image" class="text-image" type="images" src="an_egg.png" />a day<Image alt="day-info" class="strike-through" type="images" src="strike_through.png" /></span>
                    again with Inito
                </h1>
                <p class="description">
                    Inito tracks up to 6 fertile days and confirms ovulation by measuring all 4 hormones
                    in just 10 minutes:
                </p>
                <div class="chart-con__text-content__about">
                    <ul>
                        {aboutListItems.map(item => <li>{item}</li>)}
                    </ul>
                </div>
            </div>
            {renderPictureCard([{
                src: "https://cdn.inito.com/inito_website/hormones_graph_mob.jpg",
            }, {
                src: "https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png",
            }, {
                src: "hormones_graph_desktop_v2.png",
                type: "images"
            }])
            }
        </section>
    </>
};

const ProductInfo = () => {
    const pressJsx = pressIconUrls.map(({ srcset, src }) => <div class="press-section__logo-container__img">
        <Image class="press-logo" srcset={srcset} src={src} type="images" />
    </div>)

    return <>
        <main>
            <section class="press-section">
                <span class="text">AS SEEN ON</span>
                <div class="press-section__logo-container">
                    {pressJsx}
                </div>
            </section>


        </main>

        <div class="promotion">
            <h1>The <span class="image_as_underline">only</span> fertility kit you will ever need</h1>
            <p class="description">
                Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH),
                but fail to measure the hormone that actually confirms your ovulation: <strong>PdG (urine metabolite of progesterone).</strong>
            </p>
        </div>

        <div class="makes-inito-different">
            <h1>What makes Inito different?</h1>
            <p class="description">
                Inito is the only fertility monitor that measures all <strong>4 hormones</strong> on a <strong>single test strip</strong>,
                showing you a full picture of your cycles with results unique to your body.
            </p>
        </div>

        <div class="images-in-small-view">
            <div class="content">
                <Image type="icons" src="trusted_by_20000_couples-a0a4930b99d93a9587185841c933b190cdf9e3fe6325bbff144fe51bd32b3db6.svg" />
                <span class="img-text">TRUSTED BY 20,000+ COUPLES</span>
            </div>
            <div class="content">
                <Image type="icons" src="hsa_fsa_eligible-092a0fffe6b337920210c2f2537bf09a7a9ff167b311c549003950fc33a4fc2b.svg" />
                <span class="img-text">HSA/FSA ELIGIBLE</span>
            </div>
        </div>

        <ProductDescription />
    </>
};

export default ProductInfo;
