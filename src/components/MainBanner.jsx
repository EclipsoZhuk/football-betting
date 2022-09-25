const MainBanner = () => {
    return (
        <div class="main-slider-section">
            <div class="main-slider">
                <div
                    id="main-slider"
                    class="carousel slide"
                    data-ride="carousel"
                    data-interval="4000"
                >
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <div class="main-slider-caption">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="match-date">
                                                26 Sep 2016 / 9:30 PM / city
                                                arena
                                            </div>
                                            <div class="team">
                                                Team Name 1
                                                <div class="big-count">2:0</div>
                                                Team Name 2
                                            </div>
                                            <div class="booking">
                                                <a href="matches-list.html">
                                                    {' '}
                                                    Match Page{' '}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="main-slider-caption">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="match-date">
                                                26 Sep 2016 / 9:30 PM / city
                                                arena
                                            </div>
                                            <div class="team">
                                                Team Name 1 - Team Name 2
                                            </div>
                                            <div
                                                class="counter"
                                                data-date="1534185200000"
                                            >
                                                <ul>
                                                    <li>
                                                        <div class="digit days"></div>
                                                        <div class="descr">
                                                            Days
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="digit hours"></div>
                                                        <div class="descr">
                                                            Hours
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="digit minutes"></div>
                                                        <div class="descr">
                                                            Minutes
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="digit seconds"></div>
                                                        <div class="descr">
                                                            Seconds
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="booking">
                                                <a href="match-live.html">
                                                    {' '}
                                                    Watch live{' '}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="main-slider-caption">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="match-date">
                                                26 Sep 2016 / 9:30 PM / city
                                                arena
                                            </div>
                                            <div class="team">
                                                Team Name 1
                                                <div class="big-count">2:0</div>
                                                Team Name 2
                                            </div>
                                            <div class="booking">
                                                <a href="match-live.html">
                                                    {' '}
                                                    Watch live{' '}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a
                        class="nav-arrow left-arrow"
                        href="#main-slider"
                        role="button"
                        data-slide="prev"
                    >
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                        <span class="sr-only"></span>
                    </a>
                    <a
                        class="nav-arrow right-arrow"
                        href="#main-slider"
                        role="button"
                        data-slide="next"
                    >
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <span class="sr-only"></span>
                    </a>

                    <div class="event-nav">
                        <div class="container">
                            <div class="row no-gutter carousel-indicators">
                                <div
                                    class="col-sm-4 active"
                                    data-slide-to="0"
                                    data-target="#main-slider"
                                >
                                    <a href="#" class="nav-item">
                                        <span class="championship">
                                            National cup - quarterfinal
                                        </span>
                                        <span class="teams-wrap">
                                            <span class="team">
                                                <img
                                                    src="images/soccer/team-logo1.png"
                                                    alt="team-logo"
                                                />
                                            </span>
                                            <span class="score">
                                                <span>1:0</span>
                                            </span>

                                            <span class="team1">
                                                <span>
                                                    <img
                                                        src="images/soccer/team-logo2.png"
                                                        alt="team-logo"
                                                    />
                                                </span>
                                            </span>
                                        </span>
                                        <span class="game-result">
                                            (5-4) penalties
                                        </span>
                                    </a>
                                </div>

                                <div
                                    class="col-sm-4"
                                    data-slide-to="1"
                                    data-target="#main-slider"
                                >
                                    <a href="#" class="nav-item">
                                        <span class="championship">
                                            Team Name 1 - Team Name 2
                                        </span>
                                        <span class="teams-wrap">
                                            <span class="team">
                                                <img
                                                    src="images/soccer/team-logo5.png"
                                                    alt="team-logo"
                                                />
                                            </span>
                                            <span
                                                class="score countdown"
                                                data-date="1534185200000"
                                            >
                                                <span class="days"></span>
                                                <span class="hours"></span>
                                                <span class="minutes"></span>
                                                <span class="seconds"></span>
                                            </span>

                                            <span class="team1">
                                                <span>
                                                    <img
                                                        src="images/soccer/team-logo1.png"
                                                        alt="team-logo"
                                                    />
                                                </span>
                                            </span>
                                        </span>
                                        <span class="game-result">
                                            26 Sep 2016 / 9:30 PM / city arena
                                        </span>
                                    </a>
                                </div>

                                <div
                                    class="col-sm-4"
                                    data-slide-to="2"
                                    data-target="#main-slider"
                                >
                                    <a href="#" class="nav-item">
                                        <span class="championship">
                                            National cup - quarterfinal
                                        </span>
                                        <span class="teams-wrap">
                                            <span class="team">
                                                <img
                                                    src="images/soccer/team-logo3.png"
                                                    alt="team-logo"
                                                />
                                            </span>
                                            <span class="score">
                                                <span>VS</span>
                                            </span>

                                            <span class="team1">
                                                <span>
                                                    <img
                                                        src="images/soccer/team-logo4.png"
                                                        alt="team-logo"
                                                    />
                                                </span>
                                            </span>
                                        </span>
                                        <span class="game-result">
                                            (5-4) penalties
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;
