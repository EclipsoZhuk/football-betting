const Header = () => {
    return (
        <div className="main-menu-wrap sticky-menu">
            <div className="container">
                <a href="index-2.html" className="custom-logo-link">
                    <img
                        src="images/soccer/logo.png"
                        alt="logo"
                        className="custom-logo"
                    />
                </a>
                <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#team-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <nav className="navbar">
                    <div className="collapse navbar-collapse" id="team-menu">
                        <ul className="main-menu nav">
                            <li className="active">
                                <a href="index-2.html">
                                    <span>Home</span>
                                </a>
                                <ul>
                                    <li>
                                        <a href="amateurs.html">
                                            <span>Amateures Home</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="matches.html">
                                    <span>Matches</span>
                                </a>
                                <ul>
                                    <li>
                                        <a href="standing-cup.html">
                                            <span>
                                                Standings
                                                <i
                                                    className="fa fa-long-arrow-right"
                                                    aria-hidden="true"
                                                ></i>
                                            </span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="standings.html">
                                                    <span>championship</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="club-stats.html">
                                            <span>club stats</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="match-live.html">
                                            <span>match live</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="broadcasts.html">
                                            <span>broadcasts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="upcoming-match.html">
                                            <span>upcoming match</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="championships-archive.html">
                                            <span>
                                                championships archive
                                                <i
                                                    className="fa fa-long-arrow-right"
                                                    aria-hidden="true"
                                                ></i>
                                            </span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="championship.html">
                                                    <span>
                                                        championship information
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="live-text-stream.html">
                                            <span>Text stream</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="staff.html">
                                    <span>Team</span>
                                </a>
                                <ul>
                                    <li>
                                        <a href="player.html">
                                            <span>player first page</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="player-second-page.html">
                                            <span>player second page</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="news.html">
                                    <span>News</span>
                                </a>
                            </li>
                            <li>
                                <a href="news-single.html">
                                    <span>News Single</span>
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
                            <li>
                                <a href="#other">
                                    <span>other</span>
                                </a>
                                <ul>
                                    <li>
                                        <a href="404.html">
                                            <span>404</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="offline.html">
                                            <span>offline</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="coming-soon.html">
                                            <span>comming soon</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="search.html">
                                            <span>search</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="donations.html">
                                            <span>donations</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="trophies.html">
                                            <span>trophies</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about-club.html">
                                            <span>about club</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">
                                            <span>checkout</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="cart full">
                                <a href="#cart">
                                    <span>
                                        <i
                                            className="fa fa-shopping-cart"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                </a>
                                <div className="cart-drop">
                                    <table className="ct">
                                        <tr>
                                            <td className="delete">
                                                <a href="#">
                                                    <i
                                                        className="fa fa-close"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </td>
                                            <td className="info">
                                                <img
                                                    className="product-image"
                                                    src="images/common/cart-product.jpg"
                                                    alt="product-image"
                                                />
                                                <em>
                                                    Men's T-Shirt
                                                    <br />
                                                    <em className="price">
                                                        1 x ?? 60
                                                    </em>
                                                </em>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="delete">
                                                <a href="#">
                                                    <i
                                                        className="fa fa-close"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </td>
                                            <td className="info">
                                                <img
                                                    className="product-image"
                                                    src="images/common/cart-product.jpg"
                                                    alt="product-image"
                                                />
                                                <em>
                                                    Men's T-Shirt
                                                    <br />
                                                    <em className="price">
                                                        1 x ?? 60
                                                    </em>
                                                </em>
                                            </td>
                                        </tr>
                                    </table>
                                    <div className="wrap">
                                        <div className="total-text">
                                            Subtotal:
                                        </div>
                                        <div className="total-digit">?? 120</div>
                                    </div>
                                    <div className="wrap btn-wrap">
                                        <a
                                            href="cart.html"
                                            className="btn view"
                                        >
                                            View cart
                                        </a>
                                        <a
                                            href="checkout.html"
                                            className="btn check"
                                        >
                                            checkout cart
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
