import { Component } from "react";
import logo from "../../../images/logofd.svg";
import { NavItems } from "./NavItems";

export default class Navbar extends Component {
  state = { active: false };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <nav className="navbar">
        <a className="navbar__brand" href="#herobanner">
          <img
            className="navbar__brand__logo"
            src={logo}
            alt="FrontAlex logo"
          />
        </a>
        <div className="navbar__icon" onClick={this.handleClick}>
          <i
            className={
              this.state.active
                ? "fas fa-times nav-icon"
                : "fas fa-bars nav-icon"
            }
          ></i>
        </div>
        <ul
          className={this.state.active ? "navbar__menu active" : "navbar__menu"}
        >
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href={item.url}
                  onClick={this.handleClick}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
