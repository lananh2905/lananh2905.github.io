import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const text = "LAN ANH'S PORTFOLIO";
    return (
      <div className="logo-wrapper">
        <svg
          className="logo-svg"
          viewBox="0 0 1600 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {text.split("").map((char, index) => (
            <text
              key={index}
              x={50 + index * 80}
              y={150}
              className="logo-text"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {char}
            </text>
          ))}
        </svg>
      </div>
    );
  }
}

export default LogoLoader;
