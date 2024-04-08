
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function CategorySlider() {
    return (
        <section className="tp-product-category pt-60 pb-15">
            <div className="container">
                <div className="row ">
                    <Swiper
                        spaceBetween={20}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 0
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 0
                            },
                        }}>
                        <SwiperSlide>
                            <div className="col">
                                <div className="tp-product-category-item text-center mb-40">
                                    <div className="tp-product-category-thumb fix">
                                        <a href="shop-category.html">
                                            <img src="images/product-cat-1.png" alt="product-category" />
                                        </a>
                                    </div>
                                    <div className="tp-product-category-content">
                                        <h3 className="tp-product-category-title">
                                            <a href="!#">Headphones</a>
                                        </h3>
                                        <p>20 Product</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col">
                                <div className="tp-product-category-item text-center mb-40">
                                    <div className="tp-product-category-thumb fix">
                                        <a href="shop-category.html">
                                            <img src="images/product-cat-1.png" alt="product-category" />
                                        </a>
                                    </div>
                                    <div className="tp-product-category-content">
                                        <h3 className="tp-product-category-title">
                                            <a href="!#">Headphones</a>
                                        </h3>
                                        <p>20 Product</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col">
                                <div className="tp-product-category-item text-center mb-40">
                                    <div className="tp-product-category-thumb fix">
                                        <a href="shop-category.html">
                                            <img src="images/product-cat-1.png" alt="product-category" />
                                        </a>
                                    </div>
                                    <div className="tp-product-category-content">
                                        <h3 className="tp-product-category-title">
                                            <a href="!#">Headphones</a>
                                        </h3>
                                        <p>20 Product</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col">
                                <div className="tp-product-category-item text-center mb-40">
                                    <div className="tp-product-category-thumb fix">
                                        <a href="shop-category.html">
                                            <img src="images/product-cat-1.png" alt="product-category" />
                                        </a>
                                    </div>
                                    <div className="tp-product-category-content">
                                        <h3 className="tp-product-category-title">
                                            <a href="!#">Headphones</a>
                                        </h3>
                                        <p>20 Product</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col">
                                <div className="tp-product-category-item text-center mb-40">
                                    <div className="tp-product-category-thumb fix">
                                        <a href="shop-category.html">
                                            <img src="images/product-cat-1.png" alt="product-category" />
                                        </a>
                                    </div>
                                    <div className="tp-product-category-content">
                                        <h3 className="tp-product-category-title">
                                            <a href="!#">Headphones</a>
                                        </h3>
                                        <p>20 Product</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col">
                                <div className="tp-product-category-item text-center mb-40">
                                    <div className="tp-product-category-thumb fix">
                                        <a href="shop-category.html">
                                            <img src="images/product-cat-1.png" alt="product-category" />
                                        </a>
                                    </div>
                                    <div className="tp-product-category-content">
                                        <h3 className="tp-product-category-title">
                                            <a href="!#">Headphones</a>
                                        </h3>
                                        <p>20 Product</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

    )
}
