import React from "react";
import Menu from "../../Components/Menu/Menu";
import Images from "../../Components/Images/Images";
import "../../Common/Css/common.css";
import Footer from "../../Components/Footer/Footer";

const StxPage = () => {
    return (
        <>
            <div>
                <div class="">
                    <Menu />
                    <div class="tab_content">
                        <div class="tab_pane">
                            <section class="container-fluid s-air-brand-head">
                                <div class="row">
                                    <div class="col-12 bg-color">
                                        <div class="top container">
                                            <p>{"Top > xxxxxxxxxxxxx"}</p>
                                        </div>
                                        <div class="brand-img text-center my-5">
                                            <img src={Images.brandGroup4} alt="brand" />
                                        </div>
                                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="0" class="active" aria-current="true"
                                                    aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <div class="row item-carousel">
                                                        <div class="col-lg-4">
                                                            <img class="carousel-img d-block w-100" src={Images.personImage}
                                                                alt="unsplash" />
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="height">
                                                                <img class="carousel-img d-block w-100" src={Images.stxicon}
                                                                    alt="group" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <img class="carousel-img d-block w-100" src={Images.personImage2}
                                                                alt="unsplash" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="row item-carousel">
                                                        <div class="col-lg-4">
                                                            <img class="carousel-img d-block w-100" src={Images.personImage3}
                                                                alt="unsplash" />
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="height">
                                                                <img class="carousel-img d-block w-100" src={Images.stxicon}
                                                                    alt="group" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <img class="carousel-img d-block w-100" src={Images.personImage2}
                                                                alt="unsplash" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="row item-carousel">
                                                        <div class="col-lg-4">
                                                            <img class="carousel-img d-block w-100" src={Images.personImage}
                                                                alt="unsplash" />
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="height">
                                                                <img class="carousel-img d-block w-100" src={Images.stxicon}
                                                                    alt="group" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <img class="carousel-img d-block w-100" src={Images.personImage3}
                                                                alt="unsplash" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button"
                                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button"
                                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="brands">
                                <div class="series">
                                    <div class="container">
                                        <div class="row">
                                            <div class="image-series">
                                                <img src={Images.brandConcept} alt="group" />
                                            </div>
                                            <div class="text col-lg-12 px-5 py-5">
                                                <h1 class="large-size">Essential GEAR in extreame heat condition, it's STX
                                                </h1>
                                                <p class="font-size">次のその先へ、未来のガジェットへ 次のその先へ、未来のガジェットへ</p>
                                                <p class="font-size">次のその先へ、未来のガジェットへ</p>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="row">
                                                    <div class="banner">
                                                        <img class="banner-img image" src={Images.beyondTheNext} alt="brand" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="brands py-5">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-8 flex-column">
                                            <h1 class="heading">00000</h1>
                                            <h3 class="serial-name"><i>SERIES</i></h3>
                                            <p class="serial-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Fugiat quo reprehenderit consequatur unde, voluptatibus voluptate! Lorem ipsum
                                                dolor sit amet consectetur adipisicing elit. Fugiat quo reprehenderit
                                                consequatur unde, voluptatibus voluptate!</p>
                                            <div class="view-more py-5">
                                                <a href="#">View more<span class="right-arrow">{">"}</span></a>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="brand-image">
                                                <img src={Images.personImage} alt="group" class="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="brands py-5">
                                <div class="container">
                                    <div class="row flex-row-reverse">
                                        <div class="col-8 flex-column">
                                            <h1 class="heading">00000</h1>
                                            <h3 class="serial-name"><i>SERIES</i></h3>
                                            <p class="serial-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Fugiat quo reprehenderit consequatur unde, voluptatibus voluptate! Lorem ipsum
                                                dolor sit amet consectetur adipisicing elit. Fugiat quo reprehenderit
                                                consequatur unde, voluptatibus voluptate!</p>
                                            <div class="view-more py-5">
                                                <a href="#">View more<span class="right-arrow">{">"}</span></a>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="brand-image">
                                                <img src={Images.personImage2} alt="group" class="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="brands">
                                <div class="container">
                                    <div class="row">
                                        <div class="image-series">
                                            <img src={Images.otherLineup} alt="group" />
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid fluid-container">
                                    <div class="container py-5">
                                        <div class="row px-4">
                                            <div class="col-4">
                                                <h1>05123</h1>
                                                <div class="image">
                                                    <img src={Images.personImage2} alt="group" class="img" />
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <h1>05123</h1>
                                                <div class="image">
                                                    <img src={Images.personImage} class="img" alt="group" />
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <h1>05123</h1>
                                                <div class="image">
                                                    <img src={Images.personImage3} class="img" alt="group" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid fluid-container">
                                    <div class="container py-5">
                                        <div class="row px-4">
                                            <div class="col-4">
                                                <h1>05123</h1>
                                                <div class="image">
                                                    <img src={Images.personImage2} alt="group" class="img" />
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <h1>05123</h1>
                                                <div class="image">
                                                    <img src={Images.personImage} class="img" alt="group" />
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <h1>05123</h1>
                                                <div class="image">
                                                    <img src={Images.personImage3} class="img" alt="group" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid fluid-container">
                                    <div class="container py-5">
                                        <div class="row px-4">
                                            <div class="col-4">
                                                <h1>05123</h1>
                                                <div class="image">
                                                    <img src={Images.personImage2} alt="group" class="img" />
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <h1>05123</h1>
                                                <div class="image">
                                                    <img src={Images.personImage} class="img" alt="group" />
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <h1>05123</h1>
                                                <div class="image">
                                                    <img src={Images.personImage3} class="img" alt="group" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container py-5 top-line">
                                    <div class="text-center">
                                        <a href="#" class="view-detail">more <span class="plus-sign">+</span></a>
                                    </div>
                                </div>
                            </section>
                            <section class="Catalogue py-5">
                                <div class="series">
                                    <div class="container">
                                        <div class="row">
                                            <div class="image-series">
                                                <img src={Images.brandConcept} class="img" alt="group" />
                                            </div>
                                        </div>
                                        <div class="text-center pb-4">
                                            <div class="catalog-design">
                                                <img src={Images.shinmen} alt="shinmen" />
                                                <p class="py-2">2022 SPRING / SUMMER</p>
                                            </div>
                                        </div>
                                        <div class="view-more">
                                            <a href="#" class="link-more">春夏秋冬 春夏秋冬 <span class="plus-sign">{">"}</span></a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="container-fluid brands">
                                <section class="brands py-5">
                                    <div class="d-flex container justify-content-evenly py-4">
                                        <div class="brands-name">
                                            <img class="brand-img" src={Images.stxicon} alt="group" />
                                        </div>
                                        <div class="border-right"></div>
                                        <div class="brands-name">
                                            <img class="brand-img" src={Images.slashicon} alt="group" />
                                        </div>
                                        <div class="border-right"></div>
                                        <div class="brands-name">
                                            <img class="brand-img" src={Images.sairicon} alt="group" />
                                        </div>
                                        <div class="border-right"></div>
                                        <div class="brands-name">
                                            <img class="brand-img" src={Images.sheaticon} alt="group" />
                                        </div>
                                    </div>
                                </section>
                                <Footer brandName="夏のブランド" firstName="夏のブランド" secondName="TEL. 0874-8784-3827 ブラ夏の" />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StxPage;