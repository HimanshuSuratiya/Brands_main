import React from "react";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";
import Images from "../../Components/Images/Images";
import "../../Common/Css/common.css";

const NewsPage = () => {
    return (
        <>
            <Menu />
            <div className="tab_content">
                <div className="tab_pane">
                    <section className="container-fluid news-head">
                        <div className="row">
                            <div className="col-12 bg-color">
                                <div className="top container">
                                    <p>{'Top > xxxxxxxxxxxxx'}</p>
                                </div>
                                <div className="brand-img d-flex justify-content-center my-5">
                                    <div className="news">
                                        <img className="img-news" src={Images.News} alt="brand" />
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <ul className="nav nav-tabs nav-fill" role="tablis" id="myTab">
                                                <li className="nav-item">
                                                    <a className="nav-link link-nav active" data-bs-toggle="tab" aria-current="page"
                                                        href="#home"> 新製品はこちら</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link link-nav" data-bs-toggle="tab" href="#content"> 新製品はこちら</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link link-nav" data-bs-toggle="tab" href="#about">新製品はこちら</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link link-nav" data-bs-toggle="tab" href="#help">新製品はこちら</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane fade active show" id="home">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-12 d-flex justify-content-between">
                                                                <div className="first">
                                                                    <div className="image">
                                                                        <img className="img" src={Images.shinmen} alt="" />
                                                                    </div>
                                                                    <h2>Title</h2>
                                                                    <div className="date">0000/00/00</div>
                                                                    <div className="heading">############### 30w</div>
                                                                </div>
                                                                <div className="first">
                                                                    <div className="image">
                                                                        <img className="img" src={Images.shinmen2} alt="" />
                                                                    </div>
                                                                    <h2>Title</h2>
                                                                    <div className="date">0000/00/00</div>
                                                                    <div className="heading">############### 30w</div>
                                                                </div>
                                                                <div className="first">
                                                                    <div className="image">
                                                                        <img className="img" src={Images.Airmour} alt="" />
                                                                    </div>
                                                                    <h2>Title</h2>
                                                                    <div className="date">0000/00/00</div>
                                                                    <div className="heading">############### 30w</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 d-flex justify-content-between">
                                                                <div className="first">
                                                                    <div className="image">
                                                                        <img className="img" src={Images.Boundy} alt="" />
                                                                    </div>
                                                                    <h2>Title</h2>
                                                                    <div className="date">0000/00/00</div>
                                                                    <div className="heading">############### 30w</div>
                                                                </div>
                                                                <div className="first">
                                                                    <div className="image">
                                                                        <img className="img" src={Images.Condition365} alt="" />
                                                                    </div>
                                                                    <h2>Title</h2>
                                                                    <div className="date">0000/00/00</div>
                                                                    <div className="heading">############### 30w</div>
                                                                </div>
                                                                <div className="first">
                                                                    <div className="image">
                                                                        <img className="img" src={Images.building} alt="" />
                                                                    </div>
                                                                    <h2>Title</h2>
                                                                    <div className="date">0000/00/00</div>
                                                                    <div className="heading">############### 30w</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 d-flex justify-content-between">
                                                                <div className="first">
                                                                    <div className="image">
                                                                        <img className="img" src={Images.bannerNever} alt="" />
                                                                    </div>
                                                                    <h2>Title</h2>
                                                                    <div className="date">0000/00/00</div>
                                                                    <div className="heading">############### 30w</div>
                                                                </div>
                                                                <div className="first">
                                                                    <div className="image">
                                                                        <img className="img" src={Images.beyondTheNext} alt="" />
                                                                    </div>
                                                                    <h2>Title</h2>
                                                                    <div className="date">0000/00/00</div>
                                                                    <div className="heading">############### 30w</div>
                                                                </div>
                                                                <div className="first">
                                                                    <div className="image">
                                                                        <img className="img" src={Images.magicalDance} alt="" />
                                                                    </div>
                                                                    <h2>Title</h2>
                                                                    <div className="date">0000/00/00</div>
                                                                    <div className="heading">############### 30w</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bottom-line my-5"></div>
                                                        <nav aria-label="...">
                                                            <ul className="pagination justify-content-center mb-5">
                                                                <li className="page-item disabled">
                                                                    <span className="page-link">Previous</span>
                                                                </li>
                                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                <li className="page-item active" aria-current="page">
                                                                    <span className="page-link">2</span>
                                                                </li>
                                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="content">
                                                    <h3>Two</h3>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                                <div className="tab-pane fade" id="about">
                                                    <h3>Three</h3>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                                <div className="tab-pane fade" id="help">
                                                    <h3>Four</h3>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="container-fluid brands">
                        <Footer brandName="夏のブランド" firstName="夏のブランド" secondName="TEL. 0874-8784-3827 ブラ夏の" />
                    </section>
                </div>
            </div>
        </>
    );
};

export default NewsPage;