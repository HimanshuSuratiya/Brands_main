import React from "react";
import Images from "../../Components/Images/Images";
import "../../Common/Css/common.css";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";

const CataloguePage = () => {
    return (
        <>
            <div className="">
                <Menu />
                <div className="tab_content">
                    <div id="first-tab" className="tab_pane active">
                        <section className="brands" style={{ backgroundColor: '#000' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="top container">
                                            <p>{'Top > xxxxxxxxxxxxx'}</p>
                                        </div>
                                        <div className="banner py-5 catalogue-banner">
                                            <img style={{ opacity: '0.5' }} className="banner-img image" src={Images.building} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="card container-fluid">
                            <div className="row">
                                <div className="d-flex flex-container">
                                    <div className="">
                                        <h3 className="">2022</h3>
                                        <h3 className="">SPRING / SUMMER</h3>
                                        <img src={Images.shinmen} alt="shinmen" />
                                    </div>
                                    <div className="">
                                        <h3 className="">2021-22</h3>
                                        <h3 className="">AUTUMN / WINTER</h3>
                                        <img src={Images.shinmen2} alt="shinmen" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="d-flex flex-container">
                                    <div className="">
                                        <h3 className="">2022</h3>
                                        <h3 className="">SPRING / SUMMER</h3>
                                        <img src={Images.shinmen} alt="shinmen" />
                                    </div>
                                    <div className="">
                                        <h3 className="">2021-22</h3>
                                        <h3 className="">AUTUMN / WINTER</h3>
                                        <img src={Images.shinmen2} alt="shinmen" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="d-flex flex-container">
                                    <div className="">
                                        <h3 className="">2022</h3>
                                        <h3 className="">SPRING / SUMMER</h3>
                                        <img src={Images.shinmen} alt="shinmen" />
                                    </div>
                                    <div className="">
                                        <h3 className="">2021-22</h3>
                                        <h3 className="">AUTUMN / WINTER</h3>
                                        <img src={Images.shinmen2} alt="shinmen" />
                                    </div>
                                </div>
                                <div className="border_bottom mt-5"></div>
                                <div className="page-link">
                                    <a className="product" href="#">もっとサマー商品<span className="view-more">{'>'}</span></a>
                                    <a className="product" href="#">さらに秋冬<span className="view-more">{'>'}</span></a>
                                </div>
                            </div>
                        </section>
                        <section className="footer">
                            <Footer />
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CataloguePage;