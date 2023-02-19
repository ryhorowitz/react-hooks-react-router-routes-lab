import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            to='/'
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="movies"
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="directors"
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}>
            Directors
          </NavLink></li>
        <li>
          <NavLink
            to="actors"
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}>
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
