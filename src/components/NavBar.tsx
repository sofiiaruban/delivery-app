import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navBar}>
        <li className={styles.navBarItem}>
          <a href="/shop">Shop</a>
        </li>
        <li className={styles.navBarItem}>
          <a href="/cart">Shopping Cart</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
