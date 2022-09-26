const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper-overfllow">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="footer-left">
                                <div className="wrap">
                                    <a
                                        href="index-2.html"
                                        className="foot-logo"
                                    >
                                        <img
                                            src="images/soccer/footer-logo.png"
                                            alt="footer-logo"
                                        />
                                    </a>
                                    <p>
                                        Activated charcoal trust fund ugh prism
                                        af, beard marfa air plant stumptown
                                        gastropub farm-to-table jianbing.
                                    </p>
                                    <ul className="foot-left-menu">
                                        <li>
                                            <a href="staff.html">First team</a>
                                        </li>
                                        <li>
                                            <a href="staff.html">Second team</a>
                                        </li>
                                        <li>
                                            <a href="amateurs.html">Amateurs</a>
                                        </li>
                                        <li>
                                            <a href="donations.html">
                                                Donation
                                            </a>
                                        </li>
                                        <li>
                                            <a href="trophies.html">trophies</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-lg-offset-1">
                            <div className="foot-news">
                                <h4>Recent news</h4>
                                <div className="item">
                                    <a href="news.html" className="image">
                                        <img
                                            className="img-responsive"
                                            src="images/soccer/foot-news-img.jpg"
                                            alt="news-image"
                                        />
                                    </a>
                                    <a href="news.html" className="name">
                                        When somersaulting Sanchez shouldered
                                        Mexico’s hopes
                                    </a>
                                    <a href="news.html" className="date">
                                        25 Sep 2016
                                    </a>
                                    <span className="separator">in</span>
                                    <a href="news.html" className="category">
                                        Highlights
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="foot-contact">
                                <h4>Contact us</h4>
                                <ul className="contact-list">
                                    <li>
                                        <i
                                            className="fa fa-flag"
                                            aria-hidden="true"
                                        ></i>
                                        <span>
                                            276 Upper Parliament Street,
                                            Liverpool L8, Great Britain
                                        </span>
                                    </li>
                                    <li>
                                        <i
                                            className="fa fa-envelope"
                                            aria-hidden="true"
                                        ></i>
                                        <a href="mailto:team@email.com">
                                            team@email.com
                                        </a>
                                    </li>
                                    <li className="phone">
                                        <i
                                            className="fa fa-phone"
                                            aria-hidden="true"
                                        ></i>
                                        <span>+61 3 8376 6284</span>
                                    </li>
                                </ul>
                                <ul className="socials">
                                    <li>
                                        <a href="#">
                                            <i
                                                className="fa fa-facebook-square"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i
                                                className="fa fa-google"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i
                                                className="fa fa-pinterest"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i
                                                className="fa fa-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-menu-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="footer-menu">
                                <li className="active">
                                    <a href="index-2.html">
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="matches.html">
                                        <span>Matches</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="staff.html">
                                        <span>Team</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="news.html">
                                        <span>News</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="store.html">
                                        <span>Store</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="contacts.html">
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                            <a href="#top" className="foot-up">
                                <span>
                                    up{' '}
                                    <i
                                        className="fa fa-caret-up"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="copyrights">
                                <a
                                    target="_blank"
                                    href="https://www.templateshub.net"
                                >
                                    Templates Hub
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="created"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
