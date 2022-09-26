const ClubStuff = () => {
    return (
        <section className="main-club-stuff">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="soccer-h4">club stuff</h4>
                        <ul className="player-filters" role="tablist">
                            <li className="active">
                                <a
                                    href="#managers"
                                    role="tab"
                                    data-toggle="tab"
                                >
                                    Managers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#firstteam"
                                    role="tab"
                                    data-toggle="tab"
                                >
                                    First team
                                </a>
                            </li>
                            <li>
                                <a href="#academy" role="tab" data-toggle="tab">
                                    Academy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="tab-content">
                <div className="tab-pane active" id="managers" role="tabpanel">
                    <div
                        id="managers_carousel"
                        className="carousel slide main-stuff-slider"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Marshman
                                                        </span>
                                                        <span className="position">
                                                            Left Forward
                                                        </span>
                                                        <span className="number">
                                                            14
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/stuff-person.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Marshman
                                                        </span>
                                                        <span className="position">
                                                            Left Midfielder
                                                        </span>
                                                        <span className="number">
                                                            8
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-2.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Marshman
                                                        </span>
                                                        <span className="position">
                                                            Central Attacking
                                                            Midfielder
                                                        </span>
                                                        <span className="number">
                                                            7
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-3.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Marshman
                                                        </span>
                                                        <span className="position">
                                                            Left Forward
                                                        </span>
                                                        <span className="number">
                                                            14
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-3.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Marshman
                                                        </span>
                                                        <span className="position">
                                                            Left Midfielder
                                                        </span>
                                                        <span className="number">
                                                            8
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-2.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Marshman
                                                        </span>
                                                        <span className="position">
                                                            Central Attacking
                                                            Midfielder
                                                        </span>
                                                        <span className="number">
                                                            7
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/stuff-person.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="nav-arrow left-arrow"
                                href="#managers_carousel"
                                role="button"
                                data-slide="prev"
                            >
                                <i
                                    className="fa fa-angle-left"
                                    aria-hidden="true"
                                ></i>
                                <span className="sr-only"></span>
                            </a>
                            <a
                                className="nav-arrow right-arrow"
                                href="#managers_carousel"
                                role="button"
                                data-slide="next"
                            >
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                ></i>
                                <span className="sr-only"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="tab-pane" id="academy" role="tabpanel">
                    <div
                        id="academy_carousel"
                        className="carousel slide main-stuff-slider"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Vito
                                                            <br />
                                                            Palet
                                                        </span>
                                                        <span className="position">
                                                            Left Forward
                                                        </span>
                                                        <span className="number">
                                                            14
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-2.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Melet
                                                        </span>
                                                        <span className="position">
                                                            Left Midfielder
                                                        </span>
                                                        <span className="number">
                                                            8
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/stuff-person.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Marse
                                                        </span>
                                                        <span className="position">
                                                            Central Attacking
                                                            Midfielder
                                                        </span>
                                                        <span className="number">
                                                            7
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-3.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Marsan
                                                        </span>
                                                        <span className="position">
                                                            Left Forward
                                                        </span>
                                                        <span className="number">
                                                            14
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-3.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Luscas
                                                            <br />
                                                            Mars
                                                        </span>
                                                        <span className="position">
                                                            Left Midfielder
                                                        </span>
                                                        <span className="number">
                                                            8
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-2.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Mafo
                                                        </span>
                                                        <span className="position">
                                                            Central Attacking
                                                            Midfielder
                                                        </span>
                                                        <span className="number">
                                                            7
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/stuff-person.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="nav-arrow left-arrow"
                                href="#academy_carousel"
                                role="button"
                                data-slide="prev"
                            >
                                <i
                                    className="fa fa-angle-left"
                                    aria-hidden="true"
                                ></i>
                                <span className="sr-only"></span>
                            </a>
                            <a
                                className="nav-arrow right-arrow"
                                href="#academy_carousel"
                                role="button"
                                data-slide="next"
                            >
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                ></i>
                                <span className="sr-only"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="tab-pane" id="firstteam" role="tabpanel">
                    <div
                        id="firstteam_carousel"
                        className="carousel slide main-stuff-slider"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            James
                                                            <br />
                                                            Deshon
                                                        </span>
                                                        <span className="position">
                                                            Left Forward
                                                        </span>
                                                        <span className="number">
                                                            14
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/stuff-person.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Deshon
                                                            <br />
                                                            James
                                                        </span>
                                                        <span className="position">
                                                            Left Midfielder
                                                        </span>
                                                        <span className="number">
                                                            8
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/stuff-person.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            James
                                                            <br />
                                                            Deshon
                                                        </span>
                                                        <span className="position">
                                                            Central Attacking
                                                            Midfielder
                                                        </span>
                                                        <span className="number">
                                                            7
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-3.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucas
                                                            <br />
                                                            Marsh
                                                        </span>
                                                        <span className="position">
                                                            Left Forward
                                                        </span>
                                                        <span className="number">
                                                            14
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-3.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Luca
                                                            <br />
                                                            Mas
                                                        </span>
                                                        <span className="position">
                                                            Left Midfielder
                                                        </span>
                                                        <span className="number">
                                                            8
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/player-2.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="staff-item">
                                                <a href="staff.html">
                                                    <span className="info">
                                                        <span className="name">
                                                            Lucasoto
                                                            <br />
                                                            Marsh
                                                        </span>
                                                        <span className="position">
                                                            Central Attacking
                                                            Midfielder
                                                        </span>
                                                        <span className="number">
                                                            7
                                                        </span>
                                                    </span>
                                                    <img
                                                        src="images/soccer/stuff-person.jpg"
                                                        alt="person-slider"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="nav-arrow left-arrow"
                                href="#firstteam_carousel"
                                role="button"
                                data-slide="prev"
                            >
                                <i
                                    className="fa fa-angle-left"
                                    aria-hidden="true"
                                ></i>
                                <span className="sr-only"></span>
                            </a>
                            <a
                                className="nav-arrow right-arrow"
                                href="#firstteam_carousel"
                                role="button"
                                data-slide="next"
                            >
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                ></i>
                                <span className="sr-only"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClubStuff;
