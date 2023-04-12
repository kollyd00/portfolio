import "./topbar.scss";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            TechNinja.
          </a>
          <div className="itemContainer">
            <FaUserAlt className="icon" />
            <span>+234 90 556 705 69</span>
          </div>
          <div className="itemContainer">
            <FaEnvelope className="icon" />
            <span>K4lhade@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
