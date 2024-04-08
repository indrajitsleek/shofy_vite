import CategorySlider from "./CategorySlider";
import HeroBanner from "./HeroBanner";

export default function Home() {
  return (
    <>
      <main>
        <section className="tp-slider-area p-relative z-index-1">
          <div className="tp-slider-active tp-slider-variation swiper-container">
            <div className="swiper-wrapper">
              <div className="tp-slider-item tp-slider-height d-flex align-items-center swiper-slide green-dark-bg">
                <HeroBanner />
              </div>
            </div>
          </div>
        </section>
        <CategorySlider />
      </main>
    </>
  )
}
