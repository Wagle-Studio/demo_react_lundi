import { CartIcon } from "../icons/CartIcon";
import "./Header.css";

// Composant en charge de créer le header
// Info : destiné à être utilisé dans toute l'application
export const Header = () => {
  return (
    <div className="header">
      <h1>Wagle Shop</h1>
      <div className="header__tools">
        <nav>
          <ul className="header__tools__nav">
            <li>
              <a href="#">Lien 1</a>
            </li>
            <li>
              <a href="#">Lien 2</a>
            </li>
          </ul>
        </nav>
        <div className="header__tools__cart">
          <CartIcon size="medium" />
          <p>0</p>
        </div>
      </div>
    </div>
  );
};
