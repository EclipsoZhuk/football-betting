const BreakingNews = () => {
    return (
        <section className="main-breaking-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-3 col-xs-12">
                        <div className="break-title">
                            <span>Breaking news</span>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-9 col-xs-12">
                        <div
                            id="main-breaking-list"
                            className="carousel slide main-breaking-list"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <a href="news.html" className=" ">
                                        <span className="date">
                                            {' '}
                                            17 April 2017<span>/</span>{' '}
                                        </span>
                                        <span className="news">
                                            Curabitur id tellus mi. In laoreet
                                            lacinia luctus.
                                        </span>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="news.html" className=" ">
                                        <span className="date">
                                            {' '}
                                            17 April 2017<span>/</span>{' '}
                                        </span>
                                        <span className="news">
                                            Quisque ante lacus, fermentum et
                                            ante ultrices, accumsan blandit
                                            magna.
                                        </span>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="news.html" className=" ">
                                        <span className="date">
                                            {' '}
                                            17 April 2017<span>/</span>{' '}
                                        </span>
                                        <span className="news">
                                            Sed tincidunt placerat viverra.
                                        </span>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="news.html" className=" ">
                                        <span className="date">
                                            {' '}
                                            17 April 2017<span>/</span>{' '}
                                        </span>
                                        <span className="news">
                                            Acts of the week
                                        </span>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="news.html" className=" ">
                                        <span className="date">
                                            {' '}
                                            17 April 2017<span>/</span>{' '}
                                        </span>
                                        <span className="news">
                                            Nullam feugiat tortor at luctus
                                            ultrices.
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="arrow-wrap">
                                <a
                                    className="nav-arrow left-arrow"
                                    href="#main-breaking-list"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <i
                                        className="fa fa-caret-left"
                                        aria-hidden="true"
                                    ></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="nav-arrow right-arrow"
                                    href="#main-breaking-list"
                                    role="button"
                                    data-slide="next"
                                >
                                    <i
                                        className="fa fa-caret-right"
                                        aria-hidden="true"
                                    ></i>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreakingNews;
