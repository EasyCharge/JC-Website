import { useState } from "react";
import { Link } from "react-router-dom";
import Icon_3lines from "./Icon_3lines";
import { ShoppingCart } from "phosphor-react";
import Badge from "./Badge";

function Navbar() {
  const [Dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <Icon_3lines setDropdown={setDropdown} Dropdown={Dropdown} />
          <Link className="ml-2 text-xl font-bold" to="/JC-Website/">
            <img src="Logo.jpeg" alt="Logo" />
          </Link>
        </div>
        <div className="md:flex md:items-center md:ml-4 md:gap-16">
          <Link className="nav-link md:ml-4" to="/JC-Website/">
            Home
          </Link>
          <Link className="nav-link md:ml-4" to="/JC-Website/products">
            Products
          </Link>
          <Link className="nav-link md:ml-4" to="/JC-Website/about-us">
            About Us
          </Link>
          <Link className="nav-link md:ml-4" to="/JC-Website/impressum">
            Impressum
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="nav-link md:ml-4" to="/JC-Website/cart">
            <ShoppingCart size={32} color="#eeeeee" />
            <Badge />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
