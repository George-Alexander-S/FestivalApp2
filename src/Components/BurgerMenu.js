import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.css";
import './metal lord.ttf';
import {GiGuitarBassHead} from "react-icons/gi";
import About from "./About";
import Announcement from "./Announcement";

const toggleMenu = ({ isOpen }) => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    isOpen
        ? menuWrap.setAttribute("aria-hidden", false)
        : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
    return (
        <Menu width={220} noOverlay onStateChange={toggleMenu}>
            <h1 id="burgerTitle" className="text-5xl">Festival</h1><GiGuitarBassHead className="inline-block text-5xl"/><h1 id="burgerTitle" className="text-5xl mb-10">App</h1>
            <About/>
            <Announcement/>
        </Menu>
    );
};

export default BurgerMenu;