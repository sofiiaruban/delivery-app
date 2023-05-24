import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/cart">Shopping Cart</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
