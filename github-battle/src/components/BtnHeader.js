import React from "react";
export default function BtnHeader(props) {
  let { handleClick, value } = props;
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  return (
    <header className="header">
      <nav className="menus">
        {languages.map((language) => {
          return (
            <button
              className={value === language ? "active-menu" : ""}
              onClick={handleClick}
              key={language}
            >
              {language}
            </button>
          );
        })}
      </nav>
    </header>
  );
}