import React from "react";
import Images from "../Images/Images";
import "../../Common/Css/common.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color">
                <NavLink className="navbar-brand" to="/">
                    <img src={Images.imageID2x} className="brand-img" alt="brand" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown active" style={{ position: "relative" }}>
                            <NavLink className="nav-link" to="/brand">Brand<span className="slash">/</span></NavLink>
                            <ul className="dropdown_menu" aria-labelledby="dropdownMenuLink">
                                <li><NavLink className="dropdown-item" to="/brand/stx-details">STX-FG</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/brand/slash-details">SLASH</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/brand/s-heat-details">S-HEAT</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/brand/s-air-device">S-AIR</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/brand/tech-index">Technology</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/brand/movie">Movie</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/catalogue">Catalogue<span className="slash">/</span></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link" to="/corporate">Corporate<span className="slash">/</span></NavLink>
                            <ul className="dropdown_menu" aria-labelledby="dropdownMenuLink">
                                <li><NavLink className="dropdown-item" to="/corporate/company">Company</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/corporate/recruit">Recruit</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/news">News<span className="slash">/</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Menu;