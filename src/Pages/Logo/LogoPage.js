import React from "react";
import Images from "../../Components/Images/Images";
import "../../Common/Css/common.css";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";

const LogoPage = () => {
    return (
        <div id="top">
            <Menu />
            <div className="tab_content">
                <div id="first-tab" className="tab_pane active">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="carousel-img d-block w-100" src={Images.bannerNever} alt="unsplash" />
                            </div>
                            <div className="carousel-item">
                                <img className="carousel-img d-block w-100" src={Images.beyondTheNext} alt="unsplash" />
                            </div>
                            <div className="carousel-item">
                                <img className="carousel-img d-block w-100" src={Images.slashDontStay} alt="unsplash" />
                            </div>
                            <div className="carousel-item">
                                <img className="carousel-img d-block w-100" src={Images.sHeat} alt="unsplash" />
                            </div>
                            <div className="carousel-item">
                                <img className="carousel-img d-block w-100" src={Images.bannerNever} alt="unsplash" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="up-word">
                        <a className="" href="#bottom">
                            <img src={Images.download} alt="path" />
                        </a>
                    </div>
                    <section className="brands container-fluid">
                        <div className="d-flex flex-container row">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="d-flex flex-column align-items-center">
                                        <img src={Images.brandGroup4} alt="group" className="logo-brand" />
                                        <h1>"S" our gear-production philosophy</h1>
                                        <h4>新・進・真</h4>
                                        <h4 className="text-japanese">様々な「S」の下、より価値あるものを、より多くの人に </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid bg-img">
                                <div className="container">
                                    <div className="parent-img">
                                        <div className="col-12 px-5">
                                            <img className="top-1-brand image" src={Images.beyondTheNext} alt="brand" />
                                        </div>
                                        <div className="link">
                                            <a className="s-air-link" href="brand-index.html">
                                                <i>View more</i>
                                                <span className="right-arrow">{">"}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid bg-img">
                                <div className="container">
                                    <div className="parent-img">
                                        <div className="col-12 px-5">
                                            <img className="slash-image image" src={Images.slashDontStay} alt="brand" />
                                        </div>
                                        <div className="link">
                                            <a className="s-air-link" href="brand-index.html">
                                                <i>View more</i>
                                                <span className="right-arrow">{">"}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid bg-img">
                                <div className="container">
                                    <div className="parent-img">
                                        <div className="col-12 px-5">
                                            <img className="s-heat-image image" src={Images.sHeat} alt="brand" />
                                        </div>
                                        <div className="link">
                                            <a className="s-air-link" href="brand-index.html">
                                                <i>View more</i>
                                                <span className="right-arrow">{">"}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid bg-img">
                                <div className="container">
                                    <div className="parent-img">
                                        <div className="col-12 px-5">
                                            <img className="s-air-image image" src={Images.sAir} alt="brand" />
                                        </div>
                                        <div className="link">
                                            <a className="s-air-link" href="brand-index.html">
                                                <i>View more</i>
                                                <span className="right-arrow">{">"}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="brands container-fluid">
                        <div className="d-flex flex-container row">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="d-flex align-items-center flex-column">
                                        <img src={Images.techGroup} alt="group" className="logo-brand" />
                                        <h1>Tech is the source of ultimate usability</h1>
                                        <h4>究「使える」にとどまらない、より高いパフォーマンスを引出せ</h4>
                                        <h4 className="text-japanese">飽くなき追求の一端がここに</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <section id="demos">
                                <div className="row">
                                    <div className="large-12 columns">
                                        <div className="owl-carousel owl-theme">
                                            <div className="item tech-item">
                                                <div className="d-flex flex-column px-4 py-5">
                                                    <img src="./images/function-logo-3@2x.png" alt="function" />
                                                    <h4>BOUNDY STRETCH</h4>
                                                    <p>□□□□■□□□□■□□□□■□□□□■□□□□■□□</p>
                                                    <p>□□□□■□□□□■□□□□■□□□□■□□□□■□□</p>
                                                </div>
                                            </div>
                                            <div className="item tech-item">
                                                <div className="d-flex flex-column px-4 py-5">
                                                    <img src="./images/function-logo-3@2x.png" alt="function" />
                                                    <h4>BOUNDY STRETCH</h4>
                                                    <p>□□□□■□□□□■□□□□■□□□□■□□□□■□□</p>
                                                    <p>□□□□■□□□□■□□□□■□□□□■□□□□■□□</p>
                                                </div>
                                            </div>
                                            <div className="item tech-item">
                                                <div className="d-flex flex-column px-4 py-5">
                                                    <img src="./images/function-logo-3@2x.png" alt="function" />
                                                    <h4>BOUNDY STRETCH</h4>
                                                    <p>□□□□■□□□□■□□□□■□□□□■□□□□■□□</p>
                                                    <p>□□□□■□□□□■□□□□■□□□□■□□□□■□□</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section> */}
                            <div className="under-line"></div>
                            <div className="view-more text-center">
                                <a href="tech-index.html">View more<span className="right-arrow">{">"}</span></a>
                            </div>
                        </div>
                    </section>
                    <section className="card container-fluid">
                        <div className="row">
                            <div className="d-flex flex-container">
                                <div className="flex-child">
                                    <img src={Images.shinmen} alt="shinmen" />
                                    <p className="sub-child">2022 SPRING / SUMMER</p>
                                </div>
                                <div className="flex-child">
                                    <img src={Images.shinmen2} alt="shinmen" />
                                    <p className="sub-child">2021-2022 AUTUMN / WINTER</p>
                                </div>
                            </div>
                            <div className="border_bottom d-flex"></div>
                            <div className="page-link">
                                <a href="catalogue.html">全てのWEBカタログを見る
                                    <span className="right-arrow">{">"}</span>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="footer">
                        <div className="news d-flex flex-column pt-5">
                            <p className="news-one py-4">2022.00.00  □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□</p>
                            <p className="news-two py-4">2022.00.00  □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□</p>
                            <p className="news-three py-4">2022.00.00  □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□</p>
                            <div className="view-link text-center py-5">
                                <a className="link-page" href="./news.html">
                                    <i>View more</i>
                                    <span className="right-arrow">{">"}</span>
                                </a>
                            </div>
                        </div>
                        <div className="container py-5">
                            <div className="row d-flex">
                                <div className="d-flex flex-d justify-content-evenly">
                                    <div className="d-flex flex-column align-items-center">
                                        <a className="social-link" href="#">
                                            <img src={Images.dialPad} alt="path" className="img" />
                                        </a>
                                        <p className="mt-2">会社概要</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <a href="#" className="social-link">
                                            <img src={Images.keyChain} alt="path" className="img" />
                                        </a>
                                        <p className="mt-2">採用情報</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <a href="#" className="social-link">
                                            <img src={Images.message} alt="group" className="img" />
                                        </a>
                                        <p className="mt-2">お問合せ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="footer">
                        <Footer brandName="シンメン株式会社" firstName="〒726-0012広島県 府中市 中須町20-1" secondName="TEL.0847-52-7440（代表）" />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LogoPage;