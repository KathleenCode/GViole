import React from "react";
import { FaHome } from "react-icons/fa";
import { CgMoreVertical } from "react-icons/cg";
import { FaInfo } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { SiWritedotas } from "react-icons/si";
import { Outlet, Link } from "react-router-dom";
import Styles from "./Layout.module.css";

export default function Layout() {
  const style = { color: "#FC6B3F", paddingLeft: ".5rem", fontSize: "1rem" };

  return (
    <>
      <div className={Styles.layo}>
        <span>GunEducation</span>
        <div className={Styles.ham}>
          <label htmlFor="ham"></label>
          <input type="checkbox" id="ham" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home&nbsp;
                <FaHome style={style} />
              </Link>
            </li>
            <li>
              <Link to="/about">
                About&nbsp;
                <CgMoreVertical style={style} />
              </Link>
            </li>
            <li>
              <Link to="/info">
                Info&nbsp;
                <FaInfo style={style} />
              </Link>
            </li>
            <li>
              <Link to="/game">
                Game&nbsp;
                <IoLogoGameControllerB style={style} />
              </Link>
            </li>
            <li>
              <Link to="/exp">
                Experience&nbsp;
                <SiWritedotas style={style} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}
