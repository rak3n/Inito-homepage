import React from 'react';
import Stars from '../../components/Stars';

const Reviews = () => {
  return (
    <>
      <section class="user-reviews" id="user-reviews-carousal">
        <div class="review-container slick-initialized slick-slider slick-dotted">
          <div class="slick-list draggable">
            <div class="slick-track" style={{ opacity: 1, width: '11704px', transform: 'translate3d(-1064px, 0px, 0px)' }}>
              <div class="user-review slick-slide slick-cloned" tabindex="-1" role="tabpanel" aria-describedby="slick-slide-control04" style={{ width: '1024px' }} data-slick-index="-1" aria-hidden="true">
              </div>
              <div class="user-review slick-slide" tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" style={{ width: '1024px' }} data-slick-index="1" aria-hidden="true">
                <div class="user-review__card">
                  <div class="user-review__rating">
                    < Stars className="user-rating"></Stars>
                  </div>
                  <div class="user-review__data">
                    <p class="text font-reg">
                      I wish I had used this sooner. Don’t waste your money on other OPK tests.
                      This system is more accurate and monitors 4 key hormones that effect ovulation.
                      The other cheaper brands can not do this. It gives you a better insight on your
                      body’s hormone fluctuations during a cycle and where any possible problems with
                      conception could be coming from. It is worth the investment and can save you time
                      on identifying fertility issues and help you get pregnant faster.
                    </p>
                    <div class="card-username">
                      Gonzales
                    </div>
                  </div>
                </div>
                <div class="data-username">
                  Gonzales
                </div>
              </div>
            </div>
          </div>

          <ul class="g-gallery-pagination" style={{ display: "flex" }} role="tablist">
            <li class="slick-active" role="presentation"></li>
            <li role="presentation" class=""></li>
            <li role="presentation" class=""></li>
            <li role="presentation" class=""></li>
            <li role="presentation" class=""></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Reviews;
