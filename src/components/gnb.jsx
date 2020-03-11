import React, { useState } from "react";

const GnbItems = props => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const [hoveredChildIdx, setHoveredChildIdx] = useState(null);

  return (
    <li
      className={hovered ? "on" : undefined}
      onMouseOver={toggleHover}
      onMouseOut={toggleHover}
    >
      <a href="/">{props.menu.title}</a>
      <ul className="sub">
        {props.menu.items.map((submenu, idx) => {
          return (
            <li
              key={idx}
              className={idx === hoveredChildIdx ? "on" : undefined}
              onMouseOver={() => setHoveredChildIdx(idx)}
              onMouseOut={() => setHoveredChildIdx(null)}
            >
              <a href="/">{submenu}</a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default GnbItems;
