import React, { useState } from "react";

const GnbItems = props => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <li
      className={hovered ? "on" : undefined}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <a href="/">{props.menu.title}</a>
      <ul className="sub">
        {props.menu.items.map((submenu, idx) => {
          return (
            <li key={idx}>
              <a href="/">{submenu}</a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default GnbItems;
