import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/HeroSection.css";
import bookIcon from "../assets/icons/book.svg";
import flashIcon from "../assets/icons/flash.svg";
import closeIcon from "../assets/icons/close.svg";
import videoIcon from "../assets/icons/video.svg";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const routes = [
  { label: "Home", url: "/" },
  { label: "About Us", url: "/" },
  { label: "Case Studies", url: "/" },
];

const resources = [
  {
    iconUrl: bookIcon,
    label: "Blog",
    desc: "The latest industry news, updates and info.",
  },
  {
    iconUrl: flashIcon,
    label: "Customer stories",
    desc: "Learn how our customers are making big changes.",
  },
  {
    iconUrl: videoIcon,
    label: "Video tutorials",
    desc: "Get up and running on new features and techniques.",
  },
];
const HeroSection = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="root" style={{ opacity: isSearch ? "0.9" : "1" }}>
      <nav className="header">
        <div className="header-logo">
          <div className="logo">
            <img src={logo} alt="logo" height="100%" width="100%" />
            <p>Catalog</p>
          </div>
          <div className="routes">
            {routes.map((route, idx) => (
              <Link key={idx} to={route.url} className="links">
                {route.label}
              </Link>
            ))}
            <div className="resources" role="button">
              Resources <GoChevronDown size={20} />
              <div className="popover">
                {resources.map((resource, idx) => (
                  <div className="icon-txt" key={idx}>
                    <img
                      src={resource.iconUrl}
                      alt="icon"
                      width="20px"
                      height="16px"
                    />
                    <p className="txt">
                      <span style={{ fontSize: "16px", lineHeight: "24px" }}>
                        {resource.label}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "#667085",
                        }}
                      >
                        {resource.desc}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <IoSearchOutline
          size={20}
          onClick={() => setIsSearch(true)}
          style={{ cursor: "pointer" }}
        />
      </nav>
      {isSearch && (
        <div className="search-close">
          <img
            src={closeIcon}
            alt="close"
            width={20}
            height={20}
            className="close"
            onClick={() => setIsSearch(false)}
            style={{ cursor: "pointer" }}
            role="button"
          />
          <div className="search">
            <input type="text" className="input" placeholder="Search" />
            <IoSearchOutline className="search-btn" />
          </div>
        </div>
      )}
      <div className="slogan">
        <p style={{ fontSize: "60px", lineHeight: "60px", fontWeight: "600" }}>
          Beautiful analytics to grow smarter
        </p>
        <p
          style={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage,
          <span>and retain more users. Trusted by over 4,000 startups.</span>
        </p>
        <div className="btn">
          <div
            role="button"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "28px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            Why Catalog? <FiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
