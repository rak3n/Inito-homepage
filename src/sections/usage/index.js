import React from 'react';
import Image from '../../components/Image';

const Usage = () => {
    return <>
      <section class="inito-steps">
  <div class="content">
    <h1 class="text-dtheme text-center">A <span class="image_as_underline">fertility lab</span> at your fingertips</h1>
    <p class="description">
      Easy-to-read fertility diagnostic results directly on your iPhone*, in just 10 minutes.
    </p>
    <div class="visible-in-large">
      <a class="button" href="https://www.inito.com/buy-now">Get the Inito kit</a>
      <div class="inito-monitor-support">
        * The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.
      </div>
      <div class="download-on-app-store">
        <a target="_blank" href="https://apps.apple.com/us/app/inito-fertility-ovulation/id1183799668" rel="noreferrer">
          <Image type="images" src="download_on_app_store.png" />
</a>      </div>
    </div>
  </div>
  <div class="inito-steps-con">
    <div class="inito-step">
      <div class="video-con">
        <span class="num" style={{background: '#BDE0E6'}}>1</span>
        <video autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Dip test strip in urine" playsinline="true" src="https://cdn.inito.com/inito_website/step1.mp4"></video>
      </div>
      <div class="data-con">
        <span class="data text-dtheme font-med"><span class="num">1</span>Dip the test strip in urine for 15 seconds.</span>
      </div>
    </div>
    <div class="inito-step">
      <div class="video-con">
        <span class="num" style={{ background: '#96CDD7'}}>2</span>
        <video autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Insert strip into the monitor" playsinline="true" src="https://cdn.inito.com/inito_website/step2.mp4"></video>
      </div>
      <div class="data-con">
        <span class="data text-dtheme font-med"><span class="num">2</span>Attach the Inito Fertility Monitor to your iPhone*.</span>
      </div>
    </div>
    <div class="inito-monitor-support">
      * The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.
    </div>

    <div class="inito-step">
      <div class="video-con">
        <span class="num" style={{ background: '#64B4C3' }}>3</span>
        <video autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Identify up to 6 fertile days" playsinline="true" src="https://cdn.inito.com/inito_website/step3.mp4"></video>
      </div>
      <div class="data-con">
        <span class="data text-dtheme font-med"><span class="num">3</span>Insert the test strip into the Inito Fertility Monitor.</span>
      </div>
    </div>
    <div class="inito-step">
      <div class="video-con">
        <span class="num">4</span>
        <video autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Identify up to 6 fertile days" playsinline="true" src="https://cdn.inito.com/inito_website/step4.mp4"></video>
      </div>
      <div class="data-con">
        <span class="data text-dtheme font-med"><span class="num">4</span>Get personalized results on our App in 10 minutes.</span>
      </div>
    </div>
  </div>
</section>
    </>;
};

export default Usage;
