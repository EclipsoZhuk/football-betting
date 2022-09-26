const TeamStore = () => {
    return (
        <section className="main-team-store">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Team Store</h4>
                    </div>
                    <div className="col-md-10 col-xs-9">
                        <ul className="tab-filters">
                            <li className="active">
                                <a data-toggle="tab" href="#new">
                                    New
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#hotdeals">
                                    hot deals
                                </a>
                            </li>
                            <li>
                                <a data-toggle="tab" href="#officialapparel">
                                    Official apparel
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-xs-3 text-right">
                        <a id="show-all-link" href="store.html">
                            Show all
                        </a>
                    </div>
                </div>
            </div>

            <div className="main-store-list">
                <div className="container">
                    <div className="tab-content">
                        <div id="new" className="tab-pane fade in active">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <span className="store-badge hot">
                                                    hot
                                                </span>
                                                <img
                                                    src="images/common/store-item-img.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's T-Shirt Elite
                                                </span>
                                                <span className="price">
                                                    £ 80
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <span className="store-badge new">
                                                    new
                                                </span>
                                                <img
                                                    src="images/common/product-3.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's Long-Sleeve Running{' '}
                                                </span>
                                                <span className="price">
                                                    £ 155
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <img
                                                    src="images/common/product-2.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's T-Shirt{' '}
                                                </span>
                                                <span className="price">
                                                    £ 155
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <img
                                                    src="images/common/product-4.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's Long-Sleeve Running{' '}
                                                </span>
                                                <span className="price">
                                                    £ 155
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="hotdeals" className="tab-pane fade">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <span className="store-badge hot">
                                                    hot
                                                </span>
                                                <img
                                                    src="images/common/store-item-img.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's T-Shirt Elite
                                                </span>
                                                <span className="price">
                                                    £ 80
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <span className="store-badge new">
                                                    new
                                                </span>
                                                <img
                                                    src="images/common/product-3.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's Long-Sleeve Running{' '}
                                                </span>
                                                <span className="price">
                                                    £ 155
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <img
                                                    src="images/common/product-2.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's T-Shirt{' '}
                                                </span>
                                                <span className="price">
                                                    £ 155
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <img
                                                    src="images/common/product-4.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's Long-Sleeve Running{' '}
                                                </span>
                                                <span className="price">
                                                    £ 155
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="officialapparel" className="tab-pane fade">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <span className="store-badge hot">
                                                    hot
                                                </span>
                                                <img
                                                    src="images/common/store-item-img.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's T-Shirt Elite
                                                </span>
                                                <span className="price">
                                                    £ 80
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <span className="store-badge new">
                                                    new
                                                </span>
                                                <img
                                                    src="images/common/product-3.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's Long-Sleeve Running{' '}
                                                </span>
                                                <span className="price">
                                                    £ 155
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <img
                                                    src="images/common/product-2.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's T-Shirt{' '}
                                                </span>
                                                <span className="price">
                                                    £ 155
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="store-list-item">
                                        <div>
                                            <a href="product.html">
                                                <img
                                                    src="images/common/product-4.jpg"
                                                    alt="product-image"
                                                />
                                            </a>
                                            <div className="info">
                                                <span className="name">
                                                    Men's Long-Sleeve Running{' '}
                                                </span>
                                                <span className="price">
                                                    £ 155
                                                </span>
                                                <div className="btn-wrap">
                                                    <button className="btn small">
                                                        add to cart
                                                    </button>
                                                    <button className="btn small">
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-sponsor-slider-background">
                <div
                    id="main-sponsor-slider"
                    className="carousel slide main-sponsor-slider"
                    data-ride="carousel"
                >
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-4 text-center">
                                        <img
                                            className="sponsor-icons"
                                            src="images/common/sponsor-img.png"
                                            alt="sponsor-image"
                                        />
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <img
                                            className="sponsor-icons"
                                            src="images/common/sponsor-img1.png"
                                            alt="sponsor-image"
                                        />
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <img
                                            className="sponsor-icons dota-csgo-image"
                                            src="images/common/sponsor-img2.png"
                                            alt="sponsor-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-4 text-center">
                                        <img
                                            className="sponsor-icons"
                                            src="images/common/sponsor-img.png"
                                            alt="sponsor-image"
                                        />
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <img
                                            className="sponsor-icons"
                                            src="images/common/sponsor-img1.png"
                                            alt="sponsor-image"
                                        />
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <img
                                            className="sponsor-icons dota-csgo-image"
                                            src="images/common/sponsor-img2.png"
                                            alt="sponsor-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            className="nav-arrow left-arrow"
                            href="#main-sponsor-slider"
                            role="button"
                            data-slide="prev"
                        >
                            <i
                                className="fa fa-angle-left"
                                aria-hidden="true"
                            ></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="nav-arrow right-arrow"
                            href="#main-sponsor-slider"
                            role="button"
                            data-slide="next"
                        >
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamStore;
