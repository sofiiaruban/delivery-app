import AddToCartButton from "./AddToCartButton";
import styles from "./ProductCard.module.css";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

export interface ProductCardProp {
  src: string;
  title: string;
  price: number;
  quantity?: number;
}
const clickHandler = async (title: string, src: string, price: number) => {
  const userRef = doc(db, "users", "user1");

  try {
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      await updateDoc(userRef, {
        products: arrayUnion({
          src: src,
          title: title,
          price: price,
          quantity: 1,
        }),
      });

      console.log("Product added successfully!");
    } else {
      await setDoc(userRef, {
        name: "",
        email: "",
        phone: "",
        address: "",
        products: [
          {
            src: src,
            title: title,
            price: price,
            quantity: 1,
          },
        ],
      });

      console.log("User created successfully!");
    }
  } catch (error) {
    console.error("Error adding/updating product: ", error);
  }
};
const MAX_TITLE_SIZE = 40;
const ProductCard: React.FC<ProductCardProp> = ({ src, title, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={src} />
      </div>
      <h3>
        {title.length > MAX_TITLE_SIZE
          ? title.slice(0, MAX_TITLE_SIZE) + "..."
          : title}
      </h3>
      <div className={styles.cardDetails}>
        <span> {price} &#8372;</span>
        <AddToCartButton clickHandler={() => clickHandler(title, src, price)} />
      </div>
    </div>
  );
};
export default ProductCard;
