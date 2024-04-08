

export default function MainHeader(props) {
    return (
        <header>
            <div className="tp-header-area p-relative z-index-11">
                {/* header top start  */}
                <div className="tp-header-top black-bg p-relative z-index-1 d-none d-md-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="tp-header-welcome d-flex align-items-center">
                                    <span>
                                        <svg
                                            width={22}
                                            height={19}
                                            viewBox="0 0 22 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.6364 1H1V12.8182H14.6364V1Z"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M14.6364 5.54545H18.2727L21 8.27273V12.8182H14.6364V5.54545Z"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5.0909 17.3636C6.3461 17.3636 7.36363 16.3461 7.36363 15.0909C7.36363 13.8357 6.3461 12.8182 5.0909 12.8182C3.83571 12.8182 2.81818 13.8357 2.81818 15.0909C2.81818 16.3461 3.83571 17.3636 5.0909 17.3636Z"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16.9091 17.3636C18.1643 17.3636 19.1818 16.3461 19.1818 15.0909C19.1818 13.8357 18.1643 12.8182 16.9091 12.8182C15.6539 12.8182 14.6364 13.8357 14.6364 15.0909C14.6364 16.3461 15.6539 17.3636 16.9091 17.3636Z"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <p>FREE Express Shipping On Orders $570+</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tp-header-top-right d-flex align-items-center justify-content-end">
                                    <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
                                        <div className="tp-header-top-menu-item tp-header-lang">
                                            <span
                                                className="tp-header-lang-toggle"
                                                id="tp-header-lang-toggle"
                                            >
                                                English
                                            </span>
                                            <ul>
                                                <li>
                                                    <a href="#">Spanish</a>
                                                </li>
                                                <li>
                                                    <a href="#">Russian</a>
                                                </li>
                                                <li>
                                                    <a href="#">Portuguese</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tp-header-top-menu-item tp-header-currency">
                                            <span
                                                className="tp-header-currency-toggle"
                                                id="tp-header-currency-toggle"
                                            >
                                                USD
                                            </span>
                                            <ul>
                                                <li>
                                                    <a href="#">EUR</a>
                                                </li>
                                                <li>
                                                    <a href="#">CHF</a>
                                                </li>
                                                <li>
                                                    <a href="#">GBP</a>
                                                </li>
                                                <li>
                                                    <a href="#">KWD</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tp-header-top-menu-item tp-header-setting">
                                            <span
                                                className="tp-header-setting-toggle"
                                                id="tp-header-setting-toggle"
                                            >
                                                Setting
                                            </span>
                                            <ul>
                                                <li>
                                                    <a href="profile.html">My Profile</a>
                                                </li>
                                                <li>
                                                    <a href="wishlist.html">Wishlist</a>
                                                </li>
                                                <li>
                                                    <a href="cart.html">Cart</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header main start */}
                <div className="tp-header-main tp-header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                                <div className="logo">
                                    <a href="!#">
                                        <img src="../../assets/images/logo.svg" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                                <div className="tp-header-search pl-70">
                                    <form action="#">
                                        <div className="tp-header-search-wrapper d-flex align-items-center">
                                            <div className="tp-header-search-box">
                                                <input type="text" placeholder="Search for Products..." />
                                            </div>

                                            <div className="tp-header-search-btn">
                                                <button type="submit">
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M19 19L14.65 14.65"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3 col-md-8 col-6">
                                <div className="tp-header-main-right d-flex align-items-center justify-content-end">
                                    <div className="tp-header-login d-none d-lg-block">
                                        <a href="profile.html" className="d-flex align-items-center">
                                            <div className="tp-header-login-icon">
                                                <span>
                                                    <svg
                                                        width={17}
                                                        height={21}
                                                        viewBox="0 0 17 21"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="8.57894"
                                                            cy="5.77803"
                                                            r="4.77803"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M1.00002 17.2014C0.998732 16.8655 1.07385 16.5337 1.2197 16.2311C1.67736 15.3158 2.96798 14.8307 4.03892 14.611C4.81128 14.4462 5.59431 14.336 6.38217 14.2815C7.84084 14.1533 9.30793 14.1533 10.7666 14.2815C11.5544 14.3367 12.3374 14.4468 13.1099 14.611C14.1808 14.8307 15.4714 15.27 15.9291 16.2311C16.2224 16.8479 16.2224 17.564 15.9291 18.1808C15.4714 19.1419 14.1808 19.5812 13.1099 19.7918C12.3384 19.9634 11.5551 20.0766 10.7666 20.1304C9.57937 20.2311 8.38659 20.2494 7.19681 20.1854C6.92221 20.1854 6.65677 20.1854 6.38217 20.1304C5.59663 20.0773 4.81632 19.9641 4.04807 19.7918C2.96798 19.5812 1.68652 19.1419 1.2197 18.1808C1.0746 17.8747 0.999552 17.5401 1.00002 17.2014Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="tp-header-login-content d-none d-xl-block">
                                                <span>Hello, Sign In</span>
                                                <h5 className="tp-header-login-title">Your Account</h5>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tp-header-action d-flex align-items-center ml-50">
                                        <div className="tp-header-action-item d-none d-lg-block">
                                            <a href="wishlist.html" className="tp-header-action-btn">
                                                <svg
                                                    width={22}
                                                    height={20}
                                                    viewBox="0 0 22 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <span className="tp-header-action-badge">4</span>
                                            </a>
                                        </div>
                                        <div className="tp-header-action-item">
                                            <button
                                                type="button"
                                                className="tp-header-action-btn cartmini-open-btn"
                                                onClick={() => props.setOpenCart('cartmini-opened')}
                                            >
                                                <svg
                                                    width={21}
                                                    height={22}
                                                    viewBox="0 0 21 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M7.70365 10.1018H7.74942"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M13.5343 10.1018H13.5801"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <span className="tp-header-action-badge">13</span>
                                            </button>
                                        </div>
                                        <div className="tp-header-action-item d-lg-none">
                                            <button
                                                type="button"
                                                className="tp-header-action-btn tp-offcanvas-open-btn"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={30}
                                                    height={16}
                                                    viewBox="0 0 30 16"
                                                >
                                                    <rect x={10} width={20} height={2} fill="currentColor" />
                                                    <rect
                                                        x={5}
                                                        y={7}
                                                        width={25}
                                                        height={2}
                                                        fill="currentColor"
                                                    />
                                                    <rect
                                                        x={10}
                                                        y={14}
                                                        width={20}
                                                        height={2}
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header bottom start */}
                <div className="tp-header-bottom tp-header-bottom-border d-none d-lg-block">
                    <div className="container">
                        <div className="tp-mega-menu-wrapper p-relative">
                            <div className="row align-items-center">
                                <div className="col-xl-9 col-lg-9">
                                    <div className="main-menu menu-style-1">
                                        <nav className="tp-main-menu-content">
                                            <ul>
                                                <li className="">
                                                    <a href="!#">Home</a>
                                                </li>
                                                <li className="">
                                                    <a href="!#">Shop</a>
                                                </li>
                                                <li className="has-dropdown has-mega-menu ">
                                                    <a href="!#">Products</a>
                                                    <ul className="tp-submenu tp-mega-menu mega-menu-style-2">
                                                        {/* first col */}
                                                        <li className="has-dropdown">
                                                            <a href="!#" className="mega-menu-title">
                                                                Shop Page
                                                            </a>
                                                            <ul className="tp-submenu">
                                                                <li>
                                                                    <a href="!#">Only Categories</a>
                                                                </li>

                                                            </ul>
                                                        </li>
                                                        {/* third col */}
                                                        <li className="has-dropdown">
                                                            <a
                                                                href="product-details.html"
                                                                className="mega-menu-title"
                                                            >
                                                                Products
                                                            </a>
                                                            <ul className="tp-submenu">
                                                                <li>
                                                                    <a href="!#">Product Simple</a>
                                                                </li>

                                                            </ul>
                                                        </li>
                                                        {/* third col */}
                                                        <li className="has-dropdown">
                                                            <a href="!#" className="mega-menu-title">
                                                                eCommerce
                                                            </a>
                                                            <ul className="tp-submenu">
                                                                <li>
                                                                    <a href="!#">Shopping Cart</a>
                                                                </li>

                                                            </ul>
                                                        </li>
                                                        {/* second col */}
                                                        <li className="has-dropdown">
                                                            <a href="!#" className="mega-menu-title">
                                                                More Pages
                                                            </a>
                                                            <ul className="tp-submenu">
                                                                <li>
                                                                    <a href="!#">About</a>
                                                                </li>

                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="!#">Coupons</a>
                                                </li>

                                                <li>
                                                    <a href="!#">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="!#">Contact Us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="tp-header-contact d-flex align-items-center justify-content-end">
                                        <div className="tp-header-contact-icon">
                                            <span>
                                                <svg
                                                    width={21}
                                                    height={20}
                                                    viewBox="0 0 21 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M1.96977 3.24859C2.26945 2.75144 3.92158 0.946726 5.09889 1.00121C5.45111 1.03137 5.76246 1.24346 6.01544 1.49057H6.01641C6.59631 2.05874 8.26011 4.203 8.35352 4.65442C8.58411 5.76158 7.26378 6.39979 7.66756 7.5157C8.69698 10.0345 10.4707 11.8081 12.9908 12.8365C14.1058 13.2412 14.7441 11.9219 15.8513 12.1515C16.3028 12.2459 18.4482 13.9086 19.0155 14.4894V14.4894C19.2616 14.7414 19.4757 15.0537 19.5049 15.4059C19.5487 16.6463 17.6319 18.3207 17.2583 18.5347C16.3767 19.1661 15.2267 19.1544 13.8246 18.5026C9.91224 16.8749 3.65985 10.7408 2.00188 6.68096C1.3675 5.2868 1.32469 4.12906 1.96977 3.24859Z"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M12.936 1.23685C16.4432 1.62622 19.2124 4.39253 19.6065 7.89874"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M12.936 4.59337C14.6129 4.92021 15.9231 6.23042 16.2499 7.90726"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="tp-header-contact-content">
                                            <h5>Hotline:</h5>
                                            <p>
                                                <a href="tel:402-763-282-46">+(402) 763 282 46</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
