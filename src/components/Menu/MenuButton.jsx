import React from "react";
import { MdMenu } from "react-icons/md";

export const MenuButton = ({ handleMenuOpen }) => {
  return <MdMenu className="menu-btn" onClick={handleMenuOpen} />;
};
