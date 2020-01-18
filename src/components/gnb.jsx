import React from "react";

const GnbItems = props => {
  return (
    <li>
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
