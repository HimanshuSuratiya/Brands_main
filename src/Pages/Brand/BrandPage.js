import React from "react";
import Images from "../../Components/Images/Images";
import "../../Common/Css/common.css";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";

const BrandPage = () => {
    return (
        <>
            <div className="">
                <Menu />
                <div className="tab_content">
                    <div className="tab_pane">
                        <section className="container-fluid head">
                            <div className="row">
                                <div className="col-12">
                                    <div className="pt-3 top container">
                                        <p>{"Top > xxxxxxxxxxxxx"}</p>
                                    </div>
                                    <div className="brand-img text-center my-5">
                                        <img src={Images.brandGroup4} alt="brand" />
                                    </div>
                                    <div className="heading container">
                                        <h1>"<span className="color-size">S</span>" THE BRAND</h1>
                                        <p className="text-prg">make wearable gear
                                            <br />
                                            it will be essential for the all workeres
                                            <br />
                                            NEVER STOP UPGRADING
                                            <br />
                                            DON'T STAYOUR EVOLUATION
                                        </p>
                                        <div className="text-prg">
                                            働く人々にとっての仕事着は、「身につける道具」に等しい。<br />
                                            着心地が良いだけでなく、丈夫で、着る人を守る服。<br />
                                            わたしたちはあえて、わたしたちのつくるワークウェアを”Wearable gear”と呼ぶ。<br />
                                            世界を動かし、人を動かす、仕事に対する敬意を込めて。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="brands">
                            <div className="d-flex container justify-content-evenly py-4">
                                <div className="brands-name">
                                    <img className="brand-img" src={Images.stxicon} alt="group" />
                                </div>
                                <div className="border-right"></div>
                                <div className="brands-name">
                                    <img className="brand-img" src={Images.slashicon} alt="group" />
                                </div>
                                <div className="border-right"></div>
                                <div className="brands-name">
                                    <img className="brand-img" src={Images.sairicon} alt="group" />
                                </div>
                                <div className="border-right"></div>
                                <div className="brands-name">
                                    <img className="brand-img" src={Images.sheaticon} alt="group" />
                                </div>
                            </div>
                        </section>
                        <section className="brand-six brands">
                            <div className="container-fluid bg-img flex-container pt-5">
                                <div className="container">
                                    <div className="row px-4 brand parent-img">
                                        <img className="top-1-brand" src={Images.beyondTheNext} alt="brand" />
                                        <div className="link index-brand">
                                            <a className="s-air-link stx-brand index-link" href="stx-details.html">
                                                <i>View more</i>
                                                <span className="right-arrow">{">"}</span>
                                            </a>
                                        </div>
                                        <div className="text container">
                                            <h1 className="large-size">BEYOND THE NEXT, for future gadget</h1>
                                            <p className="font-size">次のその先へ、未来のガジェットへ 次のその先へ、未来のガジェットへ</p>
                                            <p className="font-size">次のその先へ、未来のガジェットへ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="brand-six brands">
                            <div className="container-fluid bg-img flex-container pt-5">
                                <div className="container">
                                    <div className="row px-4 brand parent-img">
                                        <img className="top-1-brand image" src={Images.slashDontStay} alt="brand" />
                                        <div className="link index-brand">
                                            <a className="s-air-link index-link" href="slash-details.html">
                                                <i>View more</i>
                                                <span className="right-arrow">{">"}</span>
                                            </a>
                                        </div>
                                        <div className="text container">
                                            <h1 className="large-size">BEYOND THE NEXT, for future gadget</h1>
                                            <p className="font-size">次のその先へ、未来のガジェットへ 次のその先へ、未来のガジェットへ</p>
                                            <p className="font-size">次のその先へ、未来のガジェットへ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="brand-six brands">
                            <div className="container-fluid bg-img flex-container pt-5">
                                <div className="container">
                                    <div className="row px-4 brand parent-img">
                                        <img className="top-1-brand image" src={Images.sHeat} alt="brand" />
                                        <div className="link index-brand">
                                            <a className="s-air-link index-link" href="s-heat-details.html">
                                                <i>View more</i>
                                                <span className="right-arrow">{">"}</span>
                                            </a>
                                        </div>
                                        <div className="text container">
                                            <h1 className="large-size">Core vlaue is the"S", valuable & reasonable</h1>
                                            <p className="font-size">次のその先へ、未来のガジェットへ 次のその先へ、未来のガジェットへ</p>
                                            <p className="font-size">次のその先へ、未来のガジェットへ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="brand-six brands">
                            <div className="container-fluid bg-img flex-container pt-5">
                                <div className="container">
                                    <div className="row px-4 brand parent-img">
                                        <img className="top-1-brand image" src={Images.sAir} alt="brand" />
                                        <div className="link index-brand">
                                            <a className="s-air-link index-link" href="S-air.html">
                                                <i>View more</i>
                                                <span className="right-arrow">{">"}</span>
                                            </a>
                                        </div>
                                        <div className="text container">
                                            <h1 className="large-size">ESSENTIAL GEAR i extream heat condition,it's S-AIR</h1>
                                            <p className="font-size">次のその先へ、未来のガジェットへ 次のその先へ、未来のガジェットへ</p>
                                            <p className="font-size">次のその先へ、未来のガジェットへ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="container-fluid brands">
                            <div className="container">
                                <div className="border-line py-4"></div>
                                <div className="d-flex justify-content-around py-5 px-5">
                                    <a className="page-link" href="#">WEB ウェブ <span className="right-arrow">{">"}</span></a>
                                    <a className="page-link" href="#">より多くの製品<span className="right-arrow">{">"}</span></a>
                                </div>
                            </div>
                        </section>
                        <section className="footer">
                            <Footer brandName="夏のブランド" firstName="夏のブランド" secondName="TEL. 0874-8784-3827 ブラ夏の" />
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandPage;