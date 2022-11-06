import "./Menu.scss";
import { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const menuToggelHandler = () => {
    setMenuState(!menuState);
  };
  return (
    <>
      <div className="menu">
        <div
          className={menuState ? "expand" : "nav"}
          style={{
            clipPath: `${
              menuState
                ? "polygon(0% 0%,100% 0,100% 19%,100% 93%,93% 100%,9% 100%,0 93%,0 33%)"
                : "polygon(0% 0%,100% 0,93% 15%,60% 15%,55% 30%,45% 30%,40% 15%,7% 15%)"
            }`,
          }}
        >
          <div className="img-div">
            <img
              className={menuState ? "slide" : "logo"}
              src="images/hillfair-logo-light.png"
              alt="hillfair-logo"
              onClick={menuToggelHandler}
            ></img>
          </div>
          {menuState && (
            <div onClick={menuToggelHandler}>
              <div className="list">
                <div className="menu-list">
                  <Link key="/aboutus" to="/">
                    <div className="item">Home</div>
                  </Link>
                  <Link key="/sponsors" to="/sponsors">
                    <div className="item">Sponsors</div>
                  </Link>
                  <Link key="/team" to="/team">
                    <div className="item">Team</div>
                  </Link>
                </div>
                {/* Second Row  */}
                <div className="menu-list">
                  <Link key="/about" to="/about">
                    <div className="item">About Us</div>
                  </Link>
                  <Link key="/events" to="/events">
                    <div className="item">Events</div>
                  </Link>
                  <Link key="/gallery" to="/gallery">
                    <div className="item">Gallery</div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
