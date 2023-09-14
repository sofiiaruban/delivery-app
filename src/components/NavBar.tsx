import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navBar}>
        <li className={styles.navBarItem}>
          <Link to="/">Shop</Link>
        </li>
        <li className={styles.navBarItem}>
          <Link to="/cart">Shopping Cart</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
