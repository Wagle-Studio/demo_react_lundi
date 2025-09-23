import { NavLink } from "react-router";
import { CartIcon } from "../icons/CartIcon";
import "./Header.css";

interface HeaderProps {
  cartItems: string[];
}

// Composant en charge de créer le header
// Info : destiné à être utilisé dans toute l'application
export const Header = ({ cartItems }: HeaderProps) => {
  return (
    <div className="header">
      <h1>Wagle Shop</h1>
      <div className="header__tools">
        <nav>
          <ul className="header__tools__nav">
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Nous contacter</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__tools__cart">
          <CartIcon size="medium" />
          <p>{cartItems.length}</p>
        </div>
      </div>
    </div>
  );
};
