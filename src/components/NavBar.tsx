import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <a href="delivery-app/">Shop</a>
        </li>
        <li>
          <a href="delivery-app/cart">Shopping Cart</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
