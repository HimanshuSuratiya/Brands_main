import React from "react";
import Images from "../../Components/Images/Images";
import "../../Common/Css/common.css";

const Footer = () => {
    return (
        <section>
            <div className="container">
                <div className="row bottom-line">
                    <div className="d-flex flex-column col-6">
                        <div className="d-flex flex-child align-items-center mb-1">
                            <img height="75px" src={Images.imageID2x} alt="ID" />
                            <p className="about-info">夏のブランド</p>
                        </div>
                        <p>夏のブランド</p>
                        <p>TEL. 0874-8784-3827 ブラ夏の</p>
                        <p>info@shinmen.co.jp</p>
                    </div>
                    <div className="d-flex justify-content-end align-items-end col-6">
                        <div className="social-link">
                            <a href="#">
                                <img className="social-img" src={Images.Instagram}
                                    alt="instagram" />
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="#">
                                <img className="social-img" src={Images.twitter} alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center py-3">
                <p>Copyright (C) 2022 SHINMEN co.,ltd.</p>
            </div>
        </section>
    );
};

export default Footer;