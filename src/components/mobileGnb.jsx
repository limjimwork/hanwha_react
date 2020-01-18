import React, { useState } from "react";

const MobileGnbItem = props => {
  const [visible, setVisible] = useState(false);

  return (
    <li>
      <a href="#" onClick={() => setVisible(!visible)}>
        {props.menu.title}
      </a>
      <ul className={"m_sub" + (visible ? " on" : "")}>
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

export default MobileGnbItem;
