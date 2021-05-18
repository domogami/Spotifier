import React from "react";
import Link from "gatsby-link";
import "./header.css";
import Logo from "../images/Logo.svg"

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
        data-cursor="-color-white"
      >
        <div className="HeaderGroup">
          <img src={Logo} className="Logo" alt="Logo"></img>
          <a href="/#About">About</a>
          <a href="/#App">App</a>
          <Link to="/index">Home</Link>
          <a href="mailto:domogami@gmail.com">Contact</a>
        </div>
      </div>
    );
  }
}

export default Header;
