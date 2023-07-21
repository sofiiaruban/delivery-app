import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav>
<<<<<<< HEAD
      <ul className={styles.navBar}>
        <li className={styles.navBarItem}>
          <a href="/shop">Shop</a>
        </li>
        <li className={styles.navBarItem}>
          <a href="/cart">Shopping Cart</a>
=======
      <ul className={styles.ul}>
        <li>
          <a href="delivery-app/">Shop</a>
        </li>
        <li>
          <a href="delivery-app/cart">Shopping Cart</a>
>>>>>>> d2addb291cda0f403dc2c57ee2791b4155d8d2a9
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
