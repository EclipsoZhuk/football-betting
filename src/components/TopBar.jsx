const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 hidden-sm hidden-xs">
                        <div className="top-contacts">
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
                            <ul className="contacts">
                                <li className="phone">
                                    <i
                                        className="fa fa-phone-square"
                                        aria-hidden="true"
                                    ></i>
                                    +61 3 8376 6284
                                </li>
                                <li className="skype">
                                    <a href="callto:team.skype">
                                        <i
                                            className="fa fa-skype"
                                            aria-hidden="true"
                                        ></i>
                                        team.skype
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="top-language">
                            <ul className="list">
                                <li className="dropdown">
                                    <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        <img
                                            src="images/common/en-flag.png"
                                            alt="selected language"
                                        />
                                        EN
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="images/common/fr-flag.png"
                                                    alt="language"
                                                />
                                                FR
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="images/common/en-flag.png"
                                                    alt="language"
                                                />
                                                EN
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="images/common/ru-flag.png"
                                                    alt="language"
                                                />
                                                RU
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="top-search">
                            <form>
                                <input type="text" name="text" />
                                <button>
                                    <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </form>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
