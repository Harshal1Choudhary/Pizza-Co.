import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">fase react Pizza Co.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
