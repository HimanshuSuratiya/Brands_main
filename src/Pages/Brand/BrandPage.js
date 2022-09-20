import React from "react";
import Images from "../../Components/Images/Images";
import "../../Common/Css/common.css";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";

const HomePage = () => {
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
                        <a className="" href="#"><i className="fa-solid fa-up"></i></a>
                    </div>
                    <section className="brands container-fluid">
                        <div className="d-flex flex-container row">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="d-flex flex-column align-items-center">
                                        <img src={Images.brandGroup4} alt="group" className="logo-brand" />
                                        <h1>"S" our gear-production philosophy</h1>
                                        <h4>歯.車.理</h4>
                                        <h4 className="text-japanese">人気商品 ギア製作理念 人気商品 ギア製作理念 </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid bg-img">
                                <div className="container">
                                    <div className="parent-img">
                                        <div className="col-12 px-5">
                                            <img className="top-1-brand image" src={Images.beyondTheNext} alt="brand" />
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
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid bg-img">
                                <div className="container">
                                    <div className="parent-img">
                                        <div className="col-12 px-5">
                                            <img className="s-heat-image image" src={Images.sHeat} alt="brand" />
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
                                            <a className="s-air-link" href="S-air.html"><i>View more</i><span className="right-arrow">{'>'}</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="d-flex align-items-center flex-column">
                                        <img src={Images.techGroup} alt="group" className="logo-brand" />
                                        <h1>Tech is the source of ultimate usability</h1>
                                        <h4>究極の使いやすさの源は 究極の使いやすさの源は 究極の使いやすさの源は </h4>
                                        <h4 className="text-japanese">人気商品 ギア製作理念 人気商品</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <section id="demos">
                                <div className="row">
                                    <div className="large-12 columns">
                                        <div className="owl-carousel owl-theme">
                                            <div className="item tech-item">
                                                <div className="d-flex flex-column px-4 py-5">
                                                    <img src={Images.magicalDance} alt="function" />
                                                    <h4>BOUNDY STRETCH</h4>
                                                    <p>Lorem, ipsum dolor.</p>
                                                    <p>Lorem, ipsum dolor.</p>
                                                </div>
                                            </div>
                                            <div className="item tech-item">
                                                <div className="d-flex flex-column px-4 py-5">
                                                    <img src="./images/function-logo-3@2x.png" alt="function" />
                                                    <h4>BOUNDY STRETCH</h4>
                                                    <p>Lorem, ipsum dolor.</p>
                                                    <p>Lorem, ipsum dolor.</p>
                                                </div>
                                            </div>
                                            <div className="item tech-item">
                                                <div className="d-flex flex-column px-4 py-5">
                                                    <img src="./images/function-logo-3@2x.png" alt="function" />
                                                    <h4>BOUNDY STRETCH</h4>
                                                    <p>Lorem, ipsum dolor.</p>
                                                    <p>Lorem, ipsum dolor.</p>
                                                </div>
                                            </div>
                                            <div className="item tech-item">
                                                <div className="d-flex flex-column px-4 py-5">
                                                    <img src="./images/function-logo-3@2x.png" alt="function" />
                                                    <h4>BOUNDY STRETCH</h4>
                                                    <p>Lorem, ipsum dolor.</p>
                                                    <p>Lorem, ipsum dolor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section> */}
                            <div className="under-line"></div>
                            <div className="view-more text-center">
                                <a href="tech-index.html"><i>{'View more >'}</i></a>
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
                                    <p className="sub-child">2021-2022AUTUMN / WINTER</p>
                                </div>
                            </div>
                            <div className="border_bottom d-flex"></div>
                            <div className="page-link">
                                <a href="#">{'もっと製品を見る >'}</a>
                            </div>
                        </div>
                    </section>
                    <section className="footer">
                        <div className="news d-flex flex-column">
                            <p className="news-one">{'2022.00.00 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'}</p>
                            <p className="news-two">{'2022.00.00 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'}</p>
                            <p className="news-three">{'2022.00.00 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'}</p>
                            <div className="view-link">
                                <a className="link-page" href="#"><i>View more</i><span className="right-arrow">{'>'}</span></a>
                            </div>
                        </div>
                        <div className="container my-5">
                            <div className="row d-flex">
                                <div className="d-flex flex-d justify-content-evenly">
                                    <div className="d-flex flex-column align-items-center">
                                        <a className="social-link" href="#">
                                            <img src={Images.dialPad} alt="path" className="img" />
                                        </a>
                                        <p className="mt-2">会社の建物</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <a href="#" className="social-link">
                                            <img src={Images.keyChain} alt="path" className="img" />
                                        </a>
                                        <p className="mt-2">リンクイン</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <a href="#" className="social-link">
                                            <img src={Images.message} alt="group" className="img" />
                                        </a>
                                        <p className="mt-2">郵便物</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HomePage;