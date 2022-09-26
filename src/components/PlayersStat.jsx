const PlayersStat = () => {
    return (
        <section className="main-players-stat bg-cover">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h4 className="hockey-stats-h4">Players stats</h4>

                        <div className="single-player-stats players_statistic_slider">
                            <ul className="player-filters" role="tablist">
                                <li className="active">
                                    <a
                                        href="#goalkeepers"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        goalkeepers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#defenders"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        defenders
                                    </a>
                                </li>
                            </ul>
                            <div className="player-stat-slider tab-content">
                                <div
                                    id="slider"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <div
                                        className="carousel-inner tab-content"
                                        role="listbox"
                                    >
                                        <div
                                            className="item active tab-pane"
                                            id="goalkeepers"
                                        >
                                            <div className="wrap">
                                                <div className="stat">
                                                    <div className="top-info with_number">
                                                        <div className="number">
                                                            12
                                                        </div>
                                                        <a
                                                            href="player-second-page.html"
                                                            className="name"
                                                        >
                                                            HAYDEN FREEMAN
                                                        </a>
                                                    </div>
                                                    <div className="position">
                                                        Goalkeeper
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <div className="progress-item">
                                                            <div className="bar-label">
                                                                <div className="achievement">
                                                                    played
                                                                </div>
                                                                <div className="score">
                                                                    23
                                                                </div>
                                                            </div>
                                                            <div className="progress-line">
                                                                <div className="bar bar-1"></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-item">
                                                            <div className="bar-label">
                                                                <div className="achievement">
                                                                    saves
                                                                </div>
                                                                <div className="score">
                                                                    23
                                                                </div>
                                                            </div>
                                                            <div className="progress-line">
                                                                <div className="bar bar-2"></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-item">
                                                            <div className="bar-label">
                                                                <div className="achievement">
                                                                    missing
                                                                </div>
                                                                <div className="score">
                                                                    23
                                                                </div>
                                                            </div>
                                                            <div className="progress-line">
                                                                <div className="bar bar-3"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <a
                                                        href="player-second-page.html"
                                                        title="player-image"
                                                    >
                                                        <img
                                                            src="images/soccer/player-stat-slider-img.jpg"
                                                            alt="player-image"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="item tab-pane"
                                            id="defenders"
                                        >
                                            <div className="wrap">
                                                <div className="stat">
                                                    <div className="top-info with_number">
                                                        <div className="number">
                                                            1
                                                        </div>
                                                        <a
                                                            href="player.html"
                                                            className="name"
                                                        >
                                                            JORG BELAFFSOON
                                                        </a>
                                                    </div>
                                                    <div className="top-info">
                                                        <a
                                                            href="player-second-page.html"
                                                            className="name"
                                                        ></a>
                                                    </div>
                                                    <div className="position">
                                                        Defender
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <div className="progress-item">
                                                            <div className="bar-label">
                                                                <div className="achievement">
                                                                    played
                                                                </div>
                                                                <div className="score">
                                                                    23
                                                                </div>
                                                            </div>
                                                            <div className="progress-line">
                                                                <div className="bar bar-4"></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-item">
                                                            <div className="bar-label">
                                                                <div className="achievement">
                                                                    saves
                                                                </div>
                                                                <div className="score">
                                                                    23
                                                                </div>
                                                            </div>
                                                            <div className="progress-line">
                                                                <div className="bar bar-5"></div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-item">
                                                            <div className="bar-label">
                                                                <div className="achievement">
                                                                    missing
                                                                </div>
                                                                <div className="score">
                                                                    23
                                                                </div>
                                                            </div>
                                                            <div className="progress-line">
                                                                <div className="bar bar-6"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <a
                                                        href="player-second-page.html"
                                                        title="player-image"
                                                    >
                                                        <img
                                                            src="images/soccer/player-stat-slider-img.jpg"
                                                            alt="player-image"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="arrow-wrap">
                                            <a
                                                className="nav-arrow left-arrow"
                                                href="#slider"
                                                role="button"
                                                data-slide="prev"
                                            >
                                                <i
                                                    className="fa fa-caret-left"
                                                    aria-hidden="true"
                                                ></i>
                                                <span className="sr-only">
                                                    Previous
                                                </span>
                                            </a>
                                            <a
                                                className="nav-arrow right-arrow"
                                                href="#slider"
                                                role="button"
                                                data-slide="next"
                                            >
                                                <i
                                                    className="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i>
                                                <span className="sr-only">
                                                    Next
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h4 className="hockey-stats-h4">Best players</h4>
                        <div className="team-best-player">
                            <div className="">
                                <ul className="player-filters" role="tablist">
                                    <li className="active">
                                        <a
                                            href="#goals"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            goals
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#assist"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            assist
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div
                                    className="best-players-list tab-pane active"
                                    id="goals"
                                >
                                    <a
                                        href="player-second-page.html"
                                        className="item"
                                    >
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a href="player.html" className="item">
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a
                                        href="player-second-page.html"
                                        className="item"
                                    >
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a href="player.html" className="item">
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a href="player.html" className="item">
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a
                                        href="player-second-page.html"
                                        className="item"
                                    >
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a href="player.html" className="item">
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                </div>
                                <div
                                    className="best-players-list tab-pane"
                                    id="assist"
                                >
                                    <a href="player.html" className="item">
                                        <span className="number">1</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a
                                        href="player-second-page.html"
                                        className="item"
                                    >
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a href="player.html" className="item">
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a href="player.html" className="item">
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a
                                        href="player-second-page.html"
                                        className="item"
                                    >
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a href="player.html" className="item">
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                    <a href="player.html" className="item">
                                        <span className="number">9</span>
                                        <span>Luis Hernandez</span>
                                        <span className="achievement">14</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlayersStat;
