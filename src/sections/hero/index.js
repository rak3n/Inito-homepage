import React from 'react';
import Image from '../../components/Image';
import Stars from '../../components/Stars';
import { heroImages } from './constants';

const Hero = () => {
    return (
        <section class="main-hero ">
            <div class="container">
                <div class="tagline-text">
                    <div class="main-hero-stars">
                        <Stars />
                        <span class="text">TRUSTED BY 20,000+ COUPLES</span>
                    </div>
                    <h1 class="font-bold">Track your fertility hormones at home, in 10 minutes</h1>
                    <h6>Get accurate results of <strong>Estrogen, LH, PdG (urine metabolite of progesterone) and FSH</strong> with Inito, the all-in-one fertility monitor.</h6>
                    <div class="main-hero__button">
                        <a class="button font-semi-bold tex fertility-kit-slidedown" href="https://www.inito.com/#only-fertility-kit">How does Inito work?</a>
                    </div>
                </div>
                <div class="main-hero__img">
                    {heroImages.map(({ src, view }) => <Image src={src} class={view} type="images" />)}
                </div>
            </div>
            <div class="main-hero__button">
                <a class="button font-semi-bold tex fertility-kit-slidedown" href="https://www.inito.com/#only-fertility-kit">HOW DOES INITO WORK?</a>
            </div>
        </section>
    );
};


export default Hero;
