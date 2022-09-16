import React from "react";
import Images from "../Images/Images";
import "../../Common/Css/common.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color">
                <NavLink className="navbar-brand" to='/'>
                    <img src={Images.imageID2x} className="brand-img" alt="brand" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link active" to='/home'>Brand<span className="slash">/</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/catalogue'>Catalogue<span className="slash">/</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/corporate'>Corporate<span className="slash">/</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>News<span className="slash">/</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Menu;